"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _Main = _interopRequireDefault(require("@/components/Main"));

var _Login = _interopRequireDefault(require("@/components/Login"));

var _AdList = _interopRequireDefault(require("@/components/AdList"));

var _SponsorFilter = _interopRequireDefault(require("@/components/SponsorFilter"));

var _SponsorPayment = _interopRequireDefault(require("@/components/SponsorPayment"));

var _SponsorPayment2 = _interopRequireDefault(require("@/components/SponsorPayment2"));

var _SponsorPayment3 = _interopRequireDefault(require("@/components/SponsorPayment3"));

var _SponsorPayment4 = _interopRequireDefault(require("@/components/SponsorPayment4"));

var _SponsorSIM = _interopRequireDefault(require("@/components/SponsorSIM"));

var _SponsorResult = _interopRequireDefault(require("@/components/SponsorResult"));

var _SponsorAllResult = _interopRequireDefault(require("@/components/SponsorAllResult"));

var _SponsorList = _interopRequireDefault(require("@/components/SponsorList"));

var _MyPage = _interopRequireDefault(require("@/components/MyPage"));

var _InfluJoin = _interopRequireDefault(require("@/components/InfluJoin"));

var _InfluList = _interopRequireDefault(require("@/components/InfluList"));

var _InfluComplete = _interopRequireDefault(require("@/components/InfluComplete"));

var _InfluAdList = _interopRequireDefault(require("@/components/InfluAdList"));

var _InfluMyScore = _interopRequireDefault(require("@/components/InfluMyScore"));

var _InfluMyScoreLoading = _interopRequireDefault(require("@/components/InfluMyScoreLoading"));

var _InfluMyPage = _interopRequireDefault(require("@/components/InfluMyPage"));

var _InfluScore = _interopRequireDefault(require("@/components/InfluScore"));

var _InfluResult = _interopRequireDefault(require("@/components/InfluResult"));

var _InfluSIM = _interopRequireDefault(require("@/components/InfluSIM"));

var _InfluSIMResult = _interopRequireDefault(require("@/components/InfluSIMResult"));

var _InstagramRedirectPage = _interopRequireDefault(require("@/components/InstagramRedirectPage"));

var _NoAd = _interopRequireDefault(require("@/components/NoAd"));

var _JoinPopup = _interopRequireDefault(require("@/components/JoinPopup"));

var _RequestPasswordPopup = _interopRequireDefault(require("@/components/RequestPasswordPopup"));

var _AlertBase = _interopRequireDefault(require("@/components/AlertBase"));

var _SponsorNoAd = _interopRequireDefault(require("@/components/SponsorNoAd"));

var _Temp = _interopRequireDefault(require("@/components/Temp"));

var _All = _interopRequireDefault(require("@/components/common/All"));

var _PrivatePolicy = _interopRequireDefault(require("@/components/PrivatePolicy"));

var _Policy = _interopRequireDefault(require("@/components/Policy"));

var _Survey = _interopRequireDefault(require("@/components/Survey"));

var _NewSurvey = _interopRequireDefault(require("@/components/NewSurvey"));

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [// for publishing
{
  path: '/all',
  component: _All.default
}, {
  path: '/',
  component: _Main.default
}, {
  path: '/login',
  component: _Login.default
}, {
  path: '/ad-list',
  component: _AdList.default
}, {
  path: '/sponsor-result',
  component: _SponsorResult.default
}, {
  path: '/sponsor-all-result',
  component: _SponsorAllResult.default
}, {
  path: '/sponsor-filter',
  component: _SponsorFilter.default
}, {
  path: '/sponsor-payment',
  component: _SponsorPayment.default
}, {
  path: '/sponsor-payment2',
  component: _SponsorPayment2.default
}, {
  path: '/sponsor-payment3',
  component: _SponsorPayment3.default
}, {
  path: '/sponsor-payment4',
  component: _SponsorPayment4.default
}, {
  path: '/sponsor-sim',
  component: _SponsorSIM.default
}, {
  path: '/sponsor-list',
  component: _SponsorList.default
}, {
  path: '/influencer-join',
  component: _InfluJoin.default
}, {
  path: '/influencer-list',
  component: _InfluList.default
}, {
  path: '/influencer-ad-list',
  component: _InfluAdList.default
}, {
  path: '/influencer-result',
  component: _InfluResult.default
}, {
  path: '/influencer-sim-result',
  component: _InfluSIMResult.default
}, {
  path: '/influencer-sim',
  component: _InfluSIM.default
}, {
  path: '/influencer-score',
  component: _InfluScore.default
}, {
  path: '/influencer-complete',
  component: _InfluComplete.default
}, {
  path: '/influencer-my-score',
  component: _InfluMyScore.default
}, {
  path: '/influencer-my-score-loading',
  component: _InfluMyScoreLoading.default
}, {
  path: '/influencer-my-page',
  component: _InfluMyPage.default
}, {
  path: '/joinPopup',
  component: _JoinPopup.default
}, {
  path: '/RequestPasswordPopup',
  component: _RequestPasswordPopup.default
}, {
  path: '/alertBase',
  component: _AlertBase.default
}, {
  path: '/no-ad',
  component: _NoAd.default
}, {
  path: '/sponsor-no-ad',
  component: _SponsorNoAd.default
}, {
  path: '/mypage',
  beforeEnter: function beforeEnter(to, from, next) {
    console.log(_store.store.getters.isAuthenticated);

    if (!_store.store.getters.isAuthenticated) {
      next('/login');
    } else {
      if (_store.store.getters.user_type === 'influencer') {
        next('/influencer-my-page');
      } else {
        next('/my-page');
      }
    }
  }
}, {
  path: '/sponsor-sim-running',
  beforeEnter: function beforeEnter(to, from, next) {
    _store.store.commit('filterAdList', 'started');

    next('/sponsor-sim');
    location.reload();
  }
}, {
  path: '/influencer-sim-running',
  beforeEnter: function beforeEnter(to, from, next) {
    _store.store.commit('filterAdList', 'started');

    next('/influencer-sim');
    location.reload();
  }
}, {
  path: '/instagram-redirect',
  component: _InstagramRedirectPage.default
}, {
  path: '/my-page',
  component: _MyPage.default
}, {
  path: '/policy',
  component: _Policy.default
}, {
  path: '/private-policy',
  component: _PrivatePolicy.default
}, {
  path: '*',
  redirect: '/404'
}, {
  path: '/404',
  component: _Temp.default
}, {
  path: '/surveys/:id',
  name: 'Survey',
  component: _Survey.default
}, {
  path: '/surveys',
  name: 'NewSurvey',
  component: _NewSurvey.default,
  beforeEnter: function beforeEnter(to, from, next) {
    if (!_store.store.getters.isAuthenticated) {
      next('/login');
    } else {
      next();
    }
  }
}, {
  path: '/logout',
  name: 'Logout',
  component: _Login.default,
  beforeEnter: function beforeEnter(to, from, next) {
    if (_store.store.getters.isAuthenticated) {
      _store.store.commit('userLogout');

      next('/login');
    }
  }
}];
exports.routes = routes;