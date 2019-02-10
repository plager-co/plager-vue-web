"use strict";

require("@babel/polyfill");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _store = require("./store");

var _vueCarousel = _interopRequireDefault(require("vue-carousel"));

var _vueMeta = _interopRequireDefault(require("vue-meta"));

var _vueClipboard = _interopRequireDefault(require("vue-clipboard2"));

var _vueAuthenticate = _interopRequireDefault(require("vue-authenticate"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _axios = _interopRequireDefault(require("axios"));

var _vueCustomElement = _interopRequireDefault(require("vue-custom-element"));

var _vueInViewportDirective = _interopRequireDefault(require("vue-in-viewport-directive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue.default.use(_vueCustomElement.default);

_vue.default.use(_vueAxios.default, _axios.default);

_vue.default.use(_vueClipboard.default);

_vue.default.use(_vueCarousel.default);

_vue.default.use(_vueMeta.default);

_vue.default.use(_vueAuthenticate.default, {
  baseUrl: 'http://13.124.141.71:5000',
  // Your API domain
  tokenName: 'code',
  providers: {
    instagram: {
      clientId: 'd350de41c32e4c47b97061fa9747d367',
      redirectUri: 'http://plager.co/instagram-redirect',
      // Your client app URL 
      requiredUrlParams: ['scope'],
      scope: ['basic', 'public_content']
    }
  }
});

_vue.default.config.productionTip = false;
_vueInViewportDirective.default.defaults.top = -100;

_vue.default.directive('in-viewport', _vueInViewportDirective.default);
/* eslint-disable no-new */


new _vue.default({
  el: '#app',
  router: _router.default,
  store: _store.store,
  components: {
    App: _App.default
  },
  template: '<App/>'
});