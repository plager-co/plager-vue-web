<template>
  <div class="section gnv" :class='{black: $route.path !== "/"}'>
    <!-- side-bar -->
    <div class="side-bar-dim" v-if='isSideBarOpen' @click.self='isSideBarOpen=!isSideBarOpen'/>
    <transition name='slide'>
      <div class="side-bar" v-if='isSideBarOpen'>
        <div class="top">
          <div class="login" v-if="($store.getters.isAuthenticated === false)" @click='$router.push("/login")'>로그인</div>
          <div class="login" v-if="($store.getters.isAuthenticated === true)" @click='$router.push("/logout")'>로그아웃</div>
          <button @click='$router.push("/influencer-my-score")'>내 영향력 테스트</button>
          <div class="menu" @click='sponsorJoinCall' v-if="($store.getters.isAuthenticated === false)">광고주 등록</div>
          <div class="menu" @click="this.$router.push('/influencer-join')" v-if="($store.getters.isAuthenticated === false)">인플루언서 등록</div>
          <div class="menu" @click='menu.url' v-for='(menu, i) in $store.getters.GetMobileNavMenuList' :key='i'  v-if="($store.getters.isAuthenticated === false & menu.auth === '') | ($store.getters.isSponsorAccount === true & menu.auth === 'sponsor')  | ($store.getters.isInfluencerAccount === true & menu.auth === 'influencer')">
            {{menu.title}}
          </div>
        </div>
        <div class="bottom" v-if='$store.getters.GetMobileNavMenuList[0].username'>
          <div class="username">{{$store.getters.GetMobileNavMenuList[0].username}} 님</div>
          <div class="menu" v-for='(menu, i) in mobileMenuList' :key='i' @click='menuAction(menu.url)'>{{menu.title}}</div>
        </div>
      </div>
    </transition>

    <div class="container">
      <div class="container-cell">
        <div class="logo" @click='$router.push("/")'>
          <img v-if='$route.path === "/"' src="../../assets/logo.svg" alt="">
          <img v-else src="../../assets/logoBlack.svg" alt="">
        </div>
        <button @click='$router.push("/influencer-my-score")'>내 영향력 테스트</button>

        <div class="hamburger-menu" :class='{open: isSideBarOpen}' @click='isSideBarOpen=!isSideBarOpen'></div>
        <div class="menu-wrapper">
          <ul>
            <li v-if="($store.getters.isAuthenticated === false)"><a @click='sponsorJoinCall'>광고주 등록</a></li>
            <li v-if="($store.getters.isAuthenticated === false)"><a @click="this.$router.push('/influencer-join')">인플루언서 등록</a></li>
            <li v-if="($store.getters.user_type === 'influencer')"><a @click='$router.push("/influencer-score")'>내 영향력 지수</a></li>
            <li v-if="($store.getters.user_type === 'sponsor')"><a @click='$router.push("/sponsor-filter")'>SIM 서비스 신청</a></li>
            <li v-for='(menu, i) in $store.getters.GetNavMenuList' :key='i'  v-if="($store.getters.isAuthenticated === false & menu.auth === '') | ($store.getters.isSponsorAccount === true & menu.auth === 'sponsor')  | ($store.getters.isInfluencerAccount === true & menu.auth === 'influencer')">

                <a class="user-data"
                v-if="menu.username"
                @click='isPopupOpen = !isPopupOpen'
                :class='{open: isPopupOpen}'
              >
                <div class='username-wrap' >
                  <div class="user-menu" v-if='isPopupOpen'>
                    <ul>
                      <li v-for='(menu, i) in menuList' :key='i' @click='menuAction(menu.url)'>{{menu.title}}</li>
                    </ul>
                  </div>
                </div>
                {{menu.username}}님
              </a>
              <router-link v-if='!menu.username' :to='menu.url'>
              {{menu.title}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPopupOpen: false,
      isSideBarOpen: false
    };
  },
  watch: {
    "$route.path": function (n) {
      this.isSideBarOpen = false;
    }
  },
  methods:{
    sponsorJoinCall(){
      this.$router.push('/login')
      this.$store.commit('openJoinPopup')
    },
    menuAction(url){
        if (url.indexOf('influencer-sim') > -1){
          this.$store.commit('filterAdList', 'started');
        }
        this.$router.push(url);
    }
  },
    mounted() {
    },
  computed: {
    menuList(){
      if(this.$store.getters.user_type === 'influencer') {
        return [
      {
         title:'내 영향력 지수', url:'/influencer-score'
      },
      {
         title:'SIM 서비스 진행 현황', url:'/influencer-sim'
      },
      {
         title:'마이 페이지', url:'/influencer-my-page'
      },
      {
         title:'로그아웃', url:'/logout'
      }
   ]
      } else if (this.$store.getters.user_type === 'sponsor') {
        return [
      {
         title:'SIM 서비스 신청하기', url:'/sponsor-filter'
      },
      {
         title:'SIM 진행 인플루언서', url:'/sponsor-sim'
      },
      {
         title:'마이 페이지', url:'/my-page'
      },
      {
         title:'로그아웃', url:'/logout'
      }
   ]
      }
    } , mobileMenuList(){
      if(this.$store.getters.user_type === 'influencer') {
        return [
      {
         title:'내 영향력 지수', url:'/influencer-score'
      },
      {
         title:'SIM 서비스 진행 현황', url:'/influencer-sim'
      },
      {
         title:'마이 페이지', url:'/influencer-my-page'
      },
   ]
      } else if (this.$store.getters.user_type === 'sponsor') {
        return [
      {
         title:'SIM 서비스 신청하기', url:'/sponsor-filter'
      },
      {
         title:'SIM 진행 인플루언서', url:'/sponsor-sim'
      },
   ]
      }
    }
  }
};
</script>

