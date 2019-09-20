import Vue from 'vue'
import './excel/Blob'
import './excel/Export2Excel.js'
import App from './App'
import router from './router'
import store from'./store/index'
import 'vxe-table/lib/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import initLogin from './utils/utils'
import * as moment from './utils/filter'
import 'vxe-table/lib/index.css'
process.env.NODE_ENV === 'development'&& require('./mock/index')
import 'xe-utils'
import VXETable from 'vxe-table'


Vue.use(VXETable)

Object.keys(moment).forEach(key => {
  Vue.filter(key, moment[key])
})


Vue.use(initLogin)
Vue.use(ElementUI);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
