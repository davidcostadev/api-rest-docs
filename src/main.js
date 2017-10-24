// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Default from './layout/default'
import router from './plugins/vue-router'

import './plugins/vue-affix'
import './plugins/vue-highlightjs'
import './plugins/vue-scrollactive'
// import './plugins/vue-strap'
import './plugins/bootstrap'
import './plugins/bootstrap-vue'
// import './plugins/vue-markdown'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Default/>',
  components: { Default },
})
