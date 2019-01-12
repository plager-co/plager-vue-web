<template>
  <div class="viewer">
      <score-complete-popup :isCompletePopup='isCompletePopup'/>
      <score-impossible-popup :isImpossiblePopup='isImpossiblePopup'/>
      <div class="section start gray">
          <div class="container">
            <div class="card user">
                <div class="profile">
                    <img class="profile-img" v-bind:src="user.picture_link">
                    <div class="username">@{{ user.instagram }}</div>
                </div>
                <div class="cols">
                    <div class="left">
                        <p class='bold'>게시물 {{ numberWithCommas(user.total_post_count) }} / 팔로워 {{ numberWithCommas(user.total_follower_count) }}</p>
                        <p>포지션: {{ user.level }} 인플루언서</p>
                        <p>부정 프로그램 사용 여부 : {{ yesOrNo(user.is_fake_instagram) }}</p>
                        <p class='small'>(부정 프로그램 사용시 광고주에게 추천되지 않습니다.)</p>
                        <p class='gray for-web'>전체 인플루언서 평균 영향력 지수 {{ Math.round(avg_influencer_effect_rate * 100) / 100 }}%</p>
                    </div>
                    <div class="right">
                        <h1>내 영향력 지수</h1>
                        <p class='gray for-mobile'>전체 인플루언서 <br>평균 영향력 지수 {{ Math.round(avg_influencer_effect_rate * 100) / 100  }}%</p>
                        <button class="percent">{{ Math.round(user.influencer_effect_rate * 100) / 100 }}%</button>
                    </div>
                </div>
            </div>
            <div class="card-wrap">
              <div class="card ever">
                <div class="title">3달 평균 영향력</div>
                <div class="body">
                  <table>
                    <tbody>
                      <tr>
                        <td>좋아요</td>
                        <td>{{ numberWithCommas(user.three_month_like_count) }}개</td>
                      </tr>
                      <tr>
                        <td>댓글</td>
                        <td>{{ numberWithCommas(user.three_month_comment_count) }}개</td>
                      </tr>
		       <tr>
                        <td>내 댓글</td>
                        <td>{{ numberWithCommas(user.three_month_influencer_comment_count) }}개</td>
                      </tr>
                      <tr>
                        <td>동영상</td>
                        <td>{{ numberWithCommas(user.three_month_movie_count) }}개</td>
                      </tr>
		      <tr>
                        <td>동영상 재생</td>
                        <td>{{ numberWithCommas(user.three_month_play_count) }}회</td>
                      </tr>
                      <tr>
                        <td>부정 워딩 수</td>
                        <td>{{ numberWithCommas(user.three_month_negative_comment_count) }}회</td>
                      </tr>
                      <tr>
                        <td>제품 문의 수</td>
                        <td>{{ numberWithCommas(user.three_month_inquery_comment_count) }}명</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <!--<div class="card chart">-->
                <!--<div class="chart-wrap">-->
                  <!--<div class='chart-title for-web'>도달 팔로워 성별</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box a"></div>여성-->
                  <!--</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box b"></div>남성-->
                  <!--</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box c"></div>기타-->
                  <!--</div>-->
                  <!--<div class="chartjs-wrap">-->
                    <!--<doughnut-chart-->
                      <!--:data='[70, 20, 10, 0]'-->
                     <!--:width='214' :height='214'></doughnut-chart>-->
                     <!--<div class='chart-title for-mobile'>도달 팔로워 성별</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--<div class="chart-wrap">-->
                  <!--<div class='chart-title for-web'>도달 팔로워 국가별</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box a"></div>한국-->
                  <!--</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box b"></div>일본-->
                  <!--</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box c"></div>미국-->
                  <!--</div>-->
                  <!--<div class="color-wrap">-->
                    <!--<div class="color-box d"></div>프랑스-->
                  <!--</div>-->
                  <!--<div class="chartjs-wrap">-->
                    <!--<doughnut-chart-->
                     <!--:data='[40, 30, 20, 10]'-->
                     <!--:width='214' :height='214'></doughnut-chart>-->
                     <!--<div class='chart-title for-mobile'>도달 팔로워 국가별</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            </div>
            <div class="card bottom">
              <h1 :class='{completed : isCompleted}'>{{ user.name }} 님의 <b>1회</b> 예상 모델료는 <br class="for-mobile"> <b>약 {{ numberWithCommas(user.price) }}원</b> 입니다.</h1>
              <p v-if='!isCompleted'>플래거 인플루언서로 활동이 가능합니다.<br>
              활동을 원하신다면 신청 버튼을 눌러주세요.</p>
             <button class="submit" @click='btnClick'>{{btnMsg}}</button>
             <button class="submit" v-if='isCompleted' @click='$router.push("/influencer-my-score")'>나의 성과보기</button>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import doughnutChart from "./common/DoughnutChart";
import ScoreCompletePopup from "./common/ScoreCompletePopup";
import ScoreImpossiblePopup from "./common/ScoreImpossiblePopup";

