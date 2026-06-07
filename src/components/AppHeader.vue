<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const navigationLinks = [
  { label: 'Inicio', to: '/', path: '/', hash: '' },
  {
    label: 'Convertidor',
    to: { path: '/', hash: '#convertidor' },
    path: '/',
    hash: '#convertidor',
  },
  { label: 'Historial', to: { path: '/', hash: '#historial' }, path: '/', hash: '#historial' },
  { label: 'Proyecto', to: '/about', path: '/about', hash: '' },
]

const route = useRoute()
const isMenuOpen = ref(false)

const currentHash = computed(() => route.hash || '')
const menuButtonLabel = computed(() =>
  isMenuOpen.value ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion',
)

const isLinkActive = (link) => route.path === link.path && currentHash.value === link.hash

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenuOnEscape = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(
  () => route.fullPath,
  closeMenu,
)

watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', closeMenuOnEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', closeMenuOnEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="app-header"
    :class="{ 'app-header--menu-open': isMenuOpen }"
  >
    <RouterLink
      class="brand"
      to="/"
      aria-label="Ir al convertidor de monedas PUCP"
    >
      <span class="brand__logo-frame">
        <img
          class="brand__logo"
          src="/images/logo.png"
          alt="PUCP"
        >
      </span>
    </RouterLink>

    <button
      class="menu-toggle"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="main-navigation"
      :aria-label="menuButtonLabel"
      @click="toggleMenu"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>

    <button
      v-show="isMenuOpen"
      class="menu-backdrop"
      type="button"
      aria-label="Cerrar menu de navegacion"
      @click="closeMenu"
    />

    <nav
      id="main-navigation"
      class="main-nav"
      :class="{ 'main-nav--open': isMenuOpen }"
      aria-label="Navegacion principal"
    >
      <RouterLink
        v-for="link in navigationLinks"
        :key="`${link.path}${link.hash}`"
        class="main-nav__link"
        :class="{ 'main-nav__link--active': isLinkActive(link) }"
        :to="link.to"
      >
        {{ link.label }}
      </RouterLink>
    </nav>
  </header>
</template>
