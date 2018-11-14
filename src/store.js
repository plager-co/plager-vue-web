import Vue from 'vue'
import Vuex from 'vuex'

// imports of AJAX functions will go here
import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey, authenticate, register, checkDuplicateEmail } from '@/api'  
import { isValidJwt, EventBus } from '@/utils'
import Router from './router'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        userType: '',
        isTestPopup: false,
        isJoinPopup: false,
        isCompletePopup: false,
        completeMsg: '',
        isAlertPopup: false,
        alertMsg: '',
        alertMobileMsg: '',
        isScoreCompletePopup: false,
        isScoreImpossiblePopup: false,
        isScoreCompleteMsg: '',
        navMenuList: [
            {
            title: "인플루언서 등록",
            url: "/influencer-join"
            },
            {
            username: "",
            title: "로그인",
            url: "/login"
            }
        ],
        surveys: [],
        currentSurvey: {},
        user: {},
        jwt: ''
    },
    actions: {

        loadSurveys(context) {
            return fetchSurveys()
              .then((response) => context.commit('setSurveys', { surveys: response }))
          },

        login (context, userData) {
            context.commit('setUserData', { userData });
            const result = authenticate(userData)
              .then(
                  function (response) {
                            context.commit('setJwtToken', { jwt: response.data.token });
                            Router.push('/mypage');
                            }
            ).catch(e => {
              console.log(e);
            });
            return result

          },
          checkEmail(context, userData){
            if (!userData){
                return context.commit('isEmptyEmail')
            }

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(userData).toLowerCase()))
                return context.commit('isAbnormalEmail')

            return checkDuplicateEmail(userData)
            .then( 
                function (response) {
                    context.commit('isDuplicateEmail', response)}
                    )
          },
            register (context, userData) {
            context.commit('setUserData', { userData })
            return register(userData)
              .then(context.dispatch('login', userData))
          },
            submitNewSurvey (context, survey) {
            return postNewSurvey(survey, context.state.jwt.token)
          }
    },
    mutations: {
        setSurveys(state, payload) {
            state.surveys = payload.surveys
          },
        setUserData (state, payload) {
        console.log('setUserData payload = ', payload)
        state.userData = payload.userData
      },
      setJwtToken (state, payload) {
        console.log('setJwtToken payload = ', payload)
        localStorage.token = payload.jwt.token
        state.jwt = payload.jwt
      },
        userLogin(state, payload){
            state.navMenuList[1].username = '홍길동'
            state.userType = payload
        },
        openJoinPopup(state){
            state.isJoinPopup = true;
        },
        closeJoinPopup(state){
            state.isJoinPopup = false;
        },
        isAbnormalEmail(state, payload){
            state.isAlertPopup = true;

            state.alertMsg = '올바른 이메일을 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isEmptyEmail(state, payload){
            state.isAlertPopup = true;

            state.alertMsg = '이메일을 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isDuplicateEmail(state, payload){
            state.isAlertPopup = true;

            if (payload.data.result != null){
                state.alertMsg = '중복된 ';
                state.alertMobileMsg = '이메일입니다.';
            } else {
                state.alertMsg = '사용가능한 ';
                state.alertMobileMsg = '이메일입니다.';
            }
        },
        openAlertPopup(state, payload){
            state.isAlertPopup = true;
            state.alertMsg = '';
            state.alertMobileMsg = '';
        },
        closeAlertPopup(state){
            state.isAlertPopup = false;
            state.isJoinPopup = true;
            state.alertMsg = '';
            state.alertMobileMsg = '';
        },
        openCompletePopup(state, payload){
            state.isCompletePopup = true;
            state.completeMsg = payload
        },
        closeCompletePopup(state){
            state.isCompletePopup = false;
            state.completeMsg = ''
        },
        openScoreCompletePopup(state, payload){
            state.isScoreCompletePopup = true;
        },
        closeScoreCompletePopup(state){
            state.isScoreCompletePopup = false;
        },
        openScoreImpossiblePopup(state, payload){
            state.isScoreImpossiblePopup = true;
        },
        closeScoreImpossiblePopup(state){
            state.isScoreImpossiblePopup = false;
        },
        openTestPopup(state) {
            state.isTestPopup = true;
        },
        closeTestPopup(state) {
            state.isTestPopup = false;
        }
    },
    getters: {
        getTestPopup(state){
            return state.isTestPopup
        },
        userType(state){
            return state.userType
        },
        GetNavMenuList(state) {
            return state.navMenuList
        },
        // reusable data accessors
        isAuthenticated (state) {
        return isValidJwt(state.jwt)
        }
    }
})