<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
            <div class="card">
                <div class="circle"></div>
                <h1>2019년 3월 8일까지 입금해주세요.<br>
                관리자 승인 후 <br class="for-mobile"> SIM 서비스가 시작됩니다.</h1>

                <button class="account" disabled>
                    <span>신한은행 <br class="for-mobile"> 737364-3993-3938672</span>
                    <span>3,000,000원</span><br class="for-mobile">
                    <span>플래거컴퍼니</span>
                </button>
                <button class="payment-button" @click='$router.push("/sponsor-payment3")'>확인</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          { dataName: "영향력지수", dataVal: "8.04%" },
          { dataName: "총광고비", dataVal: "10,000,000원" }
        ]
      }
    };
  }
};
</script>

<style scoped>
    .payment-button {
        background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
        border-radius: 5px;
        font-family: AppleSDGothicNeo-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        width: 323px;
        height: 50px;
    }

    .card {
        width: 100%;
        padding: 53px 97px 78px;
        box-sizing: border-box;
        background:rgba(255, 255, 255, .7);
        border-radius: 5px;
        margin: 35px 0 130px;
    }    

    .circle {
        width: 236px;
        height: 236px;
        margin: 0 auto;
        border-radius: 50%;
        background: url('../assets/card_img.svg') 50% 50% no-repeat;
        background-size: cover;
        border: 2px solid #DFE3E9;
        background-color: #ffffff;
        margin-bottom: 31px;
    }

    h1 {
        font-size: 34px;
        color: #242E38;
        letter-spacing: 0;
        text-align: center;
        line-height: 60px;
        margin-bottom: 38px;
    }

    .account {
        width: 900px;
        height: 59px;
        /* Rectangle 49 Copy: */
        background: #E3E6EC;
        border-radius: 100px;
        /* 3000,000원: */
        font-weight: 400;
        font-size: 25px;
        color: #000000;
        text-align: center;
        /* letter-spacing: normal; */
        margin-bottom: 37px;
        background-image: #E3E6EC;
        border: 0;
    }

    .account span {
        margin-left: 36px;
    }

    .account span:first-child {
        margin-left: 0;
    }

    @media screen and (max-width: 640px) {
        .container {width: 100%; padding: 2.1rem 2.5rem 2.4rem; box-sizing: border-box;}
        .card { margin: 0; box-sizing: border-box; padding: 4.7rem 1.4rem 3.9rem;}
        .circle { width: 13rem; height: 13rem; margin-bottom: 1.5rem;}
        h1 { font-size: 1.4rem; line-height: 2.3rem; margin-bottom: 2.4rem;}
        .account span { font-size: 1.8rem; margin: 0;}
        .account { width: 24.1rem; height: 13rem; border-radius: 1.8rem; font-size: 2.6rem; margin-bottom: 2.5rem; line-height: 1;}
        .payment-button {width: 20.2rem; height: 4rem;}
    }

</style>