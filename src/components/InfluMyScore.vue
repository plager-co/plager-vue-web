<template>
  <div class="viewer">
    <empty-tester-popup></empty-tester-popup>
    <alert-base></alert-base>
      <div class="dim" v-if='$store.state.isTestPopup'>
        <div class="cell">
            <div class="popup">
                <div class="close-wrap" style="height: 40px;">
                    <img src="../assets/cross.svg" alt="" @click='exitSelf'>
                </div>
                <span>내 영향력을 간단하게 테스트 해볼 수 있습니다.<br>
                    테스트하고 인플루언서 직업으로 활동하세요.</span><br>
		<div class="popup1">
                <span>비공개 계정은 테스트되지 않습니다.</span><br>
                <div class="input-set btn">
                    <div class="input-wrap btn">
                        <div class="text" style=" padding-left: 3rem; height: 4rem; margin-bottom: 2rem;">@
                         <input type="text" :style="{border: box}" id="input-tester-instagram-id" placeholder='인스타그램 아이디 입력' v-model="instagram_id">
                        </div>
                        <button style="margin-bottom:30px;" class="influ-login" @click="closeSelf">확인</button>
			</div>
		    </div>
                </div>
            </div>
        </div>
        </div>
      <loading v-if='loadingPopup'></loading>
      <div class="section start gray">
          <div class="container">
              <h1>내 영향력 테스트</h1>
              <!-- <p>나의 영향력을 간단하게 테스트 해볼 수 있습니다. <br>
                테스트하고 인플루언서 직업으로 활동하세요.
                </p> -->
                <div class="card">
                    <div class="left">
                        <img class="profile-img" v-bind:src="tester.picture_link">
                        <div class="profile-name">@{{tester.instagram}}</div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>팔로워</td>
                                    <td>{{numberWithCommas(tester.total_follower_count)}}명</td>
                                </tr>

                                <tr>
                                    <td>포지션</td>
                                    <td>{{tester.level}} 인플루언서</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="right">
                        <div class="bottom">
                            <h1>내 영향력 지수</h1>
                            <div class="desc">전체 인플루언서 <br class="for-mobile"> 평균 영향력 지수 {{Math.round(avg_influencer_effect_rate * 100) / 100}}%</div>
                            <button class="percent" disabled>{{Math.round(tester.influencer_effect_rate * 100) / 100}}%</button>
                        </div>
			<div class="top">
                            <div class="title">최근 3개월 평균</div>
                        </div>
                        <div class="card">
                            <div class="left2">
                                <div class="middle">
                                    <table>
                                        <tbody>
                                            <tr>
                                               <td>게시물</td>
                                               <td>{{numberWithCommas(tester.three_month_post_count)}}개</td>
                                            </tr>
                                            <tr>
                                                <td>좋아요</td>
                                                <td>{{numberWithCommas(tester.three_month_like_count)}}개</td>
                                            </tr>
                                            <tr>
                                                <td>댓글</td>
                                                <td>{{numberWithCommas(tester.three_month_comment_count)}}개</td>
                                            </tr>
                                            <tr>
                                                <td>동영상 수</td>
                                                <td>{{numberWithCommas(tester.three_month_movie_count)}}개</td>
                                            </tr>
                                            <tr>
                                                <td>동영상 재생</td>
                                                <td>{{numberWithCommas(tester.three_month_play_count)}}회</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="right2" >

                                <div class="pred">1회 노출 예상 모델료 : </div>
                                <div class="pred">약<h2> {{numberWithCommas(tester.price)}}원</h2></div>
                            </div>


                        </div>
                    </div>
                </div>
                <p class="bottom for-web">
                    위 영향력 지수와 모델료는 간단한 몇가지 항목으로 산출한 것으로<br>
                    정확한 판단 기준이 되지는 못합니다.<br>
                    <br>
                    플래거의 인플루언서로 등록하여 더 자세히 알아보세요.
                </p>        
                <p class="bottom for-mobile">
                    위 영향력 지수와 모델료는 간단한 몇가지 항목으로 <br> 산출한 것으로
                    정확한 판단 기준이 되지는 못합니다.<br>
                    <br>
                    플래거의 인플루언서로 등록하여 더 자세히 알아보세요.
                </p>        
                <button @click='$router.push("/influencer-join")'>인플루언서 등록하기</button>
          </div>
      </div>
  </div>
</template>

<script>
import Loading from './common/Loading'
import AlertBase from './AlertBase'
import EmptyTesterPopup from "./common/EmptyTesterPopup";

