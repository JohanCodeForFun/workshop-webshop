import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/dam',
      name: 'dam',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/herr',
      name: 'herr',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/smycken',
      name: 'smycken',
      component: () => import('../views/ProductView.vue'),
    },
  ],
})

export default router
