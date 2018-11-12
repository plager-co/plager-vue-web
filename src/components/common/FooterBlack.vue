<template>
  <div class="section footer">

    <!-- <div class="container">
      <div class="container-cell">
        <div class="left">
          <div>
            <div class='title'>COMPANY</div>
            <ul>
              <li>회사소개</li>
              <li>언론보도</li>
            </ul>
          </div>
          <div>
            <div class='title'>POLICY</div>
            <ul>
              <li>이용약관</li>
              <li>결제서비스약관</li>
              <li>개인정보취급방침</li>
            </ul>
          </div>
          <div>
            <div class='title'>SUPPROT</div>
            <ul>
              <li>FAQ</li>
              <li>고객센터</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div>
            <div class='title'>고객센터</div>
            <ul>
              <li>카카오 플러스 친구 | PLAGER</li>
              <li>평일 09:00 - 18:00</li>
              <li>02 - 8776 - 8776</li>
            </ul>
          </div>
        </div>
      </div> 
    </div> --> 

    <div class="line"></div>
    <div class="container bottom">
      <div class="right">
          <span>101-10-21194.</span>
          <span>폼 Form Co., Ltd.</span>
          <span>권민성</span> <br class="for-mobile">
          <span>서울시 강남구 수서동 708</span>  <br class="for-mobile">
          <span>02-9273-1019</span>
          <span>plager.kr@gmail.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.section.footer {
  background-color: #3c3c3c;
  color: #ffffff;
}
.section.footer .line {
  width: 100%; 
  height: 1px;
  background-color: #d8d8d8;
  opacity: .35;
}
.section.footer .container.bottom {
  height: 73px;
}
.section.footer .container.bottom span {
  opacity: 0.8;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  margin-left: 10px;
}
.section.footer .left,
.section.footer .right {
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
}
.section.footer .right { float: right;}
.section.footer .right div a,
.section.footer .left div a {
  font-weight: bold;
}
.section.footer .right > div,
.section.footer .left > div {
  vertical-align: top;
  display: inline-block;
  text-align: left;
  height: 144px;
  margin: 83px 20px 62px;
  padding-left: 35px;
  border-left: 3px solid rgba(255, 255, 255, .28);
}
.section.footer .right ul,
.section.footer .left ul {
  padding-left: 0;
}
.section.footer .right ul li,
.section.footer .left ul li {
  list-style: none;
}

.section.footer .container>div { 
  display: table-cell;
  }
.section.footer .container .left {
  display: inline-block;
  float: left;
}
.section.footer .container.bottom {
  height: 73px;
}

.section.footer .container.bottom .right {
  padding-top: 20px;
}

@media screen and (max-width: 640px) {

.section.footer .container .container-cell { padding: 2.6rem 3.4rem 1.3rem; }

.section.footer .container .left,
.section.footer .container .right {display: block; margin: 0; width: 100%; font-size: 1rem;}

.section.footer .container .left > div,
.section.footer .container .right > div {display: block; width: 100%; margin: 0; border: 0; padding: 0; height: auto;}

.section.footer .container .left > div .title,
.section.footer .container .right > div .title { font-size: 1.2rem; line-height: 1.5rem; vertical-align: top; display: inline-block; width: 6.5rem; font-weight: bold;}

.section.footer .container .left > div ul,
.section.footer .container .right > div ul { display: inline-block; margin: 0 0 1.2rem; }
.section.footer .container .right > div ul { margin-bottom: 0;}

.section.footer .container .left > div ul li,
.section.footer .container .right > div ul li { display: inline-block; width: 4.9rem; font-weight: 400; color: #BDBDBD; font-size: 0.8rem;  vertical-align: top; margin-top: .4rem;}
.section.footer .container .right > div ul li { width: 10rem; }

.section.footer .container .left > div ul li:nth-child(2) { width: 6.5rem; }
.section.footer .container .right > div ul li:nth-child(2) { width: 6.6rem; }

.section.footer .container .left > div ul li:nth-child(3) { white-space: nowrap; }
.section.footer .container .right > div ul li:nth-child(3) { display: block; margin-top: 1.5rem; vertical-align: top;}

.section.footer .container.bottom .right { padding: 1rem 0 1.4rem;}
.section.footer .container.bottom span { font-size: .7rem; }

}


</style>
