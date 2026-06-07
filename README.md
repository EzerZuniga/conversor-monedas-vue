# Conversor de Monedas Vue

![Vue](https://img.shields.io/badge/Vue-3.5-42B883?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-3-F7D336?style=for-the-badge&logo=vue.js&logoColor=111111)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-42B883?style=for-the-badge&logo=vue.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge)

Aplicación web académica para convertir monedas con una interfaz clara, responsive y orientada a buenas prácticas profesionales de desarrollo frontend con Vue 3.

El proyecto está construido con Vue 3, Vite, Pinia y Vue Router. La arquitectura separa componentes visuales, estado global, lógica reusable y servicios de conversión para facilitar mantenimiento, escalabilidad y una futura integración con una API real de tipos de cambio.

---

## Tabla de contenidos

1. [Características clave](#características-clave)
2. [Arquitectura y stack](#arquitectura-y-stack)
3. [Comenzar](#comenzar)
4. [Variables de entorno](#variables-de-entorno)
5. [Scripts disponibles](#scripts-disponibles)
6. [Estructura del proyecto](#estructura-del-proyecto)
7. [Calidad y buenas prácticas](#calidad-y-buenas-prácticas)
8. [Despliegue en Netlify](#despliegue-en-netlify)
9. [Mejoras futuras](#mejoras-futuras)
10. [Licencia](#licencia)

---

## Características clave

- **Conversor de monedas**: formulario para ingresar monto, seleccionar moneda de origen y destino, e interpretar el resultado.
- **Estado global con Pinia**: administración centralizada de monto, monedas, tasas, resultado, historial, carga y errores.
- **Lógica desacoplada**: cálculos y tasas ubicados en `src/services/exchangeService.js`, listos para reemplazarse por una API real.
- **Composable dedicado**: `useCurrencyConverter` encapsula la lógica del flujo principal y evita sobrecargar las vistas.
- **Historial de conversiones**: registro de conversiones recientes durante la sesión.
- **Rutas informativas**: páginas de proyecto, ayuda, privacidad y términos.
- **Diseño responsive**: experiencia adaptada para móvil, tablet y escritorio.
- **Preparado para Netlify**: incluye `_redirects` para soportar rutas internas con Vue Router history mode.

## Arquitectura y stack

| Capa | Tecnologías | Descripción |
| --- | --- | --- |
| Framework frontend | Vue 3, Composition API | Componentes declarativos y lógica reactiva. |
| Build tool | Vite | Desarrollo rápido y build optimizada para producción. |
| Estado global | Pinia | Store centralizado para datos del conversor. |
| Rutas | Vue Router | Navegación entre inicio, proyecto, ayuda, privacidad y términos. |
| Estilos | CSS moderno | Variables CSS, responsive design y sistema visual personalizado. |
| Calidad | ESLint, Prettier | Reglas de formato y validación estática del código. |
| Hosting objetivo | Netlify | Despliegue estático con build `npm run build` y salida `dist`. |

## Comenzar

### Requisitos previos

- Node.js 20 LTS o superior recomendado.
- npm 10 o superior.
- Git instalado si vas a clonar el repositorio.

### Instalación

```bash
# 1. Clona el repositorio
git clone https://github.com/EzerZuniga/conversor-monedas-vue.git
cd conversor-monedas-vue

# 2. Instala dependencias
npm install

# 3. Levanta el servidor de desarrollo
npm run dev
```

La aplicación queda disponible por defecto en:

```text
http://localhost:5173
```

## Variables de entorno

Actualmente el proyecto **no requiere variables de entorno obligatorias** para ejecutarse o desplegarse.

La aplicación usa tasas de cambio locales de respaldo dentro de `src/services/exchangeService.js`. Si en una siguiente versión se conecta una API externa, se recomienda usar variables con prefijo `VITE_`, por ejemplo:

| Variable | Uso |
| --- | --- |
| `VITE_EXCHANGE_API_URL` | URL base del proveedor de tipos de cambio. |
| `VITE_EXCHANGE_API_KEY` | Clave pública o token del proveedor, si aplica. |

Nunca subas claves reales al repositorio. En producción, configura estos valores desde el panel del proveedor de hosting.

## Scripts disponibles

| Script | Descripción |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo. |
| `npm run build` | Genera la build optimizada de producción en `dist/`. |
| `npm run preview` | Sirve localmente la build generada. |
| `npm run lint` | Ejecuta ESLint y aplica correcciones automáticas. |
| `npm run format` | Formatea archivos dentro de `src/` con Prettier. |

## Estructura del proyecto

```text
conversor-monedas-vue/
├── public/
│   ├── _redirects                 # Soporte SPA para Netlify
│   ├── icons/                     # Favicons e iconos PWA
│   ├── images/                    # Logo e imagen principal
│   ├── manifest.webmanifest       # Configuración básica PWA
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── css/main.css           # Sistema visual y responsive design
│   ├── components/                # Header, footer, formulario, historial y UI base
│   ├── composables/               # Lógica reusable del convertidor
│   ├── router/                    # Definición de rutas públicas
│   ├── services/                  # Tasas, monedas soportadas y cálculos
│   ├── stores/                    # Estado global con Pinia
│   ├── views/                     # Vistas principales e informativas
│   ├── App.vue                    # Layout principal
│   └── main.js                    # Bootstrap de Vue
├── index.html
├── package.json
└── vite.config.js
```

## Calidad y buenas prácticas

Antes de enviar cambios o desplegar una nueva versión, ejecuta:

```bash
npm run lint
npm run build
```

Buenas prácticas aplicadas:

- Separación entre componentes, vistas, estado, composables y servicios.
- Uso de nombres descriptivos para componentes, acciones y datos del dominio.
- Validación básica del monto antes de ejecutar la conversión.
- Manejo de estado de carga y mensajes de error.
- Rutas con carga diferida para reducir el JavaScript inicial.
- Metadatos básicos, manifest, favicons y configuración SPA para Netlify.
- Enlaces secundarios para ayuda, privacidad y términos.

## Despliegue en Netlify

Configuración recomendada:

| Campo | Valor |
| --- | --- |
| Framework | Vue / Vite |
| Branch | `main` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Environment variables | No obligatorias actualmente |

El archivo `public/_redirects` permite que Netlify resuelva correctamente rutas internas como:

```text
/about
/ayuda
/privacidad
/terminos
```

Después del despliegue, revisa:

- Carga inicial de la página principal.
- Navegación entre rutas.
- Recarga directa de rutas internas.
- Funcionamiento del formulario de conversión.
- Visualización del historial.
- Footer y enlaces legales.
- Vista responsive en móvil y escritorio.

## Mejoras futuras

- Conectar una API real de tipos de cambio.
- Persistir historial y monedas favoritas en `localStorage`.
- Agregar conversión múltiple hacia varias monedas.
- Mostrar tasas populares en una sección tipo dashboard.
- Añadir pruebas unitarias para cálculos y validaciones.
- Mejorar accesibilidad con pruebas de teclado y lectores de pantalla.

## Licencia

Distribuido bajo licencia MIT. Revisa el archivo `LICENSE` para más detalles.

## Créditos

Desarrollado como proyecto académico de Desarrollo Frontend con Vue 3, aplicando una estructura modular, mantenible y preparada para evolución profesional.
