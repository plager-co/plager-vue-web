<template>
  <div class="viewer">
      <test-popup v-if='$store.getters.getTestPopup'></test-popup>
      <div class="section start gray">
          <div class="container">
              <h1>내 영향력 테스트</h1>
              <!-- <p>나의 영향력을 간단하게 테스트 해볼 수 있습니다. <br>
                테스트하고 인플루언서 직업으로 활동하세요.
                </p> -->
                <div class="card">
                    <div class="left">
                        <div class="profile-img"></div>
                        <div class="profile-name">@abcdef123</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>팔로워</td>
                                    <td>7,512명</td>
                                </tr>

                                <tr>
                                    <td>포지션</td>
                                    <td>마이크로 인플루언서</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="right">
                        <div class="bottom">
                            <h1>내 영향력 지수</h1>
                            <div class="desc">전체 인플루언서 <br class="for-mobile"> 평균 영향력 지수 3.44%</div>
                            <button class="percent" disabled>3.44%</button>
                        </div>
			<div class="top">
                            <div class="title">최근 3개월 평균</div>
                        </div>
                        <div class="middle">
                            <table>
                                <tbody>
				    <tr>
                                       <td>게시물</td>
                                       <td>348개</td>
                                    </tr>
                                    <tr>
                                        <td>좋아요</td>
                                        <td>1,000개</td>
                                    </tr>
                                    <tr>
                                        <td>댓글</td>
                                        <td>3,000개</td>
                                    </tr>
                                    <tr>
                                        <td>동영상 수</td>
                                        <td>30개</td>
                                    </tr>
                                    <tr>
                                        <td>동영상 재생</td>
                                        <td>15,000회</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div class="pred">1회 노출 예상 모델료 : </div>  
			<div class="pred">약<b2> 1,500,000,000원</b2></div>
                    </div>
                </div>
                <p class="bottom for-web">
                    위 영향력 지수와 모델료는 간단한 몇가지 항목으로 산출한 것으로<br>
                    정확한 판단 기준이 되지는 못합니다.<br>
                    <br>
                    플래거의 인플루언서로 등록하여 더 자세히 알아보세요.
                </p>        
                <p class="bottom for-mobile">
                    위 영향력 지수와 모델료는 간단한 몇가지 항목으로 <br> 산출한 것으로
                    정확한 판단 기준이 되지는 못합니다.<br>
                    <br>
                    플래거의 인플루언서로 등록하여 더 자세히 알아보세요.
                </p>        
                <button @click='$router.push("/influencer-join")'>인플루언서 등록하기</button>
          </div>
      </div>
  </div>
</template>

<script>
import TestPopup from './common/TestPopup'

export default {
    components: { TestPopup },
    methods: {
        openTestPopup(){
            this.$store.commit('openTestPopup')
        }
    },
    created(){
        this.openTestPopup()
    }
};
</script>

<style scoped>
h1 {
  /* 내 영향력 테스트: */
  font-weight: 400;
  font-size: 45px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
}

p {
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    text-align: center;
    line-height: 30px;
    margin-bottom: 23px;
}

.card {
    width: 100%;
    /* Rectangle: */
    font-size: 0;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(23,32,49,0.10);
    border-radius: 5px;
    padding: 51px 41px 51px 11px;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 8px;
}

.card .left {
    display: inline-block;
    vertical-align: top;
    width: 413px;
    border-right: 1px solid rgba(151, 151, 151, .5);
    padding: 45px 0 0 0;
}

.card .left .profile-img {
    width: 259px;
    height: 259px;
    border-radius: 50%;
    background: url('../assets/section-4-left2.png') 50% 50% no-repeat;
    background-size: cover;
    margin: 0 auto 25px;
}

.card .left .profile-name {
    /* @abcdef123: */
    font-weight: 700;
    font-size: 24px;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 20px;
}

.section.start {
  padding: 109px 0 89px;
}

.card .left table {
    /* 348개 7,512명 마이크로 인플루: */
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    line-height: 30px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 12px;
}

.card .left table tr td:first-child {
    font-weight: 600;
    width: 85px;
}

.card .right {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 414px);
    padding: 0 0 0 47px;
    box-sizing: border-box;
}

