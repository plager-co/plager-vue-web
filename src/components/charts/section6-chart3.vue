<template>
<div class="full" id='s6-chart-3'>
    <svg version="1.1" id="chart1" v-in-viewport xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
        y="0px" viewBox="0 0 470 458" style="enable-background:new 0 0 470 458;" xml:space="preserve">

    <title>section-6-chart3</title>
    <desc>Created with Sketch.</desc>
        <g class="chart-wrap">
            <path id="Base" class="st0" d="M3.4,1h463.1c1.3,0,2.4,1.9,2.4,4.3v447.5c0,2.4-1.1,4.3-2.4,4.3H3.4c-1.3,0-2.4-1.9-2.4-4.3V5.3
                C1,2.9,2.1,1,3.4,1z"/>
            <rect id="Line-segment" x="94" y="120" class="st1" width="344" height="1"/>
            <rect id="Line-segment_1_" x="94" y="169" class="st1" width="344" height="1"/>
            <rect id="Line-segment_2_" x="94" y="218" class="st1" width="344" height="1"/>
            <rect id="Line-segment_3_" x="94" y="267" class="st1" width="344" height="1"/>
            <rect id="Line-segment_4_" x="94" y="316" class="st1" width="344" height="1"/>
            <rect id="Line-segment_5_" x="94" y="365" class="st1" width="344" height="1"/>
            <text transform="matrix(1 0 0 1 132.812 391.9999)" class="st2 st3 st4">2012년</text>
            <text transform="matrix(1 0 0 1 248.614 391.9999)" class="st2 st3 st4">2016년</text>
            <text transform="matrix(1 0 0 1 363.986 391.9999)" class="st2 st3 st4">2017년</text>
            <g class="charts">
              <rect id="Graph-segment" x="122" y="361" class="st5" width="56" height="5"/>
              <rect id="Graph-segment_1_" x="238" y="218" class="st6" width="56" height="148"/>
              <rect id="Graph-segment_2_" x="354" y="120" class="st7" width="56" height="246"/>
            </g>

            <text transform="matrix(1 0 0 1 36.386 108)" class="st2 st3 st4">100만</text>
            <text transform="matrix(1 0 0 1 66.3616 108)" class="st2 st3 st4"> </text>
            <text transform="matrix(1 0 0 1 39.074 206)" class="st2 st3 st4">60만 </text>
            <text transform="matrix(1 0 0 1 47.666 352.9999)" class="st2 st3 st4">0</text>
            <text transform="matrix(1 0 0 1 90 426.9999)" class="st2 st3 st4">출처 : Mediakix(미국 인플루언서 조사기관자료)</text>
            <text transform="matrix(1 0 0 1 60.18 64)" class="st8 st9 st10">인스타그램을 활용한 소셜 인플루언서 마케팅 규모</text>
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
			const element = document.getElementById('s6-chart-3')
			const elementWatcher = scrollMonitor.create( element )

			var chartAnime = anime({
				targets: '#s6-chart-3 .charts rect',
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
}
.st6 {
  fill: #00526c;
}
.st7 {
  fill: #8ddc59;
}

.st8 {
  fill: #4c6072;
}
.st9 {
  font-family: "AppleSDGothicNeo-Regular-KSCpc-EUC-H";
}
.st10 {
  font-size: 18px;
}
</style>
