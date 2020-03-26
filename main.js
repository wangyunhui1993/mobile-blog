import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)

App.mpType = 'app'

import api from './global/api.js'
//引入仿axios封装request 网络请求库，支持拦截器以及类似axios create函数功能
import { http} from '@/js_sdk/luch-request/index.js' // 全局挂载引入，配置相关在该index.js文件里修改
Vue.prototype.$api = api












const app = new Vue({
	store,
	...App
})
app.$mount()
