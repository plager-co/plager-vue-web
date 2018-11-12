<template>
    <div class="dim" v-if='$store.state.isJoinPopup' @click='$store.commit("closeJoinPopup")'>
        <div class="join-popup">
            <h1>광고주 가입</h1>
            <p class='for-web'>
                반복적인 노출로 소비자가 브랜드를 기억 할 수 있도록<br>
                지금 바로 플래거의 SIM(SNS Imprinting Marketing) 서비스를 시작하세요.
            </p>
            <p class='for-mobile block'>
                반복적인 노출로 소비자가 브랜드를 <br>기억 할 수 있도록
                지금 바로 플래거의<br> SIM(SNS Imprinting Marketing) 서비스를 시작하세요.
            </p>
            <div class="input-set btn">
                <div class='label'>이메일</div>
                <div class="input-wrap btn">
                    <input type="text" placeholder='email@email.com'>
                    <button>중복확인</button>
                </div>
            </div>
            <div class="input-set">
                <div class='label'>비밀번호</div>
                <div class="input-wrap btn">
                    <input type="password" placeholder="**********">
                </div>
            </div>
            <div class="input-set">
                <div class='label'>비밀번호 확인</div>
                <div class="input-wrap btn">
                    <input type="password" placeholder="**********">
                </div>
            </div>
            <div class="input-set btn">
                <div class='label'>사업자등록번호</div>
                <div class="input-wrap btn">
                    <input type="text" placeholder="000-00-00000">
                    <button>조회</button>
                </div>
            </div>
            <div class="info">
                <input type="checkbox" name="keep" id="keep">
                <label for="keep">
                    <span class='checkbox'></span>
                    이용약관과 개인정보처리방침에 동의합니다.
                </label>
            </div>
            <div class="desc">광고주로 등록하시면 플래거의 SIM 서비스 소개서를 바로 확인할 수 있습니다.</div>
            <div class="btn-wrap">
                <button class='next' @click='$router.push("/mypage")'>상세정보등록</button>
                <button class='prev' @click='$store.commit("closeJoinPopup")'>취소</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        completeJoin(){
            this.$store.commit('closeJoinPopup')
            this.$store.commit('openCompletePopup', '광고주')
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
    height: 59px;
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
