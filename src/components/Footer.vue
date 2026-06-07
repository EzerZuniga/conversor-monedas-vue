<script setup>
const footerLinks = [
  { label: 'Proyecto', to: '/about' },
  { label: 'Ayuda', to: '/ayuda' },
  { label: 'Privacidad', to: '/privacidad' },
  { label: 'Terminos', to: '/terminos' },
]

const technologies = ['Vue 3', 'Vite', 'Pinia', 'Vue Router']
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__brand">
      <strong>Conversor de Monedas PUCP</strong>
      <p>Proyecto academico de Desarrollo Frontend con Vue 3.</p>
      <small>© 2026 Conversor de Monedas PUCP. Todos los derechos reservados.</small>
    </div>

    <nav
      class="app-footer__links"
      aria-label="Enlaces secundarios"
    >
      <RouterLink
        v-for="link in footerLinks"
        :key="link.to"
        :to="link.to"
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <div
      class="app-footer__meta"
      aria-label="Tecnologias usadas"
    >
      <span
        v-for="technology in technologies"
        :key="technology"
      >
        {{ technology }}
      </span>
    </div>
  </footer>
</template>
