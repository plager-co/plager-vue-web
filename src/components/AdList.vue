<template>
<div class="viewer">
    <div class="section start gray">
        <div class="container">
            <h1>{{ status }}</h1>

            <div class="cards" v-for='(ad, i) in ads'>
                <div class="card">
                    <div class="data for-web">
                        <div class="top">
                            <div class="col" v-for='(data, i) in ad.top' :key='i'>
                                <div class="data-name">{{data.dataName}}</div>
                                <div class="data-val">{{data.dataVal}}</div>
                            </div>
                        </div>
                        <div class="bottom">
                            <div class="col" v-for='(data, i) in ad.bottom' :key='i'>
                                <div class="data-name">{{data.dataName}}</div>
                                <div class="data-val">{{data.dataVal}}</div>
                            </div>

                             <span class="col status-wrap">
                                 <div class="data-name">상태</div>
                                <div class="data-val"><button @click=''>{{ad.status}}</button></div>
                                <div class="data-val"><button @click='getAction(ad)'>{{ad.action_text}}</button></div>
                            </span>

                        </div>
                    </div>
                    <table class='for-mobile'>
                        <tbody v-for='(data, i) in ad.top' :key='i'>
                            <tr>
                                <td class='bold'>{{data.dataName}}</td>
                                <td>{{data.dataVal}}</td>
                            </tr>
                        </tbody>
                         <span class="col status-wrap">
                                 <div class="data-name">상태</div>
                                <div class="data-val"><button @click=''>{{ad.status}}</button></div>
                                <div class="data-val"><button style="border-color: #FF8000; color: #FF8000;"  @click='getAction(ad)'>{{ad.action_text}}</button></div>
                            </span>

                    </table>
                </div>
            </div>
                <!-- web -->
        </div>
    </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
        currBtnName: '1',
        ads: [
            {
                top: [
                  { dataName: "광고 ID", dataVal: "#113584" },
                  { dataName: "카테고리", dataVal: "컴퓨터,자동차,유아" },
                  { dataName: "기간", dataVal: "3달" }
                ],
                bottom: [

                  { dataName: "예산", dataVal: "10,000,000원" },
                  { dataName: "등록 날짜", dataVal: "2018 / 03 / 09" }
                ]
              }
        ],
        status: '계약중'

    };
  },
  created: async function(){
      await this.$store.dispatch('fetchAdBySponsorId', this.$store.getters.user_id);
      var filterAds = this.$store.getters.filterAds;
      function getStatus(filterAds){
          var statusAds = '';
          if (filterAds === 'registered'){
          statusAds = '서비스 대기중';
          } else if (filterAds === 'reviewed'){
              statusAds = '서비스 대기중';
          } else if (filterAds === 'paid'){
              statusAds = '서비스 대기중';
          } else if (filterAds === 'started'){
              statusAds = '서비스 진행중';
          } else if (filterAds === 'completed'){
            statusAds = '서비스 완료';
          }
          return statusAds;
      }
      function getActionText(filterAds){
          var statusAds = '';
          if (filterAds === 'registered'){
          statusAds = '확인중';
          } else if (filterAds === 'reviewed'){
              statusAds = '결재하기';
          } else if (filterAds === 'paid'){
              statusAds = '성과보기';
          } else if (filterAds === 'started'){
              statusAds = '성과보기';
          } else if (filterAds === 'completed'){
            statusAds = '성과보기';
          }
          return statusAds;
      }
      this.status = getStatus(filterAds);
      function getStatusPayable(statusAds){

          return true;
      }
      var adsRaw = this.$store.getters.ads;
      var ads = [];
          adsRaw.forEach(function (val){
          if (filterAds === 'registered'){
              if (val.status_text === filterAds || val.status_text === 'reviewed'){
              ads.push(
                  {
                    top: [
                      { dataName: "광고 ID", dataVal: val.id },
                      { dataName: "카테고리", dataVal: val.target_category },
                      { dataName: "기간", dataVal: val.period },
                    ],
                    bottom: [

                      { dataName: "예산", dataVal: val.budget },
                      { dataName: "등록 날짜", dataVal: val.created_at },
                    ],
                      status: getStatus(val.status_text),
                      status_text: val.status_text,
                      action_text: getActionText(val.status_text),
                      status_payable: getStatusPayable(val.status_text),
                      data: val,
                  }
              )
          }
              }
          else if (val.status_text === filterAds){
              ads.push(
                  {
                    top: [
                      { dataName: "광고 ID", dataVal: val.id },
                      { dataName: "카테고리", dataVal: val.target_category },
                      { dataName: "기간", dataVal: val.period },
                    ],
                    bottom: [

                      { dataName: "예산", dataVal: val.budget },
                      { dataName: "등록 날짜", dataVal: val.created_at },
                    ],
                      status: getStatus(val.status_text),
                      status_text: val.status_text,
                      action_text: getActionText(val.status_text),
                      status_payable: getStatusPayable(val.status_text),
                      data: val,
                  }
              )
          }

        });
      this.ads = ads;
  },
    methods: {
        payAd: function(ad) {
            this.$store.dispatch('payAd', ad.data);
        },
          getAction: function(ad){
            console.log(ad);
              if (ad.status_text === 'registered'){
              } else if (ad.status_text === 'reviewed'){
                 this.$store.dispatch('payAd', ad.data);
              } else if (ad.status_text === 'paid'){
                this.$store.dispatch('checkPerformance', ad.data);
              } else if (ad.status_text === 'started'){
                this.$store.dispatch('checkPerformance', ad.data);
              } else if (ad.status_text === 'completed'){
                this.$store.dispatch('checkPerformance', ad.data);
              }

          },
        checkPerformance: function(ad) {
            this.$store.dispatch('checkPerformance', ad);
        }
    }
};
</script>