.card .right .top {
    
    width: 100%;
    padding: 0 42px 0 10px;
    box-sizing: border-box;
}

.card .right .top .title {
    border-bottom: 1px solid rgba(151, 151, 151, .5);
    padding-left: 15px;
    padding-bottom: 18px;
    
    /* 3달 평균: */
    font-weight: 400;
    font-size: 24px;
    color: #000000;
}

.card .right .middle {
    padding: 0 22px 0 24px;
    width: 100%;
    margin-top: 17px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

.card .right .middle table {
    width: 100%;
    /* 2000개: */
    font-weight: 400;
    font-size: 24px;
    color: #97A3B4;
    text-align: right;
    line-height: 47px;
}
.card .right .middle table td:first-child {
    text-align: left;
    color: #000000;
}

.card .right .bottom {
    margin-left: 25px;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
}

.card .right .bottom h1 {
    /* 내 영향력 지수: */
    font-weight: 400;
    font-size: 40px;
    color: #000000;
    text-align: left;
    line-height: 48px;
    margin-bottom: 5px;
}

.card .right .bottom .desc {
    /* 전체 인플루언서 평균 영향력 지수 3: */
    
    font-weight: 400;
    font-size: 20px;
    color: #9B9B9B;
}

.card .right .bottom .percent {
    position: absolute;
    display: inline-block;
    border: 0;
    width: 244px;
    height: 80px;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
    background: #88c86b;
    border-radius: 100px;
    /* 3.44%: */
    font-weight: 900;
    font-size: 40px;
    color: #FFFFFF;
    letter-spacing: 3.16px;
    right: 0;
    bottom: 2px;
}

.container > p.bottom {
    /* 위 영향력 지수와 모델료는 간단한 몇: */
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 35px;
    margin-bottom :35px;
}

.container > button {
    /* Bg: */
    background-image: linear-gradient(-45deg, #123075 0%, #fa2b56 100%);
    border-radius: 5px;
    /* 인플루언서 등록하기: */
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;

    width: 660px;
    height: 60px;
}

.pred {
    /* 1회 포스팅 예상 모델료 : 약 11 */
    margin-left: 25px;
    font-weight: 400;
    font-size: 25px;
    color: #000000;
    letter-spacing: 0.7px;
}

.pred b2 { color: #CA0019; font-weight: bold;}


@media screen and (max-width: 640px) {
    
    .section.start { padding: 2.7rem 2.5rem 4.2rem; box-sizing: border-box;}
    .container > p.bottom { font-size: 1.2rem; line-height: 2rem;}
    h1 { font-size: 2rem; line-height: 1rem; }
    p {font-size: 1.2rem; line-height: 1.5rem; }
    .card { padding: 1.2rem 1.1rem 2.6rem; margin-bottom: 1rem;}
    .card .left {padding-top: 0;}
    .card .left .profile-img { width: 10rem; height: 10rem; margin-bottom: .8rem;}
    .card .left .profile-name { font-size: 1rem; line-height: 2.2rem; margin-bottom: .8rem;}
    .card .left table { font-size: 1.4rem; }
    .card .left table tr td:first-child {width: 5rem;} 
    
    .card .left,
    .card .right { width: 100%; display: block; border: none; margin: 0; padding: 0;}

    .container > button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}

    .card .right .top { border-top: 1px solid rgba(151, 151, 151, .5); padding-top: 2rem; padding-left: 2rem;} 
    .card .right .top .title { font-size: 1.8rem; line-height: 2.1rem; padding: 0; border: 0;}
    .card .right .middle {margin-bottom: 2.rem;}
    .card .right .middle table { font-size: 1.4rem; line-height: 2.7rem;}
    .card .right .bottom { padding-left: 0rem; box-sizing: border-box;}
    .card .right .bottom h1 {font-size: 1.8rem; line-height: 2.1rem; margin-bottom: .4rem;}
    .card .right .bottom .desc { font-size: 1rem; line-height: 1.2rem;}
    .card .right .bottom .percent { width :135px; height: 50px; font-size: 2.2rem; bottom: 3px; right: 3rem;}
    .card .right .pred { font-size:1.4rem; text-align: center;}



}
</style>
