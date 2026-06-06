<script setup>
import BaseButton from '@/components/BaseButton.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  currencies: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  canConvert: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'submit', 'swap'])

const updateField = (field, value) => {
  emit('update:modelValue', {
    ...props.modelValue,
    [field]: value,
  })
}
</script>

<template>
  <form
    class="converter-form"
    @submit.prevent="emit('submit')"
  >
    <label class="form-field">
      <span>Monto</span>
      <input
        :value="modelValue.amount"
        class="form-control"
        type="number"
        min="0.01"
        step="0.01"
        inputmode="decimal"
        placeholder="Ingresa un monto"
        @input="updateField('amount', $event.target.value)"
      >
    </label>

    <div class="currency-grid">
      <label class="form-field">
        <span>Desde</span>
        <select
          :value="modelValue.fromCurrency"
          class="form-control"
          @change="updateField('fromCurrency', $event.target.value)"
        >
          <option
            v-for="currency in currencies"
            :key="currency.code"
            :value="currency.code"
          >
            {{ currency.code }} - {{ currency.name }}
          </option>
        </select>
      </label>

      <BaseButton
        class="swap-button"
        type="button"
        variant="secondary"
        aria-label="Intercambiar monedas"
        @click="emit('swap')"
      >
        ⇄
      </BaseButton>

      <label class="form-field">
        <span>Hacia</span>
        <select
          :value="modelValue.toCurrency"
          class="form-control"
          @change="updateField('toCurrency', $event.target.value)"
        >
          <option
            v-for="currency in currencies"
            :key="currency.code"
            :value="currency.code"
          >
            {{ currency.code }} - {{ currency.name }}
          </option>
        </select>
      </label>
    </div>

    <BaseButton
      type="submit"
      :disabled="isLoading || !canConvert"
    >
      {{ isLoading ? 'Calculando...' : 'Convertir moneda' }}
    </BaseButton>
  </form>
</template>
