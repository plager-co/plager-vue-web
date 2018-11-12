<template>
  <div class="viewer">
      <div class="section empty">
        <div class="background">
          <div class="complete">
            <img src="../assets/completeWhite.svg" alt="">
          </div>
          <h1>신청 완료되었습니다.</h1>
          <h2>담당 매니저가 30분내에 광고주님께 연락드립니다.</h2>
          <button @click='$router.push("/")'>확인</button>
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
  padding: 207px 0 260px;
}

.section.empty .background {
  width: 100%;
  height: 400px;
  background: url('../assets/sponsorComplete-bg.png') 50% 50% no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 55px 0;
  display: table;
}

.section.empty .background .cell {
  display: table-cell;
  vertical-align: middle;
}

.section.empty .background .complete {
  width: 100%;
  margin-bottom: 37px;
}

.section.empty .background .complete img {
  width: 63px;
}

.section.empty .background h1 {
  font-weight: 400;
  font-size: 57px;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 6px;
}

.section.empty .background h2 {
  font-weight: 400;
  font-size: 17px;
  color: #FFFFFF;
  text-align: center;
  line-height: 35px;
  margin-bottom: 31px;
}

.section.empty button {
  background: #FFFFFF;
  box-shadow: 20px 20px 60px 0 rgba(0,0,0,0.40);
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  color: #1A47B0;
  letter-spacing: 0;
  width: 203px;
  height: 50px;
}


@media screen and (max-width: 640px) {

  .section.empty .background { padding: 3rem 0; height: auto; }

  .section.empty { padding: 3.4rem 0 4.9rem; min-height: unset;}
  .section.empty .background .complete {margin-bottom: 1.4rem;}
  .section.empty .background .complete img { width: 3.1rem; }
  .section.empty .background h1 {font-size: 2rem; line-height: 1.9rem; margin-bottom: .5rem;}
  .section.empty .background h2 {font-size: 1.2rem; line-height: 1.5rem; margin: 0 0 2.1rem;}
  .section.empty button {font-size: 1.2rem; line-height: 1.5rem;}

  .section.empty h2 { }
  
}
</style>
