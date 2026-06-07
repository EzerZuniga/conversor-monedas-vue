# conversor-monedas-vue

Proyecto academico desarrollado para el curso de capacitacion en Desarrollo Frontend con Vue 3 de la PUCP. La aplicacion permite convertir monedas con una interfaz simple, amigable, responsiva y preparada para conectar una API real de tipos de cambio.

## Stack tecnico

- Vue 3 con Composition API
- Vite
- Pinia
- Vue Router
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
├── assets/
│   └── css/main.css        # Sistema visual y responsive design
├── components/             # Encabezado, footer, formulario e historial
├── composables/            # Logica reusable del convertidor
├── router/                 # Rutas de la aplicacion
├── services/               # Tasas de cambio y calculos
├── stores/                 # Estado global con Pinia
├── views/                  # Home y pagina informativa
├── App.vue                 # Layout principal
└── main.js                 # Bootstrap de Vue
```

## UX

La interfaz se enfoca en una tarea principal: convertir monedas sin distracciones.

```text
Mobile
┌────────────────────────────┐
│ Encabezado con logo PUCP   │
│ Navegacion                 │
│ Hero                       │
│ Card convertidor           │
│ Resultado                  │
│ Historial                  │
│ Footer                     │
└────────────────────────────┘

Desktop
┌──────────────────────────────────────────────┐
│ Logo PUCP                    │ Navegacion     │
│ Hero                                         │
│ Convertidor                  │ Historial     │
│ Footer                                       │
└──────────────────────────────────────────────┘
```

La paleta visual usa azul como color principal, consistente con la identidad digital PUCP, y un acento dorado para resaltar acciones importantes.
