import Main from '@/components/Main'
import Login from '@/components/Login'

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
import InfluMyScore from '@/components/InfluMyScore'
import InfluMyPage from '@/components/InfluMyPage'
import InfluScore from '@/components/InfluScore'
import InfluResult from '@/components/InfluResult'
import InfluSIMResult from '@/components/InfluSIMResult'

import NoAd from '@/components/NoAd'
import JoinPopup from '@/components/JoinPopup'
import SponsorNoAd from '@/components/SponsorNoAd'
import Temp from '@/components/Temp'
import All from '@/components/common/All'

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
      path: '/influencer-result',
      component: InfluResult
    },
    {
      path: '/influencer-sim-result',
      component: InfluSIMResult
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
      path: '/influencer-my-page',
      component: InfluMyPage
    },
    {
      path: '/joinPopup',
      component: JoinPopup
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
      component: MyPage,
        beforeEnter (to, from, next) {
        if (!store.getters.isAuthenticated) {
          next('/login')
        } else {
          next('/')
        }
      }
    },

    // error
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
  ]