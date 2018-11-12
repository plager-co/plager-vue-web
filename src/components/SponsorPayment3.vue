<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
            <div class="card">
                <div class="circle"></div>
                <h1>결제 진행중입니다.</h1>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  width: 100%;
  padding: 180px 0 179px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  margin: 35px 0 130px;
}

.circle {
  width: 236px;
  height: 236px;
  margin: 0 auto;
  border-radius: 50%;
  background: url("../assets/card_img.svg") 50% 50% no-repeat;
  background-size: cover;
  border: 2px solid #dfe3e9;
  background-color: #ffffff;
  margin-bottom: 47px;
}

h1 {
  font-family: AppleSDGothicNeo-Bold;
  font-size: 34px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 60px;
}

@media screen and (max-width: 640px) {
  .container { padding: 2.1rem 2.5rem 3.6rem; box-sizing: border-box;}
  .card { margin: 0; box-sizing: border-box; padding: 9.2rem 1.4rem 11.2rem;}
  .circle { width: 13rem; height: 13rem; margin-bottom: 1.5rem;}
  h1 { font-size: 1.4rem; line-height: 2.3rem;}

}

</style>