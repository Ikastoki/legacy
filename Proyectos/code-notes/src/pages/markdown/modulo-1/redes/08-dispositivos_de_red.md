---
layout: ../../../../layouts/modulo-1/Redes.astro
title: "Dispositivos de red"
block: ""
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Dispositivos de red</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Dispositivos de red](#dispositivos-de-red)
- [Routers](#routers)
- [Switches](#switches)
- [Hubs](#hubs)
- [Firewalls](#firewalls)
- [Puntos de acceso](#puntos-de-acceso)
- [Comparación de dispositivos de red](#comparación-de-dispositivos-de-red)

</div>
</div>

## Dispositivos de red

Los dispositivos de red son hardware especializado que permite la comunicación y el intercambio de datos entre dispositivos en una red. Cada dispositivo tiene un papel específico en la gestión del tráfico, la seguridad y la conectividad, lo que los hace esenciales para el funcionamiento eficiente de cualquier red.

**Importancia:**

- Facilitan la comunicación entre dispositivos.

- Optimizan el rendimiento y la seguridad de la red.

- Permiten la escalabilidad y la gestión centralizada.

**Contribución de cada dispositivo:**

- **Routers:** Conectan redes y enrutan el tráfico entre ellas.

- **Switches:** Conectan dispositivos dentro de una red local y gestionan el tráfico de manera eficiente.

- **Hubs:** Conectan dispositivos en una red, pero sin gestionar el tráfico.

- **Firewalls:** Protegen la red contra amenazas externas e internas.

- **Puntos de acceso:** Proporcionan conectividad inalámbrica a dispositivos Wi-Fi.

## Routers

Un router es un dispositivo que conecta diferentes redes y dirige el tráfico entre ellas basándose en direcciones IP.

**Funcionamiento:**

- Recibe paquetes de datos de una red y los envía a otra red basándose en tablas de enrutamiento.

- Utiliza protocolos de enrutamiento (como OSPF o BGP) para determinar la mejor ruta.

- Puede realizar NAT (Network Address Translation) para permitir que múltiples dispositivos compartan una dirección IP pública.

**Configuración de routers:**

- **Acceso a la interfaz:** Conectarse al router mediante un navegador web o una consola.

- **Configuración de red:** Establecer direcciones IP, máscaras de subred y puertas de enlace.

- **Enrutamiento:** Configurar rutas estáticas o dinámicas usando protocolos como OSPF.

- **Seguridad:** Habilitar firewalls, filtrado de tráfico y VPNs.

**Ejemplo de configuración:**

- Configurar una red doméstica con un router para compartir Internet entre dispositivos.

- Configurar un router empresarial para conectar múltiples sucursales.

## Switches

Un switch es un dispositivo que conecta dispositivos dentro de una red local (LAN) y gestiona el tráfico basándose en direcciones MAC.

**Funcionamiento:**

- Aprende las direcciones MAC de los dispositivos conectados a sus puertos.

- Envía datos solo al puerto correspondiente al dispositivo de destino, reduciendo la congestión.

- Soporta VLANs para segmentar la red y mejorar la seguridad.

**Diferencias entre switches y hubs:**

- **Switches:** Envían datos solo al dispositivo de destino, son más eficientes y seguros.

- **Hubs:** Envían datos a todos los dispositivos conectados, lo que genera congestión y colisiones.

**Ejemplo de uso:**

- Conectar computadoras, impresoras y servidores en una oficina.

- Crear VLANs para separar el tráfico de diferentes departamentos.

## Hubs

Un hub es un dispositivo básico que conecta múltiples dispositivos en una red, pero sin gestionar el tráfico.

**Funcionamiento:**

- Recibe datos en un puerto y los retransmite a todos los demás puertos.

- No distingue entre dispositivos, lo que genera colisiones y congestión.

**Limitaciones:**

- **Ineficiencia:** Envía datos a todos los dispositivos, incluso si no son el destino.

- **Colisiones:** Los dispositivos compiten por el ancho de banda, reduciendo el rendimiento.

- **Obsoleto:** Ha sido reemplazado en gran medida por switches.

**Ejemplo de uso:**

- Redes pequeñas y simples donde el rendimiento no es crítico.

## Firewalls

Un firewall es un dispositivo o software que protege una red al filtrar el tráfico entrante y saliente basándose en reglas de seguridad.

**Funcionamiento:**

- Inspecciona paquetes de datos y bloquea aquellos que no cumplen con las reglas definidas.

- Puede funcionar a nivel de red (filtrado de paquetes) o de aplicación (inspección profunda).

**Tipos de firewalls:**

- **Firewall de red:** Filtra el tráfico basándose en direcciones IP y puertos.

- **Firewall de aplicación:** Inspecciona el tráfico a nivel de aplicación (HTTP, FTP, etc.).

- **Firewall de próxima generación (NGFW):** Combina filtrado tradicional con funciones avanzadas como inspección profunda y prevención de intrusiones.

**Configuración de firewalls:**

- **Definir reglas:** Permitir o bloquear tráfico basándose en direcciones IP, puertos y protocolos.

- **Habilitar VPNs:** Configurar redes privadas virtuales para acceso remoto seguro.

- **Monitoreo:** Configurar alertas y registros para detectar actividades sospechosas.

**Ejemplo de uso:**

- Proteger una red empresarial contra ataques externos.

- Filtrar el tráfico en una red doméstica para bloquear sitios maliciosos.

## Puntos de acceso

Un punto de acceso (Access Point, AP) es un dispositivo que permite a los dispositivos inalámbricos conectarse a una red cableada mediante Wi-Fi.

**Funcionamiento:**

- Recibe datos de una red cableada y los transmite de forma inalámbrica a dispositivos como laptops, smartphones y tablets.

- Soporta estándares Wi-Fi (como 802.11ac o 802.11ax) para proporcionar alta velocidad y cobertura.

**Configuración de puntos de acceso:**

- **Acceso a la interfaz:** Conectarse al AP mediante un navegador web o una aplicación.

- **Configuración de red:** Establecer el nombre de la red (SSID), la contraseña y el canal Wi-Fi.

- **Seguridad:** Habilitar cifrado (WPA2/WPA3) y filtrado de direcciones MAC.

- **Gestión:** Configurar múltiples SSIDs para diferentes usuarios o dispositivos.

**Ejemplo de uso:**

- Proporcionar Wi-Fi en una oficina, hotel o campus universitario.

- Extender la cobertura de una red existente mediante APs adicionales.

## Comparación de dispositivos de red

<div class="only-mobile-warning">📵 Esta tabla solo está disponible en versión escritorio.</div>

| **Dispositivo** | **Función Principal**                  | **Ventajas**                            | **Limitaciones**                |
| --------------- | -------------------------------------- | --------------------------------------- | ------------------------------- |
| Router          | Conectar y enrutar tráfico entre redes | Escalable, soporta múltiples protocolos | Complejidad en configuración    |
| Switch          | Conmutar tráfico dentro de una LAN     | Eficiente, soporta VLANs                | Costo mayor que los hubs        |
| Hub             | Conectar dispositivos en una LAN       | Simple y económico                      | Ineficiente, genera congestión  |
| Firewall        | Proteger la red contra amenazas        | Seguridad avanzada, filtrado de tráfico | Puede afectar el rendimiento    |
| Punto de Acceso | Proporcionar conectividad Wi-Fi        | Facilita acceso inalámbrico, escalable  | Depende de la cobertura y señal |

</div>
