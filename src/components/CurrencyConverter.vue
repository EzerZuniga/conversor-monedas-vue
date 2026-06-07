<script setup>
import { computed } from 'vue'

import BaseButton from '@/components/BaseButton.vue'
import CurrencySelector from '@/components/CurrencySelector.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  currencies: {
    type: Array,
    required: true,
  },
  result: {
    type: Object,
    default: null,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  canConvert: {
    type: Boolean,
    default: false,
  },
  amountError: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  lastUpdatedAt: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue', 'submit', 'swap'])

const fromCurrency = computed({
  get: () => props.modelValue.fromCurrency,
  set: (value) => updateField('fromCurrency', value),
})
const toCurrency = computed({
  get: () => props.modelValue.toCurrency,
  set: (value) => updateField('toCurrency', value),
})

const formatMoney = (value, currency) =>
  new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency,
  }).format(value)

const updateField = (field, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value,
  })
}
</script>

<template>
  <section class="converter-card">
    <div class="card-header">
      <div>
        <span class="eyebrow">Nueva conversion</span>
        <h2>Calculadora</h2>
      </div>
      <small>Actualizado: {{ lastUpdatedAt }}</small>
    </div>

    <form
      class="converter-form"
      novalidate
      @submit.prevent="emit('submit')"
    >
      <label class="form-field">
        <span>Monto</span>
        <input
          class="form-control"
          :class="{ 'form-control--error': amountError && modelValue.amount }"
          :value="modelValue.amount"
          type="number"
          min="0.01"
          step="0.01"
          inputmode="decimal"
          placeholder="Ej. 250.00"
          aria-describedby="amount-feedback"
          @input="updateField('amount', $event.target.value)"
        >
        <small
          id="amount-feedback"
          :class="{ error: amountError }"
        >
          {{ amountError || 'Usa numeros positivos para calcular.' }}
        </small>
      </label>

      <div class="currency-grid">
        <CurrencySelector
          v-model="fromCurrency"
          label="De"
          :currencies="currencies"
        />

        <button
          class="swap-button"
          type="button"
          aria-label="Intercambiar monedas"
          @click="emit('swap')"
        >
          ⇄
        </button>

        <CurrencySelector
          v-model="toCurrency"
          label="A"
          :currencies="currencies"
        />
      </div>

      <p
        v-if="errorMessage"
        class="alert"
        role="alert"
      >
        {{ errorMessage }}
      </p>

      <BaseButton
        type="submit"
        :disabled="!canConvert"
      >
        {{ isLoading ? 'Calculando...' : 'Convertir' }}
      </BaseButton>
    </form>

    <div
      class="result-box"
      aria-live="polite"
    >
      <template v-if="isLoading">
        <span class="skeleton" />
        <span class="skeleton skeleton--wide" />
      </template>

      <template v-else-if="result">
        <span>Resultado</span>
        <strong>{{ formatMoney(result.convertedAmount, result.toCurrency) }}</strong>
        <p>
          {{ formatMoney(result.amount, result.fromCurrency) }} =
          {{ formatMoney(result.convertedAmount, result.toCurrency) }}
        </p>
        <small>1 {{ result.fromCurrency }} = {{ result.exchangeRate }} {{ result.toCurrency }}</small>
      </template>

      <template v-else>
        <span>Resultado</span>
        <strong>Listo para convertir</strong>
        <p>Completa los datos y presiona convertir.</p>
      </template>
    </div>
  </section>
</template>
