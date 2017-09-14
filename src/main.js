// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import weathericon from './assets/weather-icon-animated.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import moment from "moment";
import VueMomentJS from "vue-momentjs";
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
 
Vue.use(VueLodash, lodash)
Vue.use(VueMomentJS, moment);
Vue.use(VueMaterial)
Vue.use(VueAxios, axios);
Vue.material.registerTheme(
	'default', {
	  primary: 'purple',
	  accent: 'blue',
	  warn: 'red',
	}

)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
