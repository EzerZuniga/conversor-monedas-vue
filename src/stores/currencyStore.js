import { defineStore } from 'pinia'

import {
  calculateConversion,
  getExchangeRates,
  getSupportedCurrencies,
} from '@/services/exchangeService'

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    amount: 100,
    fromCurrency: 'PEN',
    toCurrency: 'USD',
    currencies: getSupportedCurrencies(),
    rates: {},
    lastUpdatedAt: null,
    result: null,
    history: [],
    isLoading: false,
    errorMessage: '',
  }),

  getters: {
    formattedLastUpdatedAt: (state) => {
      if (!state.lastUpdatedAt) return 'Pendiente de sincronizacion'

      return new Intl.DateTimeFormat('es-PE', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(state.lastUpdatedAt))
    },
  },

  actions: {
    async loadRates() {
      this.isLoading = true
      this.errorMessage = ''

      try {
        const response = await getExchangeRates()

        this.rates = response.rates
        this.lastUpdatedAt = response.updatedAt
      } catch {
        this.errorMessage = 'No se pudieron cargar los tipos de cambio.'
      } finally {
        this.isLoading = false
      }
    },

    async convertCurrency(payload) {
      this.amount = Number(payload.amount)
      this.fromCurrency = payload.fromCurrency
      this.toCurrency = payload.toCurrency

      if (!Object.keys(this.rates).length) {
        await this.loadRates()
      }

      try {
        const convertedAmount = calculateConversion({
          amount: this.amount,
          fromCurrency: this.fromCurrency,
          toCurrency: this.toCurrency,
          rates: this.rates,
        })

        this.result = {
          id: crypto.randomUUID(),
          amount: this.amount,
          convertedAmount,
          fromCurrency: this.fromCurrency,
          toCurrency: this.toCurrency,
          createdAt: new Date().toISOString(),
        }

        this.history = [this.result, ...this.history].slice(0, 5)
      } catch (error) {
        this.errorMessage = error.message
      }
    },

    swapCurrencies() {
      const previousFromCurrency = this.fromCurrency

      this.fromCurrency = this.toCurrency
      this.toCurrency = previousFromCurrency
    },

    clearHistory() {
      this.history = []
    },
  },
})
