<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  currencies: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <label class="form-field">
    <span>{{ label }}</span>
    <select
      class="form-control"
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="currency in currencies"
        :key="currency.code"
        :value="currency.code"
      >
        {{ currency.symbol }} {{ currency.code }} - {{ currency.name }}
      </option>
    </select>
  </label>
</template>
