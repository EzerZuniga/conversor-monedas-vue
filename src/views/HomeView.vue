<script setup>
import { computed } from 'vue'

import ConversionHistory from '@/components/ConversionHistory.vue'
import CurrencyForm from '@/components/CurrencyForm.vue'
import CurrencyResult from '@/components/CurrencyResult.vue'
import { useCurrencyConverter } from '@/composables/useCurrencyConverter'

const {
  amount,
  fromCurrency,
  toCurrency,
  currencies,
  result,
  history,
  isLoading,
  errorMessage,
  formattedLastUpdatedAt,
  canConvert,
  convertCurrency,
  swapCurrencies,
  clearHistory,
} = useCurrencyConverter()

const formState = computed({
  get: () => ({
    amount: amount.value,
    fromCurrency: fromCurrency.value,
    toCurrency: toCurrency.value,
  }),
  set: (value) => {
    amount.value = value.amount
    fromCurrency.value = value.fromCurrency
    toCurrency.value = value.toCurrency
  },
})

const handleSubmit = () => {
  convertCurrency(formState.value)
}
</script>

<template>
  <section class="home-layout">
    <div class="hero-copy">
      <span class="eyebrow">PUCP - Desarrollo Frontend con Vue 3</span>
      <h1>Conversor de monedas escalable y preparado para API real</h1>
      <p>
        Proyecto academico construido con Composition API, Vue Router, Pinia y una capa de servicios
        aislada para integrar tipos de cambio en tiempo real.
      </p>
    </div>

    <div class="workspace-grid">
      <section class="converter-card">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Operacion</span>
            <h2>Nueva conversion</h2>
          </div>
          <span class="sync-label">Actualizado: {{ formattedLastUpdatedAt }}</span>
        </div>

        <p
          v-if="errorMessage"
          class="alert"
          role="alert"
        >
          {{ errorMessage }}
        </p>

        <CurrencyForm
          v-model="formState"
          :currencies="currencies"
          :is-loading="isLoading"
          :can-convert="canConvert"
          @submit="handleSubmit"
          @swap="swapCurrencies"
        />
      </section>

      <CurrencyResult :result="result" />
    </div>

    <ConversionHistory
      :history="history"
      @clear="clearHistory"
    />
  </section>
</template>
