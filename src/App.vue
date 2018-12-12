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


/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}figcaption,main,nav,section{display:block}strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}button,input{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0;overflow:visible}button{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{color:inherit;display:table;max-width:100%;white-space:normal}[type=checkbox],[type=radio],legend{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}menu{display:block}canvas{display:inline-block}[hidden],template{display:none}html{box-sizing:border-box;font-family:sans-serif}*,:after,:before{box-sizing:inherit}button{background:transparent;padding:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}*,:after,:before{border-width:0;border-style:solid;border-color:#dae1e7}[type=button],[type=reset],[type=submit],button{border-radius:0}button,input{font-family:inherit}input::placeholder{color:inherit;opacity:.5}[role=button],button{cursor:pointer}.vue-ads-bg-grey-light{background-color:#dae1e7}.vue-ads-bg-grey-lighter{background-color:#f1f5f8}.vue-ads-bg-teal-dark{background-color:#38a89d}.hover\:vue-ads-bg-grey-lighter:hover{background-color:#f1f5f8}.vue-ads-cursor-default{cursor:default}.vue-ads-flex{display:flex}.vue-ads-justify-end{justify-content:flex-end}.vue-ads-flex-grow{flex-grow:1}.vue-ads-leading-normal{line-height:1.5}.vue-ads-leading-loose{line-height:2}.vue-ads-m-2{margin:.5rem}.vue-ads-ml-1{margin-left:.25rem}.focus\:vue-ads-outline-none:focus,.vue-ads-outline-none{outline:0}.vue-ads-px-0{padding-left:0;padding-right:0}.vue-ads-pr-2{padding-right:.5rem}.vue-ads-text-grey{color:#b8c2cc}.vue-ads-text-white{color:#fff}.vue-ads-text-xs{font-size:.75rem}.vue-ads-w-6{width:1.5rem}
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