export default {
    components: {EmptyTesterPopup, Loading, AlertBase },
    methods: {

    numberWithCommas(x) {
          if (x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        } else {
              return 0;
          }
    },
    exitSelf() {
        this.$router.push("/");
        },
    async closeSelf() {
        if(!this.instagram_id){
            this.box = '2px solid red';
            this.$store.commit('closeTestPopup');
            this.$store.commit('openEmptyTesterPopup');
            return
        }
        this.$store.commit('closeAlertPopup');
        this.$store.commit('setError', false);
        this.loadingPopup = true;
        this.loadFlag = true;
        function sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
        }

        var tester = {};
        var tried = 0;
        var failPopup = false;
        var noIdPopup = false;
        var today = new Date();
        var loadFlag = true;

        while (loadFlag){
            console.log('loading...')
            await this.$store.dispatch("fetchTesterByInstagramId", this.instagram_id);
            var testers = this.$store.getters.testers;
            testers.forEach(function (val){

                var valid_date = false;

                if(val.created_at){
                    var t = val.created_at.split(/[- :]/);
                    var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
                    var diff= d - today ;
                    console.log("diff");
                    console.log(diff);
                    console.log(24*60*60*1000);
                    if ( diff < 24*60*60*1000 )
                    {
                        valid_date = true;
                    }
                }

                console.log("valid_date");
                console.log(valid_date);
                console.log("val.status");
                console.log(val.status);


                if (val.status === 3 && valid_date){
                    tester = val;
                    loadFlag = false;
                } else if (val.status === -1 && valid_date) {
                    loadFlag = false;
                    noIdPopup = true;
                } else if (val.status === -100 && valid_date) {
                    loadFlag = false;
                    failPopup = true;
                }
            });
            await sleep(1000);
            tried = tried + 1;
            if (tried > 120){
                loadFlag = false;
                failPopup = true;
            }

            loadFlag = !this.$store.getters.error
        }

        this.loadingPopup = false;
        this.tester = tester;
        if (failPopup){
            this.$store.commit('isFailedTester');
        }
        if (noIdPopup){
            this.$store.commit('isNoTester');
        }

    }
    },
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "브랜드 각인 마케팅 '플래거'",
    link: [
      { rel: 'favicon', href: require('../assets/favicon.ico') }
    ],
      meta: [

          { vmid: 'og:type',
              name: 'og:type',
              content: 'plager'
          },
          { vmid: 'og:title',
              name: "og:title",
              content: 'SNS에 내 영향력 알아보기'
          },
          { vmid: 'og:description',
              name: 'og:description',
              content: '플래거에서는 누구나 인플루언서 될 수 있어요.'
          },
          { vmid: 'og:keywords',
              name: 'og:keywords',
              content: '브랜드 마케팅,brand marketing,마케팅,marketing,브랜딩,branding,인플루언서,influencer,sns,인스타그램,Instagram,페이스북,facebook,사진,image,동영상,video'
          },
          { vmid: 'og:image',
              name: 'og:image',
              content: 'http://www.plager.co/assets/my_level.jpg'
          },
          { vmid: 'og:url',
              name: 'og:url',
              content: 'http://www.plager.co'
          },
          ]
        ,
    __dangerouslyDisableSanitizers: ['meta'],
      // all titles will be injected into this template
      titleTemplate: '%s'
    },
    data(){
        return {
            tester: {},
            box:'1px solid #d9dee8',
            instagram_id: '',
            loadingPopup: false,
            avg_influencer_effect_rate: 0,
            loadFlag: false,
        }
    },
    async created(){

        await this.$store.dispatch('avgInfluencerEffectRate');
        this.avg_influencer_effect_rate = this.$store.getters.avg_influencer_effect_rate;
        this.tester.picture_link = "data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSI4NnB4IiBoZWlnaHQ9IjcwcHgiIHZpZXdCb3g9IjAgMCA4NiA3MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUxLjMgKDU3NTQ0KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz4NCiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwLjE0MzA1ODY1MSAwLjAxNzI4NDQ1NzUgOS4yNzM4NTA0NCAwLjAxNzI4NDQ1NzUgOS4yNzM4NTA0NCA5LjQ0MjgxNTI1IDAuMTQzMDU4NjUxIDkuNDQyODE1MjUiPjwvcG9seWdvbj4NCiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMyIgcG9pbnRzPSIwLjEzMTk5NDEzNSAwLjE1ODY4MDM1MiAzNS4zMTA5OTcxIDAuMTU4NjgwMzUyIDM1LjMxMDk5NzEgMTEuNTYxNjM5MyAwLjEzMTk5NDEzNSAxMS41NjE2MzkzIj48L3BvbHlnb24+DQogICAgPC9kZWZzPg0KICAgIDxnIGlkPSJ3ZWJfMDkxOSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJsb2dpbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM3NC4wMDAwMDAsIC0zMS4wMDAwMDApIj4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc0LjAwMDAwMCwgMzEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuODg0MzMxMzgsNjUuMjUyNDgwOSBDNi4zNTgxMTQzNyw2NC44OTY5Mzg0IDYuNTk0MzkwMDMsNjQuMzg2NDEwNiA2LjU5NDM5MDAzLDYzLjcxODAyMzUgQzYuNTk0MzkwMDMsNjMuMDUxNjg5MSA2LjM1ODExNDM3LDYyLjUzOTMxMzggNS44ODQzMzEzOCw2Mi4xODU4MjQgQzUuNDEyMzk1ODksNjEuODI5MDQ5OSA0LjcyNjM1NDg0LDYxLjY1MDI1MjIgMy44Mjc4NTA0NCw2MS42NTAyNTIyIEwxLjQxODI5MDMyLDYxLjY1MDI1MjIgTDEuNDE4MjkwMzIsNjUuNzg1Nzk0NyBMMy44Mjc4NTA0NCw2NS43ODU3OTQ3IEM0LjcyNjM1NDg0LDY1Ljc4NTc5NDcgNS40MTIzOTU4OSw2NS42MDgwMjM1IDUuODg0MzMxMzgsNjUuMjUyNDgwOSBNNi45MDYyMDgyMSw2MS4zNjE2MzA1IEM3LjY0MzM2MzY0LDYxLjkzMjcxNTUgOC4wMTI2NTk4Miw2Mi43MTgxMTE0IDguMDEyNjU5ODIsNjMuNzE4MDIzNSBDOC4wMTI2NTk4Miw2NC43MTg3NTY2IDcuNjQzMzYzNjQsNjUuNTA0NTYzIDYuOTA2MjA4MjEsNjYuMDc0NDE2NCBDNi4xNjc4MjExMSw2Ni42NDU1MDE1IDUuMTU3NDM5ODgsNjYuOTMwMDE3NiAzLjg3MjgwNjQ1LDY2LjkzMDAxNzYgTDEuNDE4MjkwMzIsNjYuOTMwMDE3NiBMMS40MTgyOTAzMiw2OS43MjA1NzQ4IEwyLjA1Mjc4NTkyZS0wNSw2OS43MjA1NzQ4IEwyLjA1Mjc4NTkyZS0wNSw2MC41MDYwMjkzIEwzLjg3MjgwNjQ1LDYwLjUwNjAyOTMgQzUuMTU3NDM5ODgsNjAuNTA2MDI5MyA2LjE2NzgyMTExLDYwLjc5MTc3NzEgNi45MDYyMDgyMSw2MS4zNjE2MzA1IiBpZD0iRmlsbC0xIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMyIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSIxNS4yNDQxNTI1IDYwLjUwNjAwODggMTYuNjYxMTkwNiA2MC41MDYwMDg4IDE2LjY2MTE5MDYgNjguNTc1MzA1IDIyLjAzNjIwNTMgNjguNTc1MzA1IDIyLjAzNjIwNTMgNjkuNzIwNTU0MyAxNS4yNDQxNTI1IDY5LjcyMDU1NDMiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzYuNjI2NjA3LDY2LjM2MzA3OTIgTDM0LjQ4NTc1NjYsNjEuODQ5MDAyOSBMMzIuMzQ0OTA2Miw2Ni4zNjMwNzkyIEwzNi42MjY2MDcsNjYuMzYzMDc5MiBaIE0zNy4xMjIzNTQ4LDY3LjQxNzU5NTMgTDMxLjg0NjkwMDMsNjcuNDE3NTk1MyBMMzAuNzU1ODQ0Niw2OS43MjA0MTA2IEwyOS4yOTU5MDMyLDY5LjcyMDQxMDYgTDMzLjc5MDI3MjcsNjAuNTA2MDcwNCBMMzUuMTk0Nzg4OSw2MC41MDYwNzA0IEwzOS43MDI3MDY3LDY5LjcyMDQxMDYgTDM4LjIxMzIwNTMsNjkuNzIwNDEwNiBMMzcuMTIyMzU0OCw2Ny40MTc1OTUzIFoiIGlkPSJGaWxsLTUiIGZpbGw9IiMwMDAwMDAiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDYuODAzNTE5LCA2MC4zODQzNDApIj4NCiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC04Ij48L2c+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik03LjgyNzQ1NzQ4LDQuNjc2NDkyNjcgTDkuMTg5Mjc1NjYsNC42NzY0OTI2NyBMOS4xODkyNzU2Niw4LjI3MTMzMTM4IEM4LjY5NjQwMTc2LDguNjQ5MDQzOTkgOC4xMjU1MjE5OSw4LjkzODg5NzM2IDcuNDcyNzM2MDcsOS4xMzk0NTQ1NSBDNi44MjAxNTU0Myw5LjM0MjQ3NTA3IDYuMTQwMjcyNzMsOS40NDI4NTYzIDUuNDMxMjQwNDcsOS40NDI4NTYzIEM0LjQyOTI3NTY2LDkuNDQyODU2MyAzLjUyNzY5MjA4LDkuMjM3OTg4MjcgMi43MjM0MTA1Niw4LjgyOTg5NDQzIEMxLjkyMTE4MTgyLDguNDIyMDA1ODcgMS4yODg1MTMyLDcuODYxNTk1MzEgMC44MzAzMzEzNzgsNy4xNDU5OTQxMyBDMC4zNzAwOTY3NzQsNi40MzA1OTgyNCAwLjE0MzA1ODY1MSw1LjYyNDI2MzkzIDAuMTQzMDU4NjUxLDQuNzI5ODY1MSBDMC4xNDMwNTg2NTEsMy44MzQ0Mzk4OCAwLjM3MDA5Njc3NCwzLjAyODMxMDg1IDAuODMwMzMxMzc4LDIuMzA3NzgyOTkgQzEuMjg4NTEzMiwxLjU4ODA3NjI1IDEuOTIyMjA4MjEsMS4wMjY0MzQwMiAyLjczMDgwMDU5LDAuNjIyNjUxMDI2IEMzLjUzOTE4NzY4LDAuMjE4ODY4MDM1IDQuNDQ4MTYxMjksMC4wMTcyODQ0NTc1IDUuNDU5NTY4OTEsMC4wMTcyODQ0NTc1IEM2LjI1MzM4MTIzLDAuMDE3Mjg0NDU3NSA2Ljk3Mjg4MjcsMC4xMzc1Nzc3MTMgNy42MjIzODQxNiwwLjM3ODc4MDA1OSBDOC4yNjg4MDY0NSwwLjYxOTM2NjU2OSA4LjgxOTk3OTQ3LDAuOTc1MTE0MzcgOS4yNzM4NTA0NCwxLjQzNzQwMTc2IEw4LjM5NDQzNjk1LDIuMjU1MjMxNjcgQzcuNjAwNjI0NjMsMS41NDMxMjAyMyA2LjY0MzQxMDU2LDEuMTg4Mzk4ODMgNS41MTcwNDY5MiwxLjE4ODM5ODgzIEM0Ljc1OTc3NDE5LDEuMTg4Mzk4ODMgNC4wODIxNDk1NiwxLjMzOTA3MzMxIDMuNDgyNzM2MDcsMS42NDI0NzUwNyBDMi44ODIyOTYxOSwxLjk0NTY3MTU1IDIuNDEwNTY1OTgsMi4zNjUwNTU3MiAyLjA2OTgwMzUyLDIuOTA4MDE3NiBDMS43Mjk4NjIxNywzLjQ0NTY0MjIzIDEuNTYxNTMzNzIsNC4wNTQyOTMyNiAxLjU2MTUzMzcyLDQuNzI5ODY1MSBDMS41NjE1MzM3Miw1LjM5NTE3MzAyIDEuNzI5ODYyMTcsNi4wMDA3NDQ4NyAyLjA2OTgwMzUyLDYuNTQxNDQ4NjggQzIuNDEwNTY1OTgsNy4wNzkwNzMzMSAyLjg4MjI5NjE5LDcuNTAzNTg5NDQgMy40ODI3MzYwNyw3LjgxMDI3NTY2IEM0LjA4MjE0OTU2LDguMTE2NTUxMzIgNC43NTc3MjE0MSw4LjI3MTMzMTM4IDUuNTAwMjE0MDgsOC4yNzEzMzEzOCBDNi4zOTE1MzM3Miw4LjI3MTMzMTM4IDcuMTY3NDg2OCw4LjA3MzY0ODA5IDcuODI3NDU3NDgsNy42NzcyNTUxMyBMNy44Mjc0NTc0OCw0LjY3NjQ5MjY3IFoiIGlkPSJGaWxsLTciIGZpbGw9IiMwMDAwMDAiIG1hc2s9InVybCgjbWFzay0yKSI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xMCIgZmlsbD0iIzAwMDAwMCIgcG9pbnRzPSI3MC40NDIwNDY5IDY4LjU3NTIyMjkgNzAuNDQyMDQ2OSA2OS43MjA0NzIxIDYzLjIzNzU4OTQgNjkuNzIwNDcyMSA2My4yMzc1ODk0IDYwLjUwNTkyNjcgNzAuMjQzMTMyIDYwLjUwNTkyNjcgNzAuMjQzMTMyIDYxLjY1MDM1NDggNjQuNjU1ODU5MiA2MS42NTAzNTQ4IDY0LjY1NTg1OTIgNjQuNDgxNTU3MiA2OS42MzE0MDE4IDY0LjQ4MTU1NzIgNjkuNjMxNDAxOCA2NS42MDE3NjI1IDY0LjY1NTg1OTIgNjUuNjAxNzYyNSA2NC42NTU4NTkyIDY4LjU3NTIyMjkiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNODMuNjE3MzYwNyw2NS4yNTg0OTU2IEM4NC4wODkwOTA5LDY0Ljg5ODg0NzUgODQuMzI2MzkzLDY0LjM4NjQ3MjEgODQuMzI2MzkzLDYzLjcxODA4NSBDODQuMzI2MzkzLDYzLjA1MTc1MDcgODQuMDg5MDkwOSw2Mi41MzkzNzU0IDgzLjYxNzM2MDcsNjIuMTg1NjgwNCBDODMuMTQ0Mzk4OCw2MS44MjkxMTE0IDgyLjQ1OTM4NDIsNjEuNjUwMzEzOCA4MS41NjEwODUsNjEuNjUwMzEzOCBMNzkuMTUxMzE5Niw2MS42NTAzMTM4IEw3OS4xNTEzMTk2LDY1Ljc5ODM3ODMgTDgxLjU2MTA4NSw2NS43OTgzNzgzIEM4Mi40NTkzODQyLDY1Ljc5ODM3ODMgODMuMTQ0Mzk4OCw2NS42MTg1NTQzIDgzLjYxNzM2MDcsNjUuMjU4NDk1NiBaIE04NC4zNjgyNjk4LDY5LjcyMDQzMTEgTDgyLjIyNjM5Myw2Ni44OTAyNTUxIEM4MS45NjM2MzY0LDY2LjkwOTE0MDggODEuNzUzNjM2NCw2Ni45MTc1NTcyIDgxLjYwNDgwOTQsNjYuOTE3NTU3MiBMNzkuMTUxMzE5Niw2Ni45MTc1NTcyIEw3OS4xNTEzMTk2LDY5LjcyMDQzMTEgTDc3LjczMzA0OTksNjkuNzIwNDMxMSBMNzcuNzMzMDQ5OSw2MC41MDYwOTA5IEw4MS42MDQ4MDk0LDYwLjUwNjA5MDkgQzgyLjg4OTQ0MjgsNjAuNTA2MDkwOSA4My44OTk4MjQsNjAuNzkxNjMzNCA4NC42MzkyMzc1LDYxLjM2MTY5MjEgQzg1LjM3NTM2NjYsNjEuOTMyNzc3MSA4NS43NDM2MzY0LDYyLjcxODE3MyA4NS43NDM2MzY0LDYzLjcxODA4NSBDODUuNzQzNjM2NCw2NC40MzAxOTY1IDg1LjU1NTE5MDYsNjUuMDM0NzQxOSA4NS4xNzc4ODg2LDY1LjUzNjAzMjMgQzg0Ljc5ODEyMzIsNjYuMDM2NzA2NyA4NC4yNTk0NzIxLDY2LjM5ODgxODIgODMuNTU4NjUxLDY2LjYyNzcwMzggTDg1LjkxNDAxNzYsNjkuNzIwNDMxMSBMODQuMzY4MjY5OCw2OS43MjA0MzExIFoiIGlkPSJGaWxsLTEyIiBmaWxsPSIjMDAwMDAwIj48L3BhdGg+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTQiIGZpbGw9IiMwNDUwNjkiIHBvaW50cz0iOS42NTk5MTc4OSAzNi42ODAwNjE2IDEyLjIyMTU4OTQgNDEuMTAyMTczIDM5LjU0OTkxNzkgMjcuNDYxNDEwNiAzMy44NDAyOTkxIDI0LjYxMTMyMjYiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xNiIgZmlsbD0iIzBFOTc5NCIgcG9pbnRzPSIxNS43NTMzNDYgMzkuMzUyMzk4OCAxOC4zMTI5NjQ4IDQzLjc3MzQ4MzkgNDUuMjczMjI4NyAzMC4zMTY2NTEgMzkuNTYzNjEgMjcuNDY4MjA1MyI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJGaWxsLTE4IiBmaWxsPSIjMjlCMDc4IiBwb2ludHM9IjIxLjgzNzUxNjEgNDIuMDE2MzE5NiAyNC4zOTY5Mjk2IDQ2LjQzODQzMTEgNTAuOTg1ODQ0NiAzMy4xNzAwNDQgNDUuMjc2NDMxMSAzMC4zMTg5Mjk2Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMjAiIGZpbGw9IiM4Q0M1NUQiIHBvaW50cz0iMjcuOTIzNzE4NSA0NC42NzkyMTQxIDMwLjQ3ODgyMTEgNDkuMDkzOTM1NSAzMi45MzM1NDI1IDQ3Ljg3NzY1OTggNTYuNjk1NTY2IDM2LjAxODA5OTcgNTAuOTg1OTQ3MiAzMy4xNzAwNjQ1Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMjIiIGZpbGw9IiMwNDUwNjkiIHBvaW50cz0iMjcuNjM4MDMyMyA0LjQxMTY0MjIzIDczLjg4NTA0MTEgMjcuNDkzNzgzIDc5LjYxMzU0NTUgMjQuNjUyMTExNCA2OC44ODg3NjU0IDE5LjI5OTY3NzQgMzAuMTkyMTA4NSAwIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMjQiIGZpbGw9IiMwRTk3OTQiIHBvaW50cz0iMjEuNTQ4ODUzNCA3LjA4Mjk3MzYxIDY4LjE0NDAxNDcgMzAuMzM5ODA2NSA3My44NzI3MjQzIDI3LjQ5OTU3MTggMjQuMTA4MjY2OSAyLjY2MTI3MjczIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMjYiIGZpbGw9IiMyOUIwNzgiIHBvaW50cz0iMTUuNDYxNjY1NyA5Ljc0NzM4NzEgNjIuNDEyNTc0OCAzMy4xODE1ODA2IDY4LjEzOTg0NzUgMzAuMzQxOTYxOSAxOC4wMjIxMDU2IDUuMzI1Njg2MjIiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0yOCIgZmlsbD0iIzhDQzU1RCIgcG9pbnRzPSI5LjM3ODY2NTY5IDEyLjQxMDI4MTUgNTYuNjgzMDY0NSAzNi4wMjIyNDYzIDYyLjQxMjU5NTMgMzMuMTgxNjAxMiAxMS45MzgwNzkyIDcuOTg4NTgwNjUiPjwvcG9seWdvbj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzIiIG9wYWNpdHk9IjAuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjEuMzQ4OTc0LCAyNC40NjA1ODcpIj4NCiAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stNCIgZmlsbD0id2hpdGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0zIj48L3VzZT4NCiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0zMSI+PC9nPg0KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0zMCIgZmlsbD0iIzA2MDEwMSIgbWFzaz0idXJsKCNtYXNrLTQpIiBwb2ludHM9IjM1LjM2MTI0OTMgMTEuNTYxNjM5MyAwLjEzMTk1MzA3OSA2LjMyNzg1NjMgMTIuNDkwMzQwMiAwLjE1ODYxODc2OCI+PC9wb2x5Z29uPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="
    },
    destroyed(){
        this.loadFlag = false;
    }
};
</script>
<style scoped>
h1 {
  /* 내 영향력 테스트: */
  font-weight: 400;
  font-size: 45px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
}

