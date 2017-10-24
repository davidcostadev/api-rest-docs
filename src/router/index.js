import Router from 'vue-router'
import Home from '@/pages/index'
import V1 from '@/pages/v1/index'
import Avaliador from '@/pages/v1/avaliador/index'
import Admin from '@/pages/v1/admin/index'

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/v1', name: 'V1', component: V1 },
    { path: '/v1/avaliador', name: 'Avaliador', component: Avaliador },
    { path: '/v1/admin', name: 'Admin', component: Admin },
  ],
})