<style scoped>
h1 {
  /* 결제: */
  font-family: AppleSDGothicNeo-Medium;
  font-size: 57px;
  color: #000000;
  text-align: center;
  line-height: 57px;
  color: black;
  margin-bottom: 37px;
}

h2 {
  /* @abcdef123: */
  font-family: AppleSDGothicNeo-Bold;
  font-size: 28px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  margin: 0 0 -5px 0;
}

.date {
  /* 2018. 03. 03 ~ 2018.: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 22px;
  color: #000000;
  letter-spacing: 0;
  line-height: 22px;
  text-align: right;
  margin-right: 26px;
  margin-bottom: 20px;
}

.container {
  padding: 75px 0 83px;
}

.card {
  padding: 52px 10px 0px 40px;
  /* Rectangle 48: */
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 20px 100px 20px;
  font-size: 0;
}

.card .profile {
  vertical-align: top;
  display: inline-block;
  width: 179px;
  margin-right: 48px;
}

.card .profile .profile-img {
  width: 179px;
  height: 179px;
  border-radius: 50%;
  background: #ddd;
  margin-bottom: 18px;
}

.card .profile .state {
  width: 100%;
  /* 3개월계약대기: */
  font-family: AppleSDGothicNeo-SemiBold;
  font-size: 22px;
  color: #2ebd41;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
}

.card .data {
  width: 100%;
  vertical-align: top;
  display: inline-block;
  font-size: 0;
}

.card .data .top,
.card .data .bottom {
  width: 100%;
  padding: 3px 0 17px;
  text-align: left;
}

.card .data .top {
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 40px;
}

.card .data .col {
  display: inline-block;
  width: 30%;
}

.card .data .col .data-name {
  /* 좋아요: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 20px;
  white-space: nowrap;
}

.card .data .col .data-val {
  /* 430개: */
  font-family: AppleSDGothicNeo-Bold;
  font-size: 13px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
}

.payment-button {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  font-family: AppleSDGothicNeo-Medium;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  width: 323px;
  height: 60px;
}

