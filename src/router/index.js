import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Eventos from '@/components/Eventos'
import NovoUsuario from '@/components/NovoUsuario'
import NovoEvento from '@/components/NovoEvento'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Eventos',
      component: Eventos,
      meta: { auth: false }
    },    
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: { auth: false }
    },
    {
      path: '/NovoUsuario',
      name: 'NovoUsuario',
      component: NovoUsuario,
      meta: { auth: false }
    },
    {
      path: '/NovoEvento',
      name: 'NovoEvento',
      component: NovoEvento,
      meta: { auth: true }
    },
    {
      path: '*',
      name: 'Login',
      component: Login,
      meta: { auth: false }
    }
  ]
})
