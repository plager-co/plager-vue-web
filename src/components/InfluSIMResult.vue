<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
            <h2>SIM 진행 인플루언서 <br class="for-mobile"> 전체 성과보기</h2>
            <div class="chart-wrap">
                <div class="chart" id='container'/>
                <div class="chart" id='container2'/>
                <div class="chart" id='container3'/>
                <div class="chart" id='container4'/>
                <div class="chart" id='container5'/>
                <div class="chart" id='container6'/>
                <div class="chart" id='container7'/>
                <div class="chart" id='container8'/>
                <div class="chart" id='container9'/>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  },
created: function(){

			var chart5
			var chart6
			var chart7
			var chart8
			var chart9

			// 반응형
			// $(window).on("resize", function(){
			// 	if($(window).width() < 640){
			// 		chart5.series[0].update({pointWidth:7});
			// 		chart6.series[0].update({pointWidth:7});
			// 		chart7.series[0].update({innerSize:'50%'});
			// 		chart7.setTitle({y: -10});
			// 		chart8.series[0].update({innerSize:'50%'});
			// 		chart8.setTitle({y: -10});
			// 		chart9.series[0].update({pointWidth:24});
			// 	}else{
			// 		chart5.series[0].update({pointWidth:15});
			// 		chart6.series[0].update({pointWidth:15});
			// 		chart7.series[0].update({innerSize:'75%'});
			// 		chart7.setTitle({y: -10});
			// 		chart8.series[0].update({innerSize:'75%'});
			// 		chart8.setTitle({y: -10});
			// 		chart9.series[0].update({pointWidth:46});
			// 	}
			// });

			//차트 데이터, 속성 컨트롤
			$(document).ready(function () {
				var chart = new Highcharts.Chart({
					chart : {
						renderTo : 'container',
						marginTop: 100,
						spacingRight : 0
					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					xAxis : {
						type : 'datetime',
						labels: {
							format: '{value:%Y%m%d}',
							style : {
								fontSize:'10px'
							}
						},
						tickWidth: 0,
					},
					yAxis : {
						title : {
							text : null,
						},
						offset: 0,
						min : 0,
						max : 2000,
					},
					// tooltip : {
					// 	enabled: false
					// },
					plotOptions : {
						series: {
							fillColor: {
								linearGradient: [0, 0, 0, 400],
								stops: [
									[0, Highcharts.getOptions().colors[0]],
									[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
								]
							},
							marker: {
								enabled: false
							}
						}
					},
					legend: {
						align: 'left',
						verticalAlign: 'top',
						y: -15,
						symbolRadius:0,
						borderWidth: 0
					},
					credits: {
						enabled: false
					},
					series : [{
						name : '게시물별 도달',
						type : "areaspline",
						data : [
							[Date.UTC(2018, 9, 1), 800],
							[Date.UTC(2018, 9, 3), 600],
							[Date.UTC(2018, 9, 5), 595],
							[Date.UTC(2018, 9, 7), 334],
							[Date.UTC(2018, 9, 10), 420],
							[Date.UTC(2018, 9, 13), 520],
							[Date.UTC(2018, 9, 15), 620],
							[Date.UTC(2018, 9, 17), 720],
							[Date.UTC(2018, 9, 19), 520],
							[Date.UTC(2018, 9, 20), 620],
							[Date.UTC(2018, 9, 23), 820],
							[Date.UTC(2018, 9, 25), 1000],
							[Date.UTC(2018, 9, 28), 900],
							[Date.UTC(2018, 9, 31), 800],

						],

					}],

				});

				var chart2 = new Highcharts.Chart({
					chart : {
						renderTo : 'container2',
						marginTop: 100,
					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					xAxis : {
						type : 'datetime',
						labels: {
							format: '{value:%Y%m%d}',
							style : {
								fontSize:'10px'
							}
						},
						tickWidth: 0,
					},
					yAxis : {
						title : {
						text : null,
						},
						offset: 0,
						min : 0,
						max : 2000,
					},
					// tooltip : {
					// 	enabled: false
					// },
					plotOptions : {
						series: {
							fillColor: {
								linearGradient: [0, 0, 0, 400],
								stops: [
									[0, Highcharts.Color('#8ddc59').setOpacity(1).get('rgba')],
									[1, Highcharts.Color('#fff').setOpacity(0.2).get('rgba')],
								]
							},
							lineColor: '#8ddc59',
							legendColor: '#8ddc59',
							marker: {
								enabled: false
							}
						}
					},
					legend: {
						align: 'left',
						verticalAlign: 'top',
						y: -15,
						symbolRadius:0,
						borderWidth: 0,
						color: '#8ddc59',
					},
					credits: {
						enabled: false
					},
					series : [{
						name : '게시물별 노출',
						type : "areaspline",
						color: '#8ddc59',
						data : [
							[Date.UTC(2018, 9, 1), 800],
							[Date.UTC(2018, 9, 3), 600],
							[Date.UTC(2018, 9, 5), 595],
							[Date.UTC(2018, 9, 7), 334],
							[Date.UTC(2018, 9, 10), 420],
							[Date.UTC(2018, 9, 13), 520],
							[Date.UTC(2018, 9, 15), 620],
							[Date.UTC(2018, 9, 17), 720],
							[Date.UTC(2018, 9, 19), 520],
							[Date.UTC(2018, 9, 20), 620],
							[Date.UTC(2018, 9, 23), 820],
							[Date.UTC(2018, 9, 25), 1000],
							[Date.UTC(2018, 9, 28), 900],
							[Date.UTC(2018, 9, 31), 800],

						],
					}],
				});

				var chart3 = new Highcharts.Chart({
					chart : {
						renderTo : 'container3',
						marginTop: 100,
					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					xAxis : {
						type : 'datetime',
						labels: {
							format: '{value:%Y%m%d}',
							style : {
								fontSize:'10px'
							}
						},
						tickWidth: 0,
					},
					yAxis : {
						title : {
							text : null,
						},
						offset: 0,
						min : 0,
						max : 2000,
					},
					// tooltip : {
					// 	enabled: false
					// },
					plotOptions : {
						series: {
							marker: {
								enabled: false
							}
						}
					},
					legend: {
						align: 'left',
						verticalAlign: 'top',
						y: -15,
						symbolRadius:0,
						borderWidth: 0,
						//color: '#2e95ec',
					},
					credits: {
						enabled: false
					},
					series : [
					{
						name : '누적도달',
						type : "spline",
						color: '#2e95ec',
						data : [
							[Date.UTC(2018, 9, 1), 500],
							[Date.UTC(2018, 9, 3), 600],
							[Date.UTC(2018, 9, 5), 595],
							[Date.UTC(2018, 9, 7), 334],
							[Date.UTC(2018, 9, 10), 420],
							[Date.UTC(2018, 9, 13), 520],
							[Date.UTC(2018, 9, 15), 620],
							[Date.UTC(2018, 9, 17), 720],
							[Date.UTC(2018, 9, 19), 520],
							[Date.UTC(2018, 9, 20), 620],
							[Date.UTC(2018, 9, 23), 820],
							[Date.UTC(2018, 9, 25), 1000],
							[Date.UTC(2018, 9, 28), 900],
							[Date.UTC(2018, 9, 31), 800],

						],

					},
					{
						name : '누적노출',
						type : "spline",
						color: '#8ddc59',
						data : [
							[Date.UTC(2018, 9, 1), 500],
							[Date.UTC(2018, 9, 3), 650],
							[Date.UTC(2018, 9, 5), 645],
							[Date.UTC(2018, 9, 7), 384],
							[Date.UTC(2018, 9, 10), 470],
							[Date.UTC(2018, 9, 13), 690],
							[Date.UTC(2018, 9, 15), 520],
							[Date.UTC(2018, 9, 17), 620],
							[Date.UTC(2018, 9, 19), 520],
							[Date.UTC(2018, 9, 20), 720],
							[Date.UTC(2018, 9, 23), 820],
							[Date.UTC(2018, 9, 25), 900],
							[Date.UTC(2018, 9, 28), 980],
							[Date.UTC(2018, 9, 31), 1000],

						],
					}],

				});

				var chart4 = new Highcharts.Chart({
					chart : {
						renderTo : 'container4',
						marginTop: 100,
					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					xAxis : {
						type : 'datetime',
						labels: {
							format: '{value:%Y%m%d}',
							style : {
								fontSize:'10px'
							}
						},
						tickWidth: 0,
					},
					yAxis : {
						title : {
							text : null,
						},
						offset: 0,
						min : 0,
						max : 2000,
					},
					// tooltip : {
					// 	enabled: false
					// },
					plotOptions : {
						series: {
							marker: {
								enabled: false
							}
						}
					},
					legend: {
						align: 'left',
						verticalAlign: 'top',
						y: -15,
						symbolRadius:0,
						borderWidth: 0,
						//color: '#2e95ec',
					},
					credits: {
						enabled: false
					},
					series : [{
						name : '동영상 누적 조회수',
						type : "spline",
						color: '#092056',
						data : [
							[Date.UTC(2018, 9, 1), 500],
							[Date.UTC(2018, 9, 3), 600],
							[Date.UTC(2018, 9, 5), 595],
							[Date.UTC(2018, 9, 7), 334],
							[Date.UTC(2018, 9, 10), 420],
							[Date.UTC(2018, 9, 13), 520],
							[Date.UTC(2018, 9, 15), 620],
							[Date.UTC(2018, 9, 17), 720],
							[Date.UTC(2018, 9, 19), 520],
							[Date.UTC(2018, 9, 20), 620],
							[Date.UTC(2018, 9, 23), 820],
							[Date.UTC(2018, 9, 25), 1000],
							[Date.UTC(2018, 9, 28), 900],
							[Date.UTC(2018, 9, 31), 800],

						],
					}],
				});

				chart5 = new Highcharts.Chart({
					chart : {
						renderTo : 'container5',
						marginTop: 100,
					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					xAxis : {
						type : 'datetime',
						labels: {
							format: '{value:%Y%m%d}',
							style : {
								fontSize:'10px'
							}
						},
						tickWidth: 0,
					},
					yAxis : {
						title : {
							text : null,
						},
						offset: 0,
						min : 0,
						max : 2000,
					},
					// tooltip : {
					// 	enabled: false
					// },
					plotOptions : {
						series: {
							marker: {
								enabled: false
							},
							pointWidth: ($(window).width() < 640) ? 7 : 15,
						}
					},
					legend: {
						align: 'left',
						verticalAlign: 'top',
						y: -15,
						symbolRadius:0,
						borderWidth: 0,
					},
					credits: {
						enabled: false
					},
					series : [{
						name : '좋아요',
						type : "column",
						color: '#8ddc59',
						pointPadding: 2,
						groupPadding: 0,
						data : [
							[Date.UTC(2018, 9, 1), 500],
							[Date.UTC(2018, 9, 2), 500],
							[Date.UTC(2018, 9, 3), 600],
							[Date.UTC(2018, 9, 4), 600],
							[Date.UTC(2018, 9, 5), 595],
							[Date.UTC(2018, 9, 6), 334],
							[Date.UTC(2018, 9, 7), 334],
							[Date.UTC(2018, 9, 8), 420],
							[Date.UTC(2018, 9, 9), 520],
							[Date.UTC(2018, 9, 10), 620],
							[Date.UTC(2018, 9, 11), 720],
							[Date.UTC(2018, 9, 12), 520],
							[Date.UTC(2018, 9, 13), 620],
							[Date.UTC(2018, 9, 14), 820],
							[Date.UTC(2018, 9, 15), 1000],
							[Date.UTC(2018, 9, 16), 900],
							[Date.UTC(2018, 9, 17), 800],
							[Date.UTC(2018, 9, 18), 600],
							[Date.UTC(2018, 9, 19), 595],
							[Date.UTC(2018, 9, 20), 334],
							[Date.UTC(2018, 9, 21), 500],
							[Date.UTC(2018, 9, 22), 500],
							[Date.UTC(2018, 9, 23), 600],
							[Date.UTC(2018, 9, 24), 600],
							[Date.UTC(2018, 9, 25), 595],
							[Date.UTC(2018, 9, 26), 334],
							[Date.UTC(2018, 9, 27), 334],
							[Date.UTC(2018, 9, 28), 420],
							[Date.UTC(2018, 9, 29), 520],
							[Date.UTC(2018, 9, 30), 620],

						],
					}],
				});

				chart6 = new Highcharts.Chart({
					chart : {
						renderTo : 'container6',
						marginTop: 100,
					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					xAxis : {
						type : 'datetime',
						labels: {
							format: '{value:%Y%m%d}',
							style : {
								fontSize:'10px'
							}
						},
						tickWidth: 0,
					},
					yAxis : {
						title : {
							text : null,
						},
						offset: 0,
						min : 0,
						max : 2000,
					},
					// tooltip : {
					// 	enabled: false
					// },
					plotOptions : {
						series: {
							marker: {
								enabled: false
							},
							pointWidth: ($(window).width() < 640) ? 7 : 15,
						}
					},
					legend: {
						align: 'left',
						verticalAlign: 'top',
						y: -15,
						symbolRadius:0,
						borderWidth: 0,
					},
					credits: {
						enabled: false
					},
					series : [{
						name : '팔로워 댓글',
						type : "column",
						color: '#2e95ec',
						pointPadding: 2,
						groupPadding: 0,
						data : [
							[Date.UTC(2018, 9, 1), 500],
							[Date.UTC(2018, 9, 2), 500],
							[Date.UTC(2018, 9, 3), 600],
							[Date.UTC(2018, 9, 4), 600],
							[Date.UTC(2018, 9, 5), 595],
							[Date.UTC(2018, 9, 6), 334],
							[Date.UTC(2018, 9, 7), 334],
							[Date.UTC(2018, 9, 8), 420],
							[Date.UTC(2018, 9, 9), 520],
							[Date.UTC(2018, 9, 10), 620],
							[Date.UTC(2018, 9, 11), 720],
							[Date.UTC(2018, 9, 12), 520],
							[Date.UTC(2018, 9, 13), 620],
							[Date.UTC(2018, 9, 14), 820],
							[Date.UTC(2018, 9, 15), 1000],
							[Date.UTC(2018, 9, 16), 900],
							[Date.UTC(2018, 9, 17), 800],
							[Date.UTC(2018, 9, 18), 600],
							[Date.UTC(2018, 9, 19), 595],
							[Date.UTC(2018, 9, 20), 334],
							[Date.UTC(2018, 9, 21), 500],
							[Date.UTC(2018, 9, 22), 500],
							[Date.UTC(2018, 9, 23), 600],
							[Date.UTC(2018, 9, 24), 600],
							[Date.UTC(2018, 9, 25), 595],
							[Date.UTC(2018, 9, 26), 334],
							[Date.UTC(2018, 9, 27), 334],
							[Date.UTC(2018, 9, 28), 420],
							[Date.UTC(2018, 9, 29), 520],
							[Date.UTC(2018, 9, 30), 620],

						],
					}],
				});

				chart7 = new Highcharts.Chart({
					chart: {
						renderTo : 'container7',
						plotBackgroundColor: null,
						plotBorderWidth: 0,
						plotShadow: false
					},
					title: {
						text: '도달 팔로워 성별',
						floating: true,
						align: 'center',
						verticalAlign: 'bottom',
						y: ($(window).width() < 640) ? -10 : -30,
						margin: 10,
						style: {
							fontSize:'1.3em',
							color: '#4c6072',
						},
					},
					credits: {
						enabled: false
					},
					tooltip : {
						enabled: false
					},
					legend: {
						enabled: true,
						align: 'left',
						verticalAlign: 'top',
						layout: 'horizontal',
						symbolRadius:0,
						borderWidth: 0,
					},
					plotOptions: {
						pie: {
							dataLabels: {
								enabled: true,
								distance: -20,
								style: {
									fontWeight: 'normal',
									color: '#fff',
									textOutline: false,
								},
								connectorPadding: 10
							},
							startAngle: 0,
							endAngle: 360,
							center: ['50%', '50%'],
							showInLegend: true
						}
					},
					series: [{
						size: '70%',
						type: 'pie',
						innerSize: ($(window).width() < 640) ? '50%' : '75%',
						data: [
							 {
								name: '여성',
								color: '#8ddc59',
								y: 70,
								dataLabels: {
									enabled: true,
									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							},{
								name: '남성',
								color: '#00bd7d',
								y: 20,
								dataLabels: {
									enabled: true,

									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							},{
								name: '기타',
								color: '#009e9b',
								y: 10,
								dataLabels: {
									enabled: true,

									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							}
						]
					}]
				});

				chart8 = new Highcharts.Chart({
					chart: {
						renderTo : 'container8',
						plotBackgroundColor: null,
						plotBorderWidth: 0,
						plotShadow: false
					},
					title: {
						text: '도달 팔로워 국가별',
						floating: true,
						align: 'center',
						verticalAlign: 'bottom',
						y: ($(window).width() < 640) ? -10 : -30,
						margin: 10,
						style: {
							fontSize:'1.3em',
							color: '#4c6072',
						},
					},
					credits: {
						enabled: false
					},
					tooltip : {
						enabled: false
					},
					legend: {
						enabled: true,
						align: 'left',
						verticalAlign: 'top',
						layout: 'horizontal',
						symbolRadius:0,
						borderWidth: 0,
					},
					plotOptions: {
						pie: {
							dataLabels: {
								enabled: true,
								distance: -20,
								style: {
									fontWeight: 'normal',
									color: '#fff',
									textOutline: false,
								},
								connectorPadding: 10
							},
							startAngle: 0,
							endAngle: 360,
							center: ['50%', '50%'],
							size: '70%',
							showInLegend: true
						}
					},
					series: [{
						type: 'pie',
						innerSize: ($(window).width() < 640) ? '50%' : '75%',
						data: [
							 {
								name: '한국',
								color: '#8ddc59',
								y: 40,
								dataLabels: {
									enabled: true,
									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							},{
								name: '일본',
								color: '#00bd7d',
								y: 25,
								dataLabels: {
									enabled: true,

									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							},{
								name: '미국',
								color: '#009e9b',
								y: 25,
								dataLabels: {
									enabled: true,

									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							},{
								name: '기타',
								color: '#00526c',
								y: 10,
								dataLabels: {
									enabled: true,

									formatter: function(){
										return Math.round(this.percentage) + ' %';
									}
								}
							}
						]
					}]
				});

				chart9 = new Highcharts.Chart({
					chart: {
						renderTo : 'container9',
						marginTop: 100,

					},
					title : {
						text : null,

					},
					subtitle : {
						text : null,

					},
					credits: {
						enabled: false
					},
					tooltip : {
						enabled: false
					},
					xAxis: {

						categories: ['10대','20대','30대','40대','50대','60대','70대'],
						tickLength: 0,
						labels: {
							enabled: true
						},
					},
					yAxis : {
						title : {
						text : null,
						},
						offset: 0,
						min : 0,
						max : 100,

					},
					legend: {
						enabled: true,
						align: 'left',
						verticalAlign: 'top',
						layout: 'horizontal',
						y: -15,
						symbolRadius:0,
						borderWidth: 0,
						margin:0
					},
					plotOptions: {
						column: {
							dataLabels: {
								enabled: true,
								style: {
									fontSize:'10px',
									fontWeight: 'normal',
									color: '#31501c',

									textOutline: false,
								},
								connectorPadding: 10,
								format: '{y} %',
							},
						},
						series: {
							pointWidth: ($(window).width() < 640) ? 24 : 46,
							borderRadius: '4px',
							color: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
							stops: [
								[0, '#2e95ec'],
								[1, '#8ddc59']
								]
							}
						}
					},
					series: [{
						name : '연령별 팔로워 도달%',
						type: 'column',
						linearGradient: {
							x1: 0,
							x2: 0,
							y1: 0,
							y2: 1
						},
						data: [90, 68, 50, 44, 37, 40, 34]
					}],

				});

			});
  }
};
</script>

<style scoped>

img {width: 100%;}

h2 {/* SIM 진행 인플루언서 전체 성과보기: */
  font-weight: 400;
  font-size: 42px;
  color: #000000;
  text-align: center;
  margin-bottom: 97px;
  font-weight: unset;
}

.container {
  padding: 75px 0 83px;
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
  height: calc((100vw - 90px) / 2);
  max-height: 540px;
  margin-right: 90px;
  margin-bottom: 126px;
  border-radius: 5px;
  background-color: #ffffff;
}

.chart:nth-child(2n) {
  margin-right: 0;
}


@media screen and (max-width: 640px) {

  .container {padding: 2.7rem 2rem 2.1rem; box-sizing: border-box;}

  h2 { font-size: 2rem; line-height: 3rem; margin-bottom: 2.4rem; margin-top: 0;}




  .chart-wrap { margin: 0; max-width: calc(100vw - 4rem);}


  .payment-button {width: 20.2rem; height: 4rem; font-size: 1.2rem; }

  .chart { display: block; width: 100%;  height: 29rem; margin-bottom: 2rem;}
  .chart:last-child { margin-bottom: 0; }

}




</style>
