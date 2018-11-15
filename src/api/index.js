import axios from 'axios'

const API_URL = 'http://127.0.0.1:8083'

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
  export function authenticate (userData) {
  return axios.post(`${API_URL}/login/`, userData, { headers: basic_header })
  }
  export function sponserUpdate (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.put(`${API_URL}/users/`, userData, { headers: auth_header } )
  }

  export function createAd (userData, jwt) {

  let auth_dict = { Authorization: `Bearer: ${jwt}` };
  let auth_header = extend({}, basic_header, auth_dict);
    return axios.post(`${API_URL}/ads/`, userData, { headers: auth_header } )
  }

    export function checkDuplicateCompanyNumber (userData) {
    return axios.get(`${API_URL}/check_company_number/` + userData + '/')
    }

  export function checkDuplicateEmail (userData) {
    return axios.get(`${API_URL}/users/filters/0/` + userData + '/')
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