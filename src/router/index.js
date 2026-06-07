import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Conversor de monedas',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'Acerca del proyecto',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = `${to.meta.title} | PUCP`
})

export default router
