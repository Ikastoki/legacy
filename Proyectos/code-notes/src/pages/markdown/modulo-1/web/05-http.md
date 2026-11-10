---
layout: ../../../../layouts/modulo-1/Web.astro
title: "Protocolo HTTP"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Protocolo HTTP</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Protocolo HTTP](#protocolo-http)
- [Estructura del mensaje](#estructura-del-mensaje)
- [HTTP vs. HTTPS](#http-vs-https)
  - [HTTP (HyperText Transfer Protocol)](#http-hypertext-transfer-protocol)
  - [HTTPS (HyperText Transfer Protocol Secure)](#https-hypertext-transfer-protocol-secure)
- [Uso de HTTP en aplicaciones web](#uso-de-http-en-aplicaciones-web)
  - [Navegadores web](#navegadores-web)
  - [APIs web](#apis-web)
  - [Caché](#caché)
  - [Autenticación y sesiones](#autenticación-y-sesiones)
- [Evolución o versiones](#evolución-o-versiones)
- [Métodos HTTP](#métodos-http)
- [Importancia de los métodos HTTP](#importancia-de-los-métodos-http)
- [Métodos más comunes](#métodos-más-comunes)
  - [GET](#get)
  - [POST](#post)
  - [PUT](#put)
  - [DELETE](#delete)
  - [PATCH](#patch)
  - [HEAD](#head)
  - [OPTIONS](#options)
  - [CONNECT](#connect)
- [Códigos de estado](#códigos-de-estado)
- [Algunos códigos](#algunos-códigos)
  - [Respuestas informativas (100–199)](#respuestas-informativas-100199)
  - [Respuestas satisfactorias (200–299)](#respuestas-satisfactorias-200299)
  - [Redirecciones (300–399)](#redirecciones-300399)
  - [Errores de los clientes (400–499)](#errores-de-los-clientes-400499)
  - [Errores de los servidores (500–599)](#errores-de-los-servidores-500599)

</div>
</div>

## Protocolo HTTP

HTTP, o Protocolo de Transferencia de Hipertexto, es el protocolo subyacente que permite la comunicación en la World Wide Web. Es un protocolo basado en el modelo cliente-servidor, donde los navegadores web actúan como clientes y los servidores web almacenan y sirven el contenido web.

## Estructura del mensaje

Los mensajes HTTP consisten en una línea de inicio, encabezados y un cuerpo opcional.

- **Solicitud:** Línea de solicitud (método, URI, versión del protocolo), encabezados de solicitud, cuerpo opcional.
- **Respuesta:** Línea de estado (versión del protocolo, código de estado, mensaje de estado), encabezados de respuesta, cuerpo opcional.

## HTTP vs. HTTPS

### HTTP (HyperText Transfer Protocol)

No cifra los datos, lo que significa que la información intercambiada entre el cliente y el servidor puede ser interceptada por terceros.

### HTTPS (HyperText Transfer Protocol Secure)

Cifra los datos utilizando SSL/TLS, proporcionando una capa adicional de seguridad que protege la integridad y confidencialidad de los datos durante la transferencia.

## Uso de HTTP en aplicaciones web

### Navegadores web

Los navegadores envían solicitudes HTTP para recuperar páginas web y otros recursos (imágenes, scripts, etc.) desde los servidores.

### APIs web

Las APIs RESTful utilizan HTTP como protocolo de comunicación para operaciones CRUD (Create, Read, Update, Delete).

### Caché

HTTP permite el uso de mecanismos de caché para mejorar el rendimiento al almacenar copias de recursos solicitados frecuentemente.

### Autenticación y sesiones

HTTP puede gestionar autenticación mediante encabezados y mantener sesiones de usuario utilizando cookies.

## Evolución o versiones

- **HTTP/0.9:** La primera versión del protocolo, muy simple y sin encabezados ni métodos distintos de GET.
- **HTTP/1.0:** Introdujo encabezados de solicitud/respuesta, códigos de estado y métodos adicionales.
- **HTTP/1.1:** Mejora significativa sobre HTTP/1.0, con soporte para conexiones persistentes, pipelining, y nuevos métodos como OPTIONS, PUT y DELETE.
- **HTTP/2:** Introducido para mejorar el rendimiento. Utiliza multiplexación de solicitudes, compresión de encabezados y mejor manejo de conexiones.
- **HTTP/3:** Basado en QUIC (Quick UDP Internet Connections), un protocolo de transporte rápido y confiable basado en UDP, diseñado para mejorar la velocidad y la eficiencia de las conexiones.

## Métodos HTTP

Los métodos HTTP, también conocidos como verbos HTTP, son acciones que se pueden realizar sobre los recursos en un servidor web. Cada método tiene un propósito específico y ayuda a definir la intención de la solicitud del cliente.

## Importancia de los métodos HTTP

- **Claridad y Semántica:** Los métodos proporcionan una semántica clara sobre la acción deseada, lo que facilita la comprensión y el mantenimiento del código.
- **Estándares y Convenciones:** Facilitan la interoperabilidad y la conformidad con los estándares web.
- **Seguridad:** Ayudan a definir comportamientos seguros e inseguros, permitiendo una mejor gestión de permisos y accesos.
- **Idempotencia:** Garantiza que ciertas operaciones sean seguras de repetir sin causar efectos no deseados.

> ✍️ Nota
>
> La idempotencia significa que siempre se obtiene el mismo resultado cuando se repite todo, o parte, de la serie de peticiones.

## Métodos más comunes

### GET

Solicita un recurso específico del servidor.

- **Usos:** Recuperar datos sin modificar el estado del recurso en el servidor.
- **Idempotente:** Sí (múltiples solicitudes tienen el mismo efecto).
- **Seguro:** Sí (no altera el estado del servidor).
- **Ejemplo:** Solicitar una página web (GET /index.html).

### POST

Envía datos al servidor para crear un nuevo recurso.

- **Usos:** Enviar datos de formularios, subir archivos, crear nuevos registros.
  Idempotente: No (cada solicitud puede crear un nuevo recurso o cambiar el estado del servidor).
- **Seguro:** No.
- **Ejemplo:** Enviar datos de un formulario de registro de usuario (POST /users).

### PUT

Reemplaza un recurso en el servidor con los datos proporcionados.

- **Usos:** Actualizar un recurso existente o crear un recurso si no existe.
- **Idempotente:** Sí (múltiples solicitudes tienen el mismo efecto).
- **Seguro:** No.
- **Ejemplo:** Actualizar un perfil de usuario (PUT /users/123).

### DELETE

Elimina un recurso específico del servidor.

- **Usos:** Borrar un recurso específico.
- **Idempotente:** Sí (múltiples solicitudes tienen el mismo efecto).
- **Seguro:** No.
- **Ejemplo:** Eliminar un artículo (DELETE /articles/123).

### PATCH

Aplica modificaciones parciales a un recurso.

- **Usos:** Actualizar parcialmente un recurso.
- **Idempotente:** Sí (múltiples solicitudes tienen el mismo efecto).
- **Seguro:** No.
- **Ejemplo:** Actualizar parcialmente un perfil de usuario (PATCH /users/123).

### HEAD

Solicita los encabezados de un recurso, sin el cuerpo del recurso.

- **Usos:** Verificar la existencia o la última modificación de un recurso sin descargar el contenido.
- **Idempotente:** Sí (múltiples solicitudes tienen el mismo efecto).
- **Seguro:** Sí (no altera el estado del servidor).
- **Ejemplo:** Obtener encabezados de una página web (HEAD /index.html).

### OPTIONS

Describe las opciones de comunicación disponibles para un recurso.

- **Usos:** Consultar los métodos soportados por un servidor o recurso.
- **Idempotente:** Sí (múltiples solicitudes tienen el mismo efecto).
- **Seguro:** Sí (no altera el estado del servidor).
- **Ejemplo:** Obtener métodos permitidos para un recurso (OPTIONS /users/123).

### CONNECT

Establece un túnel hacia el servidor identificado por el recurso.

- **Usos:** Utilizado principalmente para túneles SSL (HTTPS) a través de proxies HTTP.
- **Idempotente:** No (específico para conexiones de túnel).
- **Seguro:** No.
- **Ejemplo:** Crear un túnel a un servidor (CONNECT example.com:443).

## Códigos de estado

Los códigos de estado HTTP son respuestas estandarizadas que un servidor web devuelve al cliente para indicar el resultado de una solicitud HTTP. Estos códigos se dividen en cinco categorías principales, cada una representada por un número de tres dígitos donde el primer dígito indica la categoría.

## Algunos códigos

### Respuestas informativas (100–199)

- **100 Continue:** El cliente debe continuar con su solicitud.
- **101 Switching Protocols:** El servidor acepta el cambio de protocolo solicitado por el cliente.

### Respuestas satisfactorias (200–299)

- **200 OK:** La solicitud ha tenido éxito.
- **201 Created:** La solicitud ha sido cumplida y ha resultado en la creación de un nuevo recurso.
- **204 No Content:** La solicitud ha sido procesada con éxito, pero no hay contenido que devolver.

### Redirecciones (300–399)

- **301 Moved Permanently:** El recurso solicitado ha sido movido de forma permanente a una nueva URI.
- **302 Found:** El recurso solicitado reside temporalmente en una URI diferente.
- **304 Not Modified:** El recurso no ha sido modificado desde la última solicitud.

### Errores de los clientes (400–499)

- **400 Bad Request:** El servidor no puede procesar la solicitud debido a un error del cliente.
- **401 Unauthorized:** La solicitud requiere autenticación.
- **403 Forbidden:** El servidor comprende la solicitud, pero se niega a autorizarla.
- **404 Not Found:** El servidor no puede encontrar el recurso solicitado.

- **405 Method Not Allowed:** El método especificado en la solicitud no está permitido para el recurso.

### Errores de los servidores (500–599)

- **500 Internal Server Error:** El servidor encontró una condición inesperada que le impidió cumplir con la solicitud.
- **502 Bad Gateway:** El servidor, actuando como puerta de enlace o proxy, recibió una respuesta inválida del servidor ascendente.
- **503 Service Unavailable:** El servidor no está disponible temporalmente debido a sobrecarga o mantenimiento.
- **504 Gateway Timeout:** El servidor, actuando como puerta de enlace o proxy, no recibió una respuesta a tiempo del servidor ascendente.

</div>
