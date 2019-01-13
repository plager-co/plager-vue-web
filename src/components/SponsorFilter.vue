<template>
    <div class='viewer'>
        <div class="section first">
            <div class="container">
                <div class="cell">
                    <div class="title">스폰서 필터 선택</div>
                    <div class="desc">
                        상세하게 설정할수록 성과가 높습니다.
                    </div>
                </div>
            </div>
        </div>
        <div class="section s1">
            <div class="container">
                <div class="part p1">
                    <div class="title-wrap">
                        <div class="step">step1</div>
                        <div class="title">업종</div>
                    </div>
                    <span class='msg for-web'>*2가지 중복선택 가능합니다.</span>
                    <div class="category-wrap">
                        <div class="item" :class='{selected: item.isSelected}' @click='item.isSelected ? item.isSelected = false : (selectedCategoryList.length < 2 ? item.isSelected = !item.isSelected :"")' :value='i' v-for='(item, i) in categoryList' :key='i'>{{item.value}}</div>
                    </div>
                    <span class='msg for-mobile'>*2가지 업종 중복선택 가능합니다.</span>
                </div>
                <div class="part p2">
                    <div class="title-wrap">
                        <div class="step">step2</div>
                        <div class="title">팔로워</div>
                    </div>
                    <div class="title-desc">
                        <div class="msg">직접입력</div>
                        <div class="input-wrap">
                          <div>
                            <input type="number" placeholder='최저 팔로워' v-model='s2Value[0]'>
                          </div>
                            <a>~</a>
                          <div>
                            <input type="number" placeholder='최고 팔로워' v-model='s2Value[1]'>
                          </div>
                        </div>
                    </div>
                    <vue-slider
                      v-model = 's2Value'
                      tooltipDir = 'bottom'
                      :piecewise-label = "!isMobile"
                      :tooltip = "isMobile ? 'always' : false"
                      :min = "0"
                      :max = "1000"
                      :height = '5'
                      :slider-style = '{
                        borderRadius: "3px",
                        width: "20px",
                        height: "20px",
                        top: "-7px",
                        boxShadow: "none",
                        background: "url(" + require("../assets/bar-handdler.svg") + ") center no-repeat",
                      }'
                      :process-style = '{
                        backgroundColor: "#092056"
                      }'
                      :tooltip-style = '{
                        fontSize: "1rem",
                        backgroundColor: "#ffffff",
                        borderColor: "#dddddd",
                        borderWidth: "1px",
                        color: "#a5adba",
                        borderRadius: "3px"
                      }'
                      :merge-formatter = '(v1, v2) => {
                        if( 0 <= v1 && 0 <= v2 ) {
                          let V1 = v1 === 0 ? "0" : v1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "K"
                          let V2 = v2 === 0 ? "0" : v2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "K"

                          return V1 + " ~ " + V2
                        }
                      }'
                      :formatter = 'value => {
                        return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/\B(?=(\d{3})+(?!\d))/g, "") + ",000" : value ;
                      }'
                    >
                        <div class='custom-label' slot='label' slot-scope='{ label, active }' v-if='
                          (!label && label.toString() === "0") || (label ? label.toString().indexOf("00,000") > 0 : false)
                        '>
                          {{ label }}
                        </div>
                    </vue-slider>
                    <!-- <table class='gaze'>
                        <thead>
                            <th v-for='i in 8' :key='i' dragable="true"
                                    @dragover="dragOn"
                                    :value='i'>
                                <div class="bar"
                                    :class='{
                                    "start": i === followerRange.start,
                                    "end": i === followerRange.end,
                                    "in": followerRange.start < i && i < followerRange.end
                                }'>
                                </div>
                                <div class="btn"
                                ></div>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td v-for='(val, i) in followerList' :class='{hidden: i + 1 !== followerRange.start && i + 1 !== followerRange.end}' :key='i' :index='i' @click='followerClick'>
                                  <a>{{val}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table> -->
                </div>
                <div class="part p3">
                    <div class="title-wrap">
                        <div class="step">step3</div>
                        <div class="title">노출기간</div>
                    </div>
                    <div class='msg'>*인플루언서의 팔로워는 지속적으로 늘어나기 때문에 노출기간이 길수록 비용적으로 유리합니다.</div>
                    <div class="category-wrap">
                        <div class="item" :class='{selected: item.value === currentRangeBtn}' @click='currentRangeBtn = item.value' v-for='(item, i) in monthList' :key='i'>{{item.value}}</div>
                    </div>
                </div>
                <div class="part p4">
                    <div class="title-wrap">
                        <div class="step">step4</div>
                        <div class="title">타겟 연령층</div>
                    </div>
                    <div class="title-desc">
                        <div class="input-wrap" @click='s4Value = ["10세", "60세 이상"]'>
                            <input type="checkbox" name="keep" id="keep" v-model='isAllAge' disabled>
                            <label for="keep">
                                <span class='checkbox'></span>
                                <span class="desc">모든 연령</span>
                            </label>
                        </div>
                    </div>
                    <vue-slider
                      v-model = 's4Value'
                      tooltipDir = 'bottom'
                      :piecewise-label = "!isMobile"
                      :tooltip = "isMobile ? 'always' : false"
                      :data = '[ "10세", "15세", "20세", "25세", "30세", "35세", "40세", "45세", "50세", "55세", "60세 이상"]'
                      :height = '5'
                      :slider-style = '{
                        borderRadius: "3px",
                        width: "20px",
                        height: "20px",
                        top: "-7px",
                        boxShadow: "none",
                        background: "url(" + require("../assets/bar-handdler.svg") + ") center no-repeat",
                      }'
                      :process-style = '{
                        backgroundColor: "#092056"
                      }'
                      :tooltip-style = '{
                        fontSize: "1rem",
                        backgroundColor: "#ffffff",
                        borderColor: "#dddddd",
                        borderWidth: "1px",
                        color: "#a5adba",
                        borderRadius: "3px"
                      }'
                      :merge-formatter = '(v1, v2) => {
                        return v1 + " ~ " + v2
                      }'
                    >
                        <div class='custom-label' slot='label' slot-scope='{ label, active }'>
                          {{ label }}
                        </div>
                    </vue-slider>
                    <!-- <table class='gaze'>
                        <thead>
                            <th v-for='i in 11' :key='i'
                                    @dragover="dragOn"
                                    :value='i'>
                                <div class="bar"
                                    :class='{
                                    "start": i === targetAgeRange.start,
                                    "end": i === targetAgeRange.end,
                                    "in": targetAgeRange.start < i && i < targetAgeRange.end
                                }'>
                                </div>
                                <div class="btn"
                                    :value='i'
                                    v-show='i === targetAgeRange.start || i === targetAgeRange.end'
                                    draggable="true"
                                    @dragstart="drag"
                                    @touchstart='drag'
                                    @touchmove='touchCalc'
                                    :btn-type='targetAgeRange.start === i ? "start" : "end"'
                                    data-type='targetAge'
                                ></div>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td v-for='(val, i) in targetAgeList'
                                :class='{
                                  hidden: i + 1 !== targetAgeRange.start && i + 1 !== targetAgeRange.end
                                  }'
                                :key='i' :index='i' @click='followerClick'>
                                  <a>{{val}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table> -->
                </div>
                <div class="part p5">
                    <div class="title-wrap">
                        <div class="step">step5</div>
                        <div class="title">타겟 성별</div>
                    </div>
                    <div class="category-wrap">
                        <div class="item" :class='{selected: currentGenderBtn === item}' @click='currentGenderBtn = item' v-for='(item, i) in genderList' :key='i'>{{item}}</div>
                    </div>
                </div>
                <div class="part p6">
                    <div class="title-wrap">
                        <div class="step">step6</div>
                        <div class="title">예산</div>
                    </div>
                    <div class="title-desc">
                        <div class="msg">직접입력</div>
                        <div class="input-wrap">
                          <div>
                            <input type="number" placeholder='최저 금액' v-model='s6Value[0]'>
                          </div>
                          <a>~</a>
                          <div>
                            <input type="number" placeholder='최고 금액' v-model='s6Value[1]'>
                          </div>
                        </div>
                    </div>
                    <vue-slider
                      v-model = 's6Value'
                      tooltipDir = 'bottom'
                      :piecewise-label = "!isMobile"
                      :tooltip = "isMobile ? 'always' : false"
                      :min = "0"
                      :max = "5000"
                      :height = '5'
                      :slider-style = '{
                        borderRadius: "3px",
                        width: "20px",
                        height: "20px",
                        top: "-7px",
                        boxShadow: "none",
                        background: "url(" + require("../assets/bar-handdler.svg") + ") center no-repeat",
                      }'
                      :process-style = '{
                        backgroundColor: "#092056"
                      }'
                      :tooltip-style = '{
                        fontSize: "1rem",
                        backgroundColor: "#ffffff",
                        borderColor: "#dddddd",
                        borderWidth: "1px",
                        color: "#a5adba",
                        borderRadius: "3px"
                      }'
                      :merge-formatter = '(v1, v2) => {
                        if( 0 <= v1 && 0 <= v2 ) {
                          let V1 = v1 === 0 ? "0원" : v1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "만원"
                          let V2 = v2 === 0 ? "0원" : v2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "만원"

                          return V1 + " ~ " + V2
                        }
                      }'
                      :formatter = 'value => {
                        return value ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "만원" : value + "원" ;
                      }'
                    >
                        <div class='custom-label' slot='label' slot-scope='{ label, active }' v-if='
                          (label && label.toString() === "0원") || (label ? label.toString().indexOf(",000만원") > 0 : false)
                        '>
                          {{ label }}
                        </div>
                    </vue-slider>
                    <!-- <table class='gaze'>
                        <thead>
                            <th v-for='i in 8' :key='i'
                                    @dragover="dragOn"
                                    :value='i'>
                                <div class="bar"
                                    :class='{
                                    "start": i === budgetRange.start,
                                    "end": i === budgetRange.end,
                                    "in": budgetRange.start < i && i < budgetRange.end
                                }'>
                                </div>
                                <div class="btn"
                                    :value='i'
                                    v-show='i === budgetRange.start || i === budgetRange.end'
                                    draggable="true"
                                    @dragstart="drag"
                                    @touchstart='drag'
                                    @touchmove='touchCalc'
                                    :btn-type='budgetRange.start === i ? "start" : "end"'
                                    data-type='budget'
                                ></div>
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td v-for='(val, i) in budgetList' :class='{hidden: i + 1 !== budgetRange.start && i + 1 !== budgetRange.end}' :key='i' :index='i' @click='followerClick'>
                                  <a>{{val}}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table> -->
                </div>
                <button @click='isSearched = true'>선택 완료</button>
            <!-- Result -->
                <div class="card" v-if='isSearched'>
                    <h1 style="padding-bottom: 20px;">선택한 필터 정보</h1>
                    <div class="cols">
                        <div class="col">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>업종</td>
                                        <td>
                                          <span v-if='selectedCategoryList.length' class='comma' v-for='(val, i) in selectedCategoryList' :key='i'>{{val.value}}</span>
                                          <span v-if='!selectedCategoryList.length' class='comma'>없음</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>팔로워</td>
                                        <td>{{s2Value[0]}}K ~ {{s2Value[1]}}K</td>
                                    </tr>
                                    <tr>
                                        <td>노출기간</td>
                                        <td>{{currentRangeBtn}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>타겟 연령층</td>
                                        <td>{{s4Value[0]}} ~ {{s4Value[1]}}</td>
                                    </tr>
                                    <tr>
                                        <td>타겟 성별</td>
                                        <td>{{currentGenderBtn}}</td>
                                    </tr>
                                    <tr>
                                        <td>예산</td>
                                        <td>{{s6Value[0]}}만원 ~ {{s6Value[1]}}만원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                <button class='navy' @click='createAd()'>접수 완료</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  components: { vueSlider },
  created: async function(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
      if (!this.$store.getters.company_name || !this.$store.getters.company_category || !this.$store.getters.officer_name
          || !this.$store.getters.tax_email || !this.$store.getters.contact
          || !this.$store.getters.picture_link || !this.$store.getters.document_link){


        this.$router.push('/my-page');
        this.$store.commit('openAlertPopupMsg', '사용자 정보를 등록해주세요.')

      }

      await this.$store.dispatch('fetchAdBySponsorId', this.$store.getters.user_id);

      var adsRaw = this.$store.getters.ads;
      var hasRegisteredAd = false;
      adsRaw.forEach(function (val) {
          if (val.status_text === 'registered') {
              hasRegisteredAd = true;
          }
      });

      if(hasRegisteredAd){
        this.$router.push('/my-page');
        this.$store.commit('openAlertPopupMsg', '이미 등록 중인 광고가 있습니다.')
      }

  },
  data: function() {
    return {
      isMobile: false,
      s2Value: [1, 1000],
      s4Value: ['10세', "60세 이상"],
      s6Value: [50, 5000],
      currentRangeBtn: "1개월",
      currentGenderBtn: "모두",
      isSearched: false,
      categoryList: [
        {
          value: "뷰티",
          isSelected: false
        },
        {
          value: "패션",
          isSelected: false
        },
        {
          value: "유아용품",
          isSelected: false
        },
        {
          value: "식음료",
          isSelected: false
        },
        {
          value: "스포츠",
          isSelected: false
        },
        {
          value: "전자기기",
          isSelected: false
        },
        {
          value: "자동차",
          isSelected: false
        },
        {
          value: "홈인테리어",
          isSelected: false
        },
        {
          value: "기타",
          isSelected: false
        }
      ],
      monthList: [
        {
          value: "1개월",
          isSelected: false
        },
        {
          value: "3개월",
          isSelected: false
        },
        {
          value: "6개월",
          isSelected: false
        },
        {
          value: "12개월",
          isSelected: false
        }
      ],
      genderList: ["남성", "여성", "모두"],
    };
  },
  computed: {
    selectedCategoryList: function(){
      const val = this.categoryList.filter(x => x.isSelected == true)

      return val
    },
    isAllAge: function(){
      return this.s4Value[0] === "10세" && this.s4Value[1] === "60세 이상"
    },
      createAd: function(){
        var categoryList = []

        var selectedCategory = this.categoryList.filter(x => x.isSelected == true)

        selectedCategory.forEach( function(val, index, arr) {
              categoryList.push(val.value);
          });

        var userData =  {
              sponsor_id: this.$store.getters.user_id,
              required_influencer_follower: this.s2Value[0] + 'K ~ '+ this.s2Value[1] + 'K',
              target_category: categoryList.join(),
              target_age: this.s4Value[0] + ' ~ '+ this.s4Value[1],
              target_sex: this.currentGenderBtn,
              period: this.currentRangeBtn,
              budget: this.s6Value[0] + '만원 ~ '+ this.s6Value[1] + '만원',
              status: 0,
              status_text: 'registered',
          }

          this.$store.commit('setCurrentRangeBtn', this.currentRangeBtn);

          this.$store.dispatch('createAd', userData)
      }
  },
  methods: {
    handleResize: function() {
      this.isMobile = window.innerWidth < 640
    },
    completeJoin: function() {
      this.$store.commit("openCompletePopup", "인플루언서 가입이 완료되었습니다.");
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}

h2 {
  font-size: 22px;
  color: #000000;
  text-align: center;
  line-height: 42px;
  font-weight: 500;
}

.section.first {
  height: 400px;
  background: url("../assets/sponsorFilterTop.png") 50% 50% no-repeat;
  background-size: cover;
}

.section .container {
  max-width: 1254px;
  width: 100%;
  display: table;
  padding-top: 1.6rem;
}

.section .container .cell {
  display: table-cell;
  vertical-align: middle;
}

.section.s1 .container {
  padding-top: 108px;
}

.cell .title {
  font-size: 57px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 12px;
}
.cell .desc {
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  line-height: 42px;
}

/* input */

.input-set {
  width: 100%;
  margin: auto;
  text-align: left;
  margin-bottom: 14px;
}
.input-set .input-wrap {
  position: relative;
}

.input-set .label {
  text-align: left;
  color: #002257;
  margin-bottom: 7px;
  box-sizing: border-box;
  font-size: 13px;
  color: #97a3b4;
  line-height: 22px;
}
.input-set input[type=number],
.input-set input[type=number],
.input-set select,
.input-set input[type=password] {
  background-color: #ffffff;
  border: 1px solid #d9dee8;
  border-radius: 4px;
  height: 36px;
  padding-left: 15px;
  font-size: 13px;
  color: #002257;
  line-height: 22px;
  width: 100%;
  box-sizing: border-box;
}

.category-wrap {
  width: 100%;
  font-size: 0;
  text-align: left;
  margin-bottom: 28px;
}

.category-wrap .item {
  display: inline-block;
  width: calc((100% - 56px)/9);
  margin-right: 7px;
  background: #ffffff;
  border: 1px solid #d9dee8;
  border-radius: 4px;
  font-size: 14px;
  color: #092056;
  letter-spacing: 2.55px;
  text-align: center;
  padding: 14px 0;
  box-sizing: border-box;
}

.p3 .category-wrap .item,
.p5 .category-wrap .item {
  width: calc((100% - 48px)/4);
  margin-right: 16px;
}

.category-wrap .item:last-child {
  margin-right: 0;
}
.category-wrap .item.selected {
  background: #092056;
  color: white;
  border: none;
}

/* part */

.part {
  width: 100%;
  margin-bottom: 108px;
  text-align: left;
}

.part.p2 {
  margin-bottom: 109px;
}

.part:last-child {
  margin-bottom: 102px;
}

.part .title-wrap {
  margin-right: 20px;
  display: inline-block;
  text-align: left;
  margin-bottom: 20px;
}
.part .title-wrap .step {
  width: 100%;
  font-size: 14px;
  color: #000000;
  font-weight: 600;
}
.part .title-wrap .title {
  width: 100%;
  font-size: 32px;
  color: #000000;
  font-weight: 600;
}

.part.p1 .msg,
.part.p3 .msg {
  display: inline-block;
  font-size: 18px;
  color: #a5adba;
  letter-spacing: 0;
}

.part.p2 .title-desc,
.part.p4 .title-desc,
.part.p6 .title-desc {
  display: inline-block;
}
.part.p2 .title-desc .msg,
.part.p6 .title-desc .msg {
  font-size: 12px;
  color: #97a3b4;
  line-height: 22px;
  margin-bottom: 6px;
}

.part.p2 .title-desc .input-wrap div,
.part.p6 .title-desc .input-wrap div { position: relative; display: inline-block; box-sizing: border-box; }
.part.p2 .title-desc .input-wrap div:after,
.part.p6 .title-desc .input-wrap div:after {
  content: 'K';
  position: absolute;
  display: inline-block;
  width: auto;

  top: -4px;
  right: 20px;
  font-size: 13px;
  color: #002257;
  line-height: 22px;
  position: relative;
  bottom: 5px;
}
.part.p6 .title-desc .input-wrap div:after {
  content: '만원';
  right: 34px;
}

.part.p2 .title-desc .input-wrap a,
.part.p6 .title-desc .input-wrap a {
  font-size: 13px;
  color: #002257;
  line-height: 22px;
  position: relative;
  bottom: 5px;
  padding: 0 7px;
}

.part.p2 .title-desc .input-wrap input[type=number],
.part.p6 .title-desc .input-wrap input[type=number] {
  background: #ffffff;
  border: 1px solid #dfe3e9;
  border-radius: 4px;
  font-size: 13px;
  color: #002257;
  line-height: 22px;
  height: 30px;
  width: 106px;
  vertical-align: bottom;
  padding-left: 15px;
  box-sizing: border-box;
}
/*
::-webkit-input-placeholder {
    color: #002257;
} */

label .desc {
  font-size: 20px;
  color: #092056;
  letter-spacing: 0;
  text-align: center;
  position: relative;
  top: 2px;
}

.gaze {
  margin-top: 28px;
  width: 100%;
  table-layout: fixed;
  text-align: center;
  border-spacing: 0;
}

.gaze tbody {
  font-size: 18px;
  color: #a5adba;
  letter-spacing: 0;
  text-align: center;
}
.gaze thead th {
  height: 20px;
  padding: 0 0 30px;
  position: relative;
}
.gaze thead th .bar {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 5px;
  background-color: #e9e9e9;
}

.gaze thead th .bar::after {
  display: inline-block;
  width: 50%;
  position: absolute;
  right: 0;
  height: 5px;
  background-color: #092056;
}

.gaze thead th .bar.start::after {
  content: "";
  right: 0;
}

.gaze thead th .bar.end::after {
  content: "";
  left: 0;
}

.gaze thead th .bar.start::before,
.gaze thead th .bar.end::before {
  content: "";
  display: inline-block;
  position: relative;
  bottom: 7px;
  z-index: 1;
  width: 20px;
  height: 20px;
  background: url("../assets/bar-handdler.svg") 50% 50% no-repeat;
  background-size: cover;
}

.gaze thead th .btn {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gaze thead th .bar.in {
  background-color: #092056;
}

button {
  /* Bg: */
  border: none;
  width: 382px;
  height: 60px;
  background: #f91c3d;
  border-radius: 5px;
  /* 적용하기: */
  font-family: AppleSDGothicNeo-Medium;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 56px;
}

button.navy {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  margin: 0;
}

.card {
  /* Rectangle 48 Copy 4: */
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 52px 60px 45px;
  box-sizing: border-box;
  margin-bottom: 99px;
}

.card h1 {
  /* 선택한 필터 정보: */
  font-family: AppleSDGothicNeo-Medium;
  font-size: 40px;
  color: #000000;
  margin: 0;
  text-align: center;
  line-height: 48px;
}

.card .cols {
  width: 100%;
  font-size: 0;
  margin-bottom: 50px;
}

.card .cols .col {
  width: 50%;
  padding: 7px 0 7px;
  display: inline-block;
  vertical-align: top;
  min-height: 30px;
  box-sizing: border-box;
}

.card .cols .col:last-child {
  border-left: 1px solid rgba(151, 151, 151, 0.5);
}

.card .cols .col table {
  font-size: 30px;
  color: #000000;
  letter-spacing: 0.3px;
  line-height: 50px;
  text-align: left;
}

.card .cols .col table tr td:first-child {
  font-weight: 600;
  padding-left: 49px;
  width: 180px;
  padding-top: 7px;
}

/* @media screen and (max-width: 640px) {
    .section.first { height: 16.9rem;}
    .cell .title { font-size: 2rem; line-height: 2rem;}
    .cell .desc { font-size: 1.2rem; line-height: 1.5rem;}

    .section.gray .container { padding-top: 2.5rem;}
    h1 { font-size: 2.4rem; line-height: 1; margin-bottom: .7rem;}
    h2 { font-size: 1.2rem; line-height: 1.9rem; margin-bottom: .8rem;}
    .card { width: auto; padding: 0; margin: 0 0 1.8rem; background-color: transparent; box-shadow: none;}
    .card .input-wrap {padding: 0 3rem; box-sizing: border-box;}
    .card .input-wrap > .half {width: 100%;}
    .input-set .input-wrap {padding: 0;}
    .category-wrap .item {width: calc((100% - 1rem)/3); margin-right: .5rem; font-size: 1.2rem;}
    .category-wrap .item:nth-child(3n) {margin-right: 0;}

    .card button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}
    .category-wrap {text-align: right}

} */

.part.p1 .msg.for-mobile {
  display: none;
}
@media screen and (max-width: 640px) {
  .section.s1 .container {
    padding-top: 1.6rem;
  }
  .part.p1 .msg.for-web {
    display: none;
  }
  .section.first {
    height: 12.3rem;
  }
  .section {
    padding: 0 3rem;
    box-sizing: border-box;
  }
  .cell .title {
    font-size: 2rem;
    line-height: 1.9rem;
  }
  label .desc,
  .cell .desc {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  .category-wrap {
    margin-bottom: 0.3rem;
  }
  .category-wrap .item {
    width: calc((100% - 1rem)/3);
    margin-right: 0.5rem;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .category-wrap .item:nth-child(3n) {
    margin-right: 0;
  }

  tbody td.hidden {
    visibility: hidden;
  }


  button {
    width: 20.2rem;
    height: 4rem;
    font-size: 1.2rem;
  }

  .gaze {
    margin-top: 1rem;
  }

  .part {
    margin-bottom: 3.8rem;
  }
  .part .title-wrap .step {
    font-size: 0.9rem;
  }
  .part .title-wrap .title {
    font-size: 1.6rem;
  }
  .part.p1 .msg,
  .part.p3 .msg {
    font-size: 0.7rem;
    width: 100%;
    text-align: right;
  }

  .part.p3 .title-wrap {
    margin-right: 0;
  }
  .part.p3 .msg {
    width: calc(100% - 7rem);
    float: right;
    margin-top: 1.5rem;
  }

  .part.p2 .title-desc,
  .part.p6 .title-desc {
    float: right;
    margin-top: 1.8rem;
  }
  .part.p2 .title-desc .msg,
  .part.p6 .title-desc .msg {
    font-size: 1rem;
    margin-right: .4rem;
    position: relative;
    bottom: .5rem;
    display: inline-block;
  }
  .part.p2 .title-desc .input-wrap,
  .part.p6 .title-desc .input-wrap {
    display: inline-block;
  }
  .part.p2 .title-desc .input-wrap input[type=number],
  .part.p6 .title-desc .input-wrap input[type=number] {
    width: 6.8rem;
    height: 1.8rem;
    font-size: 1rem;
    text-align: left;
    padding: 0 .5rem;;
  }

  .part.p3 .category-wrap .item {
    width: calc(50% - 0.35rem);
    margin-right: 0.7rem;
    padding: 0.9rem;
  }
  .part.p3 .category-wrap .item:nth-child(2n) {
    margin-right: 0;
  }

  .part.p5 .category-wrap .item {
    width: calc(33.3333% - 0.3333rem);
    margin-right: 0.5rem;
    padding: 0.9rem;
  }
  .part.p5 .category-wrap .item:nth-child(3) {
    margin-right: 0;
  }

  .card {
    width: calc(100% + 2rem);
    padding: 1.7rem 1.3rem;
    margin: 0 -1rem;
    margin-bottom: 2.4rem;
    padding-bottom: 2.5rem;
  }
  .card h1 {
    font-size: 2rem;
    line-height: 2.4rem;
    /* margin-bottom: 1.1rem; */
  }
  .card .cols {
    margin-bottom: 1rem;
  }
  .card .cols .col {
    width: 100%;
    display: block;
    padding: 0;
    min-height: unset;
  }
  .card .cols .col:last-child {
    border-left: 0;
  }
  .card .cols .col table {
    font-size: 1.4rem;
    line-height: 3rem;
  }
  .card .cols .col table tr td:first-child {
    padding-left: 1.5rem;
    width: 8.3rem;
  }

  .part.p1 .msg.for-mobile {
    display: block;
    text-align: right;
  }

  .part.p1 {
    margin-bottom: 2.4rem;
  }

  .part.p4 {
    margin-bottom: 4rem;
  }

  .part.p2,
  .part.p4,
  .part.p6 {font-size: 0; margin-bottom: 7.2rem;}

  .part.p2 .title-wrap,
  .part.p6 .title-wrap {margin-right: 0;}

  .part.p6 .title-desc .input-wrap a,
  .part.p2 .title-desc .input-wrap a {
    padding: 0 .5rem;
  }

  .part.p2 .title-desc .input-wrap div,
  .part.p6 .title-desc .input-wrap div {max-width: 6.8rem; box-sizing: border-box; position: relative;}

  .part.p2 .title-desc .input-wrap div:after,
  .part.p6 .title-desc .input-wrap div:after {
    display: inline-block;
    content: 'K';
    top: 0;
    width: 0;
    top: .4rem;
    right: .5rem;
    font-size: 1rem;
    color: #002257;
    line-height: 1;
    position: absolute;
    padding: 0 7px;
  }

  .part.p6 .title-desc .input-wrap div:after {
     content: '만원';
     white-space: nowrap;
     right: 1.5rem;
  }

}

span.comma:after {content: ', '}
span.comma:last-child:after { content: ''}

@media screen and (min-width: 0\0) and (min-resolution: +72dpi) {
  /* IE9+ CSS */

  .category-wrap .item {
    width: calc((100% - 57px)/9);
  }

  .p3 .category-wrap .item,
  .p5 .category-wrap .item {
    width: calc((100% - 49px)/4);
  }
}

@media screen and (min-width: 0\0) and (min-resolution: +72dpi) and (max-width: 640px) {
  /* IE9+ CSS Mobile*/
  .category-wrap .item {
    width: calc((100% - 1rem - 1px)/3);
  }
  .part.p3 .category-wrap .item {
    width: calc(50% - 0.35rem - 0.5px);
  }
  .part.p5 .category-wrap .item {
    width: calc((100% - 1rem - 1px) / 3);
    margin-right: 0.5rem;
    padding: 0.9rem;
  }
  .card .cols .col {
    min-height: 0;
  }
}

  .custom-label {
    position: absolute;
    width: fit-content;
    top: 30px;
    left: -100px;
    right: -100px;
    margin: auto;
    font-size: 18px;
    color: #a5adba;
    letter-spacing: 0;
    white-space: nowrap;
    text-align:center;
  }

</style>

<style>

.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:before,
.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before {
  border-right-width: 3px;
  border-left-width: 3px;
}
.vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:after,
.vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:after {
  content: "";
  position: absolute;
  top: -8px;
  left: 50%;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border: 6px solid transparent\0;
  border-bottom-color: #ffffff;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  border-right-width: 3px;
  border-left-width: 3px;
}
</style>

