import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'checkAuth',
      component: WelcomeView,
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import('../views/MainView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/InicioView.vue'),
        },
        {
          path: '/rutinas',
          name: 'rutinas',
          component: () => import('../views/RutinasView.vue'),
        },
        {
          path: '/perfil',
          name: 'perfil',
          component: () => import('../views/PerfilView.vue'),
        },
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
