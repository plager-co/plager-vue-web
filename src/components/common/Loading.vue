<template>
    <div class="loading">
        <img src="../../assets/fluid-loader.gif">
    </div>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 64px;
}

p {
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 27px;
  margin-bottom: 49px;
}

.loading {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.8);
}

.dim .cell {
  display: table-cell;
  vertical-align: middle;
}

button {
  width: 325px;
  height: 67px;
  font-size: 24px;
  color: #092056;
  letter-spacing: 0;
  text-align: center;
}

button.next {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  color: #ffffff;
}

button.influ-login {
  background-image: linear-gradient(-45deg, #123075 0%, #fa2b56 100%);
  border-radius: 5px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  width: 303px;
  height: 60px;
  font-size: 18px
}
button.influ-login b {
    font-weight: 600;
}
button.influ-login img {
    position: relative;
    top: 4px;
    margin-right: 5px;
}

.popup {
  margin: auto;
  width: 965px;
  background: #ffffff;
  border-radius: 5px;
  padding: 100px 116px 100px;
  box-sizing: border-box;
  /* 내 영향력을 간단하게 테스트 해볼 수: */
  font-weight: 700;
  font-size: 32px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 46px;
}
.popup1 {

  /* 비공개 계정은 테스트 불가: */
  padding-top: 10px;
  font-weight: 700;
  font-size: 25px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
}


/* input */


.input-set {
  width: 100%;
  padding-top: 50px;
  text-align: center;
}
.input-set .input-wrap {
  position: relative;
}

.input-set .input-wrap::after {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 40px;
}

.input-set.btn input[type="text"]{
    padding: 0 80px;
  width: 80%;
}

.input-set input[type="text"]{
  border: 1px solid #d9dee8;
  border-radius: 4px;
  font-size: 22px;
  color: #aab2c0;
  height: 67px;
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
}

.input-set.btn button {
  width: 300px;
  height: 67px;
}

@media screen and (max-width: 640px) {
  

.cell { padding: 0 1.5rem; box-sizing: border-box;}
.popup { width: 100%; padding: 4rem 1rem 5rem; font-size: 1.4rem; line-height:  2.5rem; letter-spacing: -.05rem;}
.popup1 { font-size: 1.4rem;}
.input-set { height: 3rem; font-size: 1.2rem; padding-top: 3.9rem;}
.input-set.btn input[type="text"] {padding: 0 0 0 3rem; height: 3rem; font-size: 1.2rem;}
.input-set.btn button { width: 30%; height: 3rem; font-size: 1.2rem; border-top-left-radius: 0; border-bottom-left-radius: 0;}
.input-set .input-wrap::after {left: 1.5rem; top: .25rem;}

}

</style>
