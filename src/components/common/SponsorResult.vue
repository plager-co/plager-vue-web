<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
              <div class="date">
                <a class='count'>8/10회</a>
                <a class="label">기간</a>
                <div class="date-box">
                    <input type="date" disabled name="start" id="">
                </div>
                <a class="label in">~</a>
                <div class="date-box">
                    <input type="date" disabled name="end" id="">
                </div>
            </div>

              <div class="card">
                <div class="profile">
                    <div class="profile-img"></div>
                    <div class="state">3개월 계약대기</div>
                </div>
                <div class="data">
                    <div class="top">
                        <div class="col" v-for='(data, i) in paymentData.top' :key='i'>
                            <div class="data-name">{{data.dataName}}</div>
                            <div class="data-val">{{data.dataVal}}</div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="col" v-for='(data, i) in paymentData.bottom' :key='i'>
                            <div class="data-name">{{data.dataName}}</div>
                            <div class="data-val">{{data.dataVal}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <h1>광고 성과 현황</h1>
            <div class="chart-wrap">
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
                <div class="chart"></div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      paymentData: {
        top: [
          { dataName: "노출", dataVal: "8회" },
          { dataName: "도달", dataVal: "10회" },
          { dataName: "좋아요", dataVal: "430개" },
          { dataName: "댓글", dataVal: "230개" },
          { dataName: "저장", dataVal: "120회" }
        ],
        bottom: [
          { dataName: "동영상", dataVal: "300개" },
          { dataName: "동영상재생", dataVal: "3499회" },
          { dataName: "광고주계정 인바운드", dataVal: "0회" },
          { dataName: "중복팔로워", dataVal: "230명" }
        ]
      }
    };
  }
};
</script>

<style scoped>
h1 {
  /* 광고 성과 현황: */
  font-weight: 400;
  font-size: 146px;
  color: #000000;
  letter-spacing: 0;
  margin-bottom: 83px;
}

h2 {
  /* @abcdef123: */
  font-weight: 700;
  font-size: 28px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  margin: 0 0 -5px 0;
}

.date {
  /* 2018. 03. 03 ~ 2018.: */
  font-weight: 400;
  font-size: 0;
  color: #000000;
  letter-spacing: 0;
  line-height: 22px;
  text-align: right;
  margin-bottom: 30px;
}

.container {
  padding: 75px 0 83px;
}

.card {
  width: 100%;
  padding: 42px 45px 32px;
  /* Rectangle 48: */
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 83px;
  box-sizing: border-box;
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
  font-weight: 700;
  font-size: 22px;
  color: #2ebd41;
  letter-spacing: 0;
  text-align: center;
  line-height: 22px;
}

.card .data {
  width: calc(100% - 227px);
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
  width: 20%;
}

.card .data .col .data-name {
  /* 좋아요: */
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 20px;
}

.card .data .col .data-val {
  /* 430개: */
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
}

.chart-wrap {
  text-align: left;
  width: 100%;
  margin-bottom: 16px;
  font-size: 0;
}

.chart {
  display: inline-block;
  width: calc(50% - 45px);
  min-height: 520px;
  margin-right: 90px;
  margin-bottom: 126px;
  border-radius: 5px;
  background-color: #ffffff;
}

.chart:nth-child(2n) {
  margin-right: 0;
}

.date .count {
  /* 8/10회: */
  font-weight: 700;
  font-size: 28px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  margin-right: 56px;
}

.date .label {
  /* 기간: */
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  letter-spacing: 0;
  line-height: 22px;
  margin-right: 23px;
}

.date .label.in {
  margin: 0 17px;
}

.date-box:after {
  content: "";
  position: absolute;
  right: 12px;
  top: 15px;
  width: 16px;
  height: 10px;
  display: block;
  /*background-image: url("../assets/dropdownArrow.svg");*/
}

.date-box {
    font-family: AppleSDGothicNeo, 'Spoqa Han Sans', 'Avenir', Helvetica, Arial, sans-serif;
  display: inline-block;
  position: relative; /* Base: */
  background: #ffffff;
  bottom: -10px;
  border: 1px solid #dfe3e9;
  border-radius: 4px;
  overflow: hidden;
}

.date-box input[type="date"] {
  height: 100%;
  font-size: 13px;
  padding: 7px 10px 7px 20px;
  color: #002257;
  letter-spacing: -1px;
  line-height: 22px;
  border: none;
  margin-right: -20px;
  /*appearance: none;*/
}


@media screen and (max-width: 640px) {

  .date .count { font-size: 1.2rem; }
  
}
</style>