<script setup>
const navigationLinks = [
  { name: 'Conversor', path: '/' },
  { name: 'Acerca de', path: '/about' },
]
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <RouterLink
        class="brand"
        to="/"
        aria-label="Ir al conversor de monedas"
      >
        <span class="brand__mark">S/</span>
        <span>
          <strong>Conversor PUCP</strong>
          <small>Vue 3 + Vite</small>
        </span>
      </RouterLink>

      <nav
        class="main-nav"
        aria-label="Navegacion principal"
      >
        <RouterLink
          v-for="link in navigationLinks"
          :key="link.path"
          class="main-nav__link"
          :to="link.path"
        >
          {{ link.name }}
        </RouterLink>
      </nav>
    </header>

    <main class="page-container">
      <RouterView />
    </main>
  </div>
</template>
