<template>
    <form
         id="request-influ-password-popup"
      @submit.prevent v-if='$store.state.isRequestInfluPasswordPopup'
      novalidate="true"
    >
      >
    <div class="dim">
        <div class="join-popup">
            <h1>비밀번호 찾기</h1>
            <p class='for-web'>
                이메일과 인스타 아이디를 입력해주세요.
            </p>
            <p class='for-mobile block'>
                이메일과 인스타 아이디를 입력해주세요.
            </p>
            <div class="input-set btn">
                <div class='label'>이메일</div>
                <div class="input-wrap btn">
                    <input type="email" placeholder='email@email.com'  v-model="email">
                </div>
            </div>
            <div class="input-set btn">
                <div class='label'>인스타그램 아이디</div>
                <div class="input-wrap btn">
                    <input type="text" placeholder="@" v-model="instagram">
                </div>
            </div>
            <p v-if="errors.length">
                  <span v-for="error in errors">{{ error }}<br></span>
              </p>
            <div class="btn-wrap">
                 <button class='next' @click="completeJoin()" type="submit">찾기</button>
                <button class='prev' @click='$store.commit("closeRequestInfluPasswordPopup")'>취소</button>
            </div>
        </div>
    </div>
     </form>
</template>

<script>
export default {
    data() {
      return {  errors: [],
        email: null,
        instagram: null,
        keep_register: null,
        company_number: null,
        password: null,
        password2: null,
        movie: null }
    },
    methods: {
        completeJoin(){
          this.errors = [];

          if (!this.email) {
            this.errors.push('이메일 주소를 입력해주세요.');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('유효한 이메일 주소를 입력해주세요.');
          }


          if (!this.instagram) {
            this.errors.push('인스타그램 아이디를 입력해주세요.');
          }

          if (!this.errors.length) {
              this.requestPassword();
          }

        },
        requestPassword () {
          this.$store.dispatch('requestInfluPassword', {
              email: this.email,
              instagram: this.instagram,
          })
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
  width: 965px;
  margin: 120px auto;
  background: #ffffff;
  border-radius: 5px;
}
.input-set {
  width: 550px;
  padding-top: 26px;
  padding-left: 60px;
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
    margin-top: 50px;
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