p {
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    text-align: center;
    line-height: 30px;
    margin-bottom: 23px;
}

.card {
    width: 100%;
    /* Rectangle: */
    font-size: 0;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(23,32,49,0.10);
    border-radius: 5px;
    padding: 51px 41px 51px 11px;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 8px;
}

.card .left {
    display: inline-block;
    vertical-align: top;
    width: 413px;
    text-align:  center;
    border-right: 1px solid rgba(151, 151, 151, .5);
    padding: 45px 0 0 0;
}

.card .left2 {
    display: inline-block;
    vertical-align: top;
    width: 330px;
    border-right: 1px solid rgba(151, 151, 151, .5);
    padding: 45px 0 0 0;
}

.card .left .profile-img {
    width: 259px;
    height: 259px;
    border-radius: 50%;
    background-size: cover;
    margin: 0 auto 25px;
}

.card .left .profile-name {
    /* @abcdef123: */
    font-weight: 700;
    font-size: 24px;
    color: #242E38;
    letter-spacing: 0;
    text-align: center;
    line-height: 28px;
    margin-bottom: 20px;
}

.section.start {
  padding: 109px 0 89px;
}

.card .left table {
    /* 348개 7,512명 마이크로 인플루: */
    font-weight: 400;
    font-size: 20px;
    color: #000000;
    letter-spacing: 0;
    line-height: 30px;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 12px;
}

