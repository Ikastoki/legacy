---
title: "Refrigeración"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Refrigeración](#refrigeración)
  - [Principios termodinámicos y parámetros de diseño](#principios-termodinámicos-y-parámetros-de-diseño)
  - [Refrigeración por aire y arquitectura de disipación](#refrigeración-por-aire-y-arquitectura-de-disipación)
  - [Interfaces térmicas y materiales de transferencia](#interfaces-térmicas-y-materiales-de-transferencia)
  - [Sistemas de refrigeración líquida y circuitos cerrados](#sistemas-de-refrigeración-líquida-y-circuitos-cerrados)
  - [Refrigeración de componentes auxiliares](#refrigeración-de-componentes-auxiliares)
  - [Dinámica de flujo de aire y presión en el chasis](#dinámica-de-flujo-de-aire-y-presión-en-el-chasis)
  - [Monitorización térmica y control adaptativo](#monitorización-térmica-y-control-adaptativo)

</div>

# Refrigeración

La gestión térmica constituye un requisito funcional para la operación estable de cualquier sistema computacional, ya que los semiconductores modernos disipan energía en forma de calor como subproducto inevitable de la conmutación de transistores. Cada operación lógica implica cargas y descargas de capacitancias parásitas que generan pérdidas por disipación resistiva, elevando la temperatura del silicio según la potencia consumida y la eficiencia del proceso de fabricación. Cuando la temperatura de unión supera umbrales críticos, los portadores de carga aumentan su movilidad térmica, incrementando la corriente de fuga y degradando la integridad de las señales internas; para prevenir daños permanentes, los circuitos de protección activan mecanismos de throttling que reducen frecuencia y voltaje, sacrificando rendimiento para preservar la integridad física del componente. Comprender los principios de transferencia de calor —conducción, convección y radiación— permite evaluar soluciones de refrigeración más allá de especificaciones comerciales, distinguiendo entre capacidad de disipación real, resistencia térmica acumulada y equilibrio entre flujo de aire y ruido acústico.

## Principios termodinámicos y parámetros de diseño

La transferencia de calor en sistemas electrónicos sigue tres mecanismos fundamentales. La conducción transporta energía térmica a través de materiales sólidos mediante vibración de la red cristalina y movimiento de electrones libres; su eficiencia depende de la conductividad térmica del material, medida en W/m·K. El cobre (~400 W/m·K) y el aluminio (~237 W/m·K) son comunes en disipadores por su equilibrio entre conductividad, peso y costo. La convección transfiere calor desde una superficie sólida a un fluido en movimiento —aire o líquido— mediante renovación de la capa límite térmica; su tasa depende del coeficiente de convección, área superficial y diferencia de temperatura. La radiación emite energía electromagnética infrarroja desde cualquier cuerpo con temperatura superior al cero absoluto, aunque su contribución en refrigeración de PC es marginal frente a convección forzada.

El TDP (Thermal Design Power) especifica la potencia térmica máxima que un sistema de refrigeración debe disipar para mantener el componente dentro de sus límites operativos seguros bajo carga sostenida. Este valor no representa el consumo eléctrico pico, sino una referencia de diseño para dimensionar disipadores, ventiladores o radiadores. Exceder el TDP nominal activa thermal throttling: el controlador de potencia reduce frecuencia y voltaje para limitar generación térmica, degradando rendimiento hasta que la temperatura desciende por debajo del umbral de recuperación.

> El throttling no es un fallo, sino un mecanismo de protección. Sin embargo, su activación frecuente indica insuficiencia en la solución térmica o condiciones ambientales adversas, requiriendo revisión del flujo de aire, limpieza de filtros o mejora de la interfaz térmica.

## Refrigeración por aire y arquitectura de disipación

La refrigeración por aire emplea disipadores que aumentan el área superficial expuesta al flujo de aire, facilitando la transferencia de calor por convección. Los diseños modernos combinan una base de cobre o aluminio en contacto con el componente, heatpipes que transportan calor mediante evaporación-condensación de fluido interno, y aletas que maximizan el área de intercambio. Los heatpipes operan como conductos térmicos pasivos: el fluido en el extremo caliente se vaporiza, viaja por presión de vapor al extremo frío, condensa liberando calor y retorna por capilaridad, logrando conductividades efectivas superiores a 10.000 W/m·K.

Los ventiladores generan el flujo de aire forzado necesario para renovar la capa límite térmica sobre las aletas. Sus características clave incluyen tamaño (80 mm a 140 mm comúnmente), caudal medido en CFM (pies cúbicos por minuto), presión estática para vencer resistencia de aletas densas, y nivel de ruido en dBA. Ventiladores con rodamientos fluidos o magnéticos ofrecen mayor vida útil y menor ruido que los de manguito tradicionales. La curva de rendimiento de un ventilador muestra la relación inversa entre caudal y presión estática: a mayor restricción, menor flujo de aire.

> La orientación del flujo respecto a las aletas determina la eficiencia de transferencia. Un flujo paralelo a las aletas genera menor resistencia pero menor renovación térmica; un flujo perpendicular maximiza intercambio pero requiere mayor presión estática del ventilador.

## Interfaces térmicas y materiales de transferencia

La interfaz térmica (TIM) rellena microscópicas irregularidades entre la superficie del componente y la base del disipador, eliminando bolsas de aire que actúan como aislantes térmicos. Las pastas térmicas convencionales combinan un aglutinante de silicona o resina con cargas de óxido de zinc, aluminio o cerámica, logrando conductividades de 3 a 12 W/m·K. Compuestos avanzados incorporan partículas de plata, diamante sintético o grafeno, alcanzando valores superiores a 15 W/m·K, aunque con incremento de costo y, en algunos casos, conductividad eléctrica que exige aplicación cuidadosa.

Las almohadillas térmicas de fase cambiante o materiales de grafito ofrecen aplicación más limpia y consistencia en espesor, útiles para componentes con tolerancias mecánicas ajustadas como VRM o memoria VRAM. Su conductividad típicamente oscila entre 6 y 15 W/m·K, con ventaja en reutilización frente a pastas que se degradan con desmontajes repetidos.

La técnica de aplicación influye en la resistencia térmica final. Métodos como punto central, cruz, línea o esparcido manual buscan cubrir el área del die sin exceso que genere derrames o capas gruesas que incrementen resistencia. La presión de montaje del disipador comprime la TIM, reduciendo espesor y mejorando transferencia, pero excesiva fuerza puede dañar el sustrato del componente o deformar la placa base.

> La resistencia térmica total de la interfaz depende de conductividad del material, espesor final tras montaje y área de contacto efectiva. Una aplicación deficiente puede añadir varios °C/W a la cadena térmica, limitando la capacidad de disipación incluso con un disipador de alto rendimiento.

## Sistemas de refrigeración líquida y circuitos cerrados

La refrigeración líquida emplea un fluido con mayor capacidad calorífica que el aire para transportar calor desde el componente hacia un radiador donde se disipa al ambiente. Los sistemas AIO (All-In-One) integran bloque de agua, bomba, tuberías y radiador en un circuito sellado de fábrica, ofreciendo instalación simplificada y mantenimiento nulo. Los custom loops permiten configuración personalizada con componentes seleccionados individualmente —bloques, bombas, radiadores, depósitos—, habilitando refrigeración simultánea de múltiples componentes y optimización estética, pero requieren conocimientos de montaje, mantenimiento periódico y mayor inversión.

El bloque de agua, fabricado en cobre o níquel, presenta microaletas internas que maximizan área de contacto con el fluido. La bomba genera caudal y presión para circular el líquido; su rendimiento se mide en litros por hora y cabeza de presión. Los radiadores emplean aletas de aluminio y tubos de cobre, con ventiladores montados en configuración push, pull o push-pull para optimizar flujo. El espesor del radiador (20 mm a 60 mm) y la densidad de aletas (FPI, fins per inch) determinan capacidad de disipación y resistencia al flujo de aire.

> El líquido refrigerante debe poseer baja viscosidad para minimizar pérdidas por fricción, alta conductividad térmica para transferencia eficiente, y aditivos biocidas y anticorrosivos para prevenir obstrucciones y degradación de componentes. Mezclar fluidos de distintas formulaciones puede provocar precipitación de aditivos y fallos prematuros.

La refrigeración por inmersión sumerge componentes completos en líquidos dieléctricos no conductores, eliminando la necesidad de interfaces térmicas y permitiendo disipación directa por convección natural o forzada del fluido. Aceites minerales sintéticos o fluidos fluorados especializados ofrecen aislamiento eléctrico y estabilidad térmica, aunque presentan desafíos en mantenimiento, compatibilidad de materiales y costo de implementación.

## Refrigeración de componentes auxiliares

Componentes críticos más allá de la CPU requieren gestión térmica específica. Los VRM de la placa base, responsables de regular voltaje para el procesador, disipan calor proporcional a la corriente entregada y la diferencia de voltaje entre entrada y salida. Disipadores pasivos con aletas orientadas según el flujo de aire del chasis, o activos con ventiladores dedicados, previenen throttling de potencia que limitaría el rendimiento del CPU bajo carga sostenida.

Los SSD NVMe de alto rendimiento generan calor concentrado en el controlador y chips NAND durante operaciones intensivas de lectura/escritura. Disipadores integrados o añadidos, combinados con flujo de aire dirigido, mantienen temperaturas bajo umbrales donde la throttling térmica degrada throughput. Algunos modelos incorporan sensores térmicos que ajustan dinámicamente el rendimiento para preservar integridad de datos.

La memoria VRAM en GPUs de gama alta opera a frecuencias elevadas con densidades de potencia significativas. Almohadillas térmicas de alta conductividad transfieren calor desde los chips hacia disipadores compartidos con el GPU, mientras que ventiladores dedicados o flujo de aire del chasis completan la disipación. La degradación térmica de VRAM puede causar artefactos visuales o inestabilidad en aplicaciones que utilizan memoria gráfica intensivamente.

## Dinámica de flujo de aire y presión en el chasis

La configuración de ventiladores determina el patrón de flujo de aire dentro del chasis, influyendo en la temperatura de componentes y la acumulación de polvo. La presión positiva se logra cuando el caudal de entrada supera al de salida, forzando el aire a escapar por rendijas no filtradas; esta configuración reduce ingreso de polvo pero puede generar zonas de estancamiento si el flujo no está bien dirigido. La presión negativa ocurre cuando la extracción domina, succionando aire no filtrado por cualquier abertura; mejora renovación térmica en componentes críticos pero incrementa acumulación de partículas. La presión neutra equilibra caudales de entrada y salida, requiriendo ajuste fino para evitar fluctuaciones por cambios en resistencia del flujo.

La ubicación de ventiladores debe considerar la trayectoria térmica de cada componente. Flujo frontal a trasero y de inferior a superior aprovecha la convección natural del aire caliente. Ventiladores frontales como entrada, superiores y traseros como extracción, crean un patrón coherente que minimiza recirculación de aire caliente. Obstáculos como discos duros, bahías de almacenamiento o cables mal gestionados pueden interrumpir el flujo, generando zonas de alta temperatura localizadas.

> La resistencia al flujo aumenta con la densidad de componentes, filtros de polvo y curvas en la trayectoria del aire. Ventiladores con mayor presión estática son preferibles en configuraciones restrictivas, mientras que ventiladores de alto caudal funcionan mejor en chasis abiertos o con baja obstrucción.

## Monitorización térmica y control adaptativo

Sensores de temperatura distribuidos en CPU, GPU, chipset, VRM y ranuras de expansión proporcionan datos en tiempo real para evaluación del estado térmico. Estos sensores, basados en diodos integrados o termistores externos, ofrecen precisión de ±1-2 °C y se leen mediante buses SMBus o interfaces dedicadas. Software de monitorización como HWMonitor, lm-sensors en Linux o herramientas del fabricante interpretan estas lecturas, mostrando valores actuales, históricos y umbrales de alerta.

El control adaptativo de ventiladores ajusta velocidad según curvas definidas por temperatura, equilibrando refrigeración y ruido acústico. Curvas agresivas mantienen temperaturas bajas a costa de mayor ruido; curvas conservadoras priorizan silencio permitiendo temperaturas más elevadas dentro de márgenes seguros. Algunos firmwares UEFI permiten configuración por zona térmica, asignando ventiladores específicos a sensores de componentes críticos.

```bash
# Consulta de temperaturas y control de ventiladores en Linux
sensors                    # Lectura de sensores vía lm-sensors
fancontrol                 # Configuración de curvas de ventilador
pwmconfig                  # Asistente para calibrar control PWM
```

> La calibración de sensores y curvas de ventilador requiere validación bajo carga representativa. Pruebas con estrés térmico controlado permiten ajustar umbrales de activación para evitar oscilaciones frecuentes de velocidad que generen ruido molesto o desgaste prematuro de rodamientos.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/hardware/buses" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/hardware/expansion" class="next">Siguiente</a>
</div>
