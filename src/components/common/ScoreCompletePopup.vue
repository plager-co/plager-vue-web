<template>
    <div class="dim" v-if='$store.state.isScoreCompletePopup'>
        <div class="cell" @click.self='closeSelf'>
            <div class="complete-popup">
                <div class="close-wrap" style="height: 40px;">
                    <img src="../../assets/cross.svg" alt="" @click='closeSelf'>
                </div>
                <div class="complete-wrap">
                    <img src="../../assets/complete.svg" alt="">
                </div>
                <h1>등록을 축하드려요.</h1><h1><br class="for-mobile">서비스 진행시 담당 매니저가 연락드립니다.</h1>
                <!-- <button class="next" @click='closeSelf'>확 인</button> -->
                <div class="bottom">
                    <a>친구에게도 기회를 주세요!</a>
                    <div class="sns-button">
                        <img src="../../assets/sns-insta.svg" alt="">
                    </div>
                    <div class="sns-button">
                        <img src="../../assets/sns-fb.svg" alt="">
                    </div>
                    <div class="sns-button">
                        <img src="../../assets/sns-kakao.svg" alt="">
                    </div>
                    <div class="sns-button">
                        <img src="../../assets/sns-blog.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeSelf(){
            this.$store.commit('closeScoreCompletePopup')
        }
    }

};
</script>

<style scoped>
h1 {
  margin-bottom: 40px;
}

p {
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 27px;
  margin-bottom: 49px;
}

.dim {
  position: fixed;
  display: table;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}

.dim .cell {
  display: table-cell;
  vertical-align: middle;
}

.complete-popup {
  margin: auto;
  width: 965px;
  background: #ffffff;
  border-radius: 5px;
  padding: 60px 50px 93px;
}

.close-wrap {
    width: 100%;
    text-align: right;
}
.close-wrap img {
    width: 33px;
    height: 33px;
    margin-bottom: 53px;
}

.complete-wrap {
    width: 100%;
    margin-bottom: 40px;
}

.complete-wrap img {
    width: 131px;
    height: 125px;
}

button {
  width: 210px;
  height: 50px;
  font-size: 16px;
  color: #092056;
  letter-spacing: 0;
  text-align: center;
}

button.next {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  color: #ffffff;
}

.bottom {
    margin-top: 43px;
    height: 40px;
}

.bottom a {
    height: 100%;
    padding: 10px 46px 9px 0;
    border-right: 1px solid #979797;
    margin-right: 48px;
    /* 친구에게 추천하기: */
    font-weight: 400;
    font-size: 20px;
    color: #696969;
}

.bottom .sns-button {
    width: 30px;
    height: 30px;
    background: 50% 50% no-repeat;
    display: inline-block;
    margin: 0 58px 0 0;
    vertical-align: bottom;
    cursor: pointer;
}
.bottom .sns-button:last-child {
    margin-right: 0;
}


@media screen and (max-width: 640px) {

    .dim .cell { display: block;}

    .complete-popup { width: calc(100% - 3rem); box-sizing: border-box; padding: 1.7rem 1.4rem 4rem; margin-top: 4.2rem;}
    .close-wrap img { width: 1.5rem; height: 1.5rem; }
    .complete-wrap img { width: 5.2rem; height: 5rem; }
    .complete-wrap { margin-bottom: 2.7rem;}
    h1 { font-size: 2.4rem; line-height: 3.7rem; margin-bottom: -2rem;}
    button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}

    .bottom {height: auto; margin-top: 3rem;}
    .bottom a { border: none; display: block; margin: 0; padding: 0; font-size: 1.2rem; height: auto; line-height: 1.2rem; margin-bottom: 1.3rem;}
    .bottom .sns-button { width: 2.05rem; height: 2.05rem; margin-right: 3.9rem;}
    .bottom .sns-button img { width: 100%;}

}

</style>