<style>

.section.gnv {
  color: white;
  display: table;
  position: absolute;
  top: 0;
  height: 131px;
  z-index: 1000;
}
.section.gnv.black {
  color: black;
}

.section.gnv .container .logo {
  width: 100px;
  display: inline-block;
  float: left;
  margin-top: -10px;
}

.section.gnv .container .logo img {
  width: 100%;
  display: inline-block;
  padding-top : 8px;
  padding-left : 0px;
}
.section.gnv .container span {
  font-size: 24px;
  letter-spacing: 3.1px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 13px;
  float: left;
}
.section.gnv .container button {
  float: left;
  border: 0;
  border-radius: 30px;
  width: 215px;
  background-color: #fa2b56;
  background-image: none;
  color: #ffffff;
  height: 35px;
  font-size: 16px;
  font-weight: medium;
  padding: 0 22px;
  margin-top: 8px;
  margin-left: 40px;
}
.section.gnv .container .menu-wrapper {
  display: inline-block;
  float: right;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.3px;
  text-align: right;
}
.section.gnv .container .menu-wrapper > ul > li {
  position: relative;
  display: inline-block;
  margin-left: 72.5px;
  width: auto;
}
.section.gnv .container .menu-wrapper ul li a:hover:before {
  content: '';
  position: absolute;
  top: -49px;
  width: 100%;
  height: 3px;
  background: #ffffff;
}
.section.gnv.black .container .menu-wrapper ul li a:hover:before {
  background: #000000;
}
.section.gnv .container .menu-wrapper ul li a {
  text-decoration: none;
  color: #ffffff;
}

.section.gnv.black .container .menu-wrapper ul li a {
  text-decoration: none;
  color: #000000;
}

.user-data {
  position: relative;
}

.user-data::after {
  transition: all .2s;
  content: "";
  display: inline-block;
  position: absolute;
  top: 8px;
  margin-left: 8px;
  width: 16px;
  height: 10px;
  background: url("../../assets/userDropdownWhite.svg") 50% 50% no-repeat;
  z-index: 1000;
}


.section.gnv.black .user-data::after {
  background: url("../../assets/userDropdown.svg");
}

.username-wrap {
  position: absolute;
  top: -20px;
  left: calc(-110px + 100%);
  width: 200px;
}

.user-data.open .username-wrap {
  width: 170px;
  /* Rectangle 10: */
  border: 1px solid #E6E6E6;
}

.user-data.open::after { transform: rotateX(180deg); }

.user-data.open .username-wrap::after {
  content: '';
  width: 150px;
  display: block;
  position: absolute;
  height: 1px;
  background-color: #e9e9e9;
  left: 11px;
  top: 62px;
}
.user-data.open .username-wrap .user-menu {
  margin-top: 60px;
  width: 100%;
  background-color: transparent;
  padding-top: 27px;
  box-sizing: border-box;
}

