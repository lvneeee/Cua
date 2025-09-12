import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/home-page.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../pages/about-page.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../pages/contact-page.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('../pages/porfolio-page.vue'),
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('../pages/services-page.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../pages/404-page.vue'),
    },
  ],
})

export default router