export default {
  components: { doughnutChart, ScoreCompletePopup, ScoreImpossiblePopup },
  data() {
    return {
      isCompletePopup: true,
      isImpossiblePopup: true,
      isCompleted: false ,
    total_follower_count: 0,
    user: {},
    avg_influencer_effect_rate: 0,
    }
  },
    async created(){
      this.total_follower_count = this.$store.getters.total_follower_count;
        this.user = this.$store.getters.user;
        await this.$store.dispatch('avgInfluencerEffectRate');
        this.avg_influencer_effect_rate = this.$store.getters.avg_influencer_effect_rate;


    },
  methods: {
      yesOrNo(x){
          if (x){
            return '예'
          }
            else{
            return '아니요'
          }
      },
    numberWithCommas(x) {
          if (x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
              return 0;
          }
    },
    btnClick(){
      console.log(this.total_follower_count);
      if (this.total_follower_count > 1000){
        this.$store.commit('openScoreCompletePopup');
        this.$store.dispatch('userUpdateNoPopup', {  id: this.$store.getters.user_id, is_open_score: 1});
      } else {
        this.$store.commit('openScoreImpossiblePopup',[ "안타깝지만 지금은 인플루언서로 활동이 어렵습니다.", " 곧 플래거와 함께 인플루언서로 활동할 수 있기를 기대합니다."])
      }
    },
  },
  computed: {
    btnMsg(){
      return this.isCompleted ? "확인" : "신청하기"
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 50px;
}

.container {
  padding-top: 104px;
  font-size: 0;
}

.card-wrap {
  width: 100%;
}

.card {
  width: 100%;
  padding: 42px 70px 32px;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 64px;
  box-sizing: border-box;
}

.card.user {
  padding: 56px 34px 31px 63px;
  font-size: 0;
  margin-bottom: 80px;
}

.card.ever {
  vertical-align: top;
  width: 50%;
  display: inline-block;
  padding: 39px 22px 42px;
  min-height: 633px;
}

.card.ever .title {
  text-align: center;
  padding-left: 42px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.5);
  /* 3달 평균: */
  font-weight: 400;
  font-size: 32px;
  color: #000000;
}

.card.ever .body {
  padding: 21px 42px 0;
}

.card.ever .body table {
  width: 100%;
  font-weight: 400;
  font-size: 24px;
  color: #97a3b4;
  text-align: right;
  line-height: 50px;
}
.card.ever .body table td:first-child {
  text-align: left;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  line-height: 22px;
}

.card.user .profile {
  vertical-align: top;
  display: inline-block;
  width: 224px;
  padding-right: 45px;
  box-sizing: border-box;
}

.card.user .profile .profile-img {
  width: 179px;
  height: 179px;
  border-radius: 50%;
  background: #ddd;
  margin-bottom: 18px;
}

.card.user .profile .username {
  font-family: AppleSDGothicNeo-SemiBold;
  font-size: 22px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
}

.card.user .cols {
  width: 100%;
  vertical-align: top;
  display: inline-block;
  width: calc(100% - 258px);
  font-size: 0;
  margin-bottom: 43px;
  box-sizing: border-box;
}

.card.user .cols .left {
  display: inline-block;
  width: 60%;
  vertical-align: top;
  font-size: 1rem;
}
.card.user .cols .right {
  display: inline-block;
  width: 40%;
  vertical-align: top;
  font-size: 1rem;
}

.card.chart {
  vertical-align: top;
  display: inline-block;
  width: calc(50% - 39px);
  padding: 65px 77px 57px;
  margin-left: 39px;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  letter-spacing: 0.25px;
  text-align: left;
  min-height: 633px;
}

.card.chart .chart-wrap {
  height: 206px;
  position: relative;
}

.card.chart .chart-wrap:first-child {
  margin-bottom: 98px;
}

.card.chart .chart-wrap .chart-title {
  margin-bottom: 27px;
}

.card.chart .chart-wrap .color-wrap {
  margin-bottom: 17px;
  font-size: 16px;
}

.card.chart .chart-wrap .color-box {
  display: inline-block;
  border-radius: 3px;
  width: 19px;
  height: 19px;
  position: relative;
  bottom: -3px;
  margin-right: 6px;
}

.color-box.a {
  background: #8ddc59;
}

.color-box.b {
  background: #00bd7d;
}

.color-box.c {
  background: #009e9b;
}

.color-box.d {
  background: #00526c;
}

.count-wrap {
  width: 100%;
  font-size: 0;
}

.count-wrap .col {
  display: inline-block;
  width: 33.3333%;
  text-align: center;
  position: relative;
}
.count-wrap .col .circle {
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 2px solid #dfe3e9;
  font-family: AppleSDGothicNeo-Bold;
  font-size: 50px;
  color: #000000;
  padding-top: 32px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  margin-bottom: 27px;
}
.count-wrap .col .count-name {
  font-weight: 400;
  font-size: 20px;
  color: #2a2a2a;
  letter-spacing: 2px;
  text-align: center;
}
.col:before {
  position: absolute;
  top: 59px;
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #dfe3e9;
}

button.submit {
  width: 332px;
  height: 60px;
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
}

.card .cols .right h1 {
  /* 내 영향력 지수: */
  font-weight: 400;
  font-size: 40px;
  color: #000000;
  margin-bottom: 20px;
}

.card .cols .right .percent {
  border: 0;
  width: 281px;
  height: 98px;
  display: inline-block;
  box-sizing: border-box;
  background: #88c86b;
  border-radius: 100px;
  /* 3.44%: */
  font-weight: 900;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 3.16px;
}

.card .cols .left p {
  padding-left: 30px;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  line-height: 39px;
  margin: 0 0 3px;
  text-align: center;
}

.card .cols .left .bold {
  font-weight: 700;
}

.card .cols .left .small {
  font-size: 14px;
}
.card .cols .right .gray,
.card .cols .left .gray {
  display: block;
  color: #9b9b9b;
  font-size: 20px;
}

.card .cols .right .gray {display: none;}

.card.bottom h1 {
  /* 홍길동 님의 1회 예상 모델료는 약: */
  font-family: AppleSDGothicNeo-Light;
  font-size: 40px;
  color: #000000;
  text-align: center;
  line-height: 68px;
  font-weight: unset;
  margin-bottom: 21px;
}

.card.bottom h1.completed {
  margin-bottom: 50px;
}

.card.bottom h1 b {
  color: #d0021b;
  font-weight: 700;
}

.card.bottom p {
  /* 플래거 인플루언서로 활동이 가능합니다: */
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  text-align: center;
  line-height: 32px;
  margin-bottom: 35px;
}

.chartjs-wrap {
  width: 214px;
  height: 214px;
  position: absolute;
  top: 0;
  right: 0;
}


@media screen and (max-width: 640px) {
    
  .container { padding: 2.7rem 2.5rem .7rem; box-sizing: border-box;}

  .card-wrap { width: 100%;}

  .card.user { padding: 2rem 2.1rem 2.6rem; position: relative;}

  .card.user .profile { width: 100%; display: block; padding-right: 0;}
  .card.user .profile .profile-img {display: inline-block; width: 10rem; height: 10rem; margin-bottom: .8rem;}
  .card.user .profile .username { font-size: 1.2rem; line-height: 2.2rem; margin-bottom: 1.2rem;}

  .card.user .cols { width: 100%; margin-bottom: 0; }

  .card.user .cols .left,
  .card.user .cols .right { width: 100%; display: block;}

  .card.user .cols .left .gray {display: none;}
  .card.user .cols .right .gray {display: block; text-align: left; font-size: 1rem; margin: 0;}
  .card.user .cols .left p { padding-left: 0; font-size: 1.4rem; line-height: 1; margin-bottom: 2rem;}
  .card.user .cols .left p:nth-child(3) { margin-bottom: 1rem;}
  .card.user .cols .left p.small { font-size: 1rem;}

  .card.user .cols .right h1 {font-size: 1.8rem; line-height: 2.1rem; margin-bottom: 0; text-align: left;}
  .card.user .cols .right .desc { font-size: 1rem; line-height: 1.2rem;}
  .card.user .cols .right .percent { width : 10.8rem; height:  4.3rem; font-size: 2.2rem; bottom: 3.2rem; padding: 0; right: 2.1rem; position: absolute; background-color: #88c86b;}

  .card.ever,
  .card.chart { width: 100%; display: block; margin-left: 0; margin-right: 0; }
  .card.ever {min-height: auto;}
  .card.chart { padding: 2.7rem 2.1rem 3.2rem; }
  .card.chart .chart-wrap { width: 100%;  height: auto; margin-bottom: 3.3rem;}
  .card.chart .chart-wrap .color-wrap { display: inline-block; margin-right: 2.1rem; font-size: 1.1rem;}
  .card.chart .chart-wrap .color-wrap .color-box { width: .9rem; height: .9rem; bottom: -.1rem;}

  .card.ever .body table td,
  .card.ever .body table td:first-child { font-size: 1.2rem; line-height: 2rem;}
  
  .card.ever .title { padding-left: 0; font-size: 1.8rem; line-height: 2.1rem; border-bottom: 0;}
  .card.ever { padding: 2.7rem 2.1rem; }
  .card.ever .body { padding: 0 1.2rem; }

  .card, .card.user {margin-bottom: 1.4rem;}




  .chartjs-wrap { position: relative; margin: 1.8rem auto; text-align: center;}
  .card.chart .chart-wrap .chart-title.for-mobile { margin-top: 1.3rem; }
  .card.chart .chart-wrap .chart-title:first-child { margin-bottom: 6.3rem;}
  button.submit { width: 20.2rem; height: 4rem; font-size: 1.2rem;}

  .card.bottom { padding: 2.1rem 2.2rem 2.8rem}
  .card.bottom h1 { font-size: 1.8rem; line-height: 2.8rem;}
  .card.bottom p { font-size: 1rem; line-height: 2rem;}

}

</style>
