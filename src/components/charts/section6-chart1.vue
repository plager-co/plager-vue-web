<template>
<div class="full" id='s6-chart-1'>
<svg version="1.1" id="chart3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 469 457" xml:space="preserve">

<filter  filterUnits="objectBoundingBox" height="103.5%" id="filter-2" width="103.4%" x="-1.7%" y="-1.8%">
	<feMorphology  in="SourceAlpha" operator="dilate" radius="1.5" result="shadowSpreadOuter1"></feMorphology>
	<feOffset  dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
	<feGaussianBlur  in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"></feGaussianBlur>
	<feComposite  in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
	<feColorMatrix  in="shadowBlurOuter1" type="matrix" values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.03 0"></feColorMatrix>
</filter>
<title>section-6-chart1</title>
<desc>Created with Sketch.</desc>
<g id="chart-wrap">
	<g id="Home_white_main1" transform="translate(-195.000000, -8665.000000)">
		<g id="Group-9" transform="translate(201.000000, 8549.000000)">
			<g id="section-6-chart1" transform="translate(0.000000, 122.000000)">
				<g id="Base">
					<g class="st0">
						<path id="path-1_2_" d="M-3.1-5.5h463.1c1.3,0,2.4,1.9,2.4,4.3v447.5c0,2.4-1.1,4.3-2.4,4.3H-3.1c-1.3,0-2.4-1.9-2.4-4.3V-1.2
							C-5.5-3.6-4.4-5.5-3.1-5.5z"/>
					</g>
					<g>
						<path id="path-1_1_" class="st1" d="M-3.1-5.5h463.1c1.3,0,2.4,1.9,2.4,4.3v447.5c0,2.4-1.1,4.3-2.4,4.3H-3.1
							c-1.3,0-2.4-1.9-2.4-4.3V-1.2C-5.5-3.6-4.4-5.5-3.1-5.5z"/>
					</g>
				</g>
				<rect id="Line-segment" x="87.5" y="113.5" class="st2" width="344" height="1"/>
				<rect id="Line-segment_1_" x="87.5" y="162.5" class="st2" width="344" height="1"/>
				<rect id="Line-segment_2_" x="87.5" y="211.5" class="st2" width="344" height="1"/>
				<rect id="Line-segment_3_" x="87.5" y="260.5" class="st2" width="344" height="1"/>
				<rect id="Line-segment_4_" x="87.5" y="309.5" class="st2" width="344" height="1"/>
				<rect id="Line-segment_5_" x="87.5" y="358.5" class="st2" width="344" height="1"/>
				<text transform="matrix(1 0 0 1 19.506 101.5)" class="st3 st4 st5">100억달러</text>
				<text transform="matrix(1 0 0 1 70.2414 101.5)" class="st3 st4 st5"> </text>
				<text transform="matrix(1 0 0 1 22.392 297.5)" class="st3 st4 st5">20억달러</text>
				<text transform="matrix(1 0 0 1 67.4636 297.5)" class="st3 st4 st5"> </text>
				<text transform="matrix(1 0 0 1 41.166 346.5)" class="st3 st4 st5">0</text>
				<text transform="matrix(1 0 0 1 163.486 384.5)" class="st3 st4 st5">2017년</text>
				<text transform="matrix(1 0 0 1 319.734 384.5)" class="st3 st4 st5">2020년</text>
				<text transform="matrix(1 0 0 1 190 420.5)" class="st3 st4 st5">출처 : KOTRA</text>
				<g class='charts'>
					<rect id="Graph-segment" x="152.5" y="310.5" class="st6" width="56" height="48"/>
					<rect id="Graph-segment_1_" x="310.5" y="114.5" class="st7" width="56" height="244"/>
				</g>
				<g id="Header" transform="translate(120.000000, 47.000000)">
					<text transform="matrix(1 0 0 1 -4.806 10.5)" class="st8 st9 st10">글로벌 인플루언서 마케팅 규모</text>
				</g>
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
			const element = document.getElementById('s6-chart-1')
			const elementWatcher = scrollMonitor.create( element )

			var chartAnime = anime({
				targets: '#s6-chart-1 .charts rect',
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
  filter: url(#filter-2);
}
.st1 {
  width: 100%;
  fill: #ffffff;
  stroke: #efefef;
}
.st2 {
  fill: #f0f0f0;
}
.st3 {
  fill: #858585;
}
.st4 {
  font-family: "AppleSDGothicNeo-Medium-KSCpc-EUC-H";
}
.st5 {
  font-size: 15px;
}
.st6 {
  fill: #0e0439;
  /* transform: translateY(48px);
  height: 0; */
}
.st7 {
  fill: #8ddc59;
  /* transform: translateY(244px);
  height: 0; */
}
/* #chart3.fully-in-viewport .st6 {
  transform: translate(0);
  height: 48px;
}
#chart3.fully-in-viewport .st7 {
  transform: translate(0);
  height: 244px;
} */
.st8 {
  fill: #4c6072;
}
.st9 {
  font-family: "AppleSDGothicNeo-Regular-KSCpc-EUC-H";}
.st10 {
  font-size: 18px;
}
#chart3 { width: 100%; }
/* #chart3 * {
  transition: all 0.5s;
  transition-timing-function: ease-out;
  transition-delay: .3s;
} */

</style>
