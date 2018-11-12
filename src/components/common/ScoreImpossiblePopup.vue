<template>
    <div class="dim" v-if='$store.state.isScoreImpossiblePopup'>
        <div class="cell" @click.self='closeSelf'>
            <div class="complete-popup">
                <div class="close-wrap" style="height: 40px;">
                    <img src="../../assets/cross.svg" alt="" @click='closeSelf'>
                </div>
                <div class="complete-wrap">
                    <img src="../../assets/complete.svg" alt="">
                </div>
                <h1>팔로워가 1천명 <br class="for-mobile">미만으로 안타깝지만<br>지금은 인플루언서로<br class="for-mobile"> 활동이 어렵습니다.</h1>
                <p>곧 플래거와 함께 인플루언서로 활동할 수 있기를 기대합니다.</p>
                <!-- <button class="next" @click='closeSelf'>확 인</button> -->
                <div class="bottom">
                    <a>친구에게도 기회를 주세요!</a>
                    <div class="sns-button">
                        <img src="../../assets/sns-kakao.svg" alt="">
                    </div>
                    <div class="sns-button">
                        <img src="../../assets/sns-fb.svg" alt="">
                    </div>
                    <div class="sns-button">
                        <img src="../../assets/sns-blog.svg" alt="">
                    </div>
                    <div class="sns-button">
                        <img src="../../assets/sns-insta.svg" alt="">
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
            this.$store.commit('closeScoreImpossiblePopup')
        }
    }

};
</script>

<style scoped>
h1 {
    /* 안타깝지만 지금은 인플루언서로 활동이: */
    font-weight: 700;
    font-size: 40px;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 51px;
    margin-bottom: 27px;
}

p {
  /* 더 다양한 매력적인 게시물과 팔로워와: */
    font-weight: 400;
    font-size: 26px;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
    margin-bottom: 39px;
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
  padding: 60px 50px 82px;
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
    p { font-size: 1.1rem; line-height: 2.1rem; margin-top: 0; margin-bottom: 1.1rem;}
    
    .complete-popup { width: calc(100% - 3rem); box-sizing: border-box; padding: 1.7rem 1.4rem 4rem; margin-top: 4.2rem;}
    .close-wrap img { width: 1.5rem; height: 1.5rem; }
    .complete-wrap img { width: 5.2rem; height: 5rem; }
    .complete-wrap { margin-bottom: 2.7rem;}
    h1 { font-size: 2.4rem; line-height: 3.7rem; margin-bottom: 2.3rem;}
    button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}

    .bottom {height: auto; margin-top: 1rem;}
    .bottom a { border: none; display: block; margin: 0; padding: 0; font-size: 1.2rem; height: auto; line-height: 1.2rem; margin-bottom: 1.3rem;}
    .bottom .sns-button { width: 2.05rem; height: 2.05rem; margin-right: 3.9rem;}
    .bottom .sns-button img { width: 100%;}

}

</style>
