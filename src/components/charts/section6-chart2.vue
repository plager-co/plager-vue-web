<template>
<div class="full" id='s6-chart-2'>
  <svg version="1.1" id="chart2" v-in-viewport xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
    y="0px" viewBox="0 0 470 458" style="enable-background:new 0 0 470 458;" xml:space="preserve">

  <title>section-6-chart2</title>
  <desc>Created with Sketch.</desc>
  <g id="chart2">
    <g id="Home_white_main1" transform="translate(-712.000000, -8532.000000)">
      <g id="section-6-chart2" transform="translate(713.000000, 8533.000000)">
        <path id="Base" class="st0" d="M2.4,0h463.1c1.3,0,2.4,1.9,2.4,4.3v447.5c0,2.4-1.1,4.3-2.4,4.3H2.4c-1.3,0-2.4-1.9-2.4-4.3V4.3
          C0,1.9,1.1,0,2.4,0z"/>
        <g id="Graph-lines" transform="translate(78.000000, 119.000000)">
          <rect id="Line-segment" y="0" class="st1" width="344" height="1"/>
          <rect id="Line-segment-Copy-2" y="23" class="st1" width="344" height="1"/>
          <rect id="Line-segment_1_" y="49" class="st1" width="344" height="1"/>
          <rect id="Line-segment-Copy-3" y="72" class="st1" width="344" height="1"/>
          <rect id="Line-segment_2_" y="98" class="st1" width="344" height="1"/>
          <rect id="Line-segment-Copy-4" y="121" class="st1" width="344" height="1"/>
          <rect id="Line-segment_3_" y="147" class="st1" width="344" height="1"/>
          <rect id="Line-segment-Copy-5" y="170" class="st1" width="344" height="1"/>
          <rect id="Line-segment_4_" y="196" class="st1" width="344" height="1"/>
          <rect id="Line-segment-Copy-6" y="219" class="st1" width="344" height="1"/>
          <rect id="Line-segment_5_" y="245" class="st1" width="344" height="1"/>
        </g>
        <text transform="matrix(1 0 0 1 40.61 206)" class="st2 st3 st4">60% </text>
        <text transform="matrix(1 0 0 1 49.166 352.9999)" class="st2 st3 st4">0</text>
        <text transform="matrix(1 0 0 1 168.614 389.9999)" class="st2 st3 st4">2016년</text>
        <text transform="matrix(1 0 0 1 41.61 147)" class="st2 st3 st4">90%</text>
        <text transform="matrix(1 0 0 1 325.234 389.9999)" class="st2 st3 st4">2020년</text>
        <text transform="matrix(1 0 0 1 125 425.9999)" class="st2 st3 st4">출처 : Chute(컨텐츠 플랫폼 조사기관)</text>

        <g class="charts">
          <rect id="Graph-segment" x="158" y="217" class="st5" width="56" height="147"/>
          <rect id="Graph-segment_1_" x="316" y="142" class="st6" width="56" height="222"/>
        </g>
        <g id="Header" transform="translate(27.000000, 47.000000)">
          <text transform="matrix(1 0 0 1 0.958 16)" class="st7 st8 st9">미국의 브랜드들 중 인플루언서 마케팅을 활용하는 브랜드</text>
        </g>
      </g>
    </g>
  </g>
</svg>
</div>
</template>

<script>
import anime from 'animejs'
var  scrollMonitor  = require ( "scrollmonitor" ) ; //  require를 사용하지 않으면 scrollMonitor 전역을 사용할 수 있습니다.


export default {
	methods: {
    lineAnimate: function() {
			const element = document.getElementById('s6-chart-2')
			const elementWatcher = scrollMonitor.create( element )

			var chartAnime = anime({
				targets: '#s6-chart-2 .charts rect',
				y: function(el, i){ return [ 358.5, 358.5 - anime.getValue(el, 'height')] },
				height: function(el, i){ return [0, anime.getValue(el, 'height')] },
				easing: 'linear',
				duration: 500,
				delay: 300,
				direction: 'normal',
				loop: false
			})

			elementWatcher.enterViewport( function(){
				console.log('enter')
				chartAnime.restart()
			})

			elementWatcher.exitViewport(function() {
				console.log('exit')
				chartAnime.play()
				chartAnime.reverse()
			})
		}
  },
  created: function() {
    this.$nextTick(() => {
      this.lineAnimate();
    });
	}
	};
</script>

<style scoped>
.st0 {
  fill: #ffffff;
  stroke: #efefef;
}
.st1 {
  fill: #f0f0f0;
}
.st2 {
  fill: #858585;
}
.st3 {
  font-family: "AppleSDGothicNeo-Medium-KSCpc-EUC-H";
}
.st4 {
  font-size: 15px;
}
.st5 {
  fill: #0e0439;
  /* transform: translateY(147px); */
  /* height: 0; */
}
.st6 {
  fill: #8ddc59;
  /* transform: translateY(222px); */
  /* height: 0; */
}
/* #chart2.fully-in-viewport .st5 {
  transform: translateY(0px);
  height: 147px;
}
#chart2.fully-in-viewport .st6 {
  transform: translateY(0px);
  height: 222px;
} */
.st7 {
  fill: #4c6072;
}
.st8 {
  font-family: "AppleSDGothicNeo-Regular-KSCpc-EUC-H";
}
.st9 {
  font-size: 18px;
}
/*
#chart2 * {
  transition: all 0.5s;
  transition-timing-function: ease-out;
  transition-delay: .3s;
} */
</style>
