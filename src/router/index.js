import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/my-projects',
      name: 'My Projects',
      component: () => import('../views/MyProjects.vue')
    },
    {
      path: '/my-links',
      name: 'My Links',
      component: () => import('../views/MyLinks.vue')
    }
  ]
})

export default router
