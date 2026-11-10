# Tutorial Hell

## 1. Introducción

Tutorial Hell es una plantilla web de código abierto diseñada para romper el ciclo de consumo pasivo de tutoriales. La idea es sencilla: ves un vídeo mientras tomas notas de los puntos clave y los pasos, y después reproduces el ejercicio por tu cuenta usando solo esas notas.

La web incluye:
- Rutas de aprendizaje personalizables.
- Recursos en vídeo, PDF o enlaces externos.
- Bloque de notas integrado por curso.
- Chat con IA (dos modelos gratuitos).
- Seguimiento del progreso con barra de progreso y confeti al completar.
- Tema oscuro/claro.
- Exportación e importación del progreso.

---

## 2. Requisitos del sistema

- Node.js >= 22.12.0
- pnpm (gestor de paquetes)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Conexión a Internet (para cargar los recursos y el chat con IA)

---

## 3. Instalación y configuración

### 3.1 Clonar el repositorio

```
git clone https://github.com/u-n-a-i/tutorial-hell.git
cd tutorial-hell
```

### 3.2 Crear archivo .env

Crea un archivo llamado `.env` en la raíz del proyecto con tu API key de OpenRouter:

```
OPENROUTER_API_KEY=sk-or-v1-tu-api-key-aqui
```

### 3.3 Instalar dependencias

```
pnpm install
```

### 3.4 Iniciar servidor de desarrollo

```
pnpm run dev
```

Abre http://localhost:4321 en tu navegador.

---

## 4. Estructura del proyecto

- `src/pages/` — Páginas de la web (inicio, información, curso, 404).
- `src/components/` — Componentes reutilizables (Footer, Header, tarjetas de curso, etc.).
- `src/layouts/` — Plantilla base (Layout.astro).
- `src/data/courses.ts` — Archivo con las rutas y cursos (modifícalo para personalizar).
- `src/scripts/` — Lógica de JavaScript/TypeScript.
- `src/types/` — Definiciones de tipos TypeScript.
- `src/styles/` — Estilos globales.
- `public/` — Archivos estáticos (imágenes, favicon, etc.).

---

## 5. Guía de uso

### 5.1 Pantalla de inicio

Al abrir la web aparece la pantalla principal con las rutas de aprendizaje disponibles.


- Si hay rutas predefinidas, aparecen como tarjetas.
- También hay un botón para acceder a todos los cursos.

### 5.2 Elegir una ruta

Haz clic en una ruta para ver los cursos que la componen.


- Las rutas ayudan a los principiantes a saber por dónde empezar.
- Cada ruta agrupa cursos relacionados.

### 5.3 Buscar cursos

Usa el buscador para filtrar cursos dentro de una ruta concreta.


- La búsqueda solo encuentra cursos dentro de la ruta actual.
- Los resultados se actualizan en tiempo real mientras escribes.

### 5.4 Paginación de cursos

Los cursos se muestran de 6 en 6. Pulsa "Cargar más" para ver los siguientes.


### 5.5 Vista de curso y recursos

Al hacer clic en un curso accedes a sus recursos (vídeo, PDF o enlace externo).


- Dependiendo del tipo de recurso, se muestra el vídeo embebido, un visor de PDF o un enlace a una web externa.
- Debajo del recurso encontrarás los botones de navegación.

### 5.6 Lista de temas y barra de progreso

Cada curso tiene una lista de temas que puedes ir marcando al completarlos.


- Marca un tema haciendo clic en la casilla.
- La barra de progreso se actualiza automáticamente.
- El progreso se guarda en el navegador (localStorage).

### 5.7 Bloque de notas

Debajo del recurso hay un bloque de notas integrado para tomar apuntes.


- Las notas se guardan automáticamente mientras escribes.
- Puedes consultarlas en cualquier momento al volver al curso.
- Úsalas para anotar los pasos clave del vídeo y luego reproducirlos sin ayuda.

### 5.8 Navegación entre recursos

Usa los botones para ir al siguiente o al anterior recurso del curso.


- También hay atajos de teclado para navegar rápidamente (consulta la página de información).

### 5.9 Chat con IA

En la parte inferior derecha hay un botón para abrir el chat con IA.


- Pregunta al asistente cuando te atasques con algún concepto.
- Hay dos modelos gratuitos disponibles. El modelo predeterminado es más lento pero funcional.
- Puedes cambiar de modelo en la parte superior del chat.

### 5.10 Exportar e importar progreso

Desde el menú de ajustes puedes exportar tu progreso (para guardarlo) o importar uno previo.


- Exporta tu progreso después de cada sesión.
- Así no perderás el avance al cambiar de dispositivo o navegador.
- También es una buena práctica para crear el hábito de usar control de versiones.

### 5.11 Cambiar tema oscuro/claro

Desde el menú de ajustes o pulsando la tecla `t` puedes cambiar entre tema oscuro y claro.


- El tema elegido se recuerda incluso al recargar la página.

### 5.12 Finalizar un curso

Al marcar todos los temas de un curso, aparece un modal con confeti animado celebrándolo.


- El modal incluye sugerencias para continuar aprendiendo.

### 5.13 Footer y enlace a GitHub

En el footer encontrarás un enlace al repositorio de GitHub para descargar o contribuir al proyecto.


### 5.14 Página 404

Si alguna URL no es correcta, se muestra una página 404 personalizada con un enlace para volver al inicio.

---

## 6. Personalización

Tutorial Hell es una plantilla. Para crear tu propio "infierno de tutoriales" solo tienes que modificar el archivo `src/data/courses.ts`.

Estructura del archivo:

```typescript
export const courses = [
  {
    id: "mi-ruta",
    title: "Nombre de la ruta",
    description: "Descripción de la ruta",
    courses: [
      {
        id: "mi-curso",
        title: "Nombre del curso",
        description: "Descripción del curso",
        resources: [
          {
            title: "Título del recurso",
            type: "video", // o "pdf" o "link"
            url: "https://..."
          }
        ],
        topics: [
          { id: "tema-1", title: "Tema 1", completed: false }
        ]
      }
    ]
  }
];
```

Puedes añadir tantas rutas y cursos como quieras. El formato es el mismo para cualquier tema: desarrollo, música, cocina, diseño, etc.

---

## 7. Despliegue

Para generar una versión estática lista para producción:

```
pnpm run build
```

Para previsualizarla localmente:

```
pnpm run preview
```

El proyecto incluye adaptador para Netlify. Conéctalo a tu repositorio de GitHub y Netlify se encargará del despliegue automático.

---

## 8. Solución de problemas

| Problema | Posible solución |
|---|---|
| El chat con IA no responde | Verifica que la API key en `.env` es correcta y que tienes conexión a Internet. |
| El progreso se ha perdido | Revisa si has borrado los datos del navegador. Siempre puedes importar un archivo de progreso previo. |
| El tema no se guarda | Asegúrate de que el navegador permite localStorage. |
| Error al hacer build | Comprueba que has ejecutado `pnpm install` y que no hay errores de sintaxis en `courses.ts`. |

---

## 9. Contacto y contribución

El proyecto es 100% open source.

- Repositorio: https://github.com/u-n-a-i/tutorial-hell
- Página de información: http://localhost:4321/informacion (en desarrollo)

Si encuentras algún error o quieres sugerir mejoras, abre un issue o pull request en GitHub.
