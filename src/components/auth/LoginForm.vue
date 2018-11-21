<template>
    <form
      id="login-form"
      @submit.prevent="checkForm"
  novalidate="true"
    >



    <h2>광고주 로그인</h2>
    <h4 v-if="errors.length">
          <span v-for="error in errors">{{ error }}</span>
      </h4>
    <input id="email"
      v-model="email"
      type="email"
      name="email" placeholder='email'>
    <input id="password"
      v-model="password"
      name="password" type="password" placeholder='password'>
    <div class="info">
        <div class="left">
            <input type="checkbox" name="keep" id="keep">
            <label for="keep">
                <span class='checkbox'></span>
                로그인 상태 유지
            </label>
        </div>
        <div class="right">비밀번호찾기</div>
    </div>
    <div class="button-wrap">
        <input type="submit" value="로그인">
        <button @click='$store.commit("openJoinPopup")'>광고주 가입</button>
    </div>

    </form>
</template>

<script>


import { isValidJwt, EventBus } from '@/utils'

export default {
    data() {
      return {  errors: [],
        email: null,
        password: null,
        movie: null }
    },
    methods: {
        checkForm: function (e) {

          this.errors = [];

          if (!this.email && this.password) {
            this.errors.push('이메일을 입력해주세요.');
          }
          if (this.email && !this.password) {
            this.errors.push('패스워드를 입력해주세요.');
          }

          if     (!this.email && !this.password) {
            this.errors.push('이메일과 패스워드를 입력해주세요.');
          }

          var headers = [];

          if (this.email && this.password) {
            this.authenticate();

          }

        },
        authenticate () {
          this.$store.dispatch('login', { email: this.email, password: this.password })
        },
        register () {
          this.$store.dispatch('register', { email: this.email, password: this.password })
        }
    },
    mounted () {
    EventBus.$on('failedRegistering', (msg) => {
      this.errorMsg = msg
    })
    EventBus.$on('failedAuthentication', (msg) => {
      this.errorMsg = msg
    })
  },
  beforeDestroy () {
    EventBus.$off('failedRegistering')
    EventBus.$off('failedAuthentication')
  }
};
</script>
<style scoped>
h1 {
  margin-top: 100px;
  margin-bottom: 139px;
}

h2 {
  font-size: 34px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 34px;
  margin-top: 0;
  margin-bottom: 30px;
}
h3 {
  font-size: 22px;
  font-weight: 400;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 91px;
}

h4 {
  font-size: 15px;
  font-weight: 400;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
  margin-top: 0;
}

.section .container {
  width: 100%;
  background-color: #f6f6fa;
  padding: 120px 0;
}
.card-wrap {
  width: 100%;
  font-size: 0;
}

.card-wrap .card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
  vertical-align: top;
  display: inline-block;
  width: calc(50% - 49px);
  height: 432px;
  background-color: #ffffff;
  border-radius: 3px 3px 0 0;
  padding: 60px 42px 42px;
  box-sizing: border-box;
}

.card-wrap .card:first-child {
  margin-right: 98px;
}

button.influ-login {
  background-image: linear-gradient(-45deg, #123075 0%, #fa2b56 100%);
  border-radius: 5px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  width: 303px;
  height: 60px;
  font-size: 18px
}
button.influ-login b {
    font-weight: 600;
}
button.influ-login img {
    position: relative;
    top: 4px;
    margin-right: 5px;
}

.card input[type=text],
.card input[type=email],
.card input[type=password] {
    background: #FFFFFF;
    border: 1px solid #E1E7EC;
    border-radius: 3px;
    font-family: Roboto-Regular;
    font-size: 15px;
    color: #939DA7;
    letter-spacing: 0;
    line-height: 15px;
    width: 100%;
    height: 68px;
    padding: 0 27px;
    box-sizing: border-box;
    margin-bottom: 15px;
}

.card .info {
    width: 100%;
    padding: 0 11px;
    box-sizing: border-box;
    height: 15px;
    margin-bottom: 24px;
}

.card .info .left {
    font-size: 15px;
    color: #092056;
    letter-spacing: 0;
    line-height: 15px;
    float: left;
}

.card .info .right {
    font-size: 15px;
    color: #092056;
    letter-spacing: 0;
    line-height: 15px;
    float: right;
}

.button-wrap {
    width: 100%;
}
.button-wrap input,
.button-wrap button {
    border: none;
    height: 50px;
    font-size: 16px;
    letter-spacing: 0;
    text-align: center;
    width: calc(50% - 16.5px);
    background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
    color: #FFFFFF;
    border: 0;
    text-align: center;
    float: right;
}
.button-wrap input:last-child,
.button-wrap button:last-child {
    background: #FFFFFF;
    border: 1px solid #DFE3E9;
    color: #092056;
    border-radius: 5px;
    margin-right: 33px;
    float: left;
}

@media screen and (max-width: 640px) {

    h2 { font-size: 2rem; line-height: 2.4rem; margin-bottom: .9rem;}
    h3 { font-size: 1.6rem; line-height: 1.6rem; margin-bottom: 3.2rem;}

    .section .container { padding: 1.5rem 2rem 1.7rem; box-sizing: border-box;}

    .card-wrap .card,
    .card-wrap .card:first-child {display: block; width: 100%; margin: 0 auto 1.8rem;; box-sizing: border-box; padding: 4rem 2.3rem 4.2rem; height: auto;}
    .card-wrap .card:last-child h2 {margin-bottom: 3.2rem;}
    button.influ-login {width: 20.2rem; height: 4rem; font-size: 1.2rem;}
    button.influ-login img {width: 1.6rem; height: 1.6rem; margin-right: .6rem;}
    .card input[type=text],
    .card input[type=password] { height: 3.5rem; font-size: 1rem; padding: 0 1.5rem;}
    .card .info .right,
    .card .info .left { font-size: 1rem;}
    .card .info .right {position: relative; bottom: .5rem; line-height: 1.9rem;}
    .button-wrap button,
    .button-wrap button:last-child { width: 20.2rem; height: 4rem; float: none; margin-bottom: .7rem; margin-right: 0; font-size: 1.2rem;}
    .button-wrap button:last-child { margin-bottom: 0;}

}

@media screen and (min-width:0\0) and (min-resolution: +72dpi) and (max-width: 640px) {
    .card-wrap .card:first-child { padding-left: 0; padding-right: 0;}
}

</style>
