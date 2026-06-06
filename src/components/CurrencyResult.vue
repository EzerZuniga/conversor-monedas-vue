<script setup>
defineProps({
  result: {
    type: Object,
    default: null,
  },
})

const formatMoney = (value, currency) =>
  new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency,
  }).format(value)
</script>

<template>
  <section
    class="result-panel"
    aria-live="polite"
  >
    <template v-if="result">
      <span class="eyebrow">Resultado</span>
      <strong class="result-panel__amount">
        {{ formatMoney(result.convertedAmount, result.toCurrency) }}
      </strong>
      <p>
        {{ formatMoney(result.amount, result.fromCurrency) }} equivalen a
        {{ formatMoney(result.convertedAmount, result.toCurrency) }}.
      </p>
    </template>

    <template v-else>
      <span class="eyebrow">Listo para convertir</span>
      <strong class="result-panel__amount">Selecciona monedas</strong>
      <p>Ingresa un monto y calcula una conversion usando tasas locales de referencia.</p>
    </template>
  </section>
</template>
