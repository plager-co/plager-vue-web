import Vue from 'vue'
import Vuex from 'vuex'

// imports of AJAX functions will go here
import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey,
    authenticate, register, checkDuplicateEmail, checkDuplicateCompanyNumber,
    sponserUpdate, createAd, fetchInfluencers, registerAdInfluencers, fetchAdBySponserId,
    fetchAdInfluencersByAdId, updateAdInfluencer} from '@/api'
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
            url: "/influencer-join",
            auth: '',
            },
            {
            username: "",
            title: "로그인",
            url: "/login",
            auth: '',
            },
            {
            username: "",
            title: "광고 신청",
            url: "/influencer-score",
            auth: 'influencer',
            },
            {
            username: "",
            title: "마이 페이지",
            url: "/influencer-my-page",
            auth: 'influencer',
            },
            {
            username: "",
            title: "광고 신청",
            url: "/sponsor-filter",
            auth: 'sponser',
            },
            {
            username: "",
            title: "마이 페이지",
            url: "/mypage",
            auth: 'sponser',
            },
            {
            username: "",
            title: "로그아웃",
            url: "/logout",
            auth: 'influencer',
            },
            {
            username: "",
            title: "로그아웃",
            url: "/logout",
            auth: 'sponser',
            }

        ],
        surveys: [],
        currentSurvey: {},
        user: {},
        currentAd: {},
        jwt: '',
        user_id: '',
        isInfluencer: false,
        isSponser: false,
        company_name: '',
        company_category: '',
        officer_name: '',
        tax_email: '',
        contact: '',
        company_website: '',
        company_registration_link: '',
        instagram: '',
        facebook: '',
        social: '',
        influencers: [],
        filterAds: '',
        ads: [],
        adInfluencers: [],
        currentAdInfluencer: {}
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
                                console.log(response.data);
                                context.commit('setUserData', response.data);
                                context.commit('setJwtToken', { jwt: response.data.token });
                                context.commit('setSponser', true);
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
            fetchInfluencers (context) {
            const result = fetchInfluencers()
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setInfluencers', response.data.result);
                            } else {
                                    context.commit('errorLoginPopup')
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        registerAdInfluencers (context, userData) {
            const result = registerAdInfluencers(userData, context.getters.getJwt)
              .then(
                  function (response) {
                            if(response.data.result){
                                Router.push("/influencer-complete")
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdBySponserId (context, userData) {
            const result = fetchAdBySponserId(userData)
              .then(
                  function (response) {
                            console.log(response.data.result);
                            if(response.data.result){
                                context.commit('setAds', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdInfluencersByAdId (context, userData) {
            const result = fetchAdInfluencersByAdId(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setAdInfluencers', response.data.result);
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

          sponserUpdate (context, userData) {
            context.commit('setUserData', { userData })
            return sponserUpdate(userData, context.getters.getJwt)
              .then(
                  function (response) {
                      if(response.data.result.id){
                        context.commit('openUpdatePopup');
                      }
                      else{
                          context.commit('errorUpdatePopup');
                      }

                  }).catch(e => {
              context.commit('errorUpdatePopup');
            });
          },
        createAd (context, userData) {
            return createAd(userData, context.getters.getJwt)
              .then(
                  function (response) {
                      if(response.data.result.id){
                        context.commit('setAdData', response.data.result);
                        Router.push('/influencer-list');
                      }
                      else{
                          context.commit('errorCreateAdPopup');
                      }

                  }).catch(e => {
              context.commit('errorCreateAdPopup');
            });
          },
        payAd (context, userData) {
            context.commit('setAdData', userData);
            return Router.push('/sponsor-sim');
          },
        updateAdInfluencer (context, userData) {
            return updateAdInfluencer(userData, context.getters.getJwt)
              .then(
                  function (response) {
                      Router.push("/sponsor-payment2");

                  }).catch(e => {
              context.commit('errorUpdatePopup');
            });


          },
    },
    mutations: {
        setSurveys(state, payload) {
            state.surveys = payload.surveys
          },
        setUserData (state, payload) {
        state.company_name = payload.company_name;
        state.company_category = payload.company_category;
        state.officer_name = payload.officer_name;
        state.tax_email = payload.tax_email;
        state.contact = payload.contact;
        state.user_id = payload.id;
        state.company_website = payload.company_website;
        state.company_registration_link = payload.company_registration_link;
        state.instagram = payload.instagram;
        state.facebook = payload.facebook;
        state.social = payload.social;
        state.email = payload.email;
        state.company_number = payload.company_number;
      },
      setJwtToken (state, payload) {
        localStorage.token = payload.jwt.token
        state.jwt = payload.jwt
      },
        setSponser (state, payload) {
        state.isSponser = true
      },
         setInfluencer (state, payload) {
        state.influencer = true
      },
        setAdData (state, payload) {
        state.currentAd = payload
      },
        userLogin(state, payload){
            state.navMenuList[1].username = '홍길동'
            state.userType = payload
        },
        userLogout(state, payload){
            state.jwt = '';
            state.isSponser = false;
            state.influencer = false;
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
        openUpdatePopup(state){
            state.isAlertPopup = true;
            state.alertMsg = '업데이트 ';
            state.alertMobileMsg = '완료 되었습니다.';
        },
        errorUpdatePopup(state){
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
        errorCreateAdPopup(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '10초 후 다시 시도 ';
            state.alertMobileMsg = '부탁드립니다.';
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
        setCurrentAdInfluencer(state, payload){
            state.currentAdInfluencer = payload;
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
        filterAdList(state, payload){
            state.filterAds = payload;
        },
        setAds(state, payload){
            state.ads = payload;
        },
        setAdInfluencers(state, payload){
            state.adInfluencers = payload;
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
        },
        setInfluencers(state, payload) {
            state.influencers = payload;
        }
    },
    getters: {
        user_id(state){
            return state.user_id
        },
        email(state){
            return state.email
        },
        company_number(state){
            return state.company_number
        },
        company_name(state){
            return state.company_name
        },
        company_category(state){
            return state.company_category
        },
        officer_name(state){
            return state.officer_name
        },
        tax_email(state){
            return state.tax_email
        },
        contact(state){
            return state.contact
        },
        company_website(state){
            return state.company_website
        },
        company_registration_link(state){
            return state.company_registration_link
        },
        instagram(state){
            return state.instagram
        },
        facebook(state){
            return state.facebook
        },
        social(state){
            return state.social
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
        getJwt (state) {
        return state.jwt
        },
        // reusable data accessors
        isAuthenticated (state) {
        return isValidJwt(state.jwt)
        },
        isSponserAccount (state) {
        return state.isSponser
        },
        isInfluencerAccount (state) {
        return state.isInfluencer
        },
        influencers (state) {
        return state.influencers
        },
        currentAd (state) {
        return state.currentAd
        },
        ad_id (state) {
        return state.currentAd.id
        },
        filterAds(state) {
            return state.filterAds
        },
        ads(state) {
            return state.ads
        },
        adInfluencers(state) {
            return state.adInfluencers
        },
        currentAdInfluencer(state){
            return state.currentAdInfluencer
        }
    }
})