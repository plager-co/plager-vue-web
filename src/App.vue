<template>
  <div id="app">
    <gloval-nav></gloval-nav>
    <router-view/>
    <footer-black></footer-black>
    <!-- popup List -->
    <complete-popup></complete-popup>
  </div>
</template>

<script>

import GlovalNav from './components/common/GlovalNav'
import FooterBlack from './components/common/FooterBlack'
import CompletePopup from './components/common/CompletePopup'
import AlertBase from './components/AlertBase'

export default {
  components: {GlovalNav, FooterBlack, CompletePopup, AlertBase},
  name: 'App',
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: "브랜드 각인 마케팅 '플래거'",
      link: [
        { rel: 'shortcut icon', href: require('./assets/favicon.ico'), type: "image/x-icon" }
      ],
      meta: [
          { charset: 'utf-8' },
          { vmid: 'description',
              name: 'description',
              content: '반복적인 노출로 브랜드를 각인되게 만드는 브랜드 마케팅 SIM 서비스를 제공'
          },
          { vmid: 'description',
              name: 'description',
              content: '반복적인 노출로 브랜드를 각인되게 만드는 브랜드 마케팅 SIM 서비스를 제공'
          },
          { vmid: 'copyright',
              name: 'copyright',
              content: '플래거'
          },
          { vmid: 'keywords',
              name: 'keywords',
              content: '브랜드 마케팅,brand marketing,마케팅,marketing,브랜딩,branding,인플루언서,influencer,sns,인스타그램,Instagram,페이스북,facebook,사진,image,동영상,video'
          },
          { vmid: 'reply-To(Email)',
              name: 'reply-To(Email)',
              content: 'plager@plage.co'
          },
          { vmid: 'og:type',
              name: 'og:type',
              content: 'plager'
          },
          { vmid: 'og:title',
              name: "og:title",
              content: '브랜드 각인 마케팅 \'플래거\''
          },
          { vmid: 'og:description',
              name: 'og:description',
              content: '반복적인 노출 SIM 서비스'
          },
          { vmid: 'og:keywords',
              name: 'og:keywords',
              content: '브랜드 마케팅,brand marketing,마케팅,marketing,브랜딩,branding,인플루언서,influencer,sns,인스타그램,Instagram,페이스북,facebook,사진,image,동영상,video'
          },
          { vmid: 'og:image',
              name: 'og:image',
              content: 'http://www.plager.co/assets/messenger_logo.jpg'
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
    }
}
</script>

<style>
/* @import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"); */
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR');

* {font-family: AppleSDGothicNeo, "Noto Sans KR", 'Spoqa Han Sans', 'Avenir', Helvetica, Arial, sans-serif !important;}
tspan { font-family: AppleSDGothicNeo, "Noto Sans KR", 'Spoqa Han Sans', 'Avenir', Helvetica, Arial, sans-serif !important; }

select {
  appearance: none;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
}

body { 
  margin: 0; 
  padding: 0;
  position: relative;
}

input {
  font-family: AppleSDGothicNeo, "Noto Sans KR", 'Spoqa Han Sans', 'Avenir', Helvetica, Arial, sans-serif;
  background-color: #ffffff;
}

h1 {
  font-size: 40px;
  font-weight: 600;
  color: #242e38;
  letter-spacing: 0;
  text-align: center;
  line-height: 40px;
  margin: 0;
}

#app {
  overflow: hidden;
  font-family: AppleSDGothicNeo, "Noto Sans KR", 'Spoqa Han Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app > .viewer {
  padding-top: 131px;
  box-sizing: border-box;
}

.section { width: 100%;}
.section.empty { background-color: #f6f6fa; min-height: calc(100vh - 494px)}
.section.gray { background-color: #f6f6fa; }

.container {display: table; width: 100%; height: 100%; max-width: 1170px; margin: auto;}
.container-cell { display: table-cell; width: 100%;  height: 100%; vertical-align: middle;}


input[type=checkbox] {display: none;}
label {
    position: relative;
    bottom: 5px;
}
label .checkbox {
    display: inline-block;
    position: relative;
    top: 3px;
    width: 18px;
    height: 18px;
    background: url('./assets/checkbox-default.svg') 50% 50% no-repeat;
    background-size: cover;
    margin-right: 4px;
}
input[type=checkbox]:checked + label .checkbox {
    background-image: url('./assets/checkbox-checked.svg')
}

.for-mobile { display: none; }
.for-mobile.block { display: none;}
.for-web { display: inline-block; }
.for-web.block { display: block;}

select::-ms-expand {
  display: none;
}

@media screen and (max-width: 672px) { html { font-size: 20px; } }
@media screen and (max-width: 640px) {
  html { font-size: 19px; }


  .for-mobile { display: inline-block; }
  .for-mobile.block { display: block;}
  .for-web { display: none; }
  .for-web.block { display: none; }

  
  #app > .viewer { padding-top: 6rem; }
  label .checkbox { width: 1.2rem; height: 1.2rem; }
  .card {box-shadow: 0 4px 8px 0 rgba(23,32,49,0.10);}
  button { border: 0;}
  
}
@media screen and (max-width: 608px) { html { font-size: 18px; } }
@media screen and (max-width: 576px) { html { font-size: 17px; } }
@media screen and (max-width: 544px) { html { font-size: 16px; } }
@media screen and (max-width: 512px) { html { font-size: 15px; } }
@media screen and (max-width: 480px) { html { font-size: 14px; } }
@media screen and (max-width: 448px) { html { font-size: 13px; } }
@media screen and (max-width: 416px) { html { font-size: 12px; } }
@media screen and (max-width: 384px) { html { font-size: 11px; } }
@media screen and (max-width: 352px) { html { font-size: 10px; } }
@media screen and (max-width: 320px) { html { font-size: 9px; } }

input[type=date]::-webkit-clear-button,
input[type=date]::-webkit-inner-spin-button,
input[type=date]::-webkit-keygen-select
{display: none;}

input[type=date]::-webkit-calendar-picker-indicator { opacity: 0; background-color: transparent; width: 100%; height: 100%; position: absolute; left: 0;}

</style>
