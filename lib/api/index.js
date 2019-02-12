"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSurveys = fetchSurveys;
exports.fetchSurvey = fetchSurvey;
exports.saveSurveyResponse = saveSurveyResponse;
exports.postNewSurvey = postNewSurvey;
exports.register = register;
exports.registerInfluencer = registerInfluencer;
exports.authenticate = authenticate;
exports.requestPassword = requestPassword;
exports.requestInfluPassword = requestInfluPassword;
exports.userfileUpdate = userfileUpdate;
exports.userUpdate = userUpdate;
exports.deleteUser = deleteUser;
exports.createAd = createAd;
exports.fetchAds = fetchAds;
exports.fetchAdByInfluencerId = fetchAdByInfluencerId;
exports.fetchAdBySponsorId = fetchAdBySponsorId;
exports.fetchCountAds = fetchCountAds;
exports.fetchCountInfluencerAds = fetchCountInfluencerAds;
exports.registerAdInfluencers = registerAdInfluencers;
exports.fetchAdInfluencersByInfluencerIdAndStatus = fetchAdInfluencersByInfluencerIdAndStatus;
exports.fetchAdInfluencersBySponsorIdAndStatus = fetchAdInfluencersBySponsorIdAndStatus;
exports.updateAdInfluencer = updateAdInfluencer;
exports.fetchAdInfluencersByAdId = fetchAdInfluencersByAdId;
exports.checkDuplicateCompanyNumber = checkDuplicateCompanyNumber;
exports.checkDuplicateEmail = checkDuplicateEmail;
exports.fetchInfluencers = fetchInfluencers;
exports.avgInfluencerEffectRate = avgInfluencerEffectRate;
exports.fetchInstagramAccount = fetchInstagramAccount;
exports.fetchTesterByInstagramId = fetchTesterByInstagramId;
exports.fetchCountryName = fetchCountryName;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = 'http://13.124.141.71:5000';

function extend(target) {
  var sources = [].slice.call(arguments, 1);
  sources.forEach(function (source) {
    for (var prop in source) {
      target[prop] = source[prop];
    }
  });
  return target;
}

var basic_header = {
  'Acces-Control-Allow-Origin': '*',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

function fetchSurveys() {
  return _axios.default.get("".concat(API_URL, "/surveys/"));
}

function fetchSurvey(surveyId) {
  return _axios.default.get("".concat(API_URL, "/surveys/").concat(surveyId, "/"));
}

function saveSurveyResponse(surveyResponse) {
  return _axios.default.put("".concat(API_URL, "/surveys/").concat(surveyResponse.id, "/"), surveyResponse);
}

function postNewSurvey(survey, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.post("".concat(API_URL, "/surveys/"), survey, {
    headers: auth_header
  });
}

function register(userData) {
  return _axios.default.post("".concat(API_URL, "/register/"), userData, {
    headers: basic_header
  });
}

function registerInfluencer(userData) {
  return _axios.default.post("".concat(API_URL, "/register_influencer/"), userData, {
    headers: basic_header
  });
}

function authenticate(userData) {
  return _axios.default.post("".concat(API_URL, "/login/"), userData, {
    headers: basic_header
  });
}

function requestPassword(userData) {
  return _axios.default.post("".concat(API_URL, "/request_password/"), userData, {
    headers: basic_header
  });
}

function requestInfluPassword(userData) {
  return _axios.default.post("".concat(API_URL, "/request_influ_password/"), userData, {
    headers: basic_header
  });
}

function userfileUpdate(userData, jwt) {
  var auth_dict = {
    'Acces-Control-Allow-Origin': '*',
    Authorization: "Bearer: ".concat(jwt),
    'Content-Type': 'multipart/form-data'
  };
  return _axios.default.put("".concat(API_URL, "/users/"), userData, {
    headers: auth_dict
  });
}

function userUpdate(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.put("".concat(API_URL, "/users/"), userData, {
    headers: auth_header
  });
}

function deleteUser(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.delete("".concat(API_URL, "/users/"), {
    headers: auth_header
  });
}

function createAd(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.post("".concat(API_URL, "/ads/"), userData, {
    headers: auth_header
  });
}

function fetchAds(surveyId) {
  return _axios.default.get("".concat(API_URL, "/ads/"));
}

function fetchAdByInfluencerId(influencerId) {
  return _axios.default.get("".concat(API_URL, "/ads/filter/0/") + influencerId + '/');
}

function fetchAdBySponsorId(sponsorId) {
  return _axios.default.get("".concat(API_URL, "/ads/filter/1/") + sponsorId + '/');
}

function fetchCountAds(userData) {
  return _axios.default.get("".concat(API_URL, "/ads/filter/2/") + userData + '/');
}

function fetchCountInfluencerAds(userData) {
  return _axios.default.get("".concat(API_URL, "/ads/filter/3/") + userData + '/');
}

function registerAdInfluencers(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.post("".concat(API_URL, "/ad_influencers/filter/0/"), {
    'influencers': userData
  }, {
    headers: auth_header
  });
}

function fetchAdInfluencersByInfluencerIdAndStatus(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.post("".concat(API_URL, "/ad_influencers/filter/1/"), userData, {
    headers: auth_header
  });
}

function fetchAdInfluencersBySponsorIdAndStatus(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.post("".concat(API_URL, "/ad_influencers/filter/2/"), userData, {
    headers: auth_header
  });
}

function updateAdInfluencer(userData, jwt) {
  var auth_dict = {
    Authorization: "Bearer: ".concat(jwt)
  };
  var auth_header = extend({}, basic_header, auth_dict);
  return _axios.default.put("".concat(API_URL, "/ad_influencers/"), userData, {
    headers: auth_header
  });
}

function fetchAdInfluencersByAdId(adId) {
  return _axios.default.get("".concat(API_URL, "/ad_influencers/filter/1/") + adId + '/');
}

function checkDuplicateCompanyNumber(userData) {
  return _axios.default.get("".concat(API_URL, "/check_company_number/") + userData + '/');
}

function checkDuplicateEmail(userData) {
  return _axios.default.get("".concat(API_URL, "/users/filters/0/") + userData + '/');
}

function fetchInfluencers(userData) {
  return _axios.default.post("".concat(API_URL, "/users/filters/1/"), userData, basic_header);
}

function avgInfluencerEffectRate() {
  return _axios.default.get("".concat(API_URL, "/users/filters/2/"));
}

function fetchInstagramAccount(userData) {
  return _axios.default.get("".concat(API_URL, "/auth/instagram/") + userData);
}

function fetchTesterByInstagramId(userData) {
  return _axios.default.get("".concat("http://13.124.141.71:2000", "/influencer/") + userData);
}

function fetchCountryName(userData) {
  return _axios.default.get("".concat(API_URL, "/util_country/filter/0/") + userData + '/');
}

var actions = {
  // asynchronous operations
  loadSurveys: function loadSurveys(context) {
    return fetchSurveys().then(function (response) {
      // context.commit('setSurveys', { surveys: response })
      context.commit('setSurveys', {
        surveys: response.data
      });
    });
  },
  loadSurvey: function loadSurvey(context, _ref) {
    var id = _ref.id;
    return fetchSurvey(id).then(function (response) {
      // context.commit('setSurvey', { survey: response })
      context.commit('setSurvey', {
        survey: response.data
      });
    });
  }
};