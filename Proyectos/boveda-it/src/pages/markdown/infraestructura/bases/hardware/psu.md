---
title: "Fuentes de alimentación (PSU)"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Fuentes de alimentación (PSU)](#fuentes-de-alimentación-psu)
  - [Principios de conversión y estabilidad eléctrica](#principios-de-conversión-y-estabilidad-eléctrica)
  - [Formatos físicos y gestión de cableado](#formatos-físicos-y-gestión-de-cableado)
  - [Distribución de rieles y arquitectura de potencia](#distribución-de-rieles-y-arquitectura-de-potencia)
  - [Eficiencia energética y certificación 80 PLUS](#eficiencia-energética-y-certificación-80-plus)
  - [Circuitos de protección y calidad de salida](#circuitos-de-protección-y-calidad-de-salida)
  - [Interfaz de conexión y asignación de conectores](#interfaz-de-conexión-y-asignación-de-conectores)
  - [Dimensionamiento y criterios de selección](#dimensionamiento-y-criterios-de-selección)

</div>

# Fuentes de alimentación (PSU)

La fuente de alimentación constituye el subsistema de conversión energética que transforma la corriente alterna de la red eléctrica en tensiones continuas estables y reguladas requeridas por los componentes electrónicos del computador. Esta conversión no es un proceso trivial: implica rectificación, filtrado, conmutación a alta frecuencia y regulación por retroalimentación para mantener voltajes dentro de márgenes de tolerancia estrechos incluso ante variaciones bruscas de consumo. La calidad de este proceso determina directamente la estabilidad operativa del sistema: ripple excesivo en los rieles de voltaje puede provocar errores de cálculo en la CPU, corrupción de datos en memoria o reinicios inesperados bajo carga. Más allá de suministrar energía, una PSU moderna implementa circuitos de protección que desconectan la salida ante condiciones anómalas, protegiendo componentes costosos de daños irreversibles. 

## Principios de conversión y estabilidad eléctrica

Una PSU opera mediante topologías de conmutación que convierten la tensión de entrada (100-240 V CA, 50/60 Hz) en múltiples salidas de corriente continua (+12 V, +5 V, +3.3 V). El proceso inicia con un filtro EMI que atenúa ruido de alta frecuencia procedente de la red, seguido de rectificación que transforma la onda alterna en pulsos unidireccionales. Un condensador de entrada suaviza estos pulsos antes de que un circuito conmutador, controlado por un PWM, los convierta en señales de alta frecuencia aplicadas a transformadores de aislamiento. La salida de estos transformadores se rectifica y filtra nuevamente para obtener tensiones continuas, mientras un lazo de control ajusta el ciclo de trabajo del conmutador para compensar variaciones de carga o entrada.

La estabilidad de los rieles de voltaje depende de la respuesta dinámica del lazo de regulación. Cuando un componente como la GPU solicita un pico de corriente repentino, la PSU debe reaccionar en microsegundos para evitar caídas de tensión (voltage droop) que excedan los límites especificados por los estándares ATX. Diseños con componentes de baja ESR, transformadores de núcleo de ferrita de alta calidad y controladores digitales mejoran esta respuesta transitoria.

> La regulación de voltaje se especifica como porcentaje de desviación respecto al valor nominal. El estándar ATX exige ±5% para +12 V y ±3% para +5 V y +3.3 V. Desviaciones fuera de estos rangos pueden causar inestabilidad en componentes sensibles.

## Formatos físicos y gestión de cableado

Los factores de forma de las PSU surgieron para garantizar compatibilidad mecánica con chasis y placas base. ATX define dimensiones de 150 × 140 × 86 mm y patrón de tornillos estandarizado, siendo el formato más común en sistemas de escritorio. Variantes como SFX (125 × 100 × 63.5 mm) o TFX (150 × 81.5 × 65 mm) reducen el volumen para sistemas compactos, aunque limitan la capacidad de potencia y la eficiencia térmica debido a restricciones de espacio para disipadores y ventiladores.

La gestión de cableado influye en la ventilación interna y la estética del sistema. Las unidades no modulares integran todos los cables de fábrica, generando desorden cuando no se utilizan todos los conectores. Las semi-modulares permiten desconectar cables periféricos no esenciales (SATA, Molex), mientras que las modulares ofrecen conectividad completa desmontable, facilitando la instalación y mejorando el flujo de aire. Esta flexibilidad tiene un costo marginal en resistencia eléctrica por los conectores adicionales, aunque en diseños de calidad este impacto es negligible.

> La longitud y gauge de los cables afecta la caída de tensión bajo carga. Cables excesivamente largos o de sección insuficiente pueden introducir resistencias parásitas que degradan la regulación en el punto de carga, especialmente en rieles de alto consumo como +12 V.

## Distribución de rieles y arquitectura de potencia

Los rieles de voltaje representan salidas independientes que suministran tensiones específicas a distintos subsistemas. El riel de +12 V alimenta los componentes de mayor consumo: CPU, GPU, motores de discos mecánicos y ventiladores. Su importancia radica en que concentra la mayor parte de la potencia nominal de la fuente; una PSU de 650 W puede entregar 600 W o más exclusivamente por este riel. Los rieles de +5 V y +3.3 V suministran energía a lógica digital, memoria RAM, chipsets y periféricos de baja potencia.

La arquitectura de rieles puede ser única o múltiple. Un diseño de riel único concentra toda la capacidad de corriente en una sola salida de +12 V, simplificando la distribución de carga pero requiriendo protecciones robustas contra cortocircuitos. Los diseños multiriel dividen la capacidad de +12 V en varias salidas con límites de corriente individuales, aislando fallos en un componente para evitar que afecten al sistema completo. Esta segmentación puede complicar la instalación de GPUs de alto consumo que requieren múltiples conectores PCIe, ya que cada conector podría estar asociado a un riel distinto con límites de corriente separados.

> La potencia real disponible se calcula multiplicando voltaje por corriente máxima por riel. Una especificación que indica +12 V: 50 A no implica 600 W útiles si otros rieles comparten la capacidad total del transformador. Siempre verifique la etiqueta de potencia combinada.

## Eficiencia energética y certificación 80 PLUS

La eficiencia de una PSU representa el porcentaje de potencia de entrada que se convierte en potencia útil de salida; el resto se disipa como calor. Una eficiencia del 90% significa que para entregar 500 W a los componentes, la fuente consume aproximadamente 555 W de la red, disipando 55 W térmicos. Esta pérdida impacta directamente en el consumo eléctrico acumulado y en la carga térmica del chasis.

El programa 80 PLUS certifica niveles mínimos de eficiencia medidos al 20%, 50% y 100% de carga nominal, con requisitos más estrictos para factores de potencia y ruido. Las categorías escalan desde White (80% mínimo) hasta Titanium (94% al 50% de carga con entrada de 115 V). Certificaciones superiores generalmente correlacionan con componentes de mayor calidad, mejores topologías de conversión (como LLC resonante o conmutación a frecuencia fija) y menor generación de calor.

> La eficiencia máxima suele alcanzarse alrededor del 50% de carga nominal. Operar una PSU constantemente por debajo del 20% o por encima del 90% de su capacidad reduce su eficiencia efectiva y puede acelerar el envejecimiento de componentes.

## Circuitos de protección y calidad de salida

Las protecciones eléctricas constituyen la última línea de defensa ante fallos de la red o del propio sistema. OVP (Over Voltage Protection) desconecta la salida si un riel excede un umbral superior, previniendo daños por sobretensión. UVP (Under Voltage Protection) actúa ante caídas excesivas que podrían causar comportamiento errático en componentes digitales. OPP (Over Power Protection) limita la potencia total entregada para evitar sobrecarga del circuito de conversión. SCP (Short Circuit Protection) detecta cortocircuitos en las salidas y corta la energía de forma inmediata.

La calidad eléctrica de la salida se mide mediante parámetros como ripple y ruido, que representan fluctuaciones de alta frecuencia superpuestas a la tensión continua. El estándar ATX especifica límites máximos de 120 mV para +12 V y 50 mV para +5 V y +3.3 V. Ripple excesivo puede introducir jitter en señales de reloj, degradar la integridad de datos en buses de alta velocidad o reducir la vida útil de condensadores electrolíticos.

> Las protecciones deben coordinarse para evitar disparos espurios. Un diseño deficiente puede activar OPP durante picos de corriente legítimos de una GPU, causando apagados repentinos bajo carga gráfica intensa.

## Interfaz de conexión y asignación de conectores

Los conectores estandarizados garantizan compatibilidad eléctrica y mecánica entre PSU y componentes. El conector ATX de 24 pines suministra múltiples tensiones a la placa base, incluyendo señales de encendido y monitoreo. El EPS de 8 pines (o 4+4) proporciona alimentación dedicada a la CPU, con capacidad para entregar corrientes elevadas directamente al socket. Los conectores PCIe de 6+2 pines alimentan tarjetas gráficas, con cada conector de 6 pines capaz de suministrar hasta 75 W adicionales al slot PCIe.

Los conectores SATA proporcionan +12 V, +5 V y +3.3 V a unidades de almacenamiento y periféricos, mientras que los Molex de 4 pines, aunque en desuso, persisten en ventiladores antiguos o controladores. La distribución de conectores en una PSU debe equilibrar la demanda típica: sistemas con múltiples GPUs requieren suficientes cables PCIe, mientras que configuraciones con numerosos discos priorizan conectores SATA.

> La inserción forzada de conectores puede dañar pines o invertir polaridad. Los conectores modernos incorporan guías y pestillos que aseguran alineación correcta; verifique siempre la orientación antes de aplicar presión.

## Dimensionamiento y criterios de selección

Estimar la potencia requerida implica sumar el consumo típico de cada componente bajo carga máxima, consultando especificaciones del fabricante o herramientas de cálculo en línea. CPU y GPU representan la mayor parte del consumo; el resto del sistema (placa base, memoria, almacenamiento, ventiladores) suele añadir 50-100 W adicionales. Aplicar un margen de seguridad del 20-30% sobre el total calculado permite operar la PSU en su rango de máxima eficiencia y acomoda picos transitorios no documentados.

El ruido eléctrico generado por la PSU puede acoplarse a señales sensibles si el filtrado de entrada o salida es insuficiente. Fuentes de baja calidad pueden inyectar ruido de conmutación en la red interna, afectando la estabilidad de audio integrado o la precisión de sensores. Seleccionar unidades con certificaciones de emisiones electromagnéticas (como FCC Clase B) minimiza este riesgo.

> Un error común consiste en dimensionar exclusivamente por potencia nominal sin considerar la distribución por rieles. Una GPU que requiere 300 W por el riel de +12 V no funcionará correctamente si la PSU limita ese riel a 20 A (240 W), aunque la potencia total declarada sea suficiente.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/hardware/gpu" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/hardware/memoria" class="next">Siguiente</a>
</div>
