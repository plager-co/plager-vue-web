"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _api = require("@/api");

var _utils = require("@/utils");

var _router = _interopRequireDefault(require("./router"));

var _getters;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  plugins: [(0, _vuexPersistedstate.default)()],
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
    alertMsg: '',
    alertMobileMsg: '',
    isScoreCompletePopup: false,
    isScoreImpossiblePopup: false,
    isScoreCompleteMsg: '',
    email: '',
    error: false,
    company_number: '',
    file: '',
    navMenuList: [{
      username: "",
      title: "로그인",
      url: "/login",
      auth: ''
    }, {
      username: "",
      auth: 'sponsor'
    }, {
      username: "",
      auth: 'influencer'
    }],
    mobileNavMenuList: [{
      username: "",
      auth: 'sponsor'
    }, {
      username: "",
      auth: 'influencer'
    }],
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
    testers: []
  },
  actions: {
    loadSurveys: function loadSurveys(context) {
      return (0, _api.fetchSurveys)().then(function (response) {
        return context.commit('setSurveys', {
          surveys: response
        });
      });
    },
    register: function register(context, userData) {
      context.commit('setUserData', {
        userData: userData
      });
      return (0, _api.register)(userData).then(function (response) {
        if (response.data.id) {
          context.commit('closeJoinPopup');
          context.commit('openCompletePopup', '광고주');
          context.dispatch('login', userData);

          _router.default.push('/mypage');
        } else {
          context.commit('errorRegisterPopup');
        }
      }).catch(function (e) {
        context.commit('errorRegisterPopup');
      });
    },
    registerInfluencer: function registerInfluencer(context, userData) {
      context.commit('setUserData', {
        userData: userData
      });
      return (0, _api.registerInfluencer)(userData).then(function (response) {
        if (response.data.id) {
          context.commit('closeJoinPopup');
          context.commit('openCompletePopup', '인플루언서');
          context.commit('setUserData', {
            userData: userData
          });
          var result = (0, _api.authenticate)(userData).then(function (response) {
            if (response.data.token) {
              context.commit('setUserData', response.data);
              context.commit('setJwtToken', {
                jwt: response.data.token
              });

              if (response.data.user_type === 'influencer') {
                console.log("influencer");
                context.commit('setInfluencer', true);

                _router.default.push('/influencer-my-score');
              }
            } else {
              context.commit('errorLoginPopup');
            }
          }).catch(function (e) {
            context.commit('errorLoginPopup');
          });
        } else {
          context.commit('errorRegisterPopup');
        }
      }).catch(function (e) {
        context.commit('errorRegisterPopup');
      });
    },
    login: function login(context, userData) {
      context.commit('setUserData', {
        userData: userData
      });
      var result = (0, _api.authenticate)(userData).then(function (response) {
        if (response.data.token) {
          context.commit('setUserData', response.data);
          context.commit('setJwtToken', {
            jwt: response.data.token
          });

          if (response.data.user_type === 'influencer') {
            console.log("influencer");
            context.commit('setInfluencer', true);

            _router.default.push('/influencer-my-page');
          } else {
            console.log("sponsor");
            context.commit('setSponsor', true);

            _router.default.push('/mypage');
          }
        } else {
          context.commit('errorLoginPopup');
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    requestPassword: function requestPassword(context, userData) {
      return (0, _api.requestPassword)(userData).then(function (response) {
        if (response.data) {
          context.commit('closeRequestPasswordPopup');
          context.commit('isPasswordRequested');
        } else {
          context.commit('errorRequestPasswordPopup');
        }
      }).catch(function (e) {
        context.commit('errorRequestPasswordPopup');
      });
    },
    requestInfluPassword: function requestInfluPassword(context, userData) {
      return (0, _api.requestInfluPassword)(userData).then(function (response) {
        if (response.data) {
          context.commit('closeRequestInfluPasswordPopup');
          context.commit('isPasswordRequested');
        } else {
          context.commit('errorRequestPasswordPopup');
        }
      }).catch(function (e) {
        context.commit('errorRequestPasswordPopup');
      });
    },
    fetchInfluencers: function fetchInfluencers(context, userData) {
      var result = (0, _api.fetchInfluencers)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setInfluencers', response.data.result);
        } else {
          context.commit('errorLoginPopup');
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchMobileInfluencers: function fetchMobileInfluencers(context, userData) {
      var result = (0, _api.fetchInfluencers)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setMobileInfluencers', response.data.result);
        } else {
          context.commit('errorLoginPopup');
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    registerAdInfluencers: function registerAdInfluencers(context, userData) {
      var result = (0, _api.registerAdInfluencers)(userData, context.getters.getJwt).then(function (response) {
        if (response.data.result) {
          _router.default.push("/influencer-complete");
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchInstagramAccount: function fetchInstagramAccount(context, userData) {
      var result = (0, _api.fetchInstagramAccount)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setInstagramAccount', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchAdBySponsorId: function fetchAdBySponsorId(context, userData) {
      var result = (0, _api.fetchAdBySponsorId)(userData).then(function (response) {
        context.commit('setAds', response.data.result);
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchAdByInfluencerId: function fetchAdByInfluencerId(context, userData) {
      var result = (0, _api.fetchAdByInfluencerId)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setAds', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchAdInfluencersBySponsorIdAndStatus: function fetchAdInfluencersBySponsorIdAndStatus(context, userData) {
      var result = (0, _api.fetchAdInfluencersBySponsorIdAndStatus)(userData).then(function (response) {
        if (response.data.result) {
          console.log('response.data.result');
          console.log(response.data.result);
          context.commit('setRunningAdInfluencers', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchAdInfluencersByInfluencerIdAndStatus: function fetchAdInfluencersByInfluencerIdAndStatus(context, userData) {
      var result = (0, _api.fetchAdInfluencersByInfluencerIdAndStatus)(userData).then(function (response) {
        console.log('response');
        console.log(response);

        if (response.data.result) {
          console.log('response.data.result');
          console.log(response.data.result);
          context.commit('setRunningAdInfluencers', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchCountAds: function fetchCountAds(context, userData) {
      var result = (0, _api.fetchCountAds)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setCountAds', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchCountInfluencerAds: function fetchCountInfluencerAds(context, userData) {
      var result = (0, _api.fetchCountInfluencerAds)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setCountAds', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchAdInfluencersByAdId: function fetchAdInfluencersByAdId(context, userData) {
      var result = (0, _api.fetchAdInfluencersByAdId)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setAdInfluencers', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    fetchTesterByInstagramId: function fetchTesterByInstagramId(context, userData) {
      var result = (0, _api.fetchTesterByInstagramId)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setTesters', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorPopup');
        context.commit('setError', true);
      });
      return result;
    },
    fetchCountryName: function fetchCountryName(context, userData) {
      var result = (0, _api.fetchCountryName)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setCountry', response.data.result.korean_name);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    checkEmail: function checkEmail(context, userData) {
      if (!userData) {
        return context.commit('isEmptyEmail');
      }

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(userData).toLowerCase())) return context.commit('isAbnormalEmail');
      return (0, _api.checkDuplicateEmail)(userData).then(function (response) {
        return context.commit('isDuplicateEmail', response);
      });
    },
    checkEmailNoPopup: function checkEmailNoPopup(context, userData) {
      if (!userData) {
        return context.commit('isEmptyEmail');
      }

      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(userData).toLowerCase())) return context.commit('isAbnormalEmail');
      return (0, _api.checkDuplicateEmail)(userData).then(function (response) {
        return context.commit('isDuplicateEmailNoPopup', response);
      });
    },
    checkCompanyNumber: function checkCompanyNumber(context, userData) {
      if (!userData) {
        return context.commit('isEmptyCompanyNumber');
      }

      var re = /^(?!0+$)[\-0-9]{10,12}$/;
      if (!re.test(userData)) return context.commit('isAbnormalCompanyNumber');
      return (0, _api.checkDuplicateCompanyNumber)(userData).then(function (response) {
        return context.commit('isValidCompanyNumber', response);
      }).catch(function (e) {
        context.commit('errorCompanyNumberPopup');
      });
    },
    pictureUpdate: function pictureUpdate(context, userData) {
      return (0, _api.userfileUpdate)(userData, context.getters.getJwt).then(function (response) {
        if (response.data.result.picture_link) {
          context.commit('setPictureLink', response.data.result.picture_link);
        } else {
          context.commit('errorUpdatePopup');
        }
      }).catch(function (e) {
        context.commit('errorUpdatePopup');
      });
    },
    documentUpdate: function documentUpdate(context, userData) {
      return (0, _api.userfileUpdate)(userData, context.getters.getJwt).then(function (response) {
        if (response.data.result.document_link) {
          context.commit('setDocumentLink', response.data.result.document_link);
        } else {
          context.commit('errorUpdatePopup');
        }
      }).catch(function (e) {
        context.commit('errorUpdatePopup');
      });
    },
    userUpdate: function userUpdate(context, userData) {
      return (0, _api.userUpdate)(userData, context.getters.getJwt).then(function (response) {
        if (response.data.result.id) {
          context.commit('openUpdatePopup');
        } else {
          context.commit('errorUpdatePopup');
        }
      }).catch(function (e) {
        context.commit('errorUpdatePopup');
      });
    },
    userUpdateNoPopup: function userUpdateNoPopup(context, userData) {
      return (0, _api.userUpdate)(userData, context.getters.getJwt).then(function (response) {
        if (response.data.result.id) {} else {
          context.commit('errorUpdatePopup');
        }
      }).catch(function (e) {
        context.commit('errorUpdatePopup');
      });
    },
    deleteUser: function deleteUser(context) {
      return (0, _api.deleteUser)({
        'id': context.getters.id
      }, context.getters.getJwt).then(function (response) {
        if (response) {
          context.commit('openDeletePopup');
        } else {
          context.commit('errorUpdatePopup');
        }
      }).catch(function (e) {
        context.commit('errorUpdatePopup');
      });
    },
    createAd: function createAd(context, userData) {
      return (0, _api.createAd)(userData, context.getters.getJwt).then(function (response) {
        if (response.data.result.id) {
          context.commit('setAdData', response.data.result);

          _router.default.push('/influencer-list');
        } else {
          context.commit('errorCreateAdPopup');
        }
      }).catch(function (e) {
        context.commit('errorCreateAdPopup');
      });
    },
    payAd: function payAd(context, userData) {
      context.commit('setAdData', userData);
      return _router.default.push('/sponsor-sim');
    },
    checkPerformance: function checkPerformance(context, userData) {
      context.commit('setAdData', userData);
      return _router.default.push('/sponsor-sim');
    },
    checkMyPerformance: function checkMyPerformance(context, userData) {
      context.commit('setAdData', userData);
      return _router.default.push('/sponsor-result');
    },
    avgInfluencerEffectRate: function avgInfluencerEffectRate(context, userData) {
      var result = (0, _api.avgInfluencerEffectRate)(userData).then(function (response) {
        if (response.data.result) {
          context.commit('setAvgInfluencerEffectRate', response.data.result);
        }
      }).catch(function (e) {
        context.commit('errorLoginPopup');
      });
      return result;
    },
    updateAdInfluencer: function updateAdInfluencer(context, userData) {
      return (0, _api.updateAdInfluencer)(userData, context.getters.getJwt).then(function (response) {
        _router.default.push("/sponsor-payment2");
      }).catch(function (e) {
        context.commit('errorUpdatePopup');
      });
    }
  },
  mutations: {
    setSurveys: function setSurveys(state, payload) {
      state.surveys = payload.surveys;
    },
    setUserData: function setUserData(state, payload) {
      state.user = payload;
      state.navMenuList.forEach(function (val) {
        if (payload.name) {
          val.username = payload.name;
        } else if (payload.officer_name) {
          val.username = payload.officer_name;
        } else {
          val.username = payload.email;
        }
      });
      state.mobileNavMenuList.forEach(function (val) {
        if (payload.name) {
          val.username = payload.name;
        } else if (payload.officer_name) {
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
    setUserDataMyPage: function setUserDataMyPage(state, payload) {
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
    setJwtToken: function setJwtToken(state, payload) {
      localStorage.token = payload.jwt.token;
      state.jwt = payload.jwt;
    },
    setSponsor: function setSponsor(state, payload) {
      state.isSponsor = true;
    },
    setInfluencer: function setInfluencer(state, payload) {
      state.isInfluencer = true;
    },
    setAdData: function setAdData(state, payload) {
      state.currentAd = payload;
    },
    setCountAds: function setCountAds(state, payload) {
      state.count_ads = payload;
    },
    userLogin: function userLogin(state, payload) {
      state.user_type = payload;
    },
    userLogout: function userLogout(state, payload) {
      state.jwt = '';
      state.user_type = '';
      state.navMenuList.forEach(function (val) {
        val.username = '';
      });
      state.mobileNavMenuList.forEach(function (val) {
        val.username = '';
      });
      state.isSponsor = false;
      state.isInfluencer = false;
    },
    openJoinPopup: function openJoinPopup(state) {
      state.isJoinPopup = true;
    },
    closeJoinPopup: function closeJoinPopup(state) {
      state.isJoinPopup = false;
    },
    openRequestPasswordPopup: function openRequestPasswordPopup(state) {
      state.isRequestPasswordPopup = true;
    },
    closeRequestPasswordPopup: function closeRequestPasswordPopup(state) {
      state.isRequestPasswordPopup = false;
    },
    openRequestInfluPasswordPopup: function openRequestInfluPasswordPopup(state) {
      state.isRequestInfluPasswordPopup = true;
    },
    closeRequestInfluPasswordPopup: function closeRequestInfluPasswordPopup(state) {
      state.isRequestInfluPasswordPopup = false;
    },
    errorRegisterPopup: function errorRegisterPopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '올바른 정보를 ';
      state.alertMobileMsg = '입력해주세요.';
    },
    openUpdatePopup: function openUpdatePopup(state) {
      state.isAlertPopup = true;
      state.alertMsg = '업데이트 ';
      state.alertMobileMsg = '완료 되었습니다.';
    },
    openTesterPopup: function openTesterPopup(state) {
      state.isAlertPopup = true;
      state.alertMsg = '분석에 몇 분이';
      state.alertMobileMsg = '소요됩니다.';
    },
    openEmptyInfluencerPopup: function openEmptyInfluencerPopup(state) {
      state.isAlertPopup = true;
      state.alertMsg = '진행중인 서비스가';
      state.alertMobileMsg = '없습니다.';
    },
    openDeletePopup: function openDeletePopup(state) {
      state.isAlertPopup = true;
      state.alertMsg = '삭제 요청 ';
      state.alertMobileMsg = '완료 되었습니다.';
    },
    errorUpdatePopup: function errorUpdatePopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '올바른 정보를 ';
      state.alertMobileMsg = '입력해주세요.';
    },
    errorLoginPopup: function errorLoginPopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '아이디 또는 비밀번호가';
      state.alertMobileMsg = '일치하지 않습니다.';
    },
    errorCreateAdPopup: function errorCreateAdPopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '10초 후 다시 시도 ';
      state.alertMobileMsg = '부탁드립니다.';
    },
    errorCompanyNumberPopup: function errorCompanyNumberPopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '10초 후 다시 시도 ';
      state.alertMobileMsg = '부탁드립니다.';
    },
    errorPopup: function errorPopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '잠시 후 다시 시도 ';
      state.alertMobileMsg = '부탁드립니다.';
    },
    errorRequestPasswordPopup: function errorRequestPasswordPopup(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '일치하는 유저 정보가 ';
      state.alertMobileMsg = '없습니다.';
    },
    isAbnormalEmail: function isAbnormalEmail(state, payload) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '올바른 이메일을 ';
      state.alertMobileMsg = '입력해주세요.';
    },
    isEmptyEmail: function isEmptyEmail(state, payload) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '이메일을 ';
      state.alertMobileMsg = '입력해주세요.';
    },
    isNormalEmailInit: function isNormalEmailInit(state) {
      state.isValidEmail = false;
    },
    isNormalEmail: function isNormalEmail(state) {
      state.isValidEmail = true;
    },
    isDuplicateEmail: function isDuplicateEmail(state, payload) {
      state.isAlertPopup = true;

      if (payload.data.result != null) {
        state.alertMsg = '중복된 ';
        state.alertMobileMsg = '이메일입니다.';
        state.email = '';
      } else {
        state.isValidEmail = true;
        state.alertMsg = '사용가능한 ';
        state.alertMobileMsg = '이메일입니다.';
      }
    },
    isDuplicateEmailNoPopup: function isDuplicateEmailNoPopup(state, payload) {
      if (payload.data.result != null) {
        state.alertMsg = '중복된 ';
        state.alertMobileMsg = '이메일입니다.';
        state.email = '';
      } else {
        state.isValidEmail = true;
        state.alertMsg = '사용가능한 ';
        state.alertMobileMsg = '이메일입니다.';
      }
    },
    isPasswordRequested: function isPasswordRequested(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '이메일에서 새 비밀번호를 ';
      state.alertMobileMsg = '확인해주세요.';
    },
    setCurrentAdInfluencer: function setCurrentAdInfluencer(state, payload) {
      state.currentAdInfluencer = payload;
    },
    hasEmail: function hasEmail(state, payload) {
      state.email = payload;
    },
    hasCompanyNumber: function hasCompanyNumber(state, payload) {
      state.company_number = payload;
    },
    isAbnormalCompanyNumber: function isAbnormalCompanyNumber(state, payload) {
      state.isAlertPopup = true;
      state.company_number = '';
      state.alertMsg = '올바른 사업자 번호를 ';
      state.alertMobileMsg = '입력해주세요.';
    },
    isEmptyCompanyNumber: function isEmptyCompanyNumber(state, payload) {
      state.isAlertPopup = true;
      state.company_number = '';
      state.alertMsg = '사업자 번호를 ';
      state.alertMobileMsg = '입력해주세요.';
    },
    isValidCompanyNumber: function isValidCompanyNumber(state, payload) {
      state.isAlertPopup = true;

      if (payload.data != null) {
        state.alertMsg = '유효 ';
        state.alertMobileMsg = '사업자 번호입니다.';
      } else {
        state.alertMsg = '사용되지 않는 ';
        state.alertMobileMsg = '사업자 번호입니다.';
        state.company_number = '';
      }
    },
    isFailedTester: function isFailedTester(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '잠시 후 다시 ';
      state.alertMobileMsg = '시도해주세요.';
    },
    isNoTester: function isNoTester(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '인스타그램에 ';
      state.alertMobileMsg = '없는 아이디입니다.';
    },
    noAdRunning: function noAdRunning(state) {
      state.isAlertPopup = true;
      state.email = '';
      state.alertMsg = '진행중인 ';
      state.alertMobileMsg = '광고가 없습니다.';
    },
    filterAdList: function filterAdList(state, payload) {
      state.filterAds = payload;
    },
    setAds: function setAds(state, payload) {
      state.ads = payload;
    },
    setAvgInfluencerEffectRate: function setAvgInfluencerEffectRate(state, payload) {
      state.avg_influencer_effect_rate = payload;
    },
    setAdInfluencers: function setAdInfluencers(state, payload) {
      state.adInfluencers = payload;
    },
    setRunningAdInfluencers: function setRunningAdInfluencers(state, payload) {
      state.runningAdInfluencers = payload;
    },
    openAlertPopup: function openAlertPopup(state, payload) {
      state.isAlertPopup = true;
      state.alertMsg = '';
      state.alertMobileMsg = '';
    },
    openAlertPopupMsg: function openAlertPopupMsg(state, payload) {
      state.isAlertPopup = true;
      state.alertMsg = payload;
      state.alertMobileMsg = '';
    },
    closeAlertPopup: function closeAlertPopup(state) {
      state.isAlertPopup = false;
      state.alertMsg = '';
      state.alertMobileMsg = '';
    },
    openCompletePopup: function openCompletePopup(state, payload) {
      state.isCompletePopup = true;
      state.completeMsg = payload;
    },
    closeCompletePopup: function closeCompletePopup(state) {
      state.isCompletePopup = false;
      state.completeMsg = '';
    },
    openScoreCompletePopup: function openScoreCompletePopup(state, payload) {
      state.isScoreCompletePopup = true;
    },
    closeScoreCompletePopup: function closeScoreCompletePopup(state) {
      state.isScoreCompletePopup = false;
    },
    openScoreImpossiblePopup: function openScoreImpossiblePopup(state, payload) {
      state.isScoreImpossiblePopup = true;
    },
    closeScoreImpossiblePopup: function closeScoreImpossiblePopup(state) {
      state.isScoreImpossiblePopup = false;
    },
    openTestPopup: function openTestPopup(state) {
      state.isTestPopup = true;
    },
    closeTestPopup: function closeTestPopup(state) {
      state.isTestPopup = false;
    },
    openEmptyTesterPopup: function openEmptyTesterPopup(state) {
      state.isEmptyTester = true;
    },
    closeEmptyTesterPopup: function closeEmptyTesterPopup(state) {
      state.isEmptyTester = false;
    },
    setInfluencers: function setInfluencers(state, payload) {
      state.influencers = payload;
    },
    setMobileInfluencers: function setMobileInfluencers(state, payload) {
      state.mobileInfluencers = payload;
    },
    setDocumentLink: function setDocumentLink(state, payload) {
      state.document_link = payload;
    },
    setPictureLink: function setPictureLink(state, payload) {
      state.picture_link = payload;
    },
    setInstagramCode: function setInstagramCode(state, payload) {
      state.instagram_code = payload;
    },
    setInstagramClientId: function setInstagramClientId(state, payload) {
      state.instagram_client_id = payload;
    },
    setInstagramAccount: function setInstagramAccount(state, payload) {
      state.instagram_account = payload;
    },
    setTesters: function setTesters(state, payload) {
      state.testers = payload;
    },
    setCountry: function setCountry(state, payload) {
      state.country = payload;
    },
    setError: function setError(state, payload) {
      state.error = payload;
    },
    setCurrentRangeBtn: function setCurrentRangeBtn(state, payload) {
      state.currentRangeBtn = payload;
    }
  },
  getters: (_getters = {
    id: function id(state) {
      return state.user_id;
    },
    user: function user(state) {
      return state.user;
    },
    user_id: function user_id(state) {
      return state.user_id;
    },
    email: function email(state) {
      return state.email;
    },
    company_number: function company_number(state) {
      return state.company_number;
    },
    company_name: function company_name(state) {
      return state.company_name;
    },
    company_category: function company_category(state) {
      return state.company_category;
    },
    officer_name: function officer_name(state) {
      return state.officer_name;
    },
    tax_email: function tax_email(state) {
      return state.tax_email;
    },
    contact: function contact(state) {
      return state.contact;
    },
    company_website: function company_website(state) {
      return state.company_website;
    },
    instagram: function instagram(state) {
      return state.instagram;
    },
    facebook: function facebook(state) {
      return state.facebook;
    },
    social: function social(state) {
      return state.social;
    },
    getTestPopup: function getTestPopup(state) {
      return state.isTestPopup;
    },
    user_type: function user_type(state) {
      return state.user_type;
    },
    country: function country(state) {
      return state.country;
    },
    gender: function gender(state) {
      return state.gender;
    }
  }, _defineProperty(_getters, "contact", function contact(state) {
    return state.contact;
  }), _defineProperty(_getters, "category", function category(state) {
    return state.category;
  }), _defineProperty(_getters, "birth", function birth(state) {
    return state.birth;
  }), _defineProperty(_getters, "name", function name(state) {
    return state.name;
  }), _defineProperty(_getters, "GetNavMenuList", function GetNavMenuList(state) {
    return state.navMenuList;
  }), _defineProperty(_getters, "GetMobileNavMenuList", function GetMobileNavMenuList(state) {
    return state.mobileNavMenuList;
  }), _defineProperty(_getters, "getJwt", function getJwt(state) {
    return state.jwt;
  }), _defineProperty(_getters, "isAuthenticated", function isAuthenticated(state) {
    return (0, _utils.isValidJwt)(state.jwt);
  }), _defineProperty(_getters, "isSponsorAccount", function isSponsorAccount(state) {
    return state.isSponsor;
  }), _defineProperty(_getters, "isInfluencerAccount", function isInfluencerAccount(state) {
    return state.isInfluencer;
  }), _defineProperty(_getters, "influencers", function influencers(state) {
    return state.influencers;
  }), _defineProperty(_getters, "currentAd", function currentAd(state) {
    return state.currentAd;
  }), _defineProperty(_getters, "ad_id", function ad_id(state) {
    return state.currentAd.id;
  }), _defineProperty(_getters, "filterAds", function filterAds(state) {
    return state.filterAds;
  }), _defineProperty(_getters, "ads", function ads(state) {
    return state.ads;
  }), _defineProperty(_getters, "adInfluencers", function adInfluencers(state) {
    return state.adInfluencers;
  }), _defineProperty(_getters, "runningAdInfluencers", function runningAdInfluencers(state) {
    return state.runningAdInfluencers;
  }), _defineProperty(_getters, "currentAdInfluencer", function currentAdInfluencer(state) {
    return state.currentAdInfluencer;
  }), _defineProperty(_getters, "count_ads", function count_ads(state) {
    return state.count_ads;
  }), _defineProperty(_getters, "picture_link", function picture_link(state) {
    return state.picture_link;
  }), _defineProperty(_getters, "document_link", function document_link(state) {
    return state.document_link;
  }), _defineProperty(_getters, "isRequestPasswordPopup", function isRequestPasswordPopup(state) {
    return state.isRequestPasswordPopup;
  }), _defineProperty(_getters, "isRequestInfluPasswordPopup", function isRequestInfluPasswordPopup(state) {
    return state.isRequestInfluPasswordPopup;
  }), _defineProperty(_getters, "isValidEmail", function isValidEmail(state) {
    return state.isValidEmail;
  }), _defineProperty(_getters, "total_follower_count", function total_follower_count(state) {
    return state.total_follower_count;
  }), _defineProperty(_getters, "total_post_count", function total_post_count(state) {
    return state.total_post_count;
  }), _defineProperty(_getters, "total_like_count", function total_like_count(state) {
    return state.total_like_count;
  }), _defineProperty(_getters, "total_comment_count", function total_comment_count(state) {
    return state.total_comment_count;
  }), _defineProperty(_getters, "total_movie_count", function total_movie_count(state) {
    return state.total_movie_count;
  }), _defineProperty(_getters, "total_play_count", function total_play_count(state) {
    return state.total_play_count;
  }), _defineProperty(_getters, "influencer_cost", function influencer_cost(state) {
    return state.influencer_cost;
  }), _defineProperty(_getters, "influencer_effect_rate", function influencer_effect_rate(state) {
    return state.influencer_effect_rate;
  }), _defineProperty(_getters, "avg_influencer_effect_rate", function avg_influencer_effect_rate(state) {
    return state.avg_influencer_effect_rate;
  }), _defineProperty(_getters, "instagram_code", function instagram_code(state) {
    return state.instagram_code;
  }), _defineProperty(_getters, "instagram_account", function instagram_account(state) {
    return state.instagram_account;
  }), _defineProperty(_getters, "instagram_client_id", function instagram_client_id(state) {
    return state.instagram_client_id;
  }), _defineProperty(_getters, "testers", function testers(state) {
    return state.testers;
  }), _defineProperty(_getters, "error", function error(state) {
    return state.error;
  }), _defineProperty(_getters, "currentRangeBtn", function currentRangeBtn(state) {
    return state.currentRangeBtn;
  }), _defineProperty(_getters, "mobileInfluencers", function mobileInfluencers(state) {
    return state.mobileInfluencers;
  }), _getters)
});
exports.store = store;