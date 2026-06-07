<script setup>
const privacyItems = [
  {
    title: 'Datos ingresados',
    description:
      'El monto y las monedas seleccionadas se usan solo para calcular la conversion solicitada.',
  },
  {
    title: 'Historial local',
    description:
      'El historial mostrado pertenece a la sesion de uso de la aplicacion y no requiere registro.',
  },
  {
    title: 'Servicios externos',
    description:
      'Si se conecta una API real, la aplicacion puede consultar tasas de cambio desde un proveedor externo.',
  },
]
</script>

<template>
  <section class="about-view">
    <span class="eyebrow">Privacidad</span>
    <h1>Politica de privacidad</h1>
    <p>
      Este proyecto academico esta disenado para operar sin cuentas de usuario, sin formularios de
      registro y sin almacenamiento de informacion personal sensible.
    </p>

    <div class="about-grid">
      <article
        v-for="item in privacyItems"
        :key="item.title"
      >
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </div>

    <section class="info-section">
      <h2>Compromiso del proyecto</h2>
      <p>
        La aplicacion prioriza una experiencia simple y transparente. Los resultados son referenciales
        y no reemplazan la informacion oficial de bancos, casas de cambio o entidades financieras.
      </p>
    </section>
  </section>
</template>
