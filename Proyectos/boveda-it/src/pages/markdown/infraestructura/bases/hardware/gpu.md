---
title: "Tarjetas gráficas (GPU)"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Tarjetas gráficas (GPU)](#tarjetas-gráficas-gpu)
  - [Función y evolución del procesamiento gráfico](#función-y-evolución-del-procesamiento-gráfico)
    - [Aplicaciones más allá del renderizado](#aplicaciones-más-allá-del-renderizado)
  - [Arquitectura interna y unidades de ejecución](#arquitectura-interna-y-unidades-de-ejecución)
  - [Memoria gráfica y subsistema de interconexión](#memoria-gráfica-y-subsistema-de-interconexión)
  - [Integración versus discreción: modelos de implementación](#integración-versus-discreción-modelos-de-implementación)
  - [Interfaces de salida y estándares de video](#interfaces-de-salida-y-estándares-de-video)

</div>

# Tarjetas gráficas (GPU)

La unidad de procesamiento gráfico ejecuta operaciones matemáticas masivamente paralelas sobre conjuntos de datos estructurados, transformando representaciones geométricas y texturas en señales de video mediante pipelines especializados. Su arquitectura difiere fundamentalmente de la CPU: mientras un procesador generalista optimiza la ejecución secuencial de instrucciones complejas, la GPU sacrifica latencia individual por throughput agregado, desplegando miles de núcleos simplificados que operan simultáneamente sobre vértices, píxeles o elementos de cómputo genérico. Esta especialización explica por qué tareas como rasterización, simulación física o entrenamiento de modelos de aprendizaje automático alcanzan aceleraciones de órdenes de magnitud cuando se delegan a hardware gráfico. La evolución de la GPU refleja una convergencia entre renderizado visual y cómputo de propósito general, donde APIs como CUDA o Vulkan exponen la capacidad de cálculo subyacente más allá de la generación de imágenes.

## Función y evolución del procesamiento gráfico

La GPU surgió como solución a la demanda creciente de acelerar operaciones gráficas repetitivas: transformación de coordenadas, interpolación de colores, mapeo de texturas. Los primeros aceleradores 3D de los años 90 descargaban de la CPU tareas específicas como el dibujo de triángulos o el z-buffering, pero requerían intervención constante del procesador principal para la lógica de aplicación. La integración de shaders programables marcó un punto de inflexión: en lugar de pipelines fijos, los desarrolladores podían definir comportamientos personalizados para vértices y fragmentos, habilitando efectos visuales complejos sin modificar el hardware.

> La diferencia esencial entre CPU y GPU reside en el modelo de ejecución. Una CPU con pocos núcleos potentes maneja ramificaciones condicionales y acceso aleatorio a memoria con eficiencia; una GPU con miles de núcleos simplificados procesa flujos de datos homogéneos donde la divergencia de ejecución penaliza el rendimiento.

El procesamiento paralelo en GPU sigue un modelo SIMD (Single Instruction, Multiple Data) o SIMT (Single Instruction, Multiple Threads): un mismo programa se ejecuta sobre múltiples elementos de datos simultáneamente. Esta arquitectura resulta ideal para operaciones donde cada píxel, vértice o elemento de matriz sigue la misma secuencia de cálculos con entradas distintas. La eficiencia depende de mantener ocupados todos los núcleos; cuando los hilos divergen en su flujo de control, la GPU serializa las rutas alternativas, reduciendo la utilización.

### Aplicaciones más allá del renderizado

El cómputo de propósito general en GPU (GPGPU) aprovecha la capacidad de cálculo masivo para tareas no gráficas: simulaciones numéricas, procesamiento de señales, criptografía. Frameworks como CUDA, OpenCL o ROCm proporcionan abstracciones que permiten escribir kernels ejecutables en GPU, gestionando transferencia de datos, sincronización y memoria compartida.

El renderizado profesional en estudios de animación o arquitectura utiliza GPUs para calcular iluminación global, trazado de rayos o simulación de materiales en tiempos viables para producción. La minería de criptomonedas explotó temporalmente la eficiencia de las GPU en operaciones hash paralelizables, aunque ASICs especializados han desplazado este uso en muchas cadenas de bloques.

En inteligencia artificial, las GPU aceleran operaciones de álgebra lineal fundamentales para entrenamiento e inferencia de redes neuronales: multiplicación de matrices, convoluciones, funciones de activación. Arquitecturas modernas incorporan unidades tensoriales dedicadas que optimizan estas operaciones con precisión mixta, equilibrando velocidad y exactitud numérica.

> La selección de precisión numérica afecta rendimiento y resultados. Operaciones en FP16 o INT8 pueden duplicar o cuadruplicar el throughput respecto a FP32, pero requieren validación para asegurar que la reducción de bits no degrade la calidad del modelo o la estabilidad del algoritmo.

## Arquitectura interna y unidades de ejecución

Los núcleos gráficos constituyen la unidad básica de procesamiento paralelo. En arquitecturas NVIDIA, los CUDA Cores ejecutan operaciones de punto flotante o enteras; en AMD, los Stream Processors cumplen funciones equivalentes. Estos núcleos se agrupan en bloques más grandes: Streaming Multiprocessors (SM) en NVIDIA o Compute Units (CU) en AMD, que comparten recursos como registros, memoria compartida y planificadores de hilos.

La rasterización convierte primitivas geométricas en fragmentos candidatos a píxeles, determinando qué áreas de la pantalla cubre cada triángulo. Los shaders, programas ejecutados por núcleos gráficos, transforman vértices, calculan iluminación o determinan el color final de cada fragmento. El pipeline gráfico moderno incluye etapas programables (vertex, geometry, fragment shaders) y fijas (rasterización, pruebas de profundidad, mezcla).

Las unidades ROP (Raster Operations Pipeline) gestionan operaciones finales sobre píxeles: escritura en framebuffer, mezcla alfa, antialiasing. Las unidades TMU (Texture Mapping Unit) muestrean texturas aplicando filtrado, mipmapping y corrección de perspectiva. El equilibrio entre núcleos de sombreado, TMUs y ROPs determina el rendimiento en distintos escenarios: geometría compleja, texturas de alta resolución o resolución de salida elevada.

> La ocupación de registros limita el paralelismo efectivo. Cada hilo consume registros para variables locales; si un kernel solicita más registros de los disponibles por SM, el hardware reduce el número de hilos activos simultáneamente, disminuyendo la capacidad de ocultar latencia de memoria.

## Memoria gráfica y subsistema de interconexión

La VRAM almacena texturas, buffers de geometría, framebuffers y datos de cómputo accesibles por los núcleos gráficos. Su ancho de banda, determinado por frecuencia de memoria, ancho de bus y tecnología de señalización, condiciona el rendimiento en escenarios limitados por transferencia de datos. Tecnologías como GDDR6X o HBM2e ofrecen anchos de banda superiores mediante buses más anchos, señalización PAM4 o apilamiento 3D de dies.

El ancho de banda efectivo depende de patrones de acceso: lecturas coalescentes, donde hilos adyacentes acceden a direcciones contiguas, maximizan la utilización del bus; accesos aleatorios o divergentes fragmentan las transacciones, reduciendo throughput. La jerarquía de caché en GPU (L1 por SM, L2 compartido) mitiga parcialmente la latencia de memoria global, pero su capacidad limitada exige algoritmos con localidad espacial y temporal.

> La interfaz PCIe x16 proporciona el canal entre GPU y sistema. Aunque PCIe 4.0 x16 ofrece ~32 GB/s bidireccionales, aplicaciones que transfieren datos frecuentemente entre CPU y GPU pueden saturar este enlace. Optimizaciones como memoria unificada o transferencia asíncrona reducen la dependencia del bus del sistema.

Los carriles PCIe definen el ancho de banda disponible: x16 ofrece 16 lanes, x8 la mitad. Algunas placas base comparten lanes entre slots, reduciendo el ancho de banda cuando se instalan múltiples GPUs. La latencia de acceso a memoria de sistema desde GPU (vía PCIe) es órdenes de magnitud mayor que a VRAM local, por lo que minimizar transferencias cruzadas resulta crítico para rendimiento.

## Integración versus discreción: modelos de implementación

Las GPU integradas comparten silicio con el procesador principal, utilizando memoria del sistema en lugar de VRAM dedicada. Esta arquitectura reduce costo, consumo y espacio, pero limita ancho de banda y capacidad de cómputo. Procesadores modernos integran GPUs capaces de aceleración multimedia, interfaces de usuario fluidas e incluso juegos ligeros, aprovechando memoria DDR de doble canal y arquitecturas gráficas eficientes.

Las GPU dedicadas montan silicio gráfico independiente, VRAM propia y subsistema de alimentación especializado. Ofrecen rendimiento superior en cómputo paralelo y renderizado, pero incrementan consumo, generación térmica y costo. Su diseño permite optimizaciones específicas: buses de memoria de 256 o 384 bits, refrigeración avanzada, frecuencias de operación elevadas.

> La selección entre GPU integrada y dedicada depende de cargas de trabajo objetivo. Aplicaciones con paralelismo masivo y requisitos de ancho de banda justifican hardware discreto; tareas de ofimática, navegación o reproducción de video se benefician de la eficiencia energética de soluciones integradas.

Los casos de uso determinan la arquitectura adecuada: estaciones de trabajo para CAD o simulación requieren GPUs profesionales con drivers certificados y memoria ECC; portátiles ultraportables priorizan autonomía mediante gráficos integrados; sistemas para aprendizaje automático pueden combinar múltiples GPUs dedicadas con interconexiones de alta velocidad como NVLink.

## Interfaces de salida y estándares de video

Los puertos de video convierten señales digitales procesadas por la GPU en formatos compatibles con monitores, proyectores o capturadoras. HDMI, desarrollado inicialmente para electrónica de consumo, transporta video, audio y datos de control en un único cable, con versiones recientes soportando resoluciones hasta 8K a 120 Hz, HDR y VRR (Variable Refresh Rate).

DisplayPort, diseñado para computación, ofrece mayor ancho de banda que HDMI en versiones equivalentes, soporte nativo para múltiples monitores mediante Multi-Stream Transport y características profesionales como sincronización precisa de fotogramas. DVI, legado de la transición analógico-digital, persiste en entornos industriales pero carece de soporte para características modernas como HDR o altas tasas de refresco.

> La compatibilidad entre puerto, cable y display determina la calidad de señal alcanzable. Un cable HDMI 2.0 certificado soporta 4K a 60 Hz con HDR; un cable de especificación inferior puede limitar resolución, profundidad de color o tasa de refresco, incluso si GPU y monitor admiten capacidades superiores.

VGA, interfaz analógica obsoleta, convierte señales digitales a voltajes variables susceptibles a ruido y degradación. Su uso persiste en equipos heredados, pero carece de soporte para resoluciones elevadas, sincronización digital o características de gestión de energía modernas. La migración a interfaces digitales elimina conversiones innecesarias y habilita funcionalidades como HDCP para contenido protegido.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/hardware/cpu" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/hardware/psu" class="next">Siguiente</a>
</div>
