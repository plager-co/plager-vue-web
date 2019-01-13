"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = require("./routes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue.default.use(_vueRouter.default);

var _default = new _vueRouter.default({
  mode: 'history',
  scrollBehavior: function scrollBehavior(to, from) {
    return {
      x: 0,
      y: 0
    };
  },
  routes: _routes.routes
});

exports.default = _default;