.card .left table tr td:first-child {
    font-weight: 600;
    /*width: 85px;*/
}

.card .right {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 414px);
    padding: 0 0 0 47px;
    box-sizing: border-box;
}

.card .right2 {
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: calc(100% - 331px);
    padding: 145px 0 0 0px;
}

.card .right .top {
    
    width: 100%;
    padding: 0 42px 0 10px;
    box-sizing: border-box;
}

.card .right .top .title {
    border-bottom: 1px solid rgba(151, 151, 151, .5);
    padding-left: 15px;
    padding-bottom: 18px;
    
    /* 3달 평균: */
    font-weight: 400;
    font-size: 24px;
    color: #000000;
}

.card .right .middle {
    padding: 0 22px 0 24px;
    width: 100%;
    margin-top: 17px;
    box-sizing: border-box;
    margin-bottom: 20px;
}

.card .right .middle table {
    width: 100%;
    /* 2000개: */
    font-weight: 400;
    font-size: 24px;
    color: #97A3B4;
    text-align: right;
    line-height: 47px;
}
.card .right .middle table td:first-child {
    text-align: left;
    color: #000000;
}

.card .right .bottom {
    margin-left: 25px;
    position: relative;
    width: 100%;
    margin-bottom: 20px;
}

.card .right .bottom h1 {
    /* 내 영향력 지수: */
    font-weight: 400;
    font-size: 40px;
    color: #000000;
    text-align: left;
    line-height: 48px;
    margin-bottom: 5px;
}