.user-data.open .section.gnv.black .username-wrap .user-menu { background: #ffffff;}

.user-data.open .username-wrap .user-menu ul {
  width: 100%;
  padding-left: 0;
}
.user-data.open .username-wrap .user-menu ul li {
  text-align: center;
  padding-bottom: 27px;
  width: 100%;
  list-style: none;
  margin-left: 0;
  line-height: 1;
  /* SIM 서비스 신청하기: */
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.23px;
}

.side-bar-dim,
.side-bar {display: none;}

@media screen and (max-width: 640px) {
  .section.gnv {height: 4.8rem;}
  .section.gnv .container {padding: 1.5rem 2.6rem; box-sizing: border-box;}
  .section.gnv .container button {
  float: left;
  border: 0;
  border-radius: 10px;
  background-color: #fa2b56;
  background-image: none;
  color: #ffffff;
  height: 30px;
  width: 130px;
  font-size: 12px;
  font-weight: medium;
  padding: 0 22px;
  margin-top: 8px;
  margin-left: 40px;
}
  .section.gnv .container .menu-wrapper {display: none;}

  .section.gnv .container .logo {width: 4.5rem;}
  .section.gnv .container span {font-size: 1.4rem; margin: .2rem 0 0 .8rem; font-weight: bold; letter-spacing: .181rem;}
  .section.gnv .container .hamburger-menu {
    width: 1.4rem; height: 1.4rem; background: url('../../assets/hamburgerMenu.svg') 50% 50% no-repeat; background-size: 100%; position: absolute; right: 0; top: 3.2rem; right: 2.1rem; z-index: 1010;
    transition: all .2s ease;
  }
  
  .section.gnv.black .container .hamburger-menu { background-image: url('../../assets/hamburgerMenuBlack.svg')}
  .section.gnv .container .hamburger-menu.open,
  .section.gnv.black .container .hamburger-menu.open { right: 13.7rem; background-image: url('../../assets/hamburgerMenu.svg'); }

  /* side-bar */
  .section.gnv.black .side-bar { color: #ffffff;}
  .section.gnv.black .hamburger-menu { background-image: url('../../assets/hamburgerMenu.svg');}
  .side-bar-dim { display: block; position: fixed; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, .5);}
  .side-bar { display: block; width: 50vw; height: 100vh; background-color: #051742; position: fixed; right: 0;}

  .side-bar .top {width: 100%; padding: 4rem 2rem 1.3rem 2rem;; box-sizing: border-box; text-align: left; }
  .side-bar .top .login { text-align: right; font-size: 1rem; line-height: .8rem; font-weight: .8rem; margin-bottom: 2rem;}

  .side-bar .top button /*{ width: 10rem; height: 2.35rem; border: 0; border-radius: 30px; background-color: #fa2b56; background-image: none; color: #ffffff; font-size: 16px; padding: 0; margin-bottom: 13px; font-size: 1rem;} */{display: none;}
  .side-bar .top .menu { font-weight: 700; font-size: 10px; color: #FFFFFF; letter-spacing: 0.16px; padding: 1rem .2rem; font-size: 1rem; text-decoration: none; position: relative;}
  .side-bar .top a.router-link-exact-active .menu:before { content: ''; width: 3px; height: 100%; background-color: #ffffff; left: -2rem; top: 0; display: block; position: absolute;}
  .side-bar .top a { text-decoration: none; height: 100%;}

  .side-bar .bottom { padding: 1.6rem 2.2rem 0; border-top: 1px solid rgba(255, 255, 255, .3); }
  .side-bar .bottom .username { text-align: left; font-family: AppleSDGothicNeo-Bold; font-size: 14px; color: #FFFFFF; letter-spacing: 0.23px; font-weight: 1.4rem; line-height: 1.7rem; margin-bottom: 1.3rem;}
  .side-bar .bottom .menu { font-weight: 400; font-size: 10px; color: #FFFFFF; letter-spacing: 0.16px; padding: 1rem .2rem; font-size: 1rem; text-align: left;}

  /* transition */
  .slide-enter, .slide-leave-to {
    transform: translateX(50%);
    opacity: 0;
  }
  .slide-enter-active {
    transition: all .2s ease;
  }
  .slide-leave-active {
    transition: all .1s ease;
  }
}

</style>