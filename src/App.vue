<script setup>
import AppFooter from '@/components/Footer.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="app-shell">
    <AppHeader />

    <main class="page-container">
      <RouterView v-slot="{ Component }">
        <Transition
          name="page-fade"
          mode="out-in"
        >
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />
  </div>
</template>
