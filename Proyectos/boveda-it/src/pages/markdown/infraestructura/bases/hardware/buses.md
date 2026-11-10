---
title: "Conexiones y buses"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Conexiones y buses](#conexiones-y-buses)
  - [Arquitectura y clasificación de buses](#arquitectura-y-clasificación-de-buses)
  - [Buses internos y comunicación de alto rendimiento](#buses-internos-y-comunicación-de-alto-rendimiento)
  - [Interfaces externas y estandarización de periféricos](#interfaces-externas-y-estandarización-de-periféricos)

</div>

# Conexiones y buses

Un sistema computacional no opera como un conjunto de componentes aislados, sino como una red de subsistemas interconectados que intercambian datos, direcciones y señales de coordinación mediante canales de comunicación especializados denominados buses. Estos canales definen la capacidad del sistema para mover información entre la CPU, la memoria y los periféricos, estableciendo límites físicos al rendimiento independientemente de la potencia de procesamiento individual. La arquitectura de buses determina si un procesador rápido puede acceder a datos sin esperar, si una GPU recibe texturas a la velocidad que requiere o si un dispositivo de almacenamiento satura su interfaz antes de alcanzar su velocidad nominal. Comprender su funcionamiento implica analizar no solo el ancho de banda teórico, sino también la latencia, el protocolo de arbitraje, la codificación de señal y los mecanismos de sincronización que permiten la coexistencia de dispositivos con velocidades y propósitos distintos en un mismo dominio de comunicación.

## Arquitectura y clasificación de buses

Un bus se define como un conjunto de conductores físicos —trazas de cobre, fibras ópticas o señales inalámbricas— que transportan información entre componentes bajo un protocolo común de temporización y formato. La clasificación funcional distingue tres tipos de buses que operan de forma coordinada: el bus de datos transporta la información propiamente dicha, el bus de direcciones especifica la ubicación de memoria o puerto de E/S involucrada en la operación, y el bus de control gestiona señales de sincronización como lectura, escritura, interrupción o reconocimiento. Esta separación permite paralelismo parcial: mientras se transfieren datos por un canal, otro puede estar enviando la siguiente dirección o esperando una señal de ACK.

El ancho del bus, medido en bits, determina cuántos datos se mueven simultáneamente en cada ciclo. Un bus de datos de 64 bits puede transferir ocho bytes por operación, mientras que uno de 32 bits requiere dos ciclos para la misma cantidad. La velocidad de operación, expresada en Hz o en transferencias por segundo (MT/s), combinada con el ancho, define el ancho de banda teórico: ancho_de_banda = (ancho_bus × frecuencia) / 8 para bytes por segundo. Sin embargo, el rendimiento efectivo suele ser inferior debido a overhead de protocolo, latencias de arbitraje, espera por disponibilidad del dispositivo o contención con otros maestros del bus.

> Los cuellos de botella surgen cuando un componente limita el throughput de todo el sistema. Una CPU con bus de memoria de 128 bits no puede aprovechar completamente una RAM DDR5 de canal dual si el controlador interno está configurado para single channel. Del mismo modo, conectar un SSD NVMe Gen4 a un slot PCIe 3.0 x4 reduce su velocidad máxima a la mitad, independientemente de su capacidad nominal.

## Buses internos y comunicación de alto rendimiento

Los buses internos conectan componentes montados directamente en la placa base o en el mismo encapsulado que el procesador, priorizando baja latencia y alto ancho de banda. El bus de memoria enlaza el controlador de memoria integrado en la CPU con los módulos RAM, operando con protocolos DDR que transfieren datos en ambos flancos del reloj. Su diseño requiere trazas de longitud igualada para evitar skew, terminaciones de impedancia controlada y señales diferenciales para el reloj, garantizando integridad de señal a frecuencias superiores a 6000 MT/s en DDR5.

El bus del sistema, históricamente conocido como Front-Side Bus en arquitecturas antiguas, ha sido reemplazado por interconexiones punto a punto como Intel DMI o AMD Infinity Fabric. Estas tecnologías conectan el procesador con el chipset, gestionando tráfico de periféricos de menor velocidad sin saturar el bus de memoria. Infinity Fabric, por ejemplo, utiliza enlaces de 128 bits con codificación 128b/130b y frecuencia variable, permitiendo escalado en sistemas multinúcleo y multiprocesador.

PCI Express representa el estándar dominante para expansión interna, utilizando lanes seriales full-duplex que operan independientemente. Cada lane PCIe 4.0 ofrece ~2 GB/s bidireccionales; una configuración x16 alcanza ~32 GB/s. El protocolo emplea paquetes con encabezado de enrutamiento, control de flujo basado en créditos y detección de errores CRC, permitiendo hot-plug y asignación dinámica de recursos. La topología en árbol conecta dispositivos al root complex integrado en la CPU, con switches opcionales para multiplicar puertos.

```bash
# Consulta de dispositivos PCIe y ancho de enlace en Linux
lspci -vv | grep -E "LnkSta:|Device:" | head -20
```

> La negociación de enlace PCIe ocurre durante el arranque: dispositivo y controlador acuerdan la velocidad máxima común y el número de lanes disponibles. Un dispositivo PCIe 4.0 x4 instalado en un slot físico x16 pero cableado eléctricamente como x8 operará a x4 si esa es su capacidad máxima, sin afectar otros slots salvo que compartan recursos del chipset.

## Interfaces externas y estandarización de periféricos

Las interfaces externas conectan dispositivos periféricos mediante estándares que equilibran compatibilidad, costo y rendimiento. USB (Universal Serial Bus) emplea una topología en árbol con un host controller que gestiona hasta 127 dispositivos mediante hubs. La evolución de estándares refleja la demanda creciente de ancho de banda: USB 2.0 (480 Mbps, codificación NRZI), USB 3.2 Gen 1 (5 Gbps, codificación 8b/10b), USB 3.2 Gen 2x2 (20 Gbps, dos lanes) y USB4 (40 Gbps, basado en protocolo Thunderbolt 3, con tunneling de PCIe y DisplayPort).

Los conectores USB varían en forma y capacidad: Tipo-A y Tipo-B mantienen polaridad mecánica para evitar inserciones incorrectas; Tipo-C introduce simetría física, soporte para Power Delivery hasta 240 W y configuración negociable de roles (host/device). La transferencia de datos sigue un modelo de solicitudes controladas por el host, con tipos de transferencia isócrona para audio/video, bulk para datos masivos e interrupt para dispositivos de baja latencia como teclados.

Thunderbolt, desarrollado por Intel en colaboración con Apple, combina PCIe y DisplayPort en un único enlace serial de alta velocidad. Thunderbolt 3 y 4 utilizan conector USB-C, ofrecen 40 Gbps agregados, permiten conexión en daisy-chain de hasta seis dispositivos y soportan alimentación de hasta 100 W. Su protocolo incluye cifrado opcional DMA para proteger contra ataques de acceso directo a memoria, y requiere controlador dedicado con firmware actualizable.

SATA (Serial ATA) reemplazó a PATA mediante señalización diferencial serie que reduce interferencia y permite cables más delgados y largos. SATA III opera a 6 Gbps brutos (~600 MB/s efectivos tras codificación 8b/10b), suficiente para HDD mecánicos pero limitante para SSD NVMe. El protocolo incluye comandos nativos de cola (NCQ) que permiten al dispositivo reordenar solicitudes para minimizar movimientos mecánicos en discos rotativos.

> La compatibilidad hacia atrás en USB y Thunderbolt no garantiza rendimiento máximo. Un dispositivo USB 3.2 conectado a un puerto USB 2.0 funcionará, pero a velocidades de USB 2.0. Del mismo modo, un cable USB-C sin certificación completa puede no soportar las señales de alta velocidad de USB4 o Thunderbolt, limitando la conexión al modo USB 2.0 por seguridad.

```bash
# Verificación de velocidad de enlace USB en Linux
lsusb -t
dmesg | grep -i usb | grep -i "speed\|super"
```

La selección de interfaz depende del caso de uso: USB para periféricos de baja velocidad y hot-plug frecuente, Thunderbolt para estaciones de trabajo con múltiples dispositivos de alto rendimiento, SATA para almacenamiento secundario de capacidad. La convergencia hacia USB-C como conector físico unificado simplifica la experiencia de usuario, pero requiere verificación de capacidades reales mediante especificaciones del fabricante, ya que la forma del conector no indica por sí sola el protocolo o ancho de banda soportado.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/hardware/almacenamiento" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/hardware/refrigeracion" class="next">Siguiente</a>
</div>
