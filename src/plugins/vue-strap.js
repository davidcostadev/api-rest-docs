import Vue from 'vue'
import Strap from 'vue-strap'

const VueStrap = {
  install: (VuePlugin) => {
    VuePlugin.component('affix', Strap.affix)
  },
}

Vue.use(VueStrap)
