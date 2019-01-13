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
                        <a class="no-uline btn kakao-link-btn" >
                            <img src="../../assets/sns-kakao.svg" alt="">
                        </a>
                    </div>
                    <div class="sns-button">
                        <a href="http://www.facebook.com/sharer/sharer.php?u=plager.co" onclick="window.open(this.href, 'mywin',
'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;"><img src="../../assets/sns-fb.svg" alt=""></a>
                    </div>
                    <div class="sns-button">
                    <a :href="share_blog_text" target="_blank"><img src="../../assets/sns-insta.svg" alt=""></a>
                    </div>
                    <div class="sns-button">
                        <a id="btn"  v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"><img style="width:30px; height: 30px;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkY3RjRGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNERDRFMjI7IiBkPSJNNTExLjMyNiwyNzQuNTQyTDM2OC41OSwxMzEuODA1aC02My4xNzFsLTE1My40MjgsMTQ0LjAybC0yMC42ODcsNDMuNDk0bDEyLjU2LDU2Ljg0NiAgbDEzNC44MjMsMTM0LjgyM0M0MDMuMzQ2LDUwMC4wMzgsNTAyLjM2MywzOTkuNzU4LDUxMS4zMjYsMjc0LjU0MnoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMjIuMzk3LDMyNC4yNTFjLTAuMDAyLDE4LjgwMSw3LjE1NCwzNy41OTgsMjEuNDY4LDUxLjkxNGMyOC42MjUsMjguNjI0LDc1LjE5OCwyOC42MjQsMTAzLjgyNCwwICBsMTM5LjI3OC0xMzkuMjc4YzMuNTE1LTMuNTE1LDMuNTE1LTkuMjE4LTAuMDAyLTEyLjczM2MtMy41MTUtMy41MTUtOS4yMTYtMy41MTUtMTIuNzMzLDAuMDAyTDIzNC45NTYsMzYzLjQzNCAgYy0yMS42MDIsMjEuNjAyLTU2Ljc1NCwyMS42MDItNzguMzU4LTAuMDAyYy0yMS42MDItMjEuNjAyLTIxLjYwMi01Ni43NTEsMC03OC4zNThsMTQwLjUzMy0xNDAuNTMxICBjNy44NDQtNy44NDQsMTguMjcyLTEyLjE2NCwyOS4zNjMtMTIuMTY0YzExLjA5MiwwLDIxLjUyMSw0LjMxOCwyOS4zNjIsMTIuMTYyYzcuODQ0LDcuODQ0LDEyLjE2NCwxOC4yNzIsMTIuMTY0LDI5LjM2MyAgYzAsMTEuMDkyLTQuMzIsMjEuNTItMTIuMTYyLDI5LjM2MkwyMzQuNTYzLDMyNC41NmMtMTAuNzc4LDEwLjc3OC0yOC4zMTcsMTAuNzc4LTM5LjA5MywwYy0xMC43NzgtMTAuNzc2LTEwLjc3Ni0yOC4zMTcsMC0zOS4wOTEgIGwxMDUuMTk2LTEwNS4xOThjMy41MTUtMy41MTUsMy41MTUtOS4yMTgtMC4wMDItMTIuNzMzYy0zLjUxNS0zLjUxNS05LjIxNi0zLjUxNS0xMi43MzMsMC4wMDJMMTgyLjczNiwyNzIuNzM2ICBjLTE3LjgwMSwxNy44MDEtMTcuNzk2LDQ2Ljc2MywwLjAwMiw2NC41NmMxNy43OTksMTcuNzk5LDQ2Ljc1OSwxNy43OTksNjQuNTYsMEwzNjguNTkyLDIxNiAgYzExLjI0My0xMS4yNDMsMTcuNDM3LTI2LjE5NSwxNy40MzctNDIuMDk2YzAtMTUuOTAzLTYuMTkyLTMwLjg1My0xNy40MzctNDIuMDk2Yy0xMS4yNDMtMTEuMjQzLTI2LjE5My0xNy40MzctNDIuMDk2LTE3LjQzNyAgYy0xNS45MDMsMC0zMC44NTMsNi4xOTItNDIuMDk2LDE3LjQzN0wxNDMuODY3LDI3Mi4zMzlDMTI5LjU1NSwyODYuNjQ5LDEyMi4zOTksMzA1LjQ1MiwxMjIuMzk3LDMyNC4yNTF6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0UyRTJFMjsiIGQ9Ik0zNzQuMjMyLDIyNC4xNTRMMjM0Ljk1NiwzNjMuNDMyYy0yMS42MDEsMjEuNTk5LTU2Ljc0NiwyMS42MDItNzguMzQ4LDAuMDA3bC0xMi43MzQsMTIuNzM0ICAgYzI4LjYyNSwyOC42MTUsNzUuMTkzLDI4LjYxMywxMDMuODE1LTAuMDA5bDEzOS4yNzgtMTM5LjI3OGMzLjUxNS0zLjUxNSwzLjUxNS05LjIxOC0wLjAwMi0xMi43MzMgICBDMzgzLjQ1LDIyMC42MzYsMzc3Ljc0OSwyMjAuNjM2LDM3NC4yMzIsMjI0LjE1NHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNFMkUyRTI7IiBkPSJNMzY4LjAyMSwxNzMuOTAxYzAsMTEuMDkyLTQuMzE4LDIxLjUyLTEyLjE2MiwyOS4zNjJMMjM0LjU2NSwzMjQuNTU2ICAgYy0xMC43NzYsMTAuNzc2LTI4LjMwNywxMC43NzgtMzkuMDg0LDAuMDA5bC0xMi43MzQsMTIuNzM0YzE3Ljc5OSwxNy43OTEsNDYuNzU0LDE3Ljc4OSw2NC41NTItMC4wMDlsMTIxLjI5NC0xMjEuMjk2ICAgYzExLjI0My0xMS4yNDMsMTcuNDM3LTI2LjE5NSwxNy40MzctNDIuMDk2YzAtMTEuMTYxLTMuMDYyLTIxLjg0NS04Ljc2OC0zMS4xMTdsLTEzLjI1NywxMy4yNTcgICBDMzY2LjYzMiwxNjEuNTQ5LDM2OC4wMjEsMTY3LjYxOSwzNjguMDIxLDE3My45MDF6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            share_blog_text: null,
            kakao_init: false,
          message: 'http://plager.co/influencer-my-score'
        }
    },
    created: function() {
            this.share_blog_text = 'http://line.me/R/msg/text/?' + encodeURIComponent('인플루언서로돈벌기!\nhttp://plager.co')
    },
    updated(){

        if(!this.kakao_init){

            this.kakao_init = true;

            Kakao.init('eb075a36556d7badedb6e60e5f6206a3');

             // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
            Kakao.Link.createCustomButton({
                    container: '.kakao-link-btn',
                 templateId: 13488,
                  templateArgs: {
                    'title': 'Plager',
                    'description': '브랜드 각인 마케팅 - 플래거'
                  }
            });
        }
    },
    methods: {
        closeSelf: function(){
            this.$store.commit('closeScoreImpossiblePopup')
        },
     onCopy: function (e) {
          alert('링크 복사되었습니다.')
        },
        onError: function (e) {
          alert('다시 시도해주세요.')
        }
    },

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
