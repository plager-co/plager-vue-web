<template>
    <form
         id="join-popup"
      @submit.prevent v-if='$store.state.isJoinPopup'
      novalidate="true"
    >

    <div class="dim">
        <div class="join-popup">
            <h1>광고주 가입</h1>
            <p class='for-web'>
                반복적인 노출로 소비자가 브랜드를 기억 할 수 있도록<br>
                지금 바로 플래거의 SIM(SNS Imprint Marketing) 서비스를 시작하세요.
            </p>
            <p class='for-mobile block'>
                반복적인 노출로 소비자가 브랜드를 <br>기억 할 수 있도록
                지금 바로 플래거의<br> SIM(SNS Imprint Marketing) 서비스를 시작하세요.
            </p>
            <div class="input-set btn">
                <div class='label'>이메일</div>
                <div class="input-wrap btn">
                    <input id='email' type="email" placeholder='email@email.com'  v-model="email">
                    <button @click='checkEmail();'>중복확인</button>
                </div>
            </div>
            <div class="input-set">
                <div class='password label'>비밀번호</div>
                <div class="input-wrap btn">
                    <input id='password' type="password" v-model="password">
                </div>
            </div>
            <div class="input-set">
                <div class='label'>비밀번호 확인</div>
                <div class="input-wrap btn">
                    <input id='password2' type="password" v-model="password2">
                </div>
            </div>
            <div class="input-set btn">
                <div class='label'>사업자등록번호</div>
                <div class="input-wrap btn">
                    <input id='company-number' type="text" placeholder="000-00-00000" v-model="company_number">
                    <button @click='checkCompanyNumber();'>조회</button>
                </div>
            </div>
            <div class="info">
                <input type="checkbox" name="keep" id="keep-register" v-model="keep_register">
                <label for="keep-register">
                    <span id="checkbox-register" class='checkbox'></span>
                    <a href="/policy" target="_blank">이용약관</a>과 <a href="/private-policy" target="_blank">개인정보처리방침</a>에 동의합니다.
                </label>
            </div>
            <div class="desc">광고주로 등록하시면 플래거의 SIM 서비스 소개서를 바로 확인할 수 있습니다.</div>
            <div class="btn-wrap">
                 <button class='next' @click="completeJoin()" type="submit">상세정보등록</button>
                <button class='prev' @click='$store.commit("closeJoinPopup")'>취소</button>
            </div>
        </div>
    </div>
     </form>
</template>

