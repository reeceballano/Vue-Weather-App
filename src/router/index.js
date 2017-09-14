import Vue from 'vue'
import Router from 'vue-router'
import WeatherInfo from '@/components/weatherinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/weather-info/',
      name: 'weatherinfo',
      component: WeatherInfo
    }
  ]
})
