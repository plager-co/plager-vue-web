<template>
<div class="viewer">
    <div class="section start gray">
        <div class="container">
            <h1>결제</h1>
            <div class="date">2018. 03. 03 ~ 2018. 05. 05</div>

                <!-- web -->
            <div class="card">
                <div class="profile">
                    <div class="profile-img"></div>
		    <h2>@abcdef123</h2>
                    <div class="state" style="padding-top: 20px;">3개월 계약대기</div>
                </div>
                <div class="data for-web">
                    <div class="top">
                        <div class="col" v-for='(data, i) in paymentData.top' :key='i'>
                            <div class="data-name">{{data.dataName}}</div>
                            <div class="data-val">{{data.dataVal}}</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="col" v-for='(data, i) in paymentData.bottom' :key='i'>
                            <div class="data-name">{{data.dataName}}</div>
                            <div class="data-val">{{data.dataVal}}</div>
                        </div>
                    </div>
                </div>
                <table class='for-mobile'>
                    <tbody>
                        <tr>
                            <td class='bold'>노출</td>
                            <td>총 {{paymentData.data.target_impression_count}}회</td>
                        </tr>
                        <tr>
                            <td class='bold'>도달</td>
                            <td>총 {{paymentData.data.target_reach_count}}회</td>
                        </tr>
                        <tr>
                            <td class='bold'>좋아요</td>
                            <td>{{paymentData.data.target_like_count}}개</td>
                        </tr>
                        <tr>
                            <td class='bold'>댓글</td>
                            <td>{{paymentData.data.target_comment_count}}개</td>
                        </tr>
                        <tr>
                            <td class='bold'>저장</td>
                            <td>{{paymentData.data.target_save_count}}개</td>
                        </tr>
                        <tr>
                            <td class='bold'>동영상</td>
                            <td>{{paymentData.data.target_movie_count}}개/<br>{{paymentData.data.target_play_count}}재생</td>
                        </tr>
                        <tr>
                            <td class='bold'>영향력지수</td>
                            <td>{{paymentData.data.influencer_effect_rate}}%</td>
                        </tr>
                        <tr>
                            <td class='bold'>총 광고비</td>
                            <td>{{paymentData.data.price}}원</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="payment-wrap">
                <a href="">결제방법</a>
                <button :class='{selected: currBtnName === "deposit"}' @click='currBtnName = "deposit"'>무통장입금</button>
                <button :class='{selected: currBtnName === "credit-card"}' @click='currBtnName = "credit-card"'>신용카드</button>
            </div>
            <button class="payment-button" @click='paymentData.data.payment_method = currBtnName; pay(paymentData.data)'>결제하기</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
        currBtnName: 'deposit',
      paymentData: {
        top: [
          { dataName: "노출", dataVal: "8회" },
          { dataName: "도달", dataVal: "10회" },
          { dataName: "좋아요", dataVal: "430개" },
          { dataName: "댓글", dataVal: "230개" },
          { dataName: "저장", dataVal: "120회" }
        ],
        bottom: [
          { dataName: "동영상", dataVal: "300개" },
          { dataName: "동영상재생", dataVal: "3499회" },
          { dataName: "영향력지수", dataVal: "8.44%" },
          { dataName: "총광고비", dataVal: "10,000,000원" }
        ],
      data: {}
      }
    };
  },
    created: function(){
      var currentAdInfluencer = this.$store.getters.currentAdInfluencer;
      this.paymentData = {
        top: [
          { dataName: "노출", dataVal: currentAdInfluencer.target_impression_count + "회" },
          { dataName: "도달", dataVal: currentAdInfluencer.target_reach_count + "회" },
          { dataName: "좋아요", dataVal: currentAdInfluencer.target_like_count + "개" },
          { dataName: "댓글", dataVal: currentAdInfluencer.target_comment_count + "개" },
          { dataName: "저장", dataVal: currentAdInfluencer.target_save_count + "회" }
        ],
        bottom: [
          { dataName: "동영상", dataVal: currentAdInfluencer.target_movie_count + "0개" },
          { dataName: "동영상재생", dataVal: currentAdInfluencer.target_play_count + "회" },
          { dataName: "영향력지수", dataVal: currentAdInfluencer.influencer_effect_rate + "%" },
          { dataName: "총광고비", dataVal: currentAdInfluencer.price.toLocaleString() }
        ],
      data: currentAdInfluencer,
      };

  },
     methods: {

        pay: async function(adInfluencer){
            var adInfluencerUpdate = {
                id: adInfluencer.id,
                is_deposit_requested: 1,
                payment_method: adInfluencer.payment_method,
            };
            await this.$store.dispatch('updateAdInfluencer', adInfluencerUpdate);
        }
    }
};
</script>

