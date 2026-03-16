import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      component: () => import('../views/OrderDetail.vue'),
    },
  ],
})

export default router
