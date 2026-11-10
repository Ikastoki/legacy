---
layout: ../../../../layouts/modulo-1/Redes.astro
title: "Direccionamiento IP"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Direccionamiento IP</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Introducción al direccionamiento IP](#introducción-al-direccionamiento-ip)
- [IPv4](#ipv4)
- [IPv6](#ipv6)
- [Subneteo](#subneteo)
- [DNS](#dns)

</div>
</div>

## Introducción al direccionamiento IP

Una dirección IP (Internet Protocol) es un identificador único asignado a cada dispositivo en una red que utiliza el protocolo IP para comunicarse. Las direcciones IP permiten que los dispositivos se localicen y se comuniquen entre sí en una red, ya sea local (LAN) o global (Internet).

**Importancia:**

- Facilita el enrutamiento de datos entre dispositivos.

- Permite la identificación y autenticación de dispositivos.

- Es esencial para la conectividad en redes modernas.

**Diferencias entre IPv4 e IPv6:**

- **IPv4:** Usa direcciones de 32 bits, lo que permite aproximadamente 4.300 millones de direcciones únicas.

- **IPv6:** Usa direcciones de 128 bits, lo que permite un número prácticamente ilimitado de direcciones únicas.

- **Formato:** IPv4 usa notación decimal (ej. 192.168.1.1), mientras que IPv6 usa notación hexadecimal (ej. 2001:0db8:85a3::8a2e:0370:7334).

## IPv4

IPv4 (Internet Protocol version 4) es la cuarta versión del protocolo IP y la más utilizada en redes actuales, aunque está siendo reemplazada gradualmente por IPv6 debido a la escasez de direcciones.

**Estructura:**

- Una dirección IPv4 consta de 32 bits, divididos en 4 octetos (bytes) separados por puntos.

- Cada octeto puede tener un valor entre 0 y 255.

- **Ejemplo:** 192.168.1.1.

**Características:**

- **Direcciones privadas:** Rangos reservados para redes locales (ej. 192.168.x.x, 10.x.x.x, 172.16.x.x).

- **Direcciones públicas:** Asignadas por proveedores de Internet (ISP) para acceso global.

- **Máscara de subred:** Define la porción de red y host en una dirección IP (ej. 255.255.255.0).

**Ejemplos:**

- **Dirección IPv4:** 192.168.1.1.

- **Dirección de red:** 192.168.1.0 (con máscara 255.255.255.0).

- **Dirección de broadcast:** 192.168.1.255.

## IPv6

IPv6 (Internet Protocol version 6) es la sexta versión del protocolo IP, diseñada para resolver la escasez de direcciones IPv4 y mejorar la eficiencia en el enrutamiento.

**Estructura:**

- Una dirección IPv6 consta de 128 bits, representados en 8 grupos de 4 dígitos hexadecimales separados por dos puntos.

- **Ejemplo:** 2001:0db8:85a3:0000:0000:8a2e:0370:7334.

- Se pueden omitir ceros iniciales y grupos consecutivos de ceros (ej. 2001:db8:85a3::8a2e:370:7334).

**Ventajas sobre IPv4:**

- **Espacio de direcciones:** 340 sextillones de direcciones únicas.

- **Mejor seguridad:** Incluye soporte integrado para IPsec.

- **Eficiencia en enrutamiento:** Cabeceras más simples y jerarquía mejorada.

- **Autoconfiguración:** Los dispositivos pueden generar su propia dirección IP.

**Ejemplos:**

- **Dirección IPv6:** 2001:0db8:85a3::8a2e:0370:7334.

- **Dirección de loopback:** ::1 (equivalente a 127.0.0.1 en IPv4).

## Subneteo

El subneteo es el proceso de dividir una red en subredes más pequeñas para mejorar la eficiencia, la seguridad y la gestión de direcciones IP.

**Importancia:**

- Optimiza el uso de direcciones IP.

- Reduce la congestión de la red al limitar el tráfico dentro de subredes.

- Facilita la administración y el aislamiento de segmentos de red.

**Subneteo en IPv4:**

- Se utiliza una máscara de subred para dividir una dirección IP en una porción de red y una porción de host.

- **Ejemplo:** Dividir la red 192.168.1.0/24 en 4 subredes:

- **Máscara de subred:** 255.255.255.192 (/26).

- **Subredes:** 192.168.1.0/26, 192.168.1.64/26, 192.168.1.128/26, 192.168.1.192/26.

**Subneteo en IPv6:**

- IPv6 utiliza un enfoque jerárquico para el subneteo, con prefijos de red más largos.

- **Ejemplo:** Dividir la red 2001:db8:85a3::/48 en subredes /64:

- **Subredes:** 2001:db8:85a3:0001::/64, 2001:db8:85a3:0002::/64, etc.

## DNS

El Sistema de Nombres de Dominio (DNS) es un servicio que traduce nombres de dominio legibles por humanos (como google.com) en direcciones IP numéricas (como 172.217.10.46).

**Función:**

- Facilita el acceso a recursos en Internet sin necesidad de recordar direcciones IP.

- Actúa como una "agenda telefónica" de Internet.

**Cómo funciona:**

1. Un usuario escribe un nombre de dominio (ej. google.com) en su navegador.

1. El navegador envía una consulta DNS a un servidor DNS recursivo.

1. El servidor DNS busca la dirección IP asociada al dominio:

1. Consulta servidores DNS raíz, luego servidores TLD (Top-Level Domain) y finalmente servidores autoritativos.

1. Devuelve la dirección IP al navegador, que se conecta al servidor correspondiente.

**Ejemplo:**

- **Nombre de dominio:** google.com.

- **Dirección IP:** 172.217.10.46.

**Componentes clave:**

- **Servidores DNS raíz:** Contienen información sobre los servidores TLD.

- **Servidores TLD:** Gestionan dominios de primer nivel (ej. .com, .org).

- **Servidores autoritativos:** Almacenan la información de dominios específicos.

</div>
