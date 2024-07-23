import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/admin.vue')
    },
    {
      path: '/empreendimentos',
      name: 'empreendimentos',
      component: () => import('../views/empreendimentos.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/portfolio.vue')
    },
    {
      path: '/simulador',
      name: 'simulador',
      component: () => import('../views/simulador.vue')
    },
    {
      path: '/programas',
      name: 'programas',
      component: () => import('../views/programas.vue')
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: () => import('../views/noticias.vue')
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/sobre.vue')
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/contato.vue')
    }
  ]
})

export default router
