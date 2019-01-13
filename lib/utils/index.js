"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidJwt = isValidJwt;
exports.EventBus = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventBus = new _vue.default();
exports.EventBus = EventBus;

function isValidJwt(jwt) {
  if (!jwt || jwt.split('.').length < 3) {
    return false;
  }

  var data = JSON.parse(atob(jwt.split('.')[1]));
  var exp = new Date(data.exp * 1000); // JS deals with dates in milliseconds since epoch

  var now = new Date();
  return now < exp;
}