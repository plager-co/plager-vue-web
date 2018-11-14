import Vue from 'vue'
import Vuex from 'vuex'

// imports of AJAX functions will go here
import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey, authenticate, register, checkDuplicateEmail, checkDuplicateCompanyNumber } from '@/api'
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
        email:'',
        company_number:'',
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
        register (context, userData) {
            context.commit('setUserData', { userData })
            return register(userData)
              .then(
                  function (response) {
                      console.log(response);
                      console.log(response.data.id);
                      if(response.data.id){
                        context.commit('closeJoinPopup');
                        context.commit('openCompletePopup', '광고주');
                          context.dispatch('login', userData)
                      }
                      else{
                          context.commit('errorRegisterPopup');
                      }

                  }).catch(e => {
              context.commit('errorRegisterPopup');
            });
          },

        login (context, userData) {
            context.commit('setUserData', { userData });
            const result = authenticate(userData)
              .then(
                  function (response) {
                      console.log(response);
                            if(response.data.token){
                                context.commit('setJwtToken', { jwt: response.data.token });
                                Router.push('/mypage');
                            } else {
                                    context.commit('errorLoginPopup')
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
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
                    return context.commit('isDuplicateEmail', response)}
                    )
          },
            checkCompanyNumber(context, userData){
            if (!userData){
                return context.commit('isEmptyCompanyNumber')
            }

            var re = /^(?!0+$)[\-0-9]{10,12}$/;

            if (!re.test(userData))
                return context.commit('isAbnormalCompanyNumber')

            return checkDuplicateCompanyNumber(userData)
            .then(
                function (response) {
                    return context.commit('isValidCompanyNumber', response)}
                    ).catch(e => {
              context.commit('errorCompanyNumberPopup');
            })
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
        errorRegisterPopup(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '올바른 정보를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        errorLoginPopup(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '아이디 또는 비밀번호가';
            state.alertMobileMsg = '일치하지 않습니다.';
        },
        errorCompanyNumberPopup(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '10초 후 다시 시도 ';
            state.alertMobileMsg = '부탁드립니다.';
        },
        isAbnormalEmail(state, payload){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '올바른 이메일을 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isEmptyEmail(state, payload){
            state.isAlertPopup = true;
            state.email = '';

            state.alertMsg = '이메일을 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isDuplicateEmail(state, payload){
            state.isAlertPopup = true;

            if (payload.data.result != null){
                state.alertMsg = '중복된 ';
                state.alertMobileMsg = '이메일입니다.';
                state.email = '';
            } else {
                state.alertMsg = '사용가능한 ';
                state.alertMobileMsg = '이메일입니다.';
            }
        },
        hasEmail(state, payload){
            state.email = payload;
        },
        hasCompanyNumber(state, payload){
            state.company_number = payload;
        },
        isAbnormalCompanyNumber(state, payload){
            state.isAlertPopup = true;
            state.company_number = '';
            state.alertMsg = '올바른 사업자 번호를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isEmptyCompanyNumber(state, payload){
            state.isAlertPopup = true;
            state.company_number = '';
            state.alertMsg = '사업자 번호를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isValidCompanyNumber(state, payload){
            state.isAlertPopup = true;

            if (payload.data != null){
                state.alertMsg = '유효 ';
                state.alertMobileMsg = '사업자 번호입니다.';
            } else {
                state.alertMsg = '사용되지 않는 ';
                state.alertMobileMsg = '사업자 번호입니다.';
                state.company_number = '';
            }
        },
        openAlertPopup(state, payload){
            state.isAlertPopup = true;
            state.alertMsg = '';
            state.alertMobileMsg = '';
        },
        closeAlertPopup(state){
            state.isAlertPopup = false;
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
        email(state){
            return state.email
        },
        company_number(state){
            return state.company_number
        },
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