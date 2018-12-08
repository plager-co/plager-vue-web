import axios from 'axios'

const API_URL = 'http://52.79.190.26'

function extend(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
}

const basic_header = {
  'Acces-Control-Allow-Origin': '*',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}
export function fetchSurveys() {  
  return axios.get(`${API_URL}/surveys/`)
}

export function fetchSurvey(surveyId) {  
  return axios.get(`${API_URL}/surveys/${surveyId}/`)
}

export function saveSurveyResponse(surveyResponse) {  
  return axios.put(`${API_URL}/surveys/${surveyResponse.id}/`, surveyResponse)
}

export function postNewSurvey (survey, jwt) {
  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.post(`${API_URL}/surveys/`, survey, { headers: auth_header })
  }

  export function register (userData) {
    return axios.post(`${API_URL}/register/`, userData, { headers: basic_header } )
  }

  export function registerInfluencer (userData) {
    return axios.post(`${API_URL}/register_influencer/`, userData, { headers: basic_header } )
  }

  export function authenticate (userData) {
  return axios.post(`${API_URL}/login/`, userData, { headers: basic_header })
  }
  export function requestPassword (userData) {
    return axios.post(`${API_URL}/request_password/`, userData, { headers: basic_header } )
  }
  export function userfileUpdate (userData, jwt) {

  let auth_dict = {
        'Acces-Control-Allow-Origin': '*',
      Authorization: `Bearer: ${jwt}` ,
      'Content-Type': 'multipart/form-data' };
    return axios.put(`${API_URL}/users/`, userData, { headers: auth_dict } )
  }

  export function userUpdate (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.put(`${API_URL}/users/`, userData, { headers: auth_header } )
  }

  export function deleteUser (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.delete(`${API_URL}/users/`, { headers: auth_header } )
  }

  export function createAd (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.post(`${API_URL}/ads/`, userData, { headers: auth_header } )
  }

  export function fetchAds(surveyId) {
    return axios.get(`${API_URL}/ads/`)
  }
  export function fetchAdByInfluencerId(influencerId) {
    return axios.get(`${API_URL}/ads/filter/0/` + influencerId + '/')
  }

  export function fetchAdBySponserId(sponserId) {
    return axios.get(`${API_URL}/ads/filter/1/` + sponserId + '/')
  }

  export function fetchCountAds(userData) {

    return axios.get(`${API_URL}/ads/filter/2/` + userData + '/')
  }

  export function fetchCountInfluencerAds(userData) {

    return axios.get(`${API_URL}/ads/filter/3/` + userData + '/')
  }

  export function registerAdInfluencers (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.post(`${API_URL}/ad_influencers/filter/0/`, {'influencers': userData}, { headers: auth_header } )
  }

  export function updateAdInfluencer (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.put(`${API_URL}/ad_influencers/`, userData, { headers: auth_header } )
  }
  export function fetchAdInfluencersByAdId(adId) {
    return axios.get(`${API_URL}/ad_influencers/filter/1/` + adId + '/')
  }

    export function checkDuplicateCompanyNumber (userData) {
    return axios.get(`${API_URL}/check_company_number/` + userData + '/')
    }

  export function checkDuplicateEmail (userData) {
    return axios.get(`${API_URL}/users/filters/0/` + userData + '/')
    }

  export function fetchInfluencers() {
    return axios.get(`${API_URL}/users/filters/1/`)
  }
  export function avgInfluencerEffectRate() {
    return axios.get(`${API_URL}/users/filters/2/`)
  }


  const actions = {  
    // asynchronous operations
    loadSurveys(context) {
      return fetchSurveys()
        .then((response) => {
         // context.commit('setSurveys', { surveys: response })
          context.commit('setSurveys', { surveys: response.data })
        })
    },
    loadSurvey(context, { id }) {
      return fetchSurvey(id)
        .then((response) => {
          // context.commit('setSurvey', { survey: response })
          context.commit('setSurvey', { survey: response.data })
        })
    }
  }