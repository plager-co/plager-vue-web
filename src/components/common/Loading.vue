<template>
    <div class="loading">
        <section class="wrapper">
  <div class="spinner" style="height: 50%">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</section>
    </div>
</template>

<script>
export default {
  methods: {
  }
};
</script>

<style scoped>
     * {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

section.wrapper {
  padding: 40px 0;
}
section.wrapper.dark {
  background: #313134;
}

div.spinner {
  -moz-animation: rotate 10s infinite linear;
  -webkit-animation: rotate 10s infinite linear;
  animation: rotate 10s infinite linear;
  position: relative;
  display: block;
  margin: auto;
  width: 142px;
  height: 142px;
}
div.spinner i {
  -moz-animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
  -webkit-animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
  animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);
  -moz-transform-origin: 50% 100% 0;
  -webkit-transform-origin: 50% 100% 0;
  transform-origin: 50% 100% 0;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  border: solid 6px transparent;
  border-bottom: none;
}
div.spinner i:nth-child(1) {
  -moz-animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
  animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);
  width: 44px;
  height: 22px;
  margin-top: -22px;
  margin-left: -22px;
  border-color: #2172b8;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
}
div.spinner i:nth-child(2) {
  -moz-animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
  animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);
  width: 58px;
  height: 29px;
  margin-top: -29px;
  margin-left: -29px;
  border-color: #18a39b;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}
div.spinner i:nth-child(3) {
  -moz-animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
  animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);
  width: 72px;
  height: 36px;
  margin-top: -36px;
  margin-left: -36px;
  border-color: #82c545;
  border-top-left-radius: 48px;
  border-top-right-radius: 48px;
}
div.spinner i:nth-child(4) {
  -moz-animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);
  animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);
  width: 86px;
  height: 43px;
  margin-top: -43px;
  margin-left: -43px;
  border-color: #f8b739;
  border-top-left-radius: 54px;
  border-top-right-radius: 54px;
}
div.spinner i:nth-child(5) {
  -moz-animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);
  animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);
  width: 100px;
  height: 50px;
  margin-top: -50px;
  margin-left: -50px;
  border-color: #f06045;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
}
div.spinner i:nth-child(6) {
  -moz-animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);
  animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);
  width: 114px;
  height: 57px;
  margin-top: -57px;
  margin-left: -57px;
  border-color: #ed2861;
  border-top-left-radius: 66px;
  border-top-right-radius: 66px;
}
div.spinner i:nth-child(7) {
  -moz-animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);
  animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);
  width: 128px;
  height: 64px;
  margin-top: -64px;
  margin-left: -64px;
  border-color: #c12680;
  border-top-left-radius: 72px;
  border-top-right-radius: 72px;
}
div.spinner i:nth-child(8) {
  -moz-animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);
  -webkit-animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);
  animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);
  width: 142px;
  height: 71px;
  margin-top: -71px;
  margin-left: -71px;
  border-color: #5d3191;
  border-top-left-radius: 78px;
  border-top-right-radius: 78px;
}

@-moz-keyframes rotate {
  to {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  to {
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
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
