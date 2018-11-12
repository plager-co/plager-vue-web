import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userType: '',
        isTestPopup: false,
        isJoinPopup: false,
        isCompletePopup: false,
        completeMsg: '',
        isScoreCompletePopup: false,
        isScoreImpossiblePopup: false,
        isScoreCompleteMsg: '',
        navMenuList: [
            {
            title: "인플루언서 등록",
            url: "/influencer-join"
            },
            {
            username: "",
            title: "로그인",
            url: "/login"
            }
        ]
    },
    mutations: {
        userLogin(state, payload){
            state.navMenuList[1].username = '홍길동'
            state.userType = payload
        },
        openJoinPopup(state){
            state.isJoinPopup = true;
        },
        closeJoinPopup(state){
            state.isJoinPopup = false;
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
        }
    },
    getters: {
        getTestPopup(state){
            return state.isTestPopup
        },
        userType(state){
            return state.userType
        },
        GetNavMenuList(state) {
            return state.navMenuList
        }
    }
})