.status-wrap {
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
  font-size: 0;
  white-space: nowrap;
}
.status-wrap button {
  /* Rectangle Copy 7: */
  background: #ffffff;
  border: 1px solid #d9dee8;
  border-radius: 4px;
  /* 신용카드: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 16px;
  color: #092056;
  text-align: center;
    margin: 0.5rem;
  border: 1px solid #092056;
}
.status-wrap button.selected {
  background: #092056;
  color: #ffffff;
  border: none;
}
.status-wrap a {
  /* 결제방법: */
  font-family: AppleSDGothicNeo-SemiBold;
  font-size: 26px;
  color: #000000;
  text-align: center;
  line-height: 22px;
  vertical-align: middle;
  margin-left: 58px;
  margin-right: 52px;
  position: relative;
  bottom: 2px;
  text-decoration: none;
}

.payment-wrap {
  width: 100%;
  text-align: left;
  margin-bottom: 40px;
  font-size: 0;
  white-space: nowrap;
}
.payment-wrap button {
  /* Rectangle Copy 7: */
  background: #ffffff;
  border: 1px solid #d9dee8;
  border-radius: 4px;
  /* 신용카드: */
  font-family: AppleSDGothicNeo-Regular;
  font-size: 16px;
  color: #092056;
  text-align: center;
  width: 241px;
  height: 60px;
  margin-right: 23px;
  border: 1px solid #092056;
}
.payment-wrap button.selected {
  background: #092056;
  color: #ffffff;
  border: none;
}
.payment-wrap a {
  /* 결제방법: */
  font-family: AppleSDGothicNeo-SemiBold;
  font-size: 26px;
  color: #000000;
  text-align: center;
  line-height: 22px;
  vertical-align: middle;
  margin-left: 58px;
  margin-right: 52px;
  position: relative;
  bottom: 2px;
  text-decoration: none;
}

table.for-mobile tbody tr td {
    word-break: keep-all;
    width: 50%;
    font-family: AppleSDGothicNeo-Regular;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: right;
}

table.for-mobile {
    margin: 0 5%;
    padding-bottom: 20px;
    margin-bottom: 30px;
}

table.for-mobile tbody tr td.bold {
    font-family: AppleSDGothicNeo-SemiBold;
    text-align: left;
}
table.for-mobile {
    border-spacing: 13px;
}



@media screen and (max-width: 640px) {
    .data.for-web { display: none;}

    h1 {font-size: 2rem; margin-bottom: .1rem; }
    h2 { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: 0rem;}

    .container { width: 100%; padding: 2.3rem 2.5rem 3.3rem; box-sizing: border-box;}
    .date { font-size: 1rem; line-height: 1.2rem; margin-bottom: .3rem; padding-bottom: 0; text-align: right; margin-right: 0; margin-bottom: 1.5rem;}

    .card {padding: 1.5rem 0 0;}
    .card .profile {margin-right: 0; width: auto;}
    .card .profile .profile-img {margin-bottom: 1.5rem; width: 10rem; height: 10rem; margin-right: 0;}
    .card .profile .state {margin-bottom: .1rem; font-size: 1.5rem;}

    table.for-mobile { padding-bottom: 0; border-spacing: 1rem; margin: 0 1rem .9rem; }
    table.for-mobile tbody tr td { font-size: 1.4rem; line-height: 2rem;}

    .payment-wrap a {margin: 0 1rem 0 0; font-size: 1.4rem; position: relative; bottom: .5rem;}
    .payment-wrap button { width: 10.3rem; height: 3rem; font-size: 1.2rem; margin-right: .9rem;}
    .status-wrap a {margin: 0 1rem 0 0; font-size: 1.4rem; position: relative; bottom: .5rem;}
    .status-wrap button { width: 10.3rem; height: 3rem; font-size: 1.2rem; margin-right: .9rem;}

    .payment-button {width: 20.2rem; height: 4rem; font-size: 1.2rem; }

}

</style>
