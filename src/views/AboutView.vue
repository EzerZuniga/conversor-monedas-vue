<script setup>
const architectureItems = [
  {
    title: 'Componentes',
    description:
      'La interfaz se divide en piezas reutilizables para mantener bajo acoplamiento y facilitar mantenimiento.',
  },
  {
    title: 'Composable',
    description:
      'La logica de interaccion del convertidor se centraliza en una funcion reusable basada en Composition API.',
  },
  {
    title: 'Store Pinia',
    description:
      'El estado global administra monedas, tasas, resultado, historial, carga y errores de forma predecible.',
  },
]

const qualityItems = [
  'Separacion entre vista, estado, componentes y servicio de datos.',
  'Validacion del monto antes de ejecutar la conversion.',
  'Rutas con carga diferida para mejorar el rendimiento inicial.',
  'Diseno responsivo preparado para celular, tablet y escritorio.',
]

const nextSteps = [
  'Conectar una API real de tasas de cambio.',
  'Persistir historial y preferencias en localStorage.',
  'Agregar pruebas unitarias para calculos y validaciones.',
  'Mejorar accesibilidad con pruebas de navegacion por teclado.',
]
</script>

<template>
  <section class="about-view">
    <span class="eyebrow">Acerca del proyecto</span>
    <h1>Aplicacion academica con enfoque profesional</h1>
    <p>
      Este convertidor de monedas fue construido con Vue 3, Vite, Pinia y Vue Router. La interfaz
      usa una identidad visual inspirada en PUCP, prioriza legibilidad, accesibilidad y una
      experiencia responsiva para celulares, tablets y escritorio.
    </p>

    <div class="about-grid">
      <article>
        <h2>Simple</h2>
        <p>Una tarea principal: convertir monedas sin distracciones.</p>
      </article>
      <article>
        <h2>Escalable</h2>
        <p>La logica de tasas esta separada para conectar una API real despues.</p>
      </article>
      <article>
        <h2>Responsiva</h2>
        <p>El layout se adapta desde pantallas pequenas hasta escritorio.</p>
      </article>
    </div>

    <section class="info-section">
      <h2>Arquitectura Vue aplicada</h2>
      <p>
        La aplicacion separa responsabilidades para que cada capa tenga una funcion clara y pueda
        evolucionar sin romper el resto del sistema.
      </p>

      <div class="about-grid">
        <article
          v-for="item in architectureItems"
          :key="item.title"
        >
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section class="info-section">
      <h2>Buenas practicas implementadas</h2>
      <ul class="info-list">
        <li
          v-for="item in qualityItems"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="info-section">
      <h2>Mejoras planificadas</h2>
      <ul class="info-list">
        <li
          v-for="step in nextSteps"
          :key="step"
        >
          {{ step }}
        </li>
      </ul>
    </section>
  </section>
</template>
