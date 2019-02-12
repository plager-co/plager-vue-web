import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// imports of AJAX functions will go here
import { fetchSurveys, fetchSurvey, saveSurveyResponse, postNewSurvey,
    authenticate, register, checkDuplicateEmail, checkDuplicateCompanyNumber,
    userUpdate, createAd, fetchInfluencers, registerAdInfluencers, fetchAdBySponsorId, fetchAdByInfluencerId,
    fetchAdInfluencersByAdId, updateAdInfluencer, fetchCountAds, fetchInstagramAccount, fetchCountInfluencerAds, userfileUpdate,
    requestPassword, requestInfluPassword, registerInfluencer, deleteUser, avgInfluencerEffectRate,
    fetchTesterByInstagramId, fetchCountryName, fetchAdInfluencersBySponsorIdAndStatus,
    fetchAdInfluencersByInfluencerIdAndStatus, fetchAllTargetResultBySponsorId, fetchAllTargetResultByInfluencerId} from '@/api'
import { isValidJwt, EventBus } from '@/utils'
import Router from './router'
Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        user_type: '',
        isTestPopup: true,
        isJoinPopup: false,
        isRequestPasswordPopup: false,
        isRequestInfluPasswordPopup: false,
        isCompletePopup: false,
        isEmptyTester: false,
        currentRangeBtn: 0,
        testerBorder: '2px solid red',
        completeMsg: '',
        isAlertPopup: false,
        isSideBarOpen: false,
        isForceAlertPopup: false,
        alertMsg: '',
        alertMobileMsg: '',
        isScoreCompletePopup: false,
        isScoreImpossiblePopup: false,
        isScoreCompleteMsg: '',
        email:'',
        error: false,
        company_number:'',
        file:'',
        navMenuList: [
            {
            username: "",
            title: "로그인",
            url: "/login",
            auth: '',
            },
            {
            username: "",
            auth: 'sponsor',
            },
            {
            username: "",
            auth: 'influencer',
            }

        ],
        mobileNavMenuList: [
            {
            username: "",
            auth: 'sponsor',
            },
            {
            username: "",
            auth: 'influencer',
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
        isSponsor: false,
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
        mobileInfluencers: [],
        filterAds: '',
        ads: [],
        adInfluencers: [],
        runningAdInfluencers: [],
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
        total_follower_count: 0,
        total_post_count: 0,
        total_like_count: 0,
        total_comment_count: 0,
        total_movie_count: 0,
        total_play_count: 0,
        influencer_cost: 0,
        influencer_effect_rate: 0,
        avg_influencer_effect_rate: 0,
        instagram_code: '',
        instagram_client_id: '',
        instagram_account: {},
        testers: '',
        allTargetResult: {}
    },

    actions: {

        loadSurveys: function(context) {
            return fetchSurveys()
              .then((response) => context.commit('setSurveys', { surveys: response }))
          },
        register: function (context, userData) {
            context.commit('setUserData', { userData })
            return register(userData)
              .then(
                  function (response) {
                      if(response.data.id){
                        context.commit('closeJoinPopup');
                        context.commit('openCompletePopup', '광고주');
                          context.dispatch('login', userData)
                          Router.push('/mypage')
                      }
                      else{
                          context.commit('errorRegisterPopup');
                      }

                  }).catch(e => {
              context.commit('errorRegisterPopup');
            });
          },
        registerInfluencer: function (context, userData) {
            context.commit('setUserData', { userData })
            return registerInfluencer(userData)
              .then(
                  function (response) {
                      if(response.data.id){
                        context.commit('closeJoinPopup');
                        context.commit('openCompletePopup', '인플루언서');
                          context.commit('setUserData', { userData });
                        const result = authenticate(userData)
                          .then(
                              function (response) {
                                        if(response.data.token){
                                            context.commit('setUserData', response.data);
                                            context.commit('setJwtToken', { jwt: response.data.token });
                                            if (response.data.user_type === 'influencer'){
                                                console.log("influencer");
                                                context.commit('setInfluencer', true);
                                                Router.push('/influencer-score');
                                            }

                                        } else {
                                                context.commit('errorLoginPopup')
                                        }
                                    }
                        ).catch(e => {
                          context.commit('errorLoginPopup');
                        });
                      }
                      else{
                          context.commit('errorRegisterPopup');
                      }

                  }).catch(e => {
              context.commit('errorRegisterPopup');
            });
          },

        login: function (context, userData) {
            context.commit('setUserData', { userData });
            const result = authenticate(userData)
              .then(
                  function (response) {
                            if(response.data.token){
                                context.commit('setUserData', response.data);
                                context.commit('setJwtToken', { jwt: response.data.token });
                                if (response.data.user_type === 'influencer'){
                                    console.log("influencer");
                                    context.commit('setInfluencer', true);
                                    Router.push('/influencer-my-page');
                                } else {
                                    console.log("sponsor");
                                    context.commit('setSponsor', true);
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

        requestPassword : function(context, userData) {
            return requestPassword(userData)
              .then(
                  function (response) {
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
        requestInfluPassword : function(context, userData) {
            return requestInfluPassword(userData)
              .then(
                  function (response) {
                      if(response.data){
                        context.commit('closeRequestInfluPasswordPopup');
                        context.commit('isPasswordRequested');
                      }
                      else{
                          context.commit('errorRequestPasswordPopup');
                      }

                  }).catch(e => {
              context.commit('errorRequestPasswordPopup');
            });
          },
            fetchInfluencers: function(context, userData) {
            const result = fetchInfluencers(userData)
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
        fetchMobileInfluencers: function(context, userData) {
            const result = fetchInfluencers(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setMobileInfluencers', response.data.result);
                            } else {
                                    context.commit('errorLoginPopup')
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        registerAdInfluencers: function(context, userData) {
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
        fetchInstagramAccount: function(context, userData) {
            const result = fetchInstagramAccount(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setInstagramAccount', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdBySponsorId: function(context, userData) {
            const result = fetchAdBySponsorId(userData)
              .then(
                  function (response) {
                        context.commit('setAds', response.data.result);
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdByInfluencerId: function(context, userData) {
            const result = fetchAdByInfluencerId(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setAds', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdInfluencersBySponsorIdAndStatus: function(context, userData) {
            const result = fetchAdInfluencersBySponsorIdAndStatus(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                console.log('response.data.result');
                                console.log(response.data.result);
                                context.commit('setRunningAdInfluencers', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdInfluencersByInfluencerIdAndStatus: function(context, userData) {
            const result = fetchAdInfluencersByInfluencerIdAndStatus(userData)
              .then(
                  function (response) {
                      console.log('response');
                      console.log(response);
                            if(response.data.result){
                                console.log('response.data.result');
                                console.log(response.data.result);
                                context.commit('setRunningAdInfluencers', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchCountAds: function(context, userData) {
            const result = fetchCountAds(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setCountAds', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchCountInfluencerAds: function(context, userData) {
            const result = fetchCountInfluencerAds(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setCountAds', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        fetchAdInfluencersByAdId: function(context, userData) {
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
        fetchTesterByInstagramId: function(context, userData) {
            const result = fetchTesterByInstagramId(userData)
              .then(
                  function (response) {
                            console.log(response);
                            if(response.data.result){
                                console.log(response.data.result);
                                context.commit('setTesters', response.data.result);
                            }
                        }
            ).catch(e => {
                console.log(e);
                context.commit('errorPopup');
                context.commit('setError', true);
            });
            return result

          },
        fetchCountryName: function(context, userData) {
            const result = fetchCountryName(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setCountry', response.data.result.korean_name);
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
        fetchAllTargetResultBySponsorId: function(context, userData) {
            const result = fetchAllTargetResultBySponsorId(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setAllTargetResult', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorPopup');
              context.commit('setError', true);
            });
            return result

          },
        fetchAllTargetResultByInfluencerId: function(context, userData) {
            const result = fetchAllTargetResultByInfluencerId(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setAllTargetResult', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorPopup');
              context.commit('setError', true);
            });
            return result

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
            pictureUpdate: function(context, userData) {
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
        documentUpdate: function(context, userData) {
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
          userUpdate: function(context, userData) {
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
        userUpdateNoPopup: function(context, userData) {
            return userUpdate(userData, context.getters.getJwt)
              .then(
                  function (response) {
                      if(response.data.result.id){
                      }
                      else{
                          context.commit('errorUpdatePopup');
                      }

                  }).catch(e => {
              context.commit('errorUpdatePopup');
            });
          },
        deleteUser: function(context) {
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
        createAd: function(context, userData) {
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
        payAd: function(context, userData) {
            context.commit('setAdData', userData);
            return Router.push('/sponsor-sim');
          },
        checkPerformance: function(context, userData) {
            context.commit('setAdData', userData);
            return Router.push('/sponsor-sim');
          },
        checkMyPerformance: function(context, userData) {
            context.commit('setAdData', userData);
            return Router.push('/sponsor-result');
          },
        avgInfluencerEffectRate: function(context, userData) {
            const result = avgInfluencerEffectRate(userData)
              .then(
                  function (response) {
                            if(response.data.result){
                                context.commit('setAvgInfluencerEffectRate', response.data.result);
                            }
                        }
            ).catch(e => {
              context.commit('errorLoginPopup');
            });
            return result

          },
        updateAdInfluencer: function(context, userData) {
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
        setSurveys: function(state, payload) {
            state.surveys = payload.surveys
          },
        setUserData : function(state, payload) {
        state.user = payload;
        state.navMenuList.forEach(function(val){
            if(payload.name){
                val.username = payload.name;
            } else if (payload.officer_name){
                val.username = payload.officer_name;
            } else {
                val.username = payload.email;
            }
        });
        state.mobileNavMenuList.forEach(function(val){
            if(payload.name){
                val.username = payload.name;
            } else if (payload.officer_name){
                val.username = payload.officer_name;
            } else {
                val.username = payload.email;
            }
        });
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
        state.total_follower_count = payload.total_follower_count;
        state.total_post_count = payload.total_post_count;
        state.total_like_count = payload.total_like_count;
        state.total_comment_count = payload.total_comment_count;
        state.total_movie_count = payload.total_movie_count;
        state.total_play_count = payload.total_play_count;
        state.influencer_cost = payload.influencer_cost;
        state.influencer_effect_rate = payload.influencer_effect_rate;
      },
        setUserDataMyPage : function(state, payload) {
            state.company_name = payload.company_name;
          state.company_category = payload.company_category;
          state.officer_name = payload.officer_name;
          state.tax_email = payload.tax_email;
          state.contact = payload.contact;
          state.company_website = payload.company_website;
          state.document_link = payload.document_link;
          state.instagram = payload.instagram;
          state.facebook = payload.facebook;
          state.social = payload.social;
          state.company_number = payload.company_number;
        },
      setJwtToken : function(state, payload) {
        localStorage.token = payload.jwt.token
        state.jwt = payload.jwt
      },
        setSponsor : function(state, payload) {
        state.isSponsor = true
      },
         setInfluencer : function(state, payload) {
        state.isInfluencer = true
      },
        setAdData : function(state, payload) {
        state.currentAd = payload
      },
        setCountAds : function(state, payload) {
        state.count_ads = payload
      },
        setForceAlertPopup : function(state, payload) {
        state.isForceAlertPopup = payload
      },

        userLogin: function(state, payload){
            state.user_type = payload
        },
        userLogout: function(state, payload){
            state.jwt = '';
            state.user_type = '';
            state.navMenuList.forEach(function(val){
            val.username = '';
            });
            state.mobileNavMenuList.forEach(function(val){
            val.username = '';
            });
            state.isSponsor = false;
            state.isInfluencer = false;
        },
        openJoinPopup: function(state){
            state.isJoinPopup = true;
        },
        closeJoinPopup: function(state){
            state.isJoinPopup = false;
        },
        openRequestPasswordPopup: function(state){
            state.isRequestPasswordPopup = true;
        },
        closeRequestPasswordPopup: function(state){
            state.isRequestPasswordPopup = false;
        },
        openRequestInfluPasswordPopup: function(state){
            state.isRequestInfluPasswordPopup = true;
        },
        closeRequestInfluPasswordPopup: function(state){
            state.isRequestInfluPasswordPopup = false;
        },
        errorRegisterPopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '올바른 정보를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        openUpdatePopup: function(state){
            state.isAlertPopup = true;
            state.alertMsg = '업데이트 ';
            state.alertMobileMsg = '완료 되었습니다.';
        },
        openTesterPopup: function(state){
            state.isAlertPopup = true;
            state.alertMsg = '분석에 몇 분이';
            state.alertMobileMsg = '소요됩니다.';
        },
        openEmptyInfluencerPopup: function(state){
            state.isAlertPopup = true;
            state.alertMsg = '진행중인 서비스가';
            state.alertMobileMsg = '없습니다.';
        },
        openDeletePopup: function(state){
            state.isAlertPopup = true;
            state.alertMsg = '삭제 요청 ';
            state.alertMobileMsg = '완료 되었습니다.';
        },
        errorUpdatePopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '올바른 정보를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        errorLoginPopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '아이디 또는 비밀번호가';
            state.alertMobileMsg = '일치하지 않습니다.';
        },
        errorCreateAdPopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '10초 후 다시 시도 ';
            state.alertMobileMsg = '부탁드립니다.';
        },
        errorCompanyNumberPopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '10초 후 다시 시도 ';
            state.alertMobileMsg = '부탁드립니다.';
        },
        errorPopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '잠시 후 다시 시도 ';
            state.alertMobileMsg = '부탁드립니다.';
        },
        errorRequestPasswordPopup: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '일치하는 유저 정보가 ';
            state.alertMobileMsg = '없습니다.';
        },
        isAbnormalEmail: function(state, payload){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '올바른 이메일을 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isEmptyEmail: function(state, payload){
            state.isAlertPopup = true;
            state.email = '';

            state.alertMsg = '이메일을 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isNormalEmailInit: function(state){
            state.isValidEmail = false;
        },
        isNormalEmail: function(state){
            state.isValidEmail = true;
        },
        isDuplicateEmail: function(state, payload){
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
        isDuplicateEmailNoPopup: function(state, payload){

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
        isPasswordRequested: function(state){
            state.isAlertPopup = true;
            state.email = '';

            state.alertMsg = '이메일에서 새 비밀번호를 ';
            state.alertMobileMsg = '확인해주세요.';
        },
        setCurrentAdInfluencer: function(state, payload){
            state.currentAdInfluencer = payload;
        },
        hasEmail: function(state, payload){
            state.email = payload;
        },
        hasCompanyNumber: function(state, payload){
            state.company_number = payload;
        },
        isAbnormalCompanyNumber: function(state, payload){
            state.isAlertPopup = true;
            state.company_number = '';
            state.alertMsg = '올바른 사업자 번호를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isEmptyCompanyNumber: function(state, payload){
            state.isAlertPopup = true;
            state.company_number = '';
            state.alertMsg = '사업자 번호를 ';
            state.alertMobileMsg = '입력해주세요.';
        },
        isValidCompanyNumber: function(state, payload){
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
        isFailedTester: function(state){
            state.isAlertPopup = true;
            state.email = '';

            state.alertMsg = '잠시 후 다시 ';
            state.alertMobileMsg = '시도해주세요.';
        },
        isNoTester: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '인스타그램에 ';
            state.alertMobileMsg = '없는 아이디입니다.';
        },
        noAdRunning: function(state){
            state.isAlertPopup = true;
            state.email = '';
            state.alertMsg = '진행중인 ';
            state.alertMobileMsg = '광고가 없습니다.';
        },
        filterAdList: function(state, payload){
            state.filterAds = payload;
        },
        setAds: function(state, payload){
            state.ads = payload;
        },
        setAvgInfluencerEffectRate: function(state, payload){
            state.avg_influencer_effect_rate = payload;
        },
        setAdInfluencers: function(state, payload){
            state.adInfluencers = payload;
        },
        setRunningAdInfluencers: function(state, payload){
            state.runningAdInfluencers = payload;
        },
        openAlertPopup: function(state, payload){
            state.isAlertPopup = true;
            state.alertMsg = '';
            state.alertMobileMsg = '';
        },
        openAlertPopupMsg: function(state, payload){
            state.isAlertPopup = true;
            state.alertMsg = payload;
            state.alertMobileMsg = '';
        },
        closeAlertPopup: function(state){
            state.isAlertPopup = false;
            state.alertMsg = '';
            state.alertMobileMsg = '';
        },
        openSideBar: function(state){
            state.isSideBarOpen = true;
        },
        closeSideBar: function(state){
            state.isSideBarOpen = false;
        },
        setSideBar: function(state, payload){
            state.isSideBarOpen = payload;
        },
        openCompletePopup: function(state, payload){
            state.isCompletePopup = true;
            state.completeMsg = payload
        },
        closeCompletePopup: function(state){
            state.isCompletePopup = false;
            state.completeMsg = ''
        },
        openScoreCompletePopup: function(state, payload){
            state.isScoreCompletePopup = true;
        },
        closeScoreCompletePopup: function(state){
            state.isScoreCompletePopup = false;
        },
        openScoreImpossiblePopup: function(state, payload){
            state.isScoreImpossiblePopup = true;
        },
        closeScoreImpossiblePopup: function(state){
            state.isScoreImpossiblePopup = false;
        },
        openTestPopup: function(state) {
            state.isTestPopup = true;
        },
        closeTestPopup: function(state) {
            state.isTestPopup = false;
        },
        openEmptyTesterPopup: function(state) {
            state.isEmptyTester = true;
        },
        closeEmptyTesterPopup: function(state) {
            state.isEmptyTester = false;
        },
        setInfluencers: function(state, payload) {
            state.influencers = payload;
        },
        setMobileInfluencers: function(state, payload) {
            state.mobileInfluencers = payload;
        },
        setDocumentLink: function(state, payload) {
            state.document_link = payload;
        },
        setPictureLink: function(state, payload) {
            state.picture_link = payload;
        },
        setInstagramCode: function(state, payload) {
            state.instagram_code = payload;
        },
        setInstagramClientId: function(state, payload) {
            state.instagram_client_id = payload;
        },
        setInstagramAccount: function(state, payload) {
            state.instagram_account = payload;
        },
        setTesters: function(state, payload) {
            state.testers = payload;
        },
        setCountry: function(state, payload) {
            state.country = payload;
        },
        setError: function(state, payload) {
            state.error = payload;
        },
        setCurrentRangeBtn: function(state, payload) {
            state.currentRangeBtn = payload;
        },
        setAllTargetResult: function(state, payload) {
            state.allTargetResult = payload;
        },
    },
    getters: {
        id: function(state){
            return state.user_id
        },
        user: function(state){
            return state.user
        },
        user_id: function(state){
            return state.user_id
        },
        email: function(state){
            return state.email
        },
        company_number: function(state){
            return state.company_number
        },
        company_name: function(state){
            return state.company_name
        },
        company_category: function(state){
            return state.company_category
        },
        officer_name: function(state){
            return state.officer_name
        },
        tax_email: function(state){
            return state.tax_email
        },
        contact: function(state){
            return state.contact
        },
        company_website: function(state){
            return state.company_website
        },
        instagram: function(state){
            return state.instagram
        },
        facebook: function(state){
            return state.facebook
        },
        social: function(state){
            return state.social
        },
        getTestPopup: function(state){
            return state.isTestPopup
        },
        user_type: function(state){
            return state.user_type
        },
        country: function(state){
            return state.country
        },
        gender: function(state){
            return state.gender
        },
        contact: function(state){
            return state.contact
        },
        category: function(state){
            return state.category
        },
        birth: function(state){
            return state.birth
        },
        name: function(state){
            return state.name
        },

        GetNavMenuList: function(state) {
            return state.navMenuList
        },
        GetMobileNavMenuList: function(state) {
            return state.mobileNavMenuList
        },
        getJwt : function(state) {
        return state.jwt
        },
        // reusable data accessors
        isAuthenticated : function(state) {
        return isValidJwt(state.jwt)
        },
        isSponsorAccount : function(state) {
        return state.isSponsor
        },
        isInfluencerAccount : function(state) {
        return state.isInfluencer
        },
        influencers : function(state) {
        return state.influencers
        },
        currentAd : function(state) {
        return state.currentAd
        },
        ad_id : function(state) {
        return state.currentAd.id
        },
        filterAds: function(state) {
            return state.filterAds
        },
        ads: function(state) {
            return state.ads
        },
        adInfluencers: function(state) {
            return state.adInfluencers
        },
        runningAdInfluencers: function(state) {
            return state.runningAdInfluencers
        },
        currentAdInfluencer: function(state){
            return state.currentAdInfluencer
        },
        count_ads: function(state){
            return state.count_ads
        },
        picture_link: function(state){
            return state.picture_link
        },
        document_link: function(state){
            return state.document_link
        },
        isRequestPasswordPopup: function(state){
            return state.isRequestPasswordPopup
        },
        isRequestInfluPasswordPopup: function(state){
            return state.isRequestInfluPasswordPopup
        },
        isValidEmail: function(state){
            return state.isValidEmail
        },
        total_follower_count: function(state){
            return state.total_follower_count
        },
        total_post_count: function(state){
            return state.total_post_count
        },
        total_like_count: function(state){
            return state.total_like_count
        },
        total_comment_count: function(state){
            return state.total_comment_count
        },
        total_movie_count: function(state){
            return state.total_movie_count
        },
        total_play_count: function(state){
            return state.total_play_count
        },
        influencer_cost: function(state){
            return state.influencer_cost
        },
        influencer_effect_rate: function(state){
            return state.influencer_effect_rate
        },
        avg_influencer_effect_rate: function(state){
            return state.avg_influencer_effect_rate
        },
        instagram_code: function(state){
            return state.instagram_code
        },
        instagram_account: function(state){
            return state.instagram_account
        },
        instagram_client_id: function(state){
            return state.instagram_client_id
        },
        testers: function(state){
            return state.testers
        },
        error: function(state){
            return state.error
        },
        currentRangeBtn: function(state){
            return state.currentRangeBtn
        },
        mobileInfluencers: function(state){
            return state.mobileInfluencers
        },
        isForceAlertPopup: function(state){
            return state.isForceAlertPopup
        },
        isSideBarOpen: function(state){
            return state.isSideBarOpen
        },
        allTargetResult: function(state){
            return state.allTargetResult
        },
    }
})
