import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useCurrencyStore } from '@/stores/currencyStore'

export function useCurrencyConverter() {
  const currencyStore = useCurrencyStore()
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
  } = storeToRefs(currencyStore)

  const canConvert = computed(
    () => Number(amount.value) > 0 && fromCurrency.value !== toCurrency.value,
  )

  onMounted(() => {
    currencyStore.loadRates()
  })

  return {
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
    convertCurrency: currencyStore.convertCurrency,
    swapCurrencies: currencyStore.swapCurrencies,
    clearHistory: currencyStore.clearHistory,
  }
}
