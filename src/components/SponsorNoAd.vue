<template>
  <div class="viewer">
      <div class="section empty">
        <div class="background">
          <div class="cell">
            <div class="complete">
              <img src="../assets/alert.svg" alt="">
            </div>
            <h1>현재 계약된 <br class="for-mobile"> 광고주가 없습니다.</h1>
            <p>빠른시간 내에 광고주와 계약될 수 있도록 노력하겠습니다.</p>
            <button @click='$router.push("/")'>확인</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.section.empty {
  padding: 99px 0 260px;
}

.section.empty .background {
  width: 100%;
  height: 400px;
  background: url('../assets/sponsorComplete-bg.png') 50% 50% no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 97px 0 55px;
  display: table
}

.section.empty .background .cell {
  display: table-cell;
  vertical-align: middle;
}

.section.empty .background .cell .complete {
  width: 100%;
  margin-bottom: 53px;
}

.section.empty .background .cell h1 {
  font-family: AppleSDGothicNeo-Medium;
  font-size: 57px;
  color: #FFFFFF;
  text-align: center;
}

.section.empty .background .cell p {
  font-family: AppleSDGothicNeo-Medium;
  font-size: 17px;
  color: #FFFFFF;
  text-align: center;
  line-height: 35px;
  margin-bottom: 71px;
}

.section.empty button {
  background: #FFFFFF;
  box-shadow: 20px 20px 60px 0 rgba(0,0,0,0.40);
  border-radius: 5px;
  font-family: AppleSDGothicNeo-Medium;
  font-size: 16px;
  color: #1A47B0;
  letter-spacing: 0;
  width: 203px;
  height: 50px;
}

@media screen and (max-width: 640px) {

  .section.empty { padding: 3.4rem 0 4.9rem; min-height: unset;}

  .section.empty .background { height: auto; padding: 1.8rem 0 3rem;}
  .section.empty .background .cell .complete {margin-bottom: 1.7rem;}
  .section.empty .background .cell h1 {font-size: 2rem; line-height: 2.4rem; margin-bottom: .6rem;}
  .section.empty .background .cell p {font-size: 1rem; line-height: 1.2rem; margin-bottom: 1.2rem;}
  .complete img {width: 4.6rem;}
  
  .section.empty button { width: 15.9rem; height: 3.4rem; font-size: 1.2rem;}



}
</style>
