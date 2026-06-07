<script setup>
const terms = [
  {
    title: 'Uso referencial',
    description:
      'Las conversiones son estimaciones academicas y no constituyen asesoria financiera.',
  },
  {
    title: 'Disponibilidad',
    description:
      'El servicio puede cambiar si se actualiza la fuente de tasas, la infraestructura o el proveedor de despliegue.',
  },
  {
    title: 'Responsabilidad del usuario',
    description:
      'Antes de realizar una operacion real, el usuario debe validar la tasa con una fuente financiera oficial.',
  },
]
</script>

<template>
  <section class="about-view">
    <span class="eyebrow">Terminos legales</span>
    <h1>Terminos y condiciones</h1>
    <p>
      Al utilizar este conversor aceptas que la aplicacion tiene fines educativos y de demostracion
      tecnica. Su objetivo es mostrar buenas practicas de desarrollo frontend con Vue.
    </p>

    <div class="about-grid">
      <article
        v-for="term in terms"
        :key="term.title"
      >
        <h2>{{ term.title }}</h2>
        <p>{{ term.description }}</p>
      </article>
    </div>

    <section class="info-section">
      <h2>Actualizacion de condiciones</h2>
      <p>
        Estos terminos pueden ajustarse cuando el proyecto agregue nuevas funciones, como consumo de
        API externa, persistencia local o integraciones adicionales.
      </p>
    </section>
  </section>
</template>