<script>
export default {
    data: function() {
      return {  errors: [],
        email: null,
        keep_register: null,
        company_number: null,
        password: null,
        password2: null,
        movie: null }
    },
    methods: {
        completeJoin: function(){
          this.errors = [];

          document.getElementById('email').style.border='2px solid red';

          if (!this.email) {
            this.errors.push('이메일 주소를 입력해주세요.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('유효한 이메일 주소를 입력해주세요.');
          } else if (!this.$store.getters.email){
              this.errors.push('이메일 중복 체크를 해주세요.');
          } else {
            document.getElementById('email').style.border='1px solid #d9dee8';
          }

            document.getElementById('company-number').style.border='2px solid red';

          if (!this.company_number) {
            this.errors.push('사업자 번호를 입력해주세요.');
          } else if (!this.validCompanyNumber(this.company_number)) {
            this.errors.push('유효한 사업자 번호를 입력해주세요.');
          } else if (!this.$store.getters.company_number){
              this.errors.push('사업자 번호 체크를 해주세요.');
          } else {
            document.getElementById('company-number').style.border='1px solid #d9dee8';
          }

          if (!this.password) {
            this.errors.push('비밀번호를 입력해주세요.');
            document.getElementById('password').style.border='2px solid red';
          } else {
            document.getElementById('password').style.border='1px solid #d9dee8';
          }

          if (!this.password2) {
            this.errors.push('일치 확인용 비밀번호를 입력해주세요.');
             document.getElementById('password2').style.border='2px solid red';
          } else {
            document.getElementById('password').style.border='1px solid #d9dee8';
          }

          if (this.password !== this.password2) {
            this.errors.push('비밀번호를 일치하게 작성해주세요.');
             document.getElementById('password').style.border='2px solid red';
             document.getElementById('password2').style.border='2px solid red';
          }

          if (!this.keep_register) {
            this.errors.push('약관 확인후 동의시 동의 버튼을 눌러주세요.');
             document.getElementById('checkbox-register').style.border='2px solid red';
          } else {
            document.getElementById('checkbox-register').style.border='1px solid #d9dee8';
          }

          if (!this.errors.length) {
              this.register();
          }

        },
        register: function() {

        this.$store.commit('closeJoinPopup');
          this.$store.dispatch('register', {
              email: this.email,
              password: this.password,
              company_number: this.company_number,
              user_type: 'sponsor',
              is_removed: 0,
          })
        },
        checkEmail: function() {
            this.$store.commit('hasEmail', this.email)
          this.$store.dispatch('checkEmail', this.email)
        },
        checkCompanyNumber: function() {
            this.$store.commit('hasCompanyNumber', this.company_number)
          this.$store.dispatch('checkCompanyNumber', this.company_number)
        },
        validEmail: function (email) {
          var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
        },
        validCompanyNumber: function (company_number) {
          var re = /^(?!0+$)[\-0-9]{10,12}$/;
          return re.test(company_number);
        }
    }
};
</script>

<style scoped>
h1 {
  padding-top: 60px;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 27px;
  margin-bottom: 10px;
}

.dim {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}

.join-popup {
  width: 850px;
  margin: 120px auto;
  background: #ffffff;
  border-radius: 5px;
}
.input-set {
  width: 629px;
  padding-top: 26px;
  margin: auto;
  text-align: left;
}
.input-set .input-wrap {
  position: relative;
}

.input-set .label {
  text-align: left;
  padding-left: 5px;
  font-size: 26px;
  color: #002257;
  line-height: 26px;
  margin-bottom: 19px;
  box-sizing: border-box;
}
.input-set input[type="text"],
.input-set input[type="email"],
.input-set input[type="password"] {
  border: 1px solid #d9dee8;
  border-radius: 4px;
  font-size: 22px;
  color: #aab2c0;
  height: 67px;
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
}

.input-set.btn input[type="text"],
.input-set.btn input[type="email"],
.input-set.btn input[type="password"] {
  width: 80%;
}

.input-set.btn button {
  width: 210px;
  height: 67px;
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  position: absolute;
  border: 0;
  top: 0;
  right: 0;
}
.info {
  width: 629px;
  margin: 20px auto 0;
  text-align: left;
  padding-left: 13px;
  margin-bottom: 40px;
}
.desc {
  font-size: 22px;
  color: #000000;
  margin-bottom: 22px;
}

.btn-wrap {
    width: 100%;
    height: 100px;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 59px;
}

.btn-wrap button {
    width: 325px;
    height: 67px;
    font-size: 24px;
    color: #092056;
    letter-spacing: 0;
    text-align: center;
    float: right;
}

.btn-wrap button.prev {
    background: #FFFFFF;
    border: 1px solid #DFE3E9;
    border-radius: 5px;
    margin-right: 50px;
    float: left;
}

.btn-wrap button.next {
    border: 0;
    background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
    border-radius: 5px;
    color: #FFFFFF;
}

label {
    color: #7A7A7A;
}

@media screen and (max-width: 640px) {
    .join-popup { width: calc(100% - 3rem); padding: 4.1rem 1.5rem 3.6rem; box-sizing: border-box; margin-top: 4.2rem;}
    h1 {padding-top: 0; margin-bottom: 1.5rem; font-size: 2.4rem; line-height: 1;}
    p { font-size: 1.2rem; letter-spacing: -.03rem; line-height: 2.1rem; }

    /* input */
    .input-set {width: 100%; margin-top: .9rem; padding-top: .9rem;}
    .input-set .label { font-size: 1.2rem; line-height: 1; }

    .input-set input[type=text],
    .input-set input[type=email],
    .input-set input[type=password] { height: 3.5rem; font-size: 1rem; padding: 0 1.5rem; width: 100%;}
    .input-set.btn button {height: 3.5rem; width: 8.1rem; font-size: 1.2rem;}
    .desc { font-size: 1.2rem; line: 1.5; letter-spacing: -.03rem;}

    .info {width: 100%; margin-bottom: 4rem;}

    .btn-wrap { width: 100%; height: auto; padding-bottom: 0;}
    .btn-wrap button {float: none; width: 20.2rem; height: 4rem; font-size: 1.2rem;}
    .btn-wrap button.next { margin-bottom: .7rem;}
    .btn-wrap button.prev { margin: 0; float: none;}
}


</style>
