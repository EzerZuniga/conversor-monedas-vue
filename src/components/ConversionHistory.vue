<script setup>
import BaseButton from '@/components/BaseButton.vue'

defineProps({
  history: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['clear'])

const formatDate = (value) =>
  new Intl.DateTimeFormat('es-PE', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
</script>

<template>
  <section class="history-panel">
    <div class="section-heading">
      <div>
        <span class="eyebrow">Actividad reciente</span>
        <h2>Historial</h2>
      </div>

      <BaseButton
        v-if="history.length"
        variant="ghost"
        @click="emit('clear')"
      >
        Limpiar
      </BaseButton>
    </div>

    <ul
      v-if="history.length"
      class="history-list"
    >
      <li
        v-for="item in history"
        :key="item.id"
        class="history-item"
      >
        <span>{{ item.amount }} {{ item.fromCurrency }} → {{ item.convertedAmount }}
          {{ item.toCurrency }}</span>
        <time :datetime="item.createdAt">{{ formatDate(item.createdAt) }}</time>
      </li>
    </ul>

    <p
      v-else
      class="empty-state"
    >
      Aun no hay conversiones registradas.
    </p>
  </section>
</template>
