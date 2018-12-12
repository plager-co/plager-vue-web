import Main from '@/components/Main'
import Login from '@/components/Login'

import AdList from '@/components/AdList'

import SponsorFilter from '@/components/SponsorFilter'
import SponsorPayment from '@/components/SponsorPayment'
import SponsorPayment2 from '@/components/SponsorPayment2'
import SponsorPayment3 from '@/components/SponsorPayment3'
import SponsorPayment4 from '@/components/SponsorPayment4'
import SponsorSIM from '@/components/SponsorSIM'
import SponsorResult from '@/components/SponsorResult'
import SponsorList from '@/components/SponsorList'
import MyPage from '@/components/MyPage'

import InfluJoin from '@/components/InfluJoin'
import InfluList from '@/components/InfluList'
import InfluComplete from '@/components/InfluComplete'
import InfluAdList from '@/components/InfluAdList'
import InfluMyScore from '@/components/InfluMyScore'
import InfluMyScoreLoading from '@/components/InfluMyScoreLoading'
import InfluMyPage from '@/components/InfluMyPage'
import InfluScore from '@/components/InfluScore'
import InfluResult from '@/components/InfluResult'
import InfluSIM from '@/components/InfluSIM'
import InfluSIMResult from '@/components/InfluSIMResult'
import InstagramRedirectPage from '@/components/InstagramRedirectPage'

import NoAd from '@/components/NoAd'
import JoinPopup from '@/components/JoinPopup'
import RequestPasswordPopup from '@/components/RequestPasswordPopup'
import AlertBase from '@/components/AlertBase'
import SponsorNoAd from '@/components/SponsorNoAd'
import Temp from '@/components/Temp'
import All from '@/components/common/All'
import PrivatePolicy from '@/components/PrivatePolicy'
import Policy from '@/components/Policy'

import Survey from '@/components/Survey'
import NewSurvey from '@/components/NewSurvey'
import { store } from '../store'


export const routes = [
    // for publishing
    {
      path: '/all',
      component: All
    },
    {
      path: '/',
      component: Main
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/ad-list',
      component: AdList
    },
    {
      path: '/sponsor-result',
      component: SponsorResult
    },
    {
      path: '/sponsor-filter',
      component: SponsorFilter
    },
    {
      path: '/sponsor-payment',
      component: SponsorPayment
    },
    {
      path: '/sponsor-payment2',
      component: SponsorPayment2
    },
    {
      path: '/sponsor-payment3',
      component: SponsorPayment3
    },
    {
      path: '/sponsor-payment4',
      component: SponsorPayment4
    },
    {
      path: '/sponsor-sim',
      component: SponsorSIM
    },
    {
      path: '/sponsor-list',
      component: SponsorList
    },
    {
      path: '/influencer-join',
      component: InfluJoin
    },
    {
      path: '/influencer-list',
      component: InfluList
    },
    {
      path: '/influencer-ad-list',
      component: InfluAdList
    },
    {
      path: '/influencer-result',
      component: InfluResult
    },
    {
      path: '/influencer-sim-result',
      component: InfluSIMResult
    },
    {
      path: '/influencer-sim',
      component: InfluSIM
    },
    {
      path: '/influencer-score',
      component: InfluScore
    },
    {
      path: '/influencer-complete',
      component: InfluComplete
    },
    {
      path: '/influencer-my-score',
      component: InfluMyScore
    },
    {
      path: '/influencer-my-score-loading',
      component: InfluMyScoreLoading
    },
    {
      path: '/influencer-my-page',
      component: InfluMyPage
    },
    {
      path: '/joinPopup',
      component: JoinPopup
    },
    {
      path: '/RequestPasswordPopup',
      component: RequestPasswordPopup
    },
        {
      path: '/alertBase',
      component: AlertBase
    },
    {
      path: '/no-ad',
      component: NoAd
    },
    {
      path: '/sponsor-no-ad',
      component: SponsorNoAd
    },
    {
      path: '/mypage',
        beforeEnter (to, from, next) {
          console.log(store.getters.isAuthenticated);
        if (!store.getters.isAuthenticated) {
          next('/login')
        } else {
            if (store.getters.user_type === 'influencer'){
                next('/influencer-my-page')
            } else {
                next('/my-page')
            }

        }
      }
    },
    {
      path: '/instagram-redirect',
      component: InstagramRedirectPage,
    },
    {
      path: '/my-page',
      component: MyPage,
    },
    {
      path: '/policy',
      component: Policy
    },
    {
      path: '/private-policy',
      component: PrivatePolicy
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: Temp
    }, {
      path: '/surveys/:id',
      name: 'Survey',
      component: Survey
    }, {
      path: '/surveys',
      name: 'NewSurvey',
      component: NewSurvey,
      beforeEnter (to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login')
        } else {
          next()
        }
      }
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Login,
      beforeEnter (to, from, next) {
          if (store.getters.isAuthenticated) {
              store.commit('userLogout')
              next('/login')
          }
      }
    },
  ]