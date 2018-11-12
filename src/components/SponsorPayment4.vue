<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
            <div class="card">
                <div class="circle"></div>
                <h1>결제가 완료되었습니다.<br>
                관리자 승인 후 SIM 서비스가 시작됩니다.</h1>
                <button class="payment-button"@click='$router.push("/sponsor-sim")' >확 인</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        padding: 73px 0 113px;
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
        background: url('../assets/credit-card-complete.svg') 50% 50% no-repeat;
        background-size: cover;
        border: 2px solid #DFE3E9;
        background-color: #ffffff;
        margin-bottom: 52px;
    }

    h1 {
        font-family: AppleSDGothicNeo-Bold;
        font-size: 34px;
        color: #242E38;
        letter-spacing: 0;
        text-align: center;
        line-height: 67px;
        margin-bottom: 44px;
    }

    .account {
        padding: 12px 0 8px;
        /* Rectangle 49 Copy: */
        background: #E3E6EC;
        border-radius: 100px;


        /* 3000,000원: */
        font-family: AppleSDGothicNeo-Medium;
        font-size: 32px;
        color: #000000;
        letter-spacing: 1.4px;
        text-align: center;
        /* letter-spacing: normal; */
        margin-bottom: 37px
    }

    .account span {
        margin-left: 36px;
    }

    .account span:first-child {
        margin-left: 0;
    }


    @media screen and (max-width: 640px) {
        .container {width: 100%; padding: 2.1rem 2.5rem 2.4rem; box-sizing: border-box;}
        .card { margin: 0; box-sizing: border-box; padding: 8rem 1.4rem 7.9rem;}
        .circle { width: 13rem; height: 13rem; margin-bottom: 1.3rem;}
        h1 { font-size: 1.4rem; line-height: 2.3rem; margin-bottom: 3.3rem;}
        .account span { font-size: 1.8rem; line-height: 2.6rem; margin: 0;}
        .account { width: 24.1rem; height: 13rem; border-radius: 1.8rem; font-size: 2.6rem;}
        .payment-button {width: 20.2rem; height: 4rem;}
    }
</style>