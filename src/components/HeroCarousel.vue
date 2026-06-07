<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const slides = [
  {
    title: 'Tu conversion de monedas esta lista en segundos',
    subtitle: 'Herramienta academica clara y responsive',
    description:
      'Ingresa un monto, elige las monedas y obtiene una conversion estimada al instante.',
    primaryOption: 'Convertidor rapido',
    secondaryOption: 'Consulta guiada',
  },
  {
    title: 'Compara monedas sin complicarte',
    subtitle: 'Flujo simple para decisiones rapidas',
    description:
      'Compara monedas principales con una interfaz directa, legible y pensada para uso rapido.',
    primaryOption: '4 pasos',
    secondaryOption: 'Resultado claro',
  },
  {
    title: 'Tus ultimas consultas quedan organizadas',
    subtitle: 'Historial local durante tu sesion',
    description:
      'Revisa conversiones recientes para comparar montos y mantener trazabilidad durante tu sesion.',
    primaryOption: 'Historial local',
    secondaryOption: 'Sin registro',
  },
  {
    title: 'Una experiencia comoda en movil y escritorio',
    subtitle: 'Interfaz adaptable para cualquier pantalla',
    description:
      'Los controles y resultados se adaptan al espacio disponible para mantener una lectura limpia.',
    primaryOption: '100% adaptable',
    secondaryOption: 'Lectura limpia',
  },
]

const benefits = ['Monto seguro', 'Monedas principales', 'Historial local', 'Diseno responsive']

const activeIndex = ref(0)
const isPaused = ref(false)
const shouldAutoPlay = ref(true)
let autoplayId

const activeSlide = computed(() => slides[activeIndex.value])

const showNextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

const showPreviousSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

const startAutoplay = () => {
  if (!shouldAutoPlay.value || autoplayId) {
    return
  }

  autoplayId = window.setInterval(() => {
    if (!isPaused.value) {
      showNextSlide()
    }
  }, 5200)
}

const stopAutoplay = () => {
  window.clearInterval(autoplayId)
  autoplayId = undefined
}

onMounted(() => {
  shouldAutoPlay.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  startAutoplay()
})

onBeforeUnmount(stopAutoplay)
</script>

<template>
  <section
    class="hero-carousel"
    aria-roledescription="carrusel"
    aria-label="Beneficios del conversor"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
    @focusin="isPaused = true"
    @focusout="isPaused = false"
  >
    <div class="hero-carousel__viewport" aria-live="polite">
      <article
        :key="activeIndex"
        class="hero-carousel__slide"
      >
        <div class="hero-carousel__content">
          <h2>{{ activeSlide.title }}</h2>
          <strong>{{ activeSlide.subtitle }}</strong>
          <p>{{ activeSlide.description }}</p>
        </div>

        <div class="hero-carousel__benefits" aria-label="Beneficios principales">
          <span
            v-for="benefit in benefits"
            :key="benefit"
          >
            {{ benefit }}
          </span>
        </div>

        <div class="hero-carousel__actions" aria-label="Acciones principales">
          <a href="#convertidor">{{ activeSlide.primaryOption }}</a>
          <a href="#historial">{{ activeSlide.secondaryOption }}</a>
        </div>
      </article>
    </div>

    <div class="hero-carousel__controls" aria-label="Controles del carrusel">
      <button
        class="hero-carousel__arrow"
        type="button"
        aria-label="Ver beneficio anterior"
        @click="showPreviousSlide"
      >
        <span aria-hidden="true">&lt;</span>
      </button>

      <button
        class="hero-carousel__arrow"
        type="button"
        aria-label="Ver beneficio siguiente"
        @click="showNextSlide"
      >
        <span aria-hidden="true">&gt;</span>
      </button>
    </div>
  </section>
</template>
