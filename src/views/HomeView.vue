<script setup>
import { computed } from 'vue'

import ConversionHistory from '@/components/ConversionHistory.vue'
import CurrencyConverter from '@/components/CurrencyConverter.vue'
import HeroCarousel from '@/components/HeroCarousel.vue'
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
  amountError,
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
  <section class="home-view">
    <section class="hero">
      <HeroCarousel />
    </section>

    <section
      id="convertidor"
      class="content-grid"
    >
      <CurrencyConverter
        v-model="formState"
        :currencies="currencies"
        :result="result"
        :is-loading="isLoading"
        :can-convert="canConvert"
        :amount-error="amountError"
        :error-message="errorMessage"
        :last-updated-at="formattedLastUpdatedAt"
        @submit="handleSubmit"
        @swap="swapCurrencies"
      />

      <ConversionHistory
        id="historial"
        :history="history"
        @clear="clearHistory"
      />
    </section>
  </section>
</template>