<style scoped>
h1 {
  /* 결제: */
  font-family: AppleSDGothicNeo-Medium;
  font-size: 57px;
  color: #000000;
  text-align: center;
  line-height: 57px;
  color: black;
  margin-bottom: 37px;
}

h2 {
  /* @abcdef123: */
  font-family: AppleSDGothicNeo-Bold;
  font-size: 28px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  margin: 0 0 -5px 0;
}

.date {
  /* 2018. 03. 03 ~ 2018.: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 22px;
  color: #000000;
  letter-spacing: 0;
  line-height: 22px;
  text-align: right;
  margin-right: 26px;
  margin-bottom: 20px;
}

.container {
  padding: 75px 0 83px;
}

.card {
  width: 100%;
  padding: 42px 45px 32px;
  /* Rectangle 48: */
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 39px;
  box-sizing: border-box;
  font-size: 0;
}

.card .profile {
  vertical-align: top;
  display: inline-block;
  width: 179px;
  margin-right: 48px;
}

.card .profile .profile-img {
  width: 179px;
  height: 179px;
  border-radius: 50%;
  background: #ddd;
  margin-bottom: 18px;
}

.card .profile .state {
  width: 100%;
  /* 3개월계약대기: */
  font-family: AppleSDGothicNeo-SemiBold;
  font-size: 22px;
  color: #2ebd41;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
}

.card .data {
  width: calc(100% - 227px);
  vertical-align: top;
  display: inline-block;
  font-size: 0;
}

.card .data .top,
.card .data .bottom {
  width: 100%;
  padding: 3px 0 17px;
  text-align: left;
}

.card .data .top {
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 40px;
}

.card .data .col {
  display: inline-block;
  width: 20%;
}

.card .data .col .data-name {
  /* 좋아요: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 20px;
  white-space: nowrap;
}

.card .data .col .data-val {
  /* 430개: */
  font-family: AppleSDGothicNeo-Bold;
  font-size: 24px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
}

.payment-button {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  font-family: AppleSDGothicNeo-Medium;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  width: 323px;
  height: 60px;
}

.payment-wrap {
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
  font-size: 0;
  white-space: nowrap;
}

.payment-wrap button {
  /* Rectangle Copy 7: */
  background: #ffffff;
  border: 1px solid #d9dee8;
  border-radius: 4px;
  /* 신용카드: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 16px;
  color: #092056;
  text-align: center;
  width: 241px;
  height: 60px;
  margin-right: 23px;
  border: 1px solid #092056;
}

.payment-wrap button.selected {
  background: #092056;
  color: #ffffff;
  border: none;
}

.payment-wrap a {
  /* 결제방법: */
  font-family: AppleSDGothicNeo-SemiBold;
  font-size: 26px;
  color: #000000;
  text-align: center;
  line-height: 22px;
  vertical-align: middle;
  margin-left: 58px;
  margin-right: 52px;
  position: relative;
  bottom: 2px;
  text-decoration: none;
}

table.for-mobile tbody tr td {
    word-break: keep-all;
    width: 50%;
    font-family: AppleSDGothicNeo-Regular;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: right;
}

table.for-mobile {
    margin: 0 5%;
    padding-bottom: 20px;
    margin-bottom: 30px;
}

table.for-mobile tbody tr td.bold {
    font-family: AppleSDGothicNeo-SemiBold;
    text-align: left;
}
table.for-mobile {
    border-spacing: 13px;
}



@media screen and (max-width: 640px) {
    .data.for-web { display: none;}

    h1 {font-size: 2rem; margin-bottom: .1rem; }
    h2 { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: 0rem;}

    .container { width: 100%; padding: 2.3rem 2.5rem 3.3rem; box-sizing: border-box;}
    .date { font-size: 1rem; line-height: 1.2rem; margin-bottom: .3rem; padding-bottom: 0; text-align: right; margin-right: 0; margin-bottom: 1.5rem;}

    .card {padding: 1.5rem 0 0;}
    .card .profile {margin-right: 0; width: auto;}
    .card .profile .profile-img {margin-bottom: 1.5rem; width: 10rem; height: 10rem; margin-right: 0;}
    .card .profile .state {margin-bottom: .1rem; font-size: 1.5rem;}

    table.for-mobile { padding-bottom: 0; border-spacing: 1rem; margin: 0 1rem .9rem; }
    table.for-mobile tbody tr td { font-size: 1.4rem; line-height: 2rem;}

    .payment-wrap a {margin: 0 1rem 0 0; font-size: 1.4rem; position: relative; bottom: .5rem;}
    .payment-wrap button { width: 10.3rem; height: 3rem; font-size: 1.2rem; margin-right: .9rem;}

    .payment-button {width: 20.2rem; height: 4rem; font-size: 1.2rem; }

}

</style>