.card .right .bottom .desc {
    /* 전체 인플루언서 평균 영향력 지수 3: */
    
    font-weight: 400;
    font-size: 20px;
    color: #9B9B9B;
}

.card .right .bottom .percent {
    position: absolute;
    display: inline-block;
    border: 0;
    width: 244px;
    height: 80px;
    padding: 0;
    text-align: center;
    box-sizing: border-box;
    background: #88c86b;
    border-radius: 100px;
    /* 3.44%: */
    font-weight: 900;
    font-size: 40px;
    color: #FFFFFF;
    letter-spacing: 3.16px;
    right: 0;
    bottom: 2px;
}

.container > p.bottom {
    /* 위 영향력 지수와 모델료는 간단한 몇: */
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 35px;
    margin-bottom :35px;
}

.container > button {
    /* Bg: */
    background-image: linear-gradient(-45deg, #123075 0%, #fa2b56 100%);
    border-radius: 5px;
    /* 인플루언서 등록하기: */
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;

    width: 660px;
    height: 60px;
}

.pred {
    /* 1회 포스팅 예상 모델료 : 약 11 */
    margin-left: 25px;
    font-weight: 400;
    font-size: 25px;
    color: #000000;
    letter-spacing: 0.7px;
}

.pred h2 { color: #CA0019; font-weight: bold;}


@media screen and (max-width: 640px) {
    
    .section.start { padding: 2.7rem 2.5rem 4.2rem; box-sizing: border-box;}
    .container > p.bottom { font-size: 1.2rem; line-height: 2rem;}
    h1 { font-size: 2rem; line-height: 1rem; }
    p {font-size: 1.2rem; line-height: 1.5rem; }
    .card { padding: 1.2rem 1.1rem 2.6rem; margin-bottom: 1rem;}
    .card .left {padding-top: 0;}
    .card .left2 {padding-top: 0;}
    .card .left .profile-img { width: 10rem; height: 10rem; margin-bottom: .8rem;}
    .card .left .profile-name { font-size: 1rem; line-height: 2.2rem; margin-bottom: .8rem;}
    .card .left table { font-size: 1.4rem; }
    .card .left table tr td:first-child {width: 5rem;} 
    
    .card .left,
    .card .right { width: 100%; display: block; border: none; margin: 0; padding: 0;}
    .card .left2,
    .card .right2 { width: 100%; display: block; border: none; margin: 0; padding: 0;}

    .container > button { width: 20.2rem; height: 4rem; font-size: 1.2rem;}

    .card .right .top { border-top: 1px solid rgba(151, 151, 151, .5); padding-top: 2rem; padding-left: 2rem;} 
    .card .right .top .title { font-size: 1.8rem; line-height: 2.1rem; padding: 0; border: 0;}
    .card .right .middle {margin-bottom: 2.rem;}
    .card .right .middle table { font-size: 1.4rem; line-height: 2.7rem;}
    .card .right .bottom { padding-left: 0rem; box-sizing: border-box;}
    .card .right .bottom h1 {font-size: 1.8rem; line-height: 2.1rem; margin-bottom: .4rem;}
    .card .right .bottom .desc { font-size: 1rem; line-height: 1.2rem;}
    .card .right .bottom .percent { width :135px; height: 50px; font-size: 2.2rem; bottom: 3px; right: 3rem;}
    .card .right .pred { font-size:1.4rem; text-align: center;}



}


h1 {
  margin-bottom: 64px;
}

p {
  font-size: 16px;
  color: #000000;
  text-align: center;
  line-height: 27px;
  margin-bottom: 49px;
}

.dim {
  position: fixed;
  display: table;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: scroll;
}

.dim .cell {
  display: table-cell;
  vertical-align: middle;
}

button {
  width: 325px;
  height: 67px;
  font-size: 24px;
  color: #092056;
  letter-spacing: 0;
  text-align: center;
}

button.next {
  background-image: linear-gradient(-45deg, #123075 0%, #092056 100%);
  border-radius: 5px;
  color: #ffffff;
}

button.influ-login {
  background-image: linear-gradient(-45deg, #123075 0%, #fa2b56 100%);
  border-radius: 5px;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  line-height: 18px;
  width: 303px;
  height: 60px;
  font-size: 18px
}
button.influ-login b {
    font-weight: 600;
}
button.influ-login img {
    position: relative;
    top: 4px;
    margin-right: 5px;
}

.popup {
  margin: auto;
  width: 965px;
  background: #ffffff;
  border-radius: 5px;
  padding: 100px 116px 100px;
  box-sizing: border-box;
  /* 내 영향력을 간단하게 테스트 해볼 수: */
  font-weight: 700;
  font-size: 32px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 46px;
}
.popup1 {

  /* 비공개 계정은 테스트 불가: */
  padding-top: 10px;
  font-weight: 700;
  font-size: 25px;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
}


/* input */


.input-set {
  width: 100%;
  padding-top: 50px;
  text-align: center;
}
.input-set .input-wrap {
  position: relative;
}

.input-set .input-wrap::after {
    display: inline-block;
    position: absolute;
    top: 12px;
    left: 40px;
}

.input-set.btn input[type="text"]{
    padding: 0 10px;
  width: 60%;
     margin-bottom:1rem;
}

.input-set input[type="text"]{
  border: 1px solid #d9dee8;
  border-radius: 4px;
  font-size: 22px;
  color: #aab2c0;
  height: 67px;
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
}

.input-set.btn button {
  width: 300px;
  height: 67px;
}

.close-wrap {
    width: 100%;
    text-align: right;
}
.close-wrap img {
    width: 33px;
    height: 33px;
    margin-bottom: 53px;
}
@media screen and (max-width: 640px) {


.cell { padding: 0 1.5rem; box-sizing: border-box;}
.popup { width: 100%; padding: 4rem 1rem 10rem; font-size: 1.4rem; line-height:  2.5rem; letter-spacing: -.05rem;}
.popup1 { font-size: 1.4rem;}
.close-wrap img { width: 1.5rem; height: 1.5rem; }
.input-set { height: 3rem; font-size: 1.2rem; padding-top: 2rem;}
.input-set.btn input[type="text"] {padding: 0 0 0 1rem; height: 3rem; font-size: 1.2rem; margin-bottom:1rem;}
.input-set.btn button { width: 30%; height: 3rem; font-size: 1.2rem; border-top-left-radius: 0; border-bottom-left-radius: 0;}
.input-set .input-wrap::after {left: 1.5rem; top: .25rem;}

}

</style>
