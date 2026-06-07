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
  {
    path: '/ayuda',
    name: 'help',
    component: () => import('@/views/HelpView.vue'),
    meta: {
      title: 'Ayuda',
    },
  },
  {
    path: '/privacidad',
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
    meta: {
      title: 'Politica de privacidad',
    },
  },
  {
    path: '/terminos',
    name: 'terms',
    component: () => import('@/views/TermsView.vue'),
    meta: {
      title: 'Terminos y condiciones',
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
