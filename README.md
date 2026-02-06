
# Iniciar Proyecto

Este es un proyecto [Next.js](https://nextjs.org) iniciado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Primero, ejecute el servidor de desarrollo en la carpeta src:


para dirigirse a la carpeta src ejecuta el siguiente comando en la terminal:

cd ./src

una vez dentro de la carpeta src ejecutaremos el siguiente comando en la terminal:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Puede comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que edita el archivo.


# Prueba Técnica – Maquetador Front-End (React / Next.js)
## Introducción
El objetivo de esta prueba técnica es evaluar las habilidades del candidato en maquetación front-end, asegurando el correcto uso de React y Next.js, HTML5 semántico, Sass (SCSS) y la implementación de variables y design tokens, manteniendo buenas prácticas de código y estructura.

## Objetivo
Desarrollar una vista web responsive basada en un diseño proporcionado (Adobe XD), replicando fielmente la interfaz y demostrando un correcto manejo de estilos, componentes y estructura del proyecto.

## Alcance del ejercicio
El proyecto incluye:
- Maquetación de una interfaz funcional usando Next.js + React
- Implementación de estilos con Sass (SCSS)
- Definición y consumo de design tokens
- Adaptación correcta a distintos tamaños de pantalla (responsive design)

# Requerimientos técnicos 
## 1. Maquetación
- Uso correcto de HTML5 semántico
- Estructura clara y ordenada del marcado
- Accesibilidad básica:
  - Uso de label
  - Roles semánticos
  - Contraste adecuado

## 2. Estilos (Sass / SCSS)
- Uso de Sass (SCSS) como preprocesador
- Implementación de:
  - Variables
  - Mixins
  - Anidación controlada
- Arquitectura de estilos modular
- Enfoque mobile first

## 3. Design Tokens
El proyecto incluye un archivo de tokens con:
- Colores
- Tipografías
- Espaciados
- Breakpoints
Todos los estilos consumen estos tokens, evitando valores hardcodeados.

## 4. React / Next.js
- Componentes funcionales
- Separación entre lógica y presentación
- Uso correcto de props
- Renderizado condicional cuando aplica
- Uso de componentes nativos de Next.js (Image, Link)
- Uso correcto de 'use client' cuando es necesario


## Estructura del proyecto

src/
 ├── app/ o pages/
 ├── components/
 │   └── Card/
 │       ├── Card.tsx
 │       └── Card.module.scss
 ├── styles/
 │   ├── tokens.scss
 │   ├── variables.scss
 │   └── mixins.scss
 └── globals.scss


# Estado actual de la prueba tecnica
La interfaz que fue desarrollada tomando como referencia el diseño proporcionado por adobe XD, tuvo por limitaciones de tiempo que la maquetación no se encuentra fiel al diseño final, especialmente en la estructura de los contedores en los cuales podra ver:
- La jerarquía visual de los contenedores no esta completamente definida.
- Algunos elementos se desplazan respecto al diseño original debido a algunos algunos ajustes estan incompletos en el layout.
- El contenedor principal de las cards no replica al 100% el comportamiento visual esperado.
- Se priorizo la estructura de componentes y la modularidad de estilos sobre el ajuste visual fino.

# Decisiones tecnicas que se tomaron
Durante este proyecto se priorizo:
 - La correcta separación de componentes(Card, PageHeader).
 - El Uso de SCSS moduular y consumo de desing tokens.
 - La organización del codigo y escabilidad de la estructura.
 - El enfoque mobile firs en la definición de estilos.
Esto hizo que algunos destalles visuales del diseño no se completaran dentro del tiempo estimado en la prueba tecnica.

# Pendientes de mejora

- Ajustar el contenedor principal para replicar fielmente el layout del diseño original.
- Corregir alineaciones y espaciados entre cards.
- Refinar la jerarquia visual (Bordes, sombras y contornos).

# Experiencia de usuario y microinteraciones
Como valor agragado a la maquetación, se implementaron microinteracciones y cambios visuales sutiles orientados a mejorar la experiencia de usuario como puede ser:

- Cambios de estado en botones a pasar el cursor, reforzando la interación visual,

- Transiciones suaves en algunos iconos y elementos interactivos.

Esto fue implementado usando SCSS, mantieniendo un enfoque liviano y sin afectar el rendimiento de la aplicación.

# Estructura de componentes 
La interfaz del la prueba tecnica fue construida a partir de componentes reutilizables, con el objetivo de mantener una estructura clara, escalible y facil de mantener.

- Card.tsx : Este es el componente principal el cual representa cada opción de vehiculo y encapsula la información general, actuá como contenedor del resto de sub componentes.

- CardHeader.tsx: Maneja la información superior de la tarjeta como marca de la empresa, tipo de moneda, idioma, uniciar sesión y ayuda.

- cars.ts: Este es el componente encargado de centralizar la información de los vehículos (marca, modelo, precio,imagen,etc).

## Estilos globales y modulares

- tokens.scss: Contiene los design tokens de la prueba tecnica como puede ser los colores, tipografía y espaciados.

- styles.scss: Contiene los estilos globales de la prueba tecnica, asi como la importación de tokens.

- Card.module.scss: Archivo de estilos encapsulados exculsivamente para el componente Card.tsx, siguiendo un enfoque de CSS Modules para evitar coliciones de estilos y mantener una arquitectura limpía.

