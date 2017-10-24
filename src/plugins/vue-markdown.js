import Vue from 'vue'
import Markdown from 'vue-markdown'

// Vue.use(Markdown)

const VueMarkDown = {
  install: (VuePlugin) => {
    VuePlugin.component('vue-markdown', Markdown.affix)
  },
}

Vue.use(VueMarkDown)
