<template>
  <div class="viewer">
      <div class="section start gray">
          <div class="container">
              <div class="date">
                <a class='count'>8/10회</a>
                <a class="label">기간</a>
                <div class="date-box">
                    <input type="date" name="start" id="" value='2018-08-01'>
                </div>
                <a class="label in">~</a>
                <div class="date-box"> 
                    <input type="date" name="end" id="" value='2018-08-01'>
                </div>
            </div>

              <div class="card">
                <div class="profile">
                </div>
                <div class="data for-web">
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
              <table class='for-mobile'>
                  <tbody>
                      <tr>
                          <td>팔로워</td>
                          <td class='bold'>1000,000,000</td>
                      </tr>
		      <tr>
                          <td>노출</td>
                          <td class='bold'> 8회</td>
                      </tr>
                      <tr>
                          <td>도달</td>
                          <td class='bold'> 10회</td>
                      </tr>
                      <tr>
                          <td>좋아요</td>
                          <td class='bold'>430개</td>
                      </tr>
                      <tr>
                          <td>댓글</td>
                          <td class='bold'>230개</td>
                      </tr>
                      <tr>
                          <td>저장</td>
                          <td class='bold'>120개</td>
                      </tr>
                      <tr>
                          <td>동영상</td>
                          <td class='bold'>300개</td>
                      </tr>
		      <tr>
                          <td>동영상 재생</td>
                          <td class='bold'>100,000,000</td>
                      </tr>
                      <tr>
                          <td>광고주계정 인바운드</td>
                          <td class='bold'>0회</td>
                      </tr>
                      <tr>
                          <td>중복팔로워</td>
                          <td class='bold'>230명</td>
                      </tr>
                  </tbody>
              </table>
            </div>

            <h1>SIM 서비스 성과 현황</h1>
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
  data() {
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
      },
         user: {}
    };
  },
    methods: {
        yesOrNo(x) {
            if (x) {
                return '예'
            }
            else {
                return '아니요'
            }
        },

    },
  created(){

			var chart5
			var chart6
			var chart7
			var chart8
			var chart9

            this.user = this.$store.getters.user;

			function numberWithCommas(x) {
                if (x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                } else {
                    return 0;
                }
            }

			this.paymentData = {
                top: [
                  { dataName: "팔로워", dataVal: numberWithCommas(this.user.total_follower_count) + "개" },
                  { dataName: "좋아요", dataVal: numberWithCommas(this.user.three_month_like_count) + "개" },
                  { dataName: "댓글", dataVal: numberWithCommas(this.user.three_month_comment_count) + "개" },
                  { dataName: "내댓글", dataVal: numberWithCommas(this.user.three_month_influencer_comment_count) + "회" }
                ],
                bottom: [
                  { dataName: "동영상", dataVal: numberWithCommas(this.user.three_month_movie_count) + "개" },
                  { dataName: "동영상재생", dataVal: numberWithCommas(this.user.three_month_play_count) + "회" },
                  { dataName: "부정워딩수", dataVal: numberWithCommas(this.user.three_month_negative_comment_count) + "회" },
                  { dataName: "제품문의수", dataVal: numberWithCommas(this.user.three_month_inquery_comment_count) + "명" }
                ]
              }

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

h1 {
  /* 광고 성과 현황: */
  font-family: AppleSDGothicNeo-Medium;
  font-size: 46px;
  color: #000000;
  letter-spacing: 0;
  margin-bottom: 40px;
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
  font-weight: 400;
  font-size: 0;
  color: #000000;
  letter-spacing: 0;
  line-height: 22px;
  text-align: right;
  margin-bottom: 30px;
}

.container {
  padding: 50px 0 40px;
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
  font-family: AppleSDGothicNeo-SemiBold;
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
  white-space: nowrap;
  font-weight: 400;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 5px;
}

.card .data .col .data-val {
  /* 430개: */
  font-family: AppleSDGothicNeo-Bold;
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
  height: calc((100vw - 90px) / 2);
  max-height: 540px;
  margin-right: 90px;
  margin-bottom: 40px;
  border-radius: 5px;
  background-color: #ffffff;
}

.chart:nth-child(2n) {
  margin-right: 0;
}

.date .count {
  /* 8/10회: */
  font-family: AppleSDGothicNeo-Bold;
  font-size: 28px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 28px;
  margin-right: 56px;
}

.date .label {
  /* 기간: */
  font-family: AppleSDGothicNeo-SemiBold;
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
  background-image: url("../assets/dropdownArrow.svg");
}

.date-box {
  display: inline-block;
  position: relative; /* Base: */
  background: #ffffff;
  bottom: -10px;
  border: 1px solid #dfe3e9;
  border-radius: 4px;
  overflow: hidden;
  width: 140px;
}

.date-box input[type="date"] {
  height: 100%;
  font-size: 13px;
  padding: 7px 10px 7px 20px;
  color: #002257;
  letter-spacing: -1px;
  line-height: 22px;
  border: none;
  width: 100%;
  box-sizing: border-box;
}

table.for-mobile tbody tr td {
    word-break: keep-all;
    width: 50%;
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    letter-spacing: 0;
    text-align: left;
}

table.for-mobile {
    margin: 0 5%;
    padding-bottom: 20px;
    margin-bottom: 30px;
}
table.for-mobile tbody tr td { 
  text-align: left;
}

table.for-mobile tbody tr td.bold {
  font-family: AppleSDGothicNeo-SemiBold;
  text-align: right;
}
table.for-mobile {
    border-spacing: 13px;
    
}



@media screen and (max-width: 640px) {

  .date {margin-bottom: 2rem; white-space: nowrap;}
  .date .count { font-size: 1.4rem; line-height: 1.7rem; margin-right: 1.8rem;}
  .date .label { font-size: 1.2rem; line-height: 1.5rem; margin-right: .9rem;}
  .date-box { width: 8.1rem; height: 2.2rem; text-align: left;}
  .date-box input[type=date] { height: 2.2rem; padding: 0 0 0 .5rem; font-size: .9rem; text-align: left;}
  .date-box:after { width: .8rem; height: .5rem; background-size: cover; right: .5rem; top: .9rem;}
  .date .label.in {margin: 0 .3rem;}



  .data.for-web { display: none;}

  h1 {font-size: 2rem; margin-bottom: .8rem; text-align: center;}
  h2 { font-size: 1.4rem; line-height: 1.7rem; margin-bottom: 2rem;}

  .container { width: 100%; padding: 2.3rem 2rem 3.3rem; box-sizing: border-box;}
  .date { font-size: 1rem; line-height: 1.2rem; margin-bottom: .3rem; padding-bottom: 0; text-align: right; margin-right: 0; margin-bottom: 3rem;}

  .card {padding: 1.5rem 0 0; margin: 0 .5rem 4rem; width: calc(100% - 1rem);}
  .card .profile {margin-right: 0; width: auto;}
  .card .profile .profile-img {margin-bottom: 1.5rem; width: 10rem; height: 10rem; margin-right: 0;}
  .card .profile .state {margin-bottom: 1.3rem; font-size:2rem; margin-bottom: .5rem;}

  table.for-mobile { padding-bottom: 0; border-spacing: 1rem; margin: 0 1rem 1.9rem; }
  table.for-mobile tbody tr td { font-size: 1.4rem; line-height: 2rem;}

  .chart-wrap { margin: 0; max-width: calc(100vw - 4rem);}

  .payment-button {width: 20.2rem; height: 4rem; font-size: 1.2rem; }

  .chart { display: block; width: 100%;  height: 29rem; margin-bottom: 2rem;}
  .chart:last-child { margin-bottom: 0; }


}


</style>