---
title: "Tipos de memoria"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Tipos de memoria](#tipos-de-memoria)
  - [Concepto y parámetros fundamentales](#concepto-y-parámetros-fundamentales)
  - [Memoria de acceso aleatorio (RAM)](#memoria-de-acceso-aleatorio-ram)
  - [Arquitectura y canales de datos](#arquitectura-y-canales-de-datos)
  - [Sincronización y parámetros de tiempo](#sincronización-y-parámetros-de-tiempo)
  - [Memoria de solo lectura (ROM)](#memoria-de-solo-lectura-rom)
  - [Gestión de memoria virtual y paginación](#gestión-de-memoria-virtual-y-paginación)
  - [Memoria especializada y corrección de errores](#memoria-especializada-y-corrección-de-errores)

</div>

# Tipos de memoria

La memoria constituye el espacio de trabajo inmediato donde el procesador recupera instrucciones y manipula datos durante la ejecución de programas. A diferencia del almacenamiento persistente, que conserva información mediante estados magnéticos o de carga en celdas no volátiles, la memoria volátil prioriza la velocidad de acceso y la densidad de transferencia sobre la retención a largo plazo. Esta distinción define la jerarquía de memoria: un compromiso constante entre latencia, capacidad y costo. Los niveles cercanos al núcleo del procesador operan a frecuencias sincronizadas con el reloj del sistema, minimizando los ciclos de espera que degradan el rendimiento. La arquitectura moderna organiza estos niveles en una estructura piramidal donde la proximidad física y eléctrica determina la velocidad de comunicación. Cada byte almacenado en RAM o caché representa un estado eléctrico mantenido por condensadores y transistores que requieren refresco periódico, estableciendo los límites físicos que la ingeniería de silicio debe superar para satisfacer demandas computacionales crecientes.

## Concepto y parámetros fundamentales

La memoria se define como el subsistema capaz de almacenar y recuperar datos de forma direccionable, permitiendo al procesador acceder a cualquier posición en tiempos predecibles. La distinción entre memoria y almacenamiento radica en el mecanismo de retención y el tiempo de acceso. La memoria RAM utiliza celdas volátiles que pierden su contenido al interrumpirse la alimentación, mientras que el almacenamiento SSD o HDD emplea NAND Flash o platos magnéticos que conservan datos indefinidamente. Esta diferencia estructural se traduce en órdenes de magnitud en latencia: nanosegundos frente a milisegundos o microsegundos.

La volatilidad impone requisitos de gestión energética y refresco continuo. En DRAM, cada celda consiste en un transistor y un condensador que debe recargarse periódicamente para evitar fugas de carga. La latencia mide el retraso entre la solicitud de un dato y su disponibilidad, expresado comúnmente en ciclos de reloj o nanosegundos. La frecuencia determina cuántas operaciones de transferencia pueden realizarse por segundo, mientras que el ancho de banda cuantifica el volumen total de datos movidos en un intervalo, calculado como frecuencia multiplicada por el ancho del bus y la eficiencia de transferencia.

> La jerarquía de memoria resuelve el conflicto entre velocidad y capacidad. Los registros del procesador y las cachés L1 y L2 operan a la frecuencia del núcleo con latencias de uno o dos ciclos; la RAM principal introduce decenas de ciclos de espera; el almacenamiento masivo requiere miles de ciclos. La eficiencia del sistema depende de mantener los datos activos en los niveles superiores el mayor tiempo posible.

## Memoria de acceso aleatorio (RAM)

La RAM moderna se implementa mediante tecnología DRAM, donde las celdas se organizan en matrices bidimensionales de filas y columnas. El acceso requiere activar una fila completa mediante la señal de word line, amplificando la carga de los condensadores en las bit lines, decodificando la columna y entregando el dato al bus. Este proceso de activación y precarga consume ciclos que se optimizan mediante controladores de memoria integrados y protocolos de señalización diferencial.

Las generaciones DDR evolucionan duplicando la tasa de transferencia en cada flanco de reloj. DDR4 opera a 1.2 V con topologías de bus point-to-point, mientras que DDR5 reduce el voltaje a 1.1 V, introduce regulación de voltaje integrada en el módulo y divide el canal de 64 bits en dos subcanales de 32 bits para mejorar la eficiencia. Las diferencias en pines, voltaje y velocidad son mecánicas y eléctricamente incompatibles entre generaciones, evitando inserciones erróneas. DDR5 también soporta frecuencias base superiores a 4800 MT/s frente a los 2133 MT/s iniciales de DDR4, aumentando el ancho de banda máximo por módulo.

> La compatibilidad eléctrica no garantiza estabilidad operativa. La integración de controladores de memoria en la CPU limita las frecuencias máximas soportadas según la calidad del silicio y la topología de las trazas en la placa base, independientemente de las especificaciones nominales de los módulos.

## Arquitectura y canales de datos

La arquitectura de memoria cache se organiza en niveles progresivos. L1 reside dentro de cada núcleo, dividida en caché de instrucciones y datos, con latencias de 3 a 4 ciclos y capacidad de 32 a 64 KB por núcleo. L2, de 256 KB a 2 MB, puede ser privada o compartida entre núcleos adyacentes, con latencias de 10 a 15 ciclos. L3, compartida entre todos los núcleos, actúa como búfer de víctima para L2 y puente hacia la RAM, con capacidades de 16 a 64 MB y latencias de 30 a 50 ciclos. Cada nivel almacena líneas de caché de 64 bytes con metadatos de coherencia y bits de estado.

La arquitectura de canales multiplica el ancho de banda disponible entre el controlador de memoria y los módulos. Single channel utiliza un único bus de 64 bits. Dual channel empareja dos módulos idénticos, operando como un bus de 128 bits. Quad channel, presente en plataformas de alto rendimiento y servidores, alcanza 256 bits. El interleaving distribuye direcciones de memoria consecutivas entre los canales activos, permitiendo al controlador solicitar datos de múltiples módulos simultáneamente y ocultar la latencia de refresco de filas.

> La configuración de canales requiere módulos instalados en ranuras específicas definidas por la topología de la placa base. Instalaciones asimétricas o de capacidades desiguales fuerzan al controlador a operar en modo flex o single channel en ciertas regiones de dirección, degradando el throughput.

## Sincronización y parámetros de tiempo

Los timings definen los retardos en ciclos de reloj entre las etapas del acceso a DRAM. El valor CL especifica el número de ciclos entre el envío de la dirección de columna y la disponibilidad de los datos en el bus. Otros parámetros como tRCD, tRP y tRAS regulan la activación de filas, la precarga y el tiempo mínimo que una fila debe permanecer abierta. Estos valores, combinados con la frecuencia, determinan la latencia absoluta en nanosegundos.

Los perfiles XMP y EXPO almacenan en la SPD del módulo configuraciones de frecuencia, voltaje y timings validadas por el fabricante. Al activarse desde el firmware UEFI, estos perfiles anulan los valores JEDEC estándar, permitiendo operar a frecuencias superiores sin modificación manual. La validación de estabilidad requiere pruebas de estrés que verifiquen la integridad de datos bajo carga térmica y eléctrica sostenida.

```bash
# Consulta de perfiles SPD y timings en Linux
sudo dmidecode -t memory | grep -E "Speed|Configured|XMP|EXPO|Voltage"
```

## Memoria de solo lectura (ROM)

La ROM implementa almacenamiento no volátil mediante celdas que conservan su estado sin alimentación. PROM permite una única grabación mediante fusión de enlaces internos. EPROM utiliza celdas de puerta flotante que retienen carga, borrable mediante exposición a luz ultravioleta. EEPROM permite borrado y reprogramación eléctrica por byte, sentando las bases de la memoria Flash moderna.

La memoria Flash, utilizada en firmware BIOS y UEFI, organiza celdas NAND en páginas y bloques, permitiendo borrado a nivel de bloque y escritura a nivel de página. Su densidad y resistencia mecánica la hacen ideal para almacenar microcódigos, tablas de configuración y cargadores de arranque. La interfaz SPI conecta el chip Flash al chipset o CPU, permitiendo actualizaciones controladas mediante rutinas de escritura protegidas por hardware.

> La integridad del firmware depende de protecciones contra escritura no autorizada. Mecanismos como el bit de protección en la SPI Flash o la verificación de firmas digitales durante el arranque previenen la corrupción por fallos de alimentación o ataques dirigidos.

## Gestión de memoria virtual y paginación

La memoria virtual abstrae la capacidad física de RAM utilizando espacio en almacenamiento persistente como extensión. El sistema operativo divide la memoria en páginas de tamaño fijo y mantiene una tabla de traducción que mapea direcciones virtuales a físicas o a ubicación en disco. Cuando un proceso accede a una página no residente en RAM, se genera una falta de página, deteniendo la ejecución mientras el controlador de almacenamiento carga la página desde el archivo de paginación o swap.

El algoritmo de reemplazo determina qué páginas residentes deben expulsarse a disco para liberar espacio. La paginación bajo demanda carga solo las páginas necesarias en el inicio del proceso, optimizando el uso de RAM. La fragmentación interna se gestiona mediante asignación de páginas completas, mientras que la tabla de páginas por proceso garantiza aislamiento y protección entre aplicaciones.

> El intercambio excesivo ocurre cuando el sistema dedica más tiempo a transferir páginas entre RAM y disco que a ejecutar instrucciones. Este estado degrada el rendimiento drásticamente y requiere ampliación de memoria física o reducción de la carga de trabajo activa.

## Memoria especializada y corrección de errores

La memoria ECC incorpora bits de paridad adicionales para detectar y corregir errores de un bit y detectar errores de múltiples bits. Utiliza algoritmos como SEC-DED, almacenando metadatos de corrección en bits dedicados dentro de cada palabra de datos. Esta capacidad es crítica en servidores, estaciones de trabajo científicas y sistemas financieros, donde un bit corrupto puede alterar cálculos, corromper bases de datos o comprometer la estabilidad del kernel.

La VRAM especializada, como GDDR y HBM, optimiza el ancho de banda para procesamiento gráfico y paralelo. GDDR6 y GDDR7 utilizan buses anchos y frecuencias elevadas con señalización PAM4, alcanzando velocidades efectivas superiores a 20 Gbps por pin. HBM apila múltiples dies de DRAM verticalmente, conectándolos mediante un interposer de silicio con miles de vías TSV. Esta arquitectura reduce la distancia de las trazas, permitiendo buses de 1024 bits o más con consumo energético significativamente menor. Los buffers de registro en módulos RDIMM o LRDIMM retemporizan las señales de control, reduciendo la carga eléctrica en el controlador de memoria y habilitando configuraciones de mayor capacidad en servidores.

> La selección de memoria especializada depende de la topología de interconexión y los requisitos de tolerancia a fallos. Integrar ECC o módulos registrados en plataformas no compatibles provoca fallos de arranque o inestabilidad crónica, ya que el controlador de memoria no gestiona la lógica de corrección o retemporización.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/hardware/psu" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/hardware/almacenamiento" class="next">Siguiente</a>
</div>
