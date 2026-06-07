<script setup>
const steps = [
  {
    title: 'Ingresa el monto',
    description: 'Usa valores positivos y evita simbolos de moneda dentro del campo numerico.',
  },
  {
    title: 'Selecciona las monedas',
    description: 'Elige una moneda de origen y una moneda de destino diferentes.',
  },
  {
    title: 'Convierte y revisa',
    description: 'La aplicacion muestra el resultado, el tipo de cambio usado y el historial reciente.',
  },
]

const recommendations = [
  'Verifica la fecha de actualizacion antes de usar el resultado como referencia.',
  'Usa el historial para comparar conversiones realizadas durante la sesion.',
  'Considera que las tasas son estimadas y pueden cambiar segun el proveedor financiero.',
]
</script>

<template>
  <section class="about-view">
    <span class="eyebrow">Centro de ayuda</span>
    <h1>Guia rapida para usar el conversor</h1>
    <p>
      Esta seccion resume el flujo principal de la aplicacion y las buenas practicas para
      interpretar una conversion de divisas dentro de un proyecto academico.
    </p>

    <div class="about-grid">
      <article
        v-for="step in steps"
        :key="step.title"
      >
        <h2>{{ step.title }}</h2>
        <p>{{ step.description }}</p>
      </article>
    </div>

    <section class="info-section">
      <h2>Recomendaciones de uso</h2>
      <ul class="info-list">
        <li
          v-for="recommendation in recommendations"
          :key="recommendation"
        >
          {{ recommendation }}
        </li>
      </ul>
    </section>
  </section>
</template>
