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

  const amountError = computed(() => {
    if (!amount.value) return 'Ingresa un monto.'
    if (Number(amount.value) <= 0) return 'El monto debe ser mayor a cero.'

    return ''
  })
  const canConvert = computed(
    () => !amountError.value && fromCurrency.value !== toCurrency.value && !isLoading.value,
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
    amountError,
    convertCurrency: currencyStore.convertCurrency,
    swapCurrencies: currencyStore.swapCurrencies,
    clearHistory: currencyStore.clearHistory,
  }
}
