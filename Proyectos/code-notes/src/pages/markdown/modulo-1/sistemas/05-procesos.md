---
layout: ../../../../layouts/modulo-1/Sistemas.astro
title: "Procesos"
block: ""
--- 

<div class="markdown-notes"> 

<div class="markdown title-container">
    <h1 align='center' class="title">Procesos</h1>
</div> 

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [¿Qué es un proceso?](#qué-es-un-proceso)
- [Características principales](#características-principales)
- [¿Cómo se crea un proceso?](#cómo-se-crea-un-proceso)
- [En programación](#en-programación)
  - [Para escribir programas más eficientes](#para-escribir-programas-más-eficientes)
  - [Para manejar múltiples tareas al mismo tiempo](#para-manejar-múltiples-tareas-al-mismo-tiempo)
  - [Para evitar problemas de "cuellos de botella"](#para-evitar-problemas-de-cuellos-de-botella)
  - [Para trabajar con sistemas distribuidos y servidores](#para-trabajar-con-sistemas-distribuidos-y-servidores)
  - [Para depurar errores raros](#para-depurar-errores-raros)
  - [Ejemplo práctico para un programador](#ejemplo-práctico-para-un-programador)

</div>
</div> 

## ¿Qué es un proceso?

Un proceso es una instancia de un programa en ejecución. Es decir, cuando ejecutas un programa (como un navegador, un editor de texto o un juego), el sistema operativo crea uno o más procesos para manejar su ejecución.

Un proceso es un programa en acción

Imagina que un programa es como una receta de cocina (por ejemplo, "Cómo hacer una pizza"). Es solo un conjunto de instrucciones escritas en un papel.

Un proceso sería el momento en que tú estás cocinando esa pizza:

- Usas ingredientes (memoria y CPU).

- Sigues paso a paso la receta (el programa).

- Ocupas espacio en la cocina (recursos del sistema).
  
- Cada vez que abres un programa (Chrome, Word, un juego), se crea al menos un proceso.

- Varios procesos pueden correr al mismo tiempo (como tener varias ventanas abiertas).

- Si un proceso se "traba", no afecta a los demás (¡como si se quema la pizza, pero el horno sigue sirviendo para otras cosas!).

> ✍️ Nota
>
> Puedes ver los procesos en:
> - En Windows, puedes ver los procesos en el Administrador de tareas.
> - En Linux/macOS, se usan comandos como ``ps``, ``top`` o ``htop``.



## Características principales

- **Ejecución independiente:** Cada proceso se ejecuta en su propio espacio de memoria, aislado de otros procesos.

- **Recursos asignados:** El sistema operativo asigna recursos como CPU, memoria y archivos abiertos.

- **Estados de un proceso:**

    - **Nuevo (New):** Recién creado.

    - **Listo (Ready):** Esperando a que la CPU lo ejecute.

    - **En ejecución (Running):** Actualmente usando la CPU.

    - **Bloqueado (Waiting):** Esperando un recurso (como entrada/salida).

    - **Terminado (Terminated):** Finalizó su ejecución.

    - **Identificador único (PID):** Cada proceso tiene un Process ID asignado por el sistema operativo.

## ¿Cómo se crea un proceso?

- **Inicio del sistema:** Algunos procesos se inician al arrancar el SO (como servicios).

- **Ejecución de un programa:** Cuando el usuario o el sistema lanza una aplicación.

- **Forking (en sistemas Unix):** Un proceso puede crear otro proceso hijo mediante fork().

## En programación

### Para escribir programas más eficientes

Si entiendes cómo funcionan los procesos, puedes:

- Optimizar el uso de la CPU y memoria (evitando que tu programa consuma recursos innecesarios).

- Evitar bloqueos (si tu app hace una tarea larga, puedes delegarla a otro proceso para que no se "cuelgue").

###  Para manejar múltiples tareas al mismo tiempo

Muchas aplicaciones necesitan hacer varias cosas en paralelo, como:

- Un navegador descargando archivos mientras renderiza una página.

- Un servidor web atendiendo varias peticiones de usuarios a la vez.

Si sabes cómo funcionan los procesos, puedes diseñar sistemas que ejecuten tareas concurrentemente sin fallos.


### Para evitar problemas de "cuellos de botella"

Si tu programa no gestiona bien los procesos:

- Puede congelarse al hacer operaciones pesadas (ej: procesar un video).

- Otros programas (o el sistema operativo) podrían volverse lentos por falta de recursos.

### Para trabajar con sistemas distribuidos y servidores

En desarrollo web, backend o big data, los procesos son clave porque:

- Un servidor usa múltiples procesos para atender a miles de usuarios.

- Bases de datos como PostgreSQL o Redis usan procesos para manejar consultas rápidas.

- Herramientas como Docker se basan en procesos aislados para crear contenedores.


### Para depurar errores raros

A veces un programa falla porque:

- Dos procesos intentan modificar el mismo archivo a la vez (condición de carrera).

- Un proceso hijo no se cierra correctamente (memory leak).

- Si entiendes cómo funcionan los procesos, puedes detectar y solucionar estos bugs.


### Ejemplo práctico para un programador

Imagina que estás haciendo una app que:

- Descarga datos de Internet (un proceso).

- Procesa esos datos (otro proceso).

- Muestra el resultado al usuario (proceso principal).

Si lo haces mal, la app se trabará mientras descarga.

Si lo haces bien (usando procesos o hilos), la app seguirá respondiendo mientras trabaja en segundo plano.

</div>