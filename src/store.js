import Vue from 'vue'
import Vuex from 'vuex'

// imports of AJAX functions will go here
import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey,
    authenticate, register, checkDuplicateEmail, checkDuplicateCompanyNumber,
    userUpdate, createAd, fetchInfluencers, registerAdInfluencers, fetchAdBySponserId,
    fetchAdInfluencersByAdId, updateAdInfluencer, fetchCountAds, fetchCountInfluencerAds, userfileUpdate,
    requestPassword, registerInfluencer, deleteUser} from '@/api'
import { isValidJwt, EventBus } from '@/utils'
import Router from './router'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user_type: '',
        isTestPopup: false,
        isJoinPopup: false,
        isRequestPasswordPopup: false,
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
        file:'',
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
            title: "영향력 지수 확인 & 광고 신청",
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
        id: '',
        isInfluencer: false,
        isSponser: false,
        company_name: '',
        company_category: '',
        officer_name: '',
        tax_email: '',
        contact: '',
        company_website: '',
        instagram: '',
        facebook: '',
        social: '',
        influencers: [],
        filterAds: '',
        ads: [],
        adInfluencers: [],
        currentAdInfluencer: {},
        count_ads: {},
        picture_link: '',
        document_link: '',
        isValidEmail: false,
        gender: '',
        country: '',
        category: '',
        birth: '',
        name: '',
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
        registerInfluencer (context, userData) {
            context.commit('setUserData', { userData })
            return registerInfluencer(userData)
              .then(
                  function (response) {
                      console.log(response);
                      console.log(response.data.id);
                      if(response.data.id){
                        context.commit('closeJoinPopup');
                        context.commit('openCompletePopup', '인플루언서');
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
                                if (response.data.user_type === 'influencer'){
                                    console.log("influencer");
                                    context.commit('setInfluencer', true);
                                    Router.push('/influencer-my-page');
                                } else {
                                    console.log("sponser");
                                    context.commit('setSponser', true);
                                    Router.push('/mypage');
                                }

                            } else {
                                    context.commit('errorLoginPopup')
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },

        requestPassword (context, userData) {
            return requestPassword(userData)
              .then(
                  function (response) {
                      console.log(response);
                      console.log(response.data);
                      if(response.data){
                        context.commit('closeRequestPasswordPopup');
                        context.commit('isPasswordRequested');
                      }
                      else{
                          context.commit('errorRequestPasswordPopup');
                      }

                  }).catch(e => {
              context.commit('errorRequestPasswordPopup');
            });
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
        fetchCountAds (context, userData) {
            const result = fetchCountAds(userData)
              .then(
                  function (response) {
                            console.log(response.data.result);
                            if(response.data.result){
                                context.commit('setCountAds', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchCountInfluencerAds (context, userData) {
            const result = fetchCountInfluencerAds(userData)
              .then(
                  function (response) {
                            console.log(response.data.result);
                            if(response.data.result){
                                context.commit('setCountAds', response.data.result);
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
        checkEmailNoPopup(context, userData){
            if (!userData){
                return context.commit('isEmptyEmail')
            }

            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (!re.test(String(userData).toLowerCase()))
                return context.commit('isAbnormalEmail')

            return checkDuplicateEmail(userData)
            .then(
                function (response) {
                    return context.commit('isDuplicateEmailNoPopup', response)}
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
            pictureUpdate (context, userData) {
            context.commit('setUserData', { userData })
            return userfileUpdate(userData, context.getters.getJwt)
              .then(
                  function (response) {
                      if(response.data.result.picture_link){
                        context.commit('setPictureLink', response.data.result.picture_link);
                      }
                      else{
                          context.commit('errorUpdatePopup');
                      }

                  }).catch(e => {
              context.commit('errorUpdatePopup');
            });
          },
        documentUpdate (context, userData) {
            context.commit('setUserData', { userData })
            return userfileUpdate(userData, context.getters.getJwt)
              .then(
                  function (response) {
                      if(response.data.result.document_link){
                        context.commit('setDocumentLink', response.data.result.document_link);
                      }
                      else{
                          context.commit('errorUpdatePopup');
                      }

                  }).catch(e => {
              context.commit('errorUpdatePopup');
            });
          },
          userUpdate (context, userData) {
            context.commit('setUserData', { userData })
            return userUpdate(userData, context.getters.getJwt)
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
        deleteUser (context) {
            return deleteUser({'id': context.getters.id}, context.getters.getJwt)
              .then(
                  function (response) {
                      if(response){
                        context.commit('openDeletePopup');
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
        checkPerformance (context, userData) {
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
        state.instagram = payload.instagram;
        state.facebook = payload.facebook;
        state.social = payload.social;
        state.email = payload.email;
        state.company_number = payload.company_number;
        state.file = payload.file;
        state.picture_link = payload.picture_link;
        state.document_link = payload.document_link;
        state.id = payload.id;
        state.country = payload.country;
        state.gender = payload.gender;
        state.category = payload.category;
        state.birth = payload.birth;
        state.name = payload.name;
        state.user_type = payload.user_type;
      },
      setJwtToken (state, payload) {
        localStorage.token = payload.jwt.token
        state.jwt = payload.jwt
      },
        setSponser (state, payload) {
        state.isSponser = true
      },
         setInfluencer (state, payload) {
        state.isInfluencer = true
      },
        setAdData (state, payload) {
        state.currentAd = payload
      },
        setCountAds (state, payload) {
        state.count_ads = payload
      },

        userLogin(state, payload){
            state.navMenuList[1].username = '홍길동'
            state.user_type = payload
        },
        userLogout(state, payload){
            state.jwt = '';
            state.isSponser = false;
            state.isInfluencer = false;
        },
        openJoinPopup(state){
            state.isJoinPopup = true;
        },
        closeJoinPopup(state){
            state.isJoinPopup = false;
        },
        openRequestPasswordPopup(state){
            state.isRequestPasswordPopup = true;
        },
        closeRequestPasswordPopup(state){
            state.isRequestPasswordPopup = false;
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
        openDeletePopup(state){
            state.isAlertPopup = true;
            state.alertMsg = '삭제 요청 ';
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
        errorRequestPasswordPopup(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '일치하는 유저 정보가 ';
            state.alertMobileMsg = '없습니다.';
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
        isNormalEmailInit(state){
            state.isValidEmail = false;
        },
        isNormalEmail(state){
            state.isValidEmail = true;
        },
        isDuplicateEmail(state, payload){
            state.isAlertPopup = true;

            if (payload.data.result != null){
                state.alertMsg = '중복된 ';
                state.alertMobileMsg = '이메일입니다.';
                state.email = '';
            } else {
                state.isValidEmail = true;
                state.alertMsg = '사용가능한 ';
                state.alertMobileMsg = '이메일입니다.';
            }
        },
        isDuplicateEmailNoPopup(state, payload){

            if (payload.data.result != null){
                state.alertMsg = '중복된 ';
                state.alertMobileMsg = '이메일입니다.';
                state.email = '';
            } else {
                state.isValidEmail = true;
                state.alertMsg = '사용가능한 ';
                state.alertMobileMsg = '이메일입니다.';
            }
        },
        isPasswordRequested(state){
            state.isAlertPopup = true;
            state.email = '';

            state.alertMsg = '이메일에서 새 비밀번호를 ';
            state.alertMobileMsg = '확인해주세요.';
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
        },
        setDocumentLink(state, payload) {
            state.document_link = payload;
        },
        setPictureLink(state, payload) {
            state.picture_link = payload;
        }
    },
    getters: {
        id(state){
            return state.user_id
        },
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
        user_type(state){
            return state.user_type
        },
        country(state){
            return state.country
        },
        gender(state){
            return state.gender
        },
        contact(state){
            return state.contact
        },
        category(state){
            return state.category
        },
        birth(state){
            return state.birth
        },
        name(state){
            return state.name
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
        },
        count_ads(state){
            return state.count_ads
        },
        picture_link(state){
            return state.picture_link
        },
        document_link(state){
            return state.document_link
        },
        isRequestPasswordPopup(state){
            return state.isRequestPasswordPopup
        },
        isValidEmail(state){
            return state.isValidEmail
        },
    }
})