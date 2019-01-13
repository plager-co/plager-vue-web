<template>
  <div>
    <div class="section main">
      <div class="dim">
        <div class='content'>
          <div class="carousel-wrap">
            <carousel
              :loop='true'
              :autoplay='false'
              :autoplayTimeout='5000'
              :perPage='1'
              :autoplayHoverPause='true'
              :paginationEnabled='false'
              :navigationEnabled='true'
              :navigationClickTargetSize='30'
              navigationPrevLabel="<div class='arrow before'></div>"
              navigationNextLabel="<div class='arrow after'></div>"
            >
              <slide v-for='(text, i) in mainTextCarousel' :key='i'>
                <h2>{{text.subTitle}}</h2>
                <h1>
                  <span v-for='(val, i) in text.title' :key='i'>{{val}}<br class='for-mobile' v-if='i + 1 !== text.title.length'></span>
                </h1>
                <div class="p-wrap">
                  <p v-for='(desc, i) in text.description' :key='i'>
                    <span v-for='(val, i) in desc' :key='i'>{{val}}<br class='for-mobile' v-if='i + 1 !== desc.length'></span>
                    <br class='for-mobile' v-if='i + 1 !== text.description.length'>
                  </p>
                  <!-- <div class="logo-wrap">
                    <img class='form' src="../assets/form.png" alt="">
                    <img class='acart' src="../assets/acart.png" alt="">
                  </div> -->
                </div>
              </slide>
            </carousel>
          </div>
        </div>
        <div class="arrow-wrap">
          <img class='for-mobile inline-block' :src="require('../assets/arrow.svg')" alt="">
          <div class="mouse-animate"></div>
        </div>
      </div>
    </div>
    <div class="section second">
      <div class="container">
        <h1>
          결이 다른 브랜드 마케팅
        </h1>
        <div class="white-box">
          <div class="quotes-img left">
            <img src="../assets/quoLeft.svg" alt="">
          </div>
          <div class="quotes-img right">
            <img src="../assets/quoRight.svg" alt="">
          </div>
          <p>
            사람은 일정 시간이 지나면 보고 <br class='for-mobile'>기억한 정보를 잊어버리게 됩니다.<br>
            하지만 지속적인 반복학습을 통해 기억을 <br class='for-mobile'>오랫동안 유지시킬 수 있다는 연구자료를 응용하여<br>
            일정기간 반복적으로 노출시켜 사용자가 <br class='for-mobile'>무의식적으로 장기간 기억할 수 있게 합니다.
          </p>
          <div class='main'>헤르만 에빙하우스 - 망각곡선 1885년</div>
          <div class="sub">Hermann Ebbinghaus - Forgetting Curve(1885)</div>
        </div>
        <div class="chart">
          <div class="chart-wrap">
            <div class="svg-wrap">
              <chart-0></chart-0>
              <chart-0-m></chart-0-m>
            </div>
          </div>
          <div class="desc">S.I.M (SNS Imprinting Marketing) ‘광고로 <br class="for-mobile"> 보이지 않는 반복적인 노출’로 브랜드를 각인 시킬 수 있습니다.</div>
        </div>
      </div>
    </div>
    <div class="section third">
      <div class="container">
        <div class="container-cell">
          <div>
            <h1> HOW TO? </h1>
            <p>
              인플루언서의 다양한 셀프 이미지, 동영상에 <br class="for-mobile"> 로고를 가장 잘 보이는 위치에 넣어<br class="for-mobile">
              인플루언서 계정에 특정 횟수만큼 <br class="for-mobile"> 반복적으로 업로드하여 노출하게 됩니다. 
            </p>
            <button @click='$router.push("/login")'>SIM 서비스 소개서 보기</button>
          </div>
          <div>
            <img src="../assets/section-3-1.png" alt="">
            <span>Before</span>
          </div>
          <div>
            <img src="../assets/section-3-2.png" alt="">
            <span>After</span>
          </div>
        </div>
      </div>
    </div>
    <div class="section fourth">
      <div class="container">
        <h1>인플루언서의 일상과<br class="for-mobile"> 함께하는 '브랜드'</h1>
        <div class="mobile">

          <div class="full">
            <transition-group name='flip' tag='div' class='cell'>
              <div v-for='(val, i) in forImageChangeFull' :key='val' :class='{play: val % 6 === 3}' @click='slideImageClick'>
                <img :src="require(`../assets/section-4-full${(val % 6) + 1}.png`)" alt="" :value='val'>
              </div>
            </transition-group>
          </div>
          <!-- <div class="left">
            <transition-group name='flip' tag='div' class='cell'>
              <div v-for='i in forImageChangeLeft' :key='i' @click='slideImageClick'>
                <img :src="require(`../assets/section-4-left${i}.png`)" alt="" :value='i'>
              </div>
            </transition-group>
          </div> -->
          <div class="mobile-img" @click='changeImageFull'>
            <img src="../assets/section-4-1.png" alt="">
            <div class="screen" ref='videoContainer' :style='{backgroundImage: "url(" + currentImageUrl + ")"}'>
              <video-player 
                v-if='isScreenPlay'
                :options='playerOption'
                @ready='playerLoaded'
              />
            </div>
          </div>
          <div class="mobile-full">
              <div v-for='i in 6' :key='i' :class='{play: i % 6 === 3}' @click='slideImageClick'>
                <img :src="require(`../assets/section-4-full${(i % 6) + 1}.png`)" alt="" :value='i'>
              </div>
          </div>
          <!-- <div class="right">
            <transition-group name='flip' tag='div' class='cell'>
              <div v-for='i in forImageChangeRight' :key='i' @click='slideImageClick'>
                <img :src="require(`../assets/section-4-right${i}.png`)" alt="" :value='i'>
              </div>
            </transition-group>
          </div> -->
        </div>
        <p>
          계약된 기간동안 특정 횟수만큼 게시물에 LOGO를 넣어 <br class="for-mobile"> #해시태그와 함께 인플루언서 계정에 업로드 합니다.<br>
          자세한 내용은 광고주페이지에서 확인 할 수 있습니다. 
        </p>
        <button @click='$router.push("/login")'>광고주 페이지로 이동</button>
      </div>
    </div>
    <div class="section fifth">
      <div class="container">
        <h1>왜 플래거를 선택해야 하는가?</h1>
        <div class="part part1">
          <div class="text left">
            <div class="title">1. SIM 서비스 효과</div>
            <p class='for-web block'>1) 인플루언서의 이미지와 동영상 게시물에 LOGO를 반복적으로<br> 
              노출시켜 자연스럽게 장기간 기억할 수 있게 됩니다.<br>
              <br>
              2) 인플루언서의 신뢰를 바탕으로 기억된 브랜드는 온.오프라인을 통해<br> 
              노출되는 제품 또는 다양한 광고에 신뢰를 높히고 친숙한 이미지를 심어<br>
              CAC (Customer Acquisition Cost)는 줄어들고 Retention(재방문) 또는 <br>
	      재구매율이 상승하는 효과를 기대할 수 있습니다.
              <br>
	      <br>
              3) 신뢰도가 떨어지는 자동 매칭을 하지 않고 클라이언트가 요구하는 예산과 <br>
              업종에 맞는 인플루언서를 통계 데이터에 의해 리스트를 출력하고 광고주와의 <br>
              온,오프라인 미팅을 통해 연결하기 때문에 서비스의 신뢰도가 높습니다.
            </p>

            <p class='for-mobile block'>1) 인플루언서의 이미지와 동영상 <br> 게시물에 LOGO를 반복적으로 노출해<br>
              자연스럽게 장기간 기억하게 됩니다.<br>
              <br>
              2) 인플루언서의 신뢰를 바탕으로 <br> 기억된 브랜드는 온.오프라인을 통해 <br>노출되는
              제품 또는 다양한 광고에 <br>신뢰를 높히고 친숙한 이미지를<br>심어줄 수 있기 때문에
              CAC <br>(Customer Acquisition Cost)는<br> 줄어들고 Retention(재방문) 또는<br>
	      재구매율이 상승하는 효과를<br>기대할 수 있습니다.
              <br>
	      <br>
              3) 신뢰도가 떨어지는 자동 매칭을 하지 않고 클라이언트가<br> 요구하는 예산과 업종에
              맞는 인플루언서를 통계 데이터에<br> 의해 리스트를 출력하고 광고주와의 온,오프라인<br>
              미팅을 통해 연결하기 때문에 서비스의<br> 신뢰도가 높습니다.
            </p>
          </div>
          <div class='fifth-right' alt="">
            <img src="../assets/fifth-1.png" alt="">
            <div class="screen">
              <img src="../assets/mv.gif" alt="">
            </div>
          </div>
        </div>
        <div class="part part2">
          <div class="text right">
            <div class="title">2. 합리적인 비용 책정 프로그램</div>
            <p class='for-web'>
              팔로워 수로 책정하는 기존의 주먹구구식 비용산정에서 인플루언서의 <br>
              영향력 평가를 통해 정확하고 합리적으로 산출 할 수 있습니다. <br><br>
              영향력 수치와 비용은 플래거의 인비져블라이크 프로그램을 통해<br> 
              인플루언서의 engagement와 부정 프로그램 사용여부 및 <br> 
	      계정관리에 대한 종합적인 평가를 수치화해 <br>
              독자개발 알고리즘을 통해 도출해 낼 수 있습니다.
            </p>
            <p class='for-mobile'>
              팔로워 수로 책정하는 기존의 주먹구구식 광고<br> 산정에서 인플루언서의 영향력 평가를 통해
              정확하고<br> 합리적인 비용을 산출할 수 있습니다. <br><br>
              영향력 수치와 광고 비용은 플래거의 인비져블라이크<br> 프로그램을 통해 인플루언서의 engagement와<br> 
	      부정 프로그램 사용여부, 계정관리에 대한 종합적인 <br>평가를 수치화해 독자개발 알고리즘을 <br>
	      통해 도출해 낼 수 있습니다.
            </p>

 <div class="profile-wrap">
   <div class="profile" :class='{navy: profile.isNavy === true }' v-for='(profile, i) in profileList' :key='i'>
     <div class="profile-img" :style='{backgroundImage: "url(" + profile.profileImage + ")"}'></div>
     <div class="black-text">@{{profile.username}}</div>
     <div class="follow-text">팔로워 {{profile.follower}}</div>
     <div class="influ-text">영향력지수 <b>{{profile.percent}}%</b> </div>
     <div class="price-text">1회 노출비용</div>
     <div class="price-value">{{profile.price}}원</div>
   </div>
 </div>

          </div>
        </div>
        <div class="part part3">
          <div class="text left">
            <div class="title">3. 클라이언트를 위한 다양한 서비스</div>
            <p>
              플래거가 보유한 인비져블 라이크 프로그램을 활용하여
            </p>
            <div class="content-wrap">
              <div class="content" style="padding-left: 10px;">
                <div class="picto"></div>
                <h2>컨텐츠 제작</h2>
                <p class='for-web'>
                  SIM 서비스를 진행하고 있는 인플루언서의<br> 
                  다양한 이미지와 영상 게시물을 분석하여 컨텐츠<br>
		  제작을 별도로 진행합니다. 
                </p>
                <p class='for-mobile block'>
                  SIM 서비스를 진행하고 있는 인플루언서의 <br> 다양한 이미지와
                  영상 게시물을<br> 분석하여 컨텐츠를 제작을 별도로 진행합니다. 
                </p>
              </div>
              <div class="content">
                <div class="picto right"></div>
                <h2>마케팅 기획</h2>
                <p class='for-web'>
                  축적된 자체 데이터를 통해 온라인 마케팅<br> 
                  기획을 함께 진행 할 수 있습니다.<br><br>
                </p>
                <p class='for-mobile block'>
                  축적된 자체 데이터를 통해 온라인 마케팅 <br>기획을 함께
                  진행 할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="part part4">
          <div class="text right">
            <div class="title">4. 인플루언서 매니지먼트</div>
            <p>
              인플루언서를 통한 마케팅이 더 좋은 성과를 올리기 위하여<br>
              분석 및 교육 프로그램을 통한 매니지먼트를 함께 병행합니다.<br>
              <br>
              이 매니지먼트를 통해 단순히 인플루언서로 불리는 것이 아니라 <br>
              인플루언서라는 새로운 직업에 전문성을 더합니다. <br>
            </p>
            <div class="img">
              <img :src="require(`../assets/section-4-4-${i}.svg`)" alt="" class='for-web' v-for='i in 5' :key='"w" + i' v-in-viewport :style='{"transition-delay": ( i * 0.1 ) + "s"}'>
              <img :src="require(`../assets/section-4-4-m-${i}.svg`)" alt="" class='for-mobile' v-for='i in 5' :key='"m" + i' v-in-viewport :style="{'transition-delay': '.1s'}">
            </div>
            <div class="text-wrap">
              <div v-for='(val, i) in section4TextList' :key='i'>
                <h3 :class="['text' + (i+1)]">{{val.title}}</h3>
                <p>{{val.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section sixth">
      <div class="container">
        <h1>인플루언서 마케팅을 <br class="for-mobile"> 아직도 망설이고 계신가요?</h1>
        <div class="chart-wrap">
          <div>
            <div class="svg-wrap">
              <chart-1/>
            </div>
          </div>
          <div>
            <div class="svg-wrap">
              <chart-2/>
            </div>
          </div>
          <div>
            <div class="svg-wrap">
              <chart-3/>
            </div>
          </div>
        </div>
        <div>
          <div class="text-wrap">
            <h3 style=" margin-bottom: 4px;">01. </h3>
            <h2>인플루언서 1인에게 1달러를 투자하면 9.6달러 수익발생, 960% ROI 달성</h2>
            <p>미국의 디지털 광고 솔루션 업체 리듬원(Ryuthm One)의 연구</p>
          </div>
          <div class="text-wrap">
            <h3 style=" margin-bottom: 4px;">02. </h3>
            <h2>인플루언서 마케팅을 접한 1,000명이 그렇지 않은 1,000명보다 285달러 더 소비</h2>
            <p>인플루언서 마케팅 소프트웨어 업체 탭인플루언서(Tapinfluence)</p>
          </div>
          <div class="text-wrap">
            <h3 style=" margin-bottom: 4px;">03. </h3>
            <h2>UGC(User Generated Contents)는 4.5% 높은 전환율</h2>
            <p>Socialmediatoday - 10 Instagram Statistics to Keep <br class='for-mobile'>in Mind When Planning Your 2018 Strategy
  </p>
          </div>
        </div>
        <h1>다양한 노출 영역</h1>
        <div class="mobile-wrap">
          <div class="mobile" >
            <img src="../assets/section-6-mobile1.png" alt="">
            <p>인스타그램 실행 첫 화면부터 <br class="for-mobile">
강제적으로 보게되는 팔로잉의 게시물</p>
          </div>
          <div class="mobile">
            <img src="../assets/section-6-mobile2.png" alt="">
            <p>내 관심사를 포함한, 추천,<br>
인기 게시물 영역</p>
          </div>
          <div class="mobile">
            <img src="../assets/section-6-mobile3.png" alt="">
            <p>IGTV 영역<br class="for-mobile"></p>
          </div>
          <div class="mobile">
            <img src="../assets/section-6-mobile4.png" alt="">
            <p>팔로잉 스토리 영역<br class="for-mobile"></p>
          </div>
        </div>
        <div class="mobile-carousel">
          <carousel
              :loop='true'
              :autoplay='true'
              :autoplayTimeout='5000'
              :perPage='1'
              :autoplayHoverPause='true'
              :paginationEnabled='true'
              paginationActiveColor='#FA2B56'
              :navigationEnabled='false'
              :navigationClickTargetSize='30'
            >
              <slide :key='1'>
                <div class="mobile">
                  <img src="../assets/section-6-mobile1.png" alt="">
                  <p>인스타그램 실행 첫 화면부터 <br class="for-mobile">
      강제적으로 보게되는 팔로잉의 게시물</p>
                </div>
              </slide>
              <slide :key='2'>
                <div class="mobile">
                  <img src="../assets/section-6-mobile2.png" alt="">
                  <p>내 관심사를 포함한, 추천,<br>
      인기 게시물 영역</p>
                </div>
              </slide>
              <slide :key='3'>
                <div class="mobile">
                  <img src="../assets/section-6-mobile3.png" alt="">
                  <p>IGTV 영역<br class="for-mobile"></p>
                </div>
              </slide>
              <slide :key='4'>
                <div class="mobile">
                  <img src="../assets/section-6-mobile4.png" alt="">
                  <p>팔로잉 스토리 영역<br class="for-mobile"></p>
                </div>
              </slide>
            </carousel>
        </div>
      </div>
    </div>
    <div class="section seventh">
      <div class="container">
        <h1>브랜드를 각인 시키는 <br class="for-mobile"> SIM 서비스를 <br>
지금 바로 이용해보세요.</h1>
        <button @click='$router.push(" ")'>SIM 서비스 요청하기</button>
      </div>
    </div>
    <div class="section eighth">
      <div class="container">
        <h1>플래거 서비스 이용에 도움이 필요하신가요?<br>
언제든 연락주세요 </h1>
        <p><span>070 - 8624 - 9967</span> plager@plager.co</p>
        <button @click='$router.push(" ")'>도움 요청하기</button>
      </div>
    </div>
    <div class="remote-btn">
      <button class="top" @click='scrollTop'><img src="../assets/topArrow.svg" alt=""> </button>
      <button class="contact" @click='toContact'><h2>☏ ✉</h2 ></button>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import Chart1 from "./charts/section6-chart1"
import Chart2 from "./charts/section6-chart2"
import Chart3 from "./charts/section6-chart3"
import Chart0 from "./charts/section2-chart"
import Chart0M from "./charts/section2-chart-m"

import { videoPlayer } from 'vue-video-player'

export default {
  components: {Chart0, Chart0M, Chart1, Chart2, Chart3, videoPlayer},
  methods: {
    carouselBtnClick: function(e){
        this.carouselNum = Number(e.currentTarget.getAttribute('value'))
    },
    scrollTop: function(){
      window.scrollTo(0, "top")
    },
    toContact: function(){
      window.scrollTo(0, document.body.clientHeight)
    },
    changeCarouselNum: function(e) {
      window.scrollTo
      this.carouselNum = Number(e.currentTarget.getAttribute('value'))
    },
    changeImageLeft: function(){
      setInterval(() => {
        const val = this.forImageChangeLeft[0]
        this.forImageChangeLeft = this.forImageChangeLeft.slice(1)
        this.forImageChangeLeft.push(val)
      }, 2000)
    },
    changeImageRight: function(){
      setInterval(() => {
        const val = this.forImageChangeRight[2]
        this.forImageChangeRight.unshift(val)
        this.forImageChangeRight = this.forImageChangeRight.slice(0, 3)
      }, 2000)
    },
    changeImageFull: function(){
      setInterval(() => {
        const length = this.forImageChangeFull.length
        const val = this.forImageChangeFull[0]
        this.forImageChangeFull.push(val)
        this.forImageChangeFull.splice(0, 1)
      }, 1000)
    },
    slideImageClick: function(e){
      const parent = e.currentTarget.parentElement.parentElement.classList
      const type = e.currentTarget.classList[0]
      const value = Number(e.currentTarget.children[0].getAttribute('value'))
      this.currentImageUrl = require(`../assets/mobile-screen-full${(value % 6) + 1}.png`)
      if(type === 'play') {
        this.isScreenPlay = true
      } else {
        this.isScreenPlay = false
      }
    },
    carouselChange: function(){
      setInterval(() => {
        if(this.carouselNum < 4) {
          this.carouselNum ++
        } else {
          this.carouselNum = 1
        }
      }, 2000)
    },
    playerLoaded: function(){
      this.$nextTick(() => {
        this.playerOption.width = this.$refs.videoContainer.clientWidth
        this.playerOption.height = this.$refs.videoContainer.clientHeight
      })
    }
  },
  created: function() {
    this.changeImageFull()
    this.carouselChange()
  },
  data: function() {
    return {

	 profileList: [
        {
          profileImage: require('../assets/plager_influencer_test02.png'),
          username: 'ex.incessant',
          isNavy: false,
          follower: "15만",
          percent: 1.8,
          price: 105000,
        },
        {
          profileImage: require('../assets/plager_influencer_test01.png'),
          username: 'ex.passion',
          isNavy: true,
          follower: "8천",
          percent: 12.5,
          price: 130000,
        },
        {
          profileImage: require('../assets/plager_influencer_test03.png'),
          username: 'ex.form',
          isNavy: false,
          follower: "5만",
          percent: 2.2,
          price: 90000,
        }
      ],

      isScreenPlay: false,
      playerOption: { 
        autoplay: "muted",
        muted: true,
        language: "en",
        loop: true,
        width: 0,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: "video/mp4",
          src: require("../assets/movie.mp4")
        }],
      },
      currentImageUrl: require('../assets/mobile-screen-0.png'),
      forImageChangeLeft: [1, 2, 3],
      forImageChangeRight: [1, 2, 3],
      forImageChangeFull: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      forImageChangeFullNum: 3,
      mainTextCarouselNum: 1,
      mainTextCarousel: [
        {
          subTitle: 'SIM ( SNS Imprinting Marketing ) SERVICE',
          title: ['“회사와 브랜드가 ', '‘刻印’ (각인) 될 수 있다면!”'],
          description: [
            ['소비자가 브랜드를 기억하게', ' 하려면 얼마의 비용이 들까요?'],
            ['인플루언서를 통한 새로운 방법과 합리적인', ' 비용으로 소비자에게 각인되는 서비스하고 있습니다']
          ]
        },
        {
          subTitle: 'SNS를 활용한 브랜드 마케팅',
          title: ['“기억하지 못하면 ', ' 잊혀집니다.”'],
          description: [
            ['데이터 통계와 알고리즘을 통해', ' 실제 영향력이 있는' ],
            ['인플루언서를 모델로', ' 반복적인 노출을 통해 브랜드를 기억하게 됩니다.']
          ]
        },
        {
          subTitle: '단 하나의 인플루언서 마케팅 - 플래거',
          title: ['“회사와 브랜드가 ', '‘刻印’ (각인) 될 수 있다면!”'],
          description: [
            ['소비자가 브랜드를 기억하게', ' 하려면 얼마의 비용이 들까요?'],
            ['플래거는 인플루언서를 통해', '소비자에게 각인이 되는 서비스를 하고 있습니다']
          ]
        },
       /* {
          subTitle: '단 하나의 인플루언서 마케팅 - 플래거',
          title: ['“회사와 브랜드가 ', '‘刻印’ (각인) 될 수 있다면!”'],
          description: [
            ['회사 또는 브랜드를 소비자의 기억에 오랫동안', '남을 수 있게 하려면 얼마의 비용이 들까요?'],
            ['플래거는 정확하고 합리적인 비용으로 인플루언서를 통해', '소비자에게 각인이 되는 서비스를 하고 있습니다']
          ]
        },
        {
          subTitle: '단 하나의 인플루언서 마케팅 - 플래거',
          title: ['“회사와 브랜드가 ', '‘刻印’ (각인) 될 수 있다면!”'],
          description: [
            ['회사 또는 브랜드를 소비자의 기억에 오랫동안', '남을 수 있게 하려면 얼마의 비용이 들까요?'],
            ['플래거는 정확하고 합리적인 비용으로 인플루언서를 통해', '소비자에게 각인이 되는 서비스를 하고 있습니다']
          ]
        } */
      ],
      carouselNum: 1,
      section4TextList: [
        {
          title: "선택적 관리 및 교육",
          desc: `매니지먼트와 교육은 요청 또는 선택적으로
            플래거의 인플루언서에게만 제공하게 됩니다.`
        },
        {
          title: "활동 데이터 수집",
          desc: `인플루언서 계정에서 발생하는
            다양한 데이터를 수집합니다.`
        },
        {
          title: "데이터 분석",
          desc: `수집된 데이터를 각 게시물 별로 높은 성과와 그 반대의 
            성과가 나온 게시물에 대한 분석자료를 만듭니다.`
        },
        {
          title: "매니지먼트",
          desc: `분석된 자료로 인플루언서가 더 좋은 성과를 올릴 수 있도록 매니지먼트 및 교육을
            진행하게 됩니다.`
        },
        {
          title: "전문 인플루언서",
          desc: `매니지먼트와 교육을 통해 높아진 영향력으로 더 좋은 성과를 올릴 수 있는 인플루언서로
            성장할 수 있게됩니다.`
        }
      ]
    };
  },
};
</script>

<style>

svg {width: 100%; height: auto;}

.remote-btn {width: 70px; height: 120px; position: fixed; bottom: 20px; right: 20px; font-size: 0;}
.remote-btn button { width: 100%; height: 60px; border: 0; background: #353B3A; color: #ffffff; }
.remote-btn button.top img {width: 18px; margin-right: 6px;}
.remote-btn button.contact { background: #fa2b56; }

.section button {
  width: 215px;
  height: 50px;
  color: #ffffff;
  font-size: 16px;
  border-radius: 5px;
  background: linear-gradient(257deg, #123075, #fa2b56);
  border: none;
}

.dim {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.63);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.section.main {
  display: table;
  position: relative;
  height: 100vh;
  background: url("../assets/main-bg-1.png") 50% 50% no-repeat;
  background-size: cover;
}
.section.main .dim {
  /* padding-top: 131px; */
  position: relative;
  display: table-cell;
  vertical-align: middle;
}
.section.main .dim .content {
  width: 100%;
  display: inline-block;
  position: relative;
}

.section.main .dim .content .p-wrap {
  display: inline-block;
}

.section.main .dim .content .logo-wrap {
  margin-top: 40px;
  width: 100%;
}

.section.main .dim .content .logo-wrap img {
  animation: logo-animation 1.5s alternate infinite ease;
  /* animation-iteration-count: infinite */
  opacity: .3
}
.section.main .dim .content .logo-wrap .form {
  float: left;
}
.section.main .dim .content .logo-wrap .acart {
  float: right;
}

.section.main h1 {
  margin: 0 0 30px 0;
  padding: 0;
  font-size: 54px;
  font-weight: bold;
  color: #ffffff;
}
.contact h2 {
  font-size: 20px;
}
.section.main h2 {
  margin: 0 0 30px 0;
  font-weight: 500;
  padding: 0;
  font-size: 40px;
  line-height: 1.33;
  color: #ffffff;
}
.section.main p {
  font-size: 20px;
  line-height: 1.26;
  margin-bottom: -10px;
  color: #ededed;
}
.section.main .arrow-wrap {
  position: absolute;
  bottom: 60px;
  width: 100%;
}
.section.main .arrow-wrap img {
  width: 41px;
}

.section.second {
  padding: 81px 0;
  background-image: linear-gradient(to bottom, #061843, #05112e);
}
.section.second h1 {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
}
.section.second .container {
  max-width: 1190px;
}
.section.second .container .white-box {
  background-color: #ffffff;
  border-radius: 4px;
  padding: 35px 0 30px;
  margin-bottom: 38px;
}
.section.second .container .white-box p {
  font-size: 24px;
  line-height: 1.75;
  text-align: center;
  color: #8d8d8d;
  margin-top: -40px;
  margin-bottom: 17px;
}
.section.second .container .white-box .main {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #393835;
}
.section.second .container .white-box .sub {
  font-size: 16px;
  font-weight: 400;
}
.section.second .container .white-box .quotes-img {
  display: inline-block;
  width: 49px;
}

.section.second .container .white-box .quotes-img.left { margin-right: 724px; }

.section.second .container .white-box .quotes-img img {
  width: 100%;
}
.section.second .container .chart {
  width: 100%;
}
.section.second .container .chart-wrap { width: 100%; position: relative; display: block; height: 0; padding-bottom: 53%}
.section.second .container .chart-wrap .svg-wrap {width: 100%; position: absolute; width: 100%; height: 100%;}

.section.second .container .chart .for-web {
  display: block;
}
.section.second .container .chart img {
  width: 100%;
}
.section.second .container .chart .desc {
  margin-top: 20px;
  font-size: 24px;
  color: #ffffff;
  white-space: nowrap;
}
.section.fifth,
.section.third {
  background: #282828;
  background-image: linear-gradient(90deg, #7B7F82 2%, #303136 100%);
  background-image: radial-gradient(50% 116%, rgba(255,255,255,0.00) 0%, rgba(0,0,0,0.50) 100%);
  background-image: linear-gradient(-59deg, rgba(255,255,255,0.20) 7%, rgba(88,88,88,0.50) 68%, rgba(86,86,86,0.50) 76%, rgba(0,0,0,0.50) 100%);
}

.section.third .container {
  max-width: none;
  padding: 190px 0;
}

.section.third .container > .container-cell {
  display: table-cell;
  font-size: 0;
}
.section.third .container .container-cell > div {
  font-size: 16px;
  display: inline-block;
  vertical-align: middle;
  width: 30%;
  box-sizing: border-box;
  margin-right: 3%;
}
.section.third .container .container-cell > div > img {
  width: 100%;
}

.section.third .container .container-cell > div:first-child {
  text-align: left;
}

.section.third .container .container-cell > div:last-child {
  margin-right: 0;
}

.section.third .container .container-cell > div h1 {
  font-size: 45px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  margin-top: 0;
}

.section.third .container .container-cell > div p {
  text-align: left;
  font-size: 24px;
  line-height: 1.83;
  color: #ffffff;
  word-break: keep-all;
}

.section.third .container .container-cell > div img {
  margin-bottom: 20px;
}

.section.third .container .container-cell > div span {
  font-size: 35px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -1px;
  text-align: center;
  color: #ffffff;
}

.section.fourth {
  overflow-x: hidden;
  box-sizing: border-box;
  background-image: linear-gradient(to bottom, #061843, #05112e);
}
.section.fourth .container {
  padding: 110px 0 131px;
  box-sizing: border-box;
}

.section.fourth .container h1 {
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
}

.section.fourth .container .mobile {
  width: 522px;
  margin: 0 auto 5px;
  position: relative;
}

.section.fourth .container .mobile .mobile-img {
  width: 522px;
  display: inline-block;
  position: relative;
}
.section.fourth .container .mobile .mobile-img img { width: 100%; }
.section.fourth .container .mobile .mobile-img .screen { 
  width: 77.7%; height: 0; 
  padding-bottom: 76%; margin: 0 10.7%; background: #dddddd; position: absolute; top: 20%;
background-size: cover;}

.section.fourth .container .mobile .full {
  width: 100vw;
  max-width: 2400px;
  left: -100vw;
  right: -100vw;
  margin: auto;
  top: calc(50% - 10.5%);
  position: absolute;
}

.section.fourth .container .mobile .full .cell {
  white-space: nowrap;
  position: relative;
  left: -50%;
  font-size: 0;
  width: 100%;
}

.section.fourth .container .mobile .mobile-full {display: none;}
.section.fourth .container .mobile .full .cell div { z-index: 0; width: 21%; max-width: 400px; display: inline-block; transition: all 1s; position: relative;;}
.section.fourth .container .mobile .full .cell div.play:after {content: ''; display: block; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: url("../assets/playBtn.svg") 50% 50% no-repeat; background-size: cover;}
.section.fourth .container .mobile .full .cell div:last-child {z-index: -1;}
.section.fourth .container .mobile .full .cell div img { width: 100%;}

.section.fourth .container .mobile .left {
  margin-top: 313px;
  position: absolute;
  display: table;
  top: 0;
  right: calc(100% + 58px);
}
.section.fourth .container .mobile .right {
  margin-top: 313px;
  position: absolute;
  display: table;
  top: 0;
  left: calc(100% + 58px);
}
.section.fourth .container .mobile .left .cell,
.section.fourth .container .mobile .right .cell {
  display: table-cell;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  font-size: 0;
}
.section.fourth .container .mobile .left .cell > div,
.section.fourth .container .mobile .right .cell > div {
  display: inline-block;
  width: 20vw;
  /* height: 384px; */
  box-sizing: border-box;
  overflow: hidden;
}
.section.fourth .container .mobile .right .cell > div:first-child { position: relative; z-index: 1000;}

.section.fourth .container .mobile .left .cell > div > img,
.section.fourth .container .mobile .right .cell > div > img {
  width: 100%;
}

.section.fourth .container p {
  font-size: 24px;
  line-height: 1.83;
  text-align: center;
  color: #ffffff;
  margin: 0 auto 20px;
}

.section.fifth .container {
  box-sizing: border-box;
  padding-top: 120px;
}

.section.fifth .container h1 {
  font-size: 45px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
}

.section.fifth .container .part {
  width: 100%;
  position: relative;
}
.section.fifth .container .part.part1 {
  margin-bottom: 250px;
}
.section.fifth .container .part.part2 {
  margin-bottom: 140px;
}
.section.fifth .container .part.part2 p {
  margin-bottom: 56px;
}
.section.fifth .container .part.part2 .profile-wrap {
  font-size: 0;
}
.section.fifth .container .part.part2 .profile-wrap .profile {
  display: inline-block;
  font-size: 1rem;
  width: calc((100% - 78px) / 3);
  height: 480px;
  background-color: white;
  border-radius: 5px;
  margin-right: 39px;
  padding: 43px 30px 43px;
  box-sizing: border-box;
}
.section.fifth .container .part.part2 .profile-wrap .profile.navy {
  background-color: #061843;
}
.section.fifth .container .part.part2 .profile-wrap .profile.navy .black-text,
.section.fifth .container .part.part2 .profile-wrap .profile.navy .price-text {
  color: #ffffff;
}

.section.fifth .container .part.part2 .profile-wrap .profile.navy .influ-text {
  color: #ffffff;
  border-bottom-color: #ffffff;
}

.section.fifth .container .part.part2 .profile-wrap .profile.navy .price-value {
  color: #d0021b;
}

.section.fifth .container .part.part2 .profile-wrap .profile .profile-img {
  width: 179px;
  height: 179px;
  background: url("../assets/plager_influencer_test01.png") 50% 50% no-repeat;
  background-size: cover;
  border-radius: 50%;
  margin: 0 auto 10px;
}
.section.fifth .container .part.part2 .profile-wrap .profile .black-text {
  font-size: 20px;
  line-height: 1;
  text-align: center;
  color: #6f6f6f;
  margin-bottom: 14px;
}
.section.fifth .container .part.part2 .profile-wrap .profile .follow-text {
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  text-align: center;
  color: #6f6f6f;
  margin-bottom: 20px;
}
.section.fifth .container .part.part2 .profile-wrap .profile .influ-text {
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  text-align: center;
  color: #6f6f6f;
  padding-bottom: 15px;
  border-bottom: solid 1px #6f6f6f;
  margin-bottom: 10px;
}
.section.fifth .container .part.part2 .profile-wrap .profile .price-text {
  font-size: 24px;
  text-align: center;
  color: #6f6f6f;
  margin-bottom: 5px;
}
.section.fifth .container .part.part2 .profile-wrap .profile .price-value {
  font-size: 28px;
  text-align: center;
  font-weight: bold;
  color: #6f6f6f;
}
.section.fifth .container .part.part2 .profile-wrap .profile .influ-text b {
  color: #d0021b;
}

.section.fifth .container .part.part2 .profile-wrap .profile:last-child {
  margin-right: 0;
}
.section.fifth .container .part.part3 p {
  margin-bottom: 61px;
}
.section.fifth .container .part.part3 .content-wrap {
  font-size: 0;
  width: 100%;
  margin-bottom: 120px;
}
.section.fifth .container .part.part3 .content-wrap .content {
  display: inline-block;
  font-size: 1rem;
  width: 50%;
  padding: 0 56px;
  text-align: right;
  box-sizing: border-box;
}
.section.fifth .container .part.part3 .content-wrap .content:last-child {
  text-align: left;
}
.section.fifth .container .part.part3 .content-wrap .content .picto {
  width: 530px;
  height: 300px;
  display: inline-block;
  <!--border-radius: 50%;-->
  background-color: #061843;
  background-image: url("../assets/section-4-3-left.svg");
  background-size: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 20px;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2);
}
.section.fifth .container .part.part3 .content-wrap .content .picto.right {
  background-image: url("../assets/section-4-3-right.svg");
}
.section.fifth .container .part.part3 .content-wrap .content h2 {
  margin: 0 0 5px 0;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.7px;
  text-align: center;
  color: #ffffff;
  text-align: right;
}
.section.fifth .container .part.part3 .content-wrap .content p {
  margin: 0 0 0;
  font-size: 24px;
  line-height: 1.5;
  text-align: right;
  color: #ffffff;
  text-align: right;
}
.section.fifth .container .part.part3 .content-wrap .content:last-child h2,
.section.fifth .container .part.part3 .content-wrap .content:last-child p {
  text-align: left;
}
.section.fifth .container .part.part4 {text-align: center}
.section.fifth .container .part.part4 p {
  padding-bottom: 40px;
}
.section.fifth .container .part.part4 .img {
  width: 100%;
  max-width: 1013px;
  margin: 0 auto 4px;
  text-align: center;
}
.section.fifth .container .part.part4 .img img.for-web {
  height: 272px; margin-left: -60px; transform: translateY(-30px); opacity: 0; transition: all .3s
}
.section.fifth .container .part.part4 .img img.for-web:first-child {margin-left: 0}
.section.fifth .container .part.part4 .img img.for-web.in-viewport { transform: translateY(0); opacity: 1; }

.section.fifth .container .part.part4 .img img.for-mobile {
  width: 100%; margin-bottom: -3.4rem; transform: translateX(-3rem); opacity: 0; transition: all .3s
}
.section.fifth .container .part.part4 .img img.for-mobile:first-child {margin-bottom: 0}
.section.fifth .container .part.part4 .img img.for-mobile.in-viewport { transform: translateX(0); opacity: 1; }

.section.fifth .container .part.part4 .text-wrap {
  width: 100%;
  margin-bottom: 178px;
  font-size: 0;
}
.section.fifth .container .part.part4 .text-wrap div {
  width: calc((100% - 80px)/5);
  margin-right: 20px;
  font-size: 1rem;
  display: inline-block;
  vertical-align: top;
}
.section.fifth .container .part.part4 .text-wrap div:last-child {
  margin-right: 0;
}
.section.fifth .container .part.part4 .text-wrap div h3 {
  margin-bottom: 17px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.section.fifth .container .part.part4 .text-wrap div h3.text1 {
  color: #7de314;
}
.section.fifth .container .part.part4 .text-wrap div h3.text2 {
  color: #01cc9b;
}
.section.fifth .container .part.part4 .text-wrap div h3.text3 {
  color: #14a0c0;
}
.section.fifth .container .part.part4 .text-wrap div h3.text4 {
  color: #5059ab;
}
.section.fifth .container .part.part4 .text-wrap div h3.text5 {
  color: #09909f;
}
.section.fifth .container .part.part4 .text-wrap div p {
  word-break: keep-all;
  font-size: 15px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 0;
  padding-bottom: 0;
}

.section.fifth .container .part .text {
  width: 100%;
}
.section.fifth .container .part .text.left {
  text-align: left;
}
.section.fifth .container .part .text.right {
  text-align: right;
}
.section.fifth .container .part .text.left .title::after {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  left: 100%;
  width: 26px;
  height: 0px;
  background-image: url("../assets/fifth-right.svg");
}

.section.fifth .container .part .text.right .title::before {
  content: "";
  display: inline-block;
  position: absolute;
  top: 0;
  right: 100%;
  width: 26px;
  height: 0px;
  background-image: url("../assets/fifth-left.svg");
}

.section.fifth .container .part .text .title {
  position: relative;
  display: inline-block;
  padding: 6px 21px 23px;
  font-size: 35px;
  line-height: 45px;
  height: 60px;
  color: #ffffff;
  font-weight: bold;
  background-color: #fa2b56;
  box-sizing: border-box;
  white-space: nowrap;
}
.section.fifth .container .part .text .title.left {
  align-self: left;
}
.section.fifth .container .part .text p {
  font-size: 24px;
  color: #ffffff;
}

.section.fifth .container .part .fifth-right {
  position: absolute;
  top: -30px;
  right: 0;
  width: 338px;
}

.section.fifth .container .part .fifth-right > .screen > img,
.section.fifth .container .part .fifth-right > img {
  width: 100%;
  position: relative;
  z-index: 1;
}
.section.fifth .container .part .fifth-right > .screen {
  width: 78%;
  position: absolute;
  z-index: 0;
  top: 9.3%; 
  left: 5%;
  margin: 5.9%;
}

.section.sixth {
  background-image: linear-gradient(to bottom, #061843, #05112e);
}
.section.sixth .container {
  padding-top: 122px;
}
.section.sixth .container h1 {
  color: #ffffff;
  margin: 0 0 67px;
}
.section.sixth .container .chart-wrap {
  width: calc(100% - 60px);
  margin: auto;
  font-size: 0;
  margin-bottom: 40px;
  white-space: nowrap;
}
.section.sixth .container .chart-wrap > div {
  position: relative;
  width: calc((100% - 88px)/3);
  height: 0;
  margin-right: 44px;
  font-size: 1rem;
  display: inline-block;
  height: 0;
}
.section.sixth .container .chart-wrap > div > .svg-wrap {
  position: relative;
  width: 100%;
  font-size: 1rem;
  padding-bottom: 97.47%;
  display: inline-block;
}
.section.sixth .container .chart-wrap > div > .svg-wrap svg { width: 100%; position: absolute; left: 0;}
.section.sixth .container .chart-wrap > div:last-child {
  margin-right: 0;
}
.section.sixth .container .text-wrap {
  margin-bottom: 30px;
  width: 100%;
}

.section.sixth .container .text-wrap:last-child {
  margin-bottom: 104px;
}
.section.sixth .container h2 {
  margin: 0;
  font-size: 24px;
  line-height: 1.61;
  color: #ffffff;
  display: inline-block;
}
.section.sixth .container h3 {
  color: #EFEFEF;
  margin-right: 6px;
  font-size: 24px;
  color: #ffffff;
  display: inline-block;
}
.section.sixth .container p {
  margin: 1px;
  font-size: 15px;
  line-height: 1.5;
  color: #ffffff;
}
.section.sixth .container .mobile-wrap {
  width: 100%;
  margin: auto;
  font-size: 0;
  margin-bottom: 121px;
}
.section.sixth .container .mobile-wrap .mobile {
  vertical-align: top;
  display: inline-block;
  font-size: 1rem;
  width: calc((100% - 90px)/4);
  margin-right: 30px;
}
.section.sixth .container .mobile-wrap .mobile:last-child {
  margin-right: 0;
}
.section.sixth .container .mobile-wrap .mobile img {
  max-width: 100%;
}
.section.sixth .container .mobile-wrap .mobile p {
  font-size: 15px;
  line-height: 1.61;
  word-break: keep-all;
  text-align: center;
  color: #ffffff;
  margin: 0 -8px;
}

.section.seventh {
  background: url("../assets/section-7-bg.png") 50% 50% no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 126px 0 126px;
}

.section.seventh .container h1 {
  font-size: 48px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -1px;
  text-align: center;
  color: #ffffff;
  margin: 0 0 40px;
}

.section.seventh .container button {
  border: 0;
  border-radius: 5px;
  background-color: #fa2b56;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-image: none;
}
.section.eighth {
  background: url("../assets/section-8-bg.png") 50% 50% no-repeat;
  background-size: cover;
  box-sizing: border-box;
  padding: 74px 0 74px;
}
.section.eighth .container {
  position: relative;
}
.section.eighth .container h1 {
  font-size: 48px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: -1px;
  color: #ffffff;
  text-align: left;
  margin: 0 0 15px;
}

.section.eighth .container p {
  font-size: 40px;
  font-weight: 300;
  letter-spacing: -0.8px;
  text-align: left;
  color: #ffffff;
  margin: 0;
}

.section.eighth .container p span {
  margin-right: 30px;
}

.section.eighth .container button {
  position: absolute;
  top: 60px;
  right: 0;
  border: 0;
  border-radius: 5px;
  background-color: #061843;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  background-image: none;
}

.section.sixth .container .mobile-carousel {
  display: none
}

.section.main .dim .content .arrow { width: 29px; height: 50px; background-size: contain; background-position: 50% 50%; background-repeat: no-repeat; position: absolute; top: 0;}
.section.main .dim .content .arrow.before { background-image: url("../assets/arrow-point-to-left.svg"); }
.section.main .dim .content .arrow.after { background-image: url("../assets/arrow-point-to-right.svg");}



#chart-0-m {display: none}
#chart-0 {display: block}

.VueCarousel-slide {opacity: 0; transition: all .3s;}
.VueCarousel-slide.VueCarousel-slide-active {opacity: 1; transition: all ease-out;}
.VueCarousel-navigation-button { width: auto !important; background: transparent !important; color: #ffffff !important;}

.video-player {overflow: hidden;}
.video-player .vjs-tech {width: 100%;}
.video-player button,
.vjs-error-display,
.vjs-modal-dialog,
.vjs-loading-spinner,
.vjs-control-bar { display: none;}

@keyframes scroll-animate {
  to {
    transform: translateY(10px);
  }
}

@keyframes management-on {
  to {
    transform: translateY(-10px);
  }
}

.mouse-animate { width: 33px; height: 50px; border: 3px solid #ffffff; display: inline-block; box-sizing: border-box; border-radius: 30px; text-align: center;}
.mouse-animate:after { content: ''; display: inline-block; width: 4px; height: 10px; background-color: #ffffff; border-radius: 3px; animation-name: scroll-animate; animation-duration: .5s; animation-iteration-count: infinite; animation-direction: alternate; animation-timing-function: ease-out;}



@media screen and (max-width: 640px) {

.VueCarousel-wrapper { max-width: auto; width: calc(100% - 0px); margin-left: auto; margin-right: auto; }

/* common */
  .section button { width: 17.2rem; height: 4rem; font-size: 1.2rem;}
  .remote-btn {display: none;}

/* section */
  .section.main {height: 32.4rem; box-sizing: border-box;}
  .section.main .dim { padding-top: 0; }
  .section.main h2 { font-size: 1.4rem; margin-bottom: 1.1rem;}
  .section.main h1 { font-size: 2rem; line-height: 1.2; margin-bottom: 1rem; }
  .section.main p { margin: 0; font-size: 1rem; line-height: 1.5; }
  .section.main .arrow-wrap {bottom: 1.85rem;}
  .section.main .arrow-wrap img { width: 1.3rem; }
  .section.main .dim .content {position: relative;}
  .section.main .dim .content .logo-wrap {margin-top: 1.9rem;}
  .section.main .dim .content .logo-wrap img {width: 5.9rem; }
  

  .section.second {padding: 3rem 0 4rem;}
  .section.second h1 {font-size: 2rem; margin-bottom: 2.1rem;}
  .section.second .container .white-box {width: calc(100% - 3rem); margin: 0 auto 1.6rem; padding: 3rem 0 3.1rem; }
  .section.second .container .white-box p {font-size: 1.2rem; line-height: 2.2rem; margin-bottom: 2.1rem; margin-top: -1.8rem;}
  .section.second .container .white-box .main { font-size: 1.4rem; margin-bottom: .6rem;}
  .section.second .container .white-box .sub { font-size: 1.2rem; margin-bottom: 0;}
  .section.second .container .white-box .quotes-img { width: 2.5rem; margin-bottom: 0rem;}
  .section.second .container .white-box .quotes-img.left {margin-right: 20.6rem;}
  .section.second .container .chart {width: calc(100% - 3rem); margin-left: auto; margin-right: auto; box-sizing: border-box;}
  .section.second .container .chart-wrap { width: 100%; position: relative; display: block; height: 0; padding-bottom: 57.241%}
  .section.second .container .chart img { width: calc(100% - 3rem); border-radius: 5px;}
  .section.second .container .chart .desc {font-size: 1.2rem;}
  
  .section.third .container { display: block; width: calc(100% - 3rem); margin: 0 auto; padding: 4rem 0 4rem; }
  .section.third .container .container-cell > div:first-child  {display: block; width: 100%; margin-bottom: 2.6rem; padding-left: 1rem;}
  .section.third .container .container-cell > div {display: inline-block; width: calc(50% - .5rem); margin-right: 1rem; }
  .section.third .container .container-cell > div h1 { font-size: 2.4rem; }
  .section.third .container .container-cell > div p { font-size: 1.4rem; letter-spacing: -0.05rem; }
  .section.third .container .container-cell > div span { font-size: 1.6rem; letter-spacing: -.033rem; line-height: 1.9rem;}

  .section.fourth .container {padding: 4rem 0;}
  .section.fourth .container h1 {font-size: 2.4rem; line-height: 2.9rem; margin-bottom: 1rem;}
  .section.fourth .container .mobile { width: 22rem; margin-bottom: 0.5rem; margin-left: 1.5rem;}
  .section.fourth .container .mobile .mobile-img {width: 100%; position: relative; z-index: 10;}
  .section.fourth .container .mobile .full { display: none; }
  .section.fourth .container .mobile .mobile-full { position: absolute; width: 6.4rem; display: inline-block; top: calc(50% - 18.3rem); left: calc(100% + .9rem);}
  .section.fourth .container .mobile .mobile-full > div {width: 100%; height: 6.1rem; position: relative;}
  .section.fourth .container .mobile .mobile-full > div.play:after {content: ''; display: block; position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: url("../assets/playBtn.svg") 50% 50% no-repeat; background-size: cover;}
  .section.fourth .container .mobile .mobile-full > div > img { width: 100%;}
  
  .section.fourth .container p {font-size: 1.2rem; line-height: 2.2rem;}
  /* .section.fourth .container .mobile .left { right: auto; margin-top: -11.4rem; z-index: 9;}
  .section.fourth .container .mobile .left .cell div {height: auto; width: 13rem; left: 3.5rem; position: absolute; transition: all .5s;}
  .section.fourth .container .mobile .left .cell div:after {position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: #000000; opacity: .2; content: ''; display: block; z-index: 10}
  .section.fourth .container .mobile .left .cell div:first-child { z-index: 10; }
  .section.fourth .container .mobile .left .cell div:nth-child(n + 2) {height: auto; position: absolute; top: -7.6rem; left: 0; width: 11rem; left: 4.5rem; z-index: 9;}
  .section.fourth .container .mobile .left .cell div:last-child {z-index: 8; opacity: 0;}
  .section.fourth .container .mobile .left .cell div:nth-child(n + 2):after {opacity: .5;}
  .section.fourth .container .mobile .right { top: auto; bottom: 2.7rem; z-index: 9; left: 0;}
  .section.fourth .container .mobile .right .cell div {height: auto; width: 13rem; left: 3.5rem; position: absolute; transition: all .5s;}
  .section.fourth .container .mobile .right .cell div:after {position: absolute; width: 100%; height: 100%; top: 0; left: 0; background-color: #000000; opacity: .2; content: ''; display: block; z-index: 10}
  .section.fourth .container .mobile .right .cell div:first-child { z-index: 9; opacity: 0;}
  .section.fourth .container .mobile .right .cell div:nth-child(n - 2) {height: auto; position: absolute; top: 9.6rem; left: 0; width: 11rem; left: 4.5rem; z-index: 9;}
  .section.fourth .container .mobile .right .cell div:nth-child(n - 2):after {opacity: .5; }
  .section.fourth .container .mobile .right .cell div:last-child {z-index: 10; top: auto; width: 13rem; left: 3.5rem;}
  .section.fourth .container .mobile .right .cell div:last-child:after {opacity: .2;} */

  .section.fifth .container {padding: 4rem 1.5rem 0;}
  .section.fifth .container .part .text .title {height: 4.5rem; font-size: 1.8rem; line-height: 1.8rem; padding: 1.3rem 1rem 1.4rem; letter-spacing: -.1rem;}
  .section.fifth .container .part .text.right .title::before,
  .section.fifth .container .part .text.left .title::after {width: 1.3rem; height: 0rem; background-size: cover;}
  .section.fifth .container .part .text p {font-size: 1.2rem; line-height: 2.0rem; letter-spacing: -.08rem;}
  .section.fifth .container .part.part1 {margin-bottom: 4rem;}
  .section.fifth .container .part.part1 .text p {margin-top: 1.5rem;}
  .section.fifth .container .part .fifth-right {width: 13.5rem; top: 6rem;}
  .section.fifth .container h1 {font-size: 2rem; margin-bottom: 2rem;}

  .section.fifth .container .part.part2 {margin-bottom: 4rem;}
  .section.fifth .container .part.part2 .text p {margin-top: 1.4rem; margin-bottom: 3.6rem;}
  .section.fifth .container .part.part2 .profile-wrap .profile {display: block; width: 22rem; margin: 0 auto 1.1rem;; padding: 2.4rem 2rem 2rem; height: auto;}
  .section.fifth .container .part.part2 .profile-wrap .profile:last-child {margin-right: auto;}
  .section.fifth .container .part.part2 .profile-wrap .profile .profile-img { width: 9.8rem; height: 9.8rem;}
  .section.fifth .container .part.part2 .profile-wrap .profile .black-text {font-size: 1rem; line-height: 2.2rem; margin: 0;}
  .section.fifth .container .part.part2 .profile-wrap .profile .follow-text {font-size: 1.4rem; line-height: 2.2rem; margin-bottom: .1rem;}
  .section.fifth .container .part.part2 .profile-wrap .profile .influ-text {font-size: 1.8rem; line-height: 2.8rem; padding-bottom: .9rem; margin-bottom: 1.2rem;}
  .section.fifth .container .part.part2 .profile-wrap .profile .price-text { font-size: 1.6rem; line-height: 1.9rem; }
  .section.fifth .container .part.part2 .profile-wrap .profile .price-value { font-size: 2rem; line-height: 2.4rem;}

  .section.fifth .container .part.part3 .text p {text-align: center; line-height: 1.4rem; margin: 1.7rem 0 2rem;}
  .section.fifth .container .part.part3 .content-wrap {margin-bottom: 4rem;}
  .section.fifth .container .part.part3 .content-wrap .content { display: block; width: 100%; padding: 0 1.5rem;}
  .section.fifth .container .part.part3 .content-wrap .content .picto { width: 25rem; height: 14rem; margin-bottom: 2rem;}
  .section.fifth .container .part.part3 .content-wrap .content h2 { font-size: 2.4rem; line-height: 2.9rem; letter-spacing: -.067rem; margin-bottom: 1.1rem; padding: 0 1rem;}
  .section.fifth .container .part.part3 .content-wrap .content p { font-size: 1.2rem; line-height: 1.8rem; padding: 0 1rem; margin-bottom: 4.4rem;}
  .section.fifth .container .part.part3 .content-wrap .content:last-child p { margin-bottom: 0;}

  .section.fifth .container .part.part4 .img { width: 14rem; display: inline-block; vertical-align: top;}
  .section.fifth .container .part.part4 .text-wrap { display: inline-block; width: 13rem; vertical-align: top; position: relative; top: -2rem; margin-left: 1rem; margin-bottom: 1rem;}
  .section.fifth .container .part.part4 .text-wrap > div {display: block; width: 100%; height: 11.7rem;}
  .section.fifth .container .part.part4 .text-wrap > div > h3 { font-size: 1.4rem; line-height: 1.7rem; text-align: left; margin: 0;}
  .section.fifth .container .part.part4 .text-wrap > div > p { font-size: 1.1rem; line-height: 1.8rem; text-align: left; margin-top: .7rem;}
  .section.fifth .container .part.part4 .text .title,
  .section.fifth .container .part.part4 .text p { text-align: right;}

  .section.sixth .container { padding-top: 4rem;}
  .section.sixth .container .text-wrap { width: 29.5rem; margin: 0 auto 2.4rem; text-align: center;}
  .section.sixth .container h1 { font-size: 2.4rem; line-height: 2.9rem; margin-bottom: 2rem;}
  .section.sixth .container .chart-wrap { margin-bottom: 3.5rem;}
  .section.sixth .container .chart-wrap > div {width: 24rem; display: block; margin: 0 auto 2.3rem; padding-bottom: 80%;}
  .section.sixth .container .chart-wrap > div:last-child {margin: 0 auto 3.4rem;}
  .section.sixth .container h3 { font-size: 2.4rem; line-height: 2.9rem; position: relative; bottom: 1rem; margin: 0 .3rem 0 0 ;}
  .section.sixth .container h2 { font-size: 1.4rem; line-height: 2rem; max-width: 25.3rem; text-align: left; word-break: keep-all; margin-bottom: .8rem;}
  .section.sixth .container p { font-size: 1rem; line-height: 1.4rem}
  .section.sixth .container .mobile-wrap {display: none}
  .section.sixth .container .mobile-carousel {display: block; width: 100vw; min-height: 57.4rem; position: relative; text-align: center;}
  .section.sixth .container .text-wrap:last-child { margin-bottom: 4rem;}
  .section.sixth .container .mobile-carousel .mobile { 
    width: 100%;
    position: relative;
    left: 0; 
    opacity: 1;
  }
  .section.sixth .container .mobile-carousel .mobile.hidden {
    visibility: hidden;
    animation-name: slide-off; 
    animation-duration: .3s; 
    animation-iteration-count: 1;
  }
  .section.sixth .container .mobile-carousel .mobile img {width: 20rem;}
  .section.sixth .container .mobile-carousel .mobile p {font-size: 1.4rem; line-height: 2.9rem; margin: 1rem 0 0; min-height: 5.8rem;}
  .section.sixth .container .mobile-carousel .carousel-btn-wrap { position: absolute; bottom: 5.7rem; width: 100%;}
  .section.sixth .container .mobile-carousel .carousel-btn {width: 1rem; height: 1rem; margin-right: 1.4rem; background-color: #ffffff; border-radius: 50%; display: inline-block;}
  .section.sixth .container .mobile-carousel .carousel-btn:last-child {margin-right: 0;}
  .section.sixth .container .mobile-carousel .carousel-btn.selected { background-color: #FA2B56}

  .section.seventh {padding: 2.4rem 0 3.2rem;}
  .section.seventh .container h1 {font-size: 1.8rem; line-height: 2.2rem; letter-spacing: -.038rem; margin-bottom: 1.3rem;}
  .section.seventh .container button { width: 20rem; height: 3.4rem; font-size: 1.2rem; }

  .section.eighth {padding: 3.1rem 0 2.7rem;}
  .section.eighth .container { padding: 0 2.7rem; box-sizing: border-box;}
  .section.eighth .container h1 { font-size: 1.6rem; line-height: 2.2rem; letter-spacing: -.1rem; margin-bottom: .5rem; }
  .section.eighth .container p {font-size: 1.4rem; letter-spacing: -.1rem; margin-bottom: 1.1rem;}
  .section.eighth .container button { width: 20rem; height: 3.4rem; font-size: 1.2rem; position: relative; top: 0; right: 0; }
  .section.eighth .container p span { margin-right: 1rem; }

  .mouse-animate { display: none }

  #chart-0-m {display: block; width: 100%;}
  #s2-chart-w {display: none;}

  .section.main .dim .content .arrow { background-size: 50%; position: absolute; top: 0; background-position: center;}
  .section.main .dim .content .arrow.before { background-position: 100% 50%; left: 0;}
  .section.main .dim .content .arrow.after { background-position: 0% 50%; left: auto; right: 0;}
  .VueCarousel-navigation-button { padding: 15px !important;}
  .VueCarousel-navigation-button.VueCarousel-navigation-prev {margin-right: -15px !important;}
  .VueCarousel-navigation-button.VueCarousel-navigation-next {margin-left: -15px !important;}
  /* .VueCarousel-dot.VueCarousel-dot--active {} */
}

.flip-move {
  transition: all 1s linear !important;
}
.flip-enter, .flip-leave-to {
  transition: all .5s linear;
}

.main .VueCarousel { max-width: 1500px; width: calc(100% - 60px); margin-left: auto; margin-right: auto;}
/* .VueCarousel */
@media screen and (min-width:0\0) and (min-resolution: +72dpi) {
  svg * { font-size: 1rem !important;}
  svg .st3.st4 { font-size: .7rem !important;}
}

@media screen and (min-width:0\0) and (min-resolution: +72dpi) and (max-width: 640px) {
   /* IE9+ CSS */
  .section.sixth .container .chart-wrap > div {width: 24rem; display: block; margin: 0 auto 2.3rem; padding-bottom: 85%;}
  .section.second .container .chart .desc { font-size: 1rem; }
}

@keyframes slide-on {
  from {
    visibility: visible;
    transform: translateX(200px);
    opacity: 0
  }
  0% {
    visibility: visible;
  }
}
@keyframes slide-off {
  0% {visibility: visible}
  to {
    transform: translateX(-200px);
    opacity: 0    
  }
  100% { visibility: hidden; }
}
@keyframes logo-animation {
  to { opacity: .8 }
}
</style>
