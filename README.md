# conversor-monedas-vue
Proyecto desarrollado como parte del curso de capacitación en Desarrollo Frontend con Vue 3 de la PUCP, enfocado en la aplicación de conceptos de reactividad, componentes y desarrollo de interfaces web modernas.

## Stack tecnico

- Vue 3 con Composition API
- Vite
- Vue Router
- Pinia
- ESLint y Prettier
- CSS moderno y responsivo

## Instalacion y ejecucion

```bash
npm install
npm run dev
```

Para validar el proyecto:

```bash
npm run build
npm run lint
```

## Arquitectura

```text
src/
├── assets/          # Estilos globales e imagenes
├── components/      # Componentes reutilizables de interfaz
├── composables/     # Logica reusable basada en Composition API
├── router/          # Definicion de rutas
├── services/        # Acceso a datos y reglas externas
├── stores/          # Estado global con Pinia
└── views/           # Pantallas principales
```

La capa `services` usa tasas locales de referencia y esta preparada para reemplazarse por una API HTTP de tipos de cambio sin modificar las vistas ni los componentes.
