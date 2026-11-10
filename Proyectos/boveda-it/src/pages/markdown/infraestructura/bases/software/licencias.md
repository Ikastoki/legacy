---
title: "Licencias y modelos de distribución"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Licencias y modelos de distribución](#licencias-y-modelos-de-distribución)
  - [Fundamentos legales del software](#fundamentos-legales-del-software)
  - [Software propietario y código abierto: paradigmas de desarrollo](#software-propietario-y-código-abierto-paradigmas-de-desarrollo)
  - [Clasificación de licencias y sus implicaciones técnicas](#clasificación-de-licencias-y-sus-implicaciones-técnicas)
  - [Ética, cumplimiento y gestión de riesgos legales](#ética-cumplimiento-y-gestión-de-riesgos-legales)

</div>

# Licencias y modelos de distribución

El software no existe en un vacío legal: cada línea de código está sujeta a un marco de derechos y obligaciones que determina quién puede usarlo, modificarlo, redistribuirlo o comercializarlo. Las licencias de software constituyen contratos jurídicos que establecen estos términos, transformando el código de una mera secuencia de instrucciones en un bien con propiedades de propiedad intelectual definidas. Esta estructura legal condiciona no solo el modelo de negocio del desarrollador, sino también la capacidad de colaboración entre comunidades, la interoperabilidad entre sistemas y la sostenibilidad a largo plazo de proyectos tecnológicos. La elección entre licencias permisivas, copyleft fuertes o modelos propietarios refleja decisiones estratégicas sobre control, apertura y monetización que trascienden lo técnico para incidir en la gobernanza del ecosistema digital. Comprender estas categorías permite evaluar riesgos legales, garantizar cumplimiento normativo y seleccionar componentes de software compatibles con los objetivos de un proyecto, ya sea empresarial, académico o comunitario.

## Fundamentos legales del software

Una licencia de software define el alcance de los derechos cedidos por el titular de los derechos de autor a terceros. Por defecto, todo código fuente está protegido por copyright: nadie puede copiarlo, modificarlo o distribuirlo sin autorización explícita. La licencia actúa como instrumento de cesión condicional, especificando qué usos están permitidos, bajo qué condiciones y con qué restricciones. Esta estructura jurídica se superpone a la naturaleza técnica del software, que por diseño facilita la copia y modificación sin degradación, generando una tensión inherente entre la facilidad de replicación digital y las barreras legales impuestas por el derecho de autor.

Los modelos de distribución determinan cómo se comercializa o entrega el software al usuario final. El modelo tradicional de licencia perpetua otorga derecho de uso indefinido sobre una versión específica, generalmente mediante pago único. El modelo de suscripción (SaaS o licencias recurrentes) condiciona el acceso al pago periódico, permitiendo actualizaciones continuas y servicios asociados. La distribución freemium combina funcionalidades básicas gratuitas con características avanzadas bajo pago, mientras que el modelo de código abierto prioriza la adopción masiva mediante acceso libre al código, monetizando servicios complementarios como soporte, hospedaje o personalización.

> La validez de una licencia depende de su aceptación explícita o implícita por el usuario. En entornos empresariales, el incumplimiento de términos licenciatarios puede derivar en auditorías, sanciones económicas o interrupción de servicios críticos, independientemente de la buena fe del infractor.

## Software propietario y código abierto: paradigmas de desarrollo

El software propietario reserva el código fuente y restringe su modificación, redistribución o ingeniería inversa mediante cláusulas contractuales. Este modelo prioriza el control centralizado del desarrollo, la protección de secretos comerciales y la monetización directa mediante ventas de licencias. La dependencia del proveedor para correcciones, actualizaciones o compatibilidad futura introduce riesgos de obsolescencia programada o discontinuación sin alternativas inmediatas.

El código abierto (Open Source) garantiza acceso al código fuente y derechos para estudiarlo, modificarlo y redistribuirlo, bajo condiciones definidas por licencias estandarizadas. Esta aproximación fomenta la colaboración distribuida, la auditoría pública de seguridad y la innovación acumulativa, donde mejoras implementadas por un actor benefician a toda la comunidad. La sostenibilidad económica no depende de la venta de licencias, sino de servicios de valor añadido: integración, soporte empresarial, hospedaje gestionado o desarrollo personalizado.

> La distinción entre "gratuito" y "libre" es fundamental: software libre se refiere a libertades de uso, no a precio. Una licencia GPL puede aplicarse a software comercializado, siempre que se respeten las condiciones de redistribución del código modificado.

## Clasificación de licencias y sus implicaciones técnicas

Las licencias de código abierto se agrupan según su grado de exigencia en la redistribución de derivados. Las licencias permisivas (MIT, BSD, Apache) imponen condiciones mínimas: generalmente requieren atribución de autoría y exención de garantía, pero permiten integrar el código en proyectos propietarios sin obligación de publicar modificaciones. Esta flexibilidad facilita adopción empresarial, aunque puede diluir contribuciones de vuelta a la comunidad.

Las licencias copyleft (GPL, AGPL, LGPL) exigen que cualquier obra derivada se distribuya bajo los mismos términos, garantizando que las mejoras permanezcan accesibles. La GPL v3 añade cláusulas contra la tivoización (hardware que bloquea ejecución de software modificado) y compatibilidad con patentes. La AGPL extiende esta obligación a software ejecutado en red: si un usuario interactúa con el programa remotamente, debe poder acceder al código fuente correspondiente.

```text
# Comparativa simplificada de obligaciones licenciatarias

| Licencia | Atribución | Compartir igual | Uso comercial | Integración en propietario |
|----------|-----------|-----------------|---------------|---------------------------|
| MIT      | Sí        | No              | Sí            | Sí                        |
| GPL v3   | Sí        | Sí              | Sí            | No (sin liberar código)   |
| Apache 2 | Sí        | No*             | Sí            | Sí (con cláusula de patentes) |
| AGPL v3  | Sí        | Sí (incluye red)| Sí            | No (incluso vía SaaS)     |

* Apache requiere liberar modificaciones si se distribuye como derivado, pero no impone copyleft en obras combinadas.
```

Las licencias comerciales varían según negociación directa: pueden limitar número de usuarios, instancias, ubicaciones geográficas o tipos de uso (investigación vs. producción). Algunas incluyen cláusulas de auditoría remota, prohibición de benchmarking público o restricciones de migración a competidores.

> La compatibilidad entre licencias determina si componentes con distintos términos pueden combinarse legalmente. Integrar código GPL en un proyecto bajo licencia propietaria viola la GPL; combinar MIT con GPL es viable porque MIT es compatible con GPL, pero no al revés.

## Ética, cumplimiento y gestión de riesgos legales

El uso ético del software trasciende el cumplimiento legal mínimo: implica reconocer la autoría, respetar las intenciones del licenciante y contribuir de vuelta cuando el modelo lo fomenta. En entornos profesionales, la gestión de licencias requiere inventario automatizado de dependencias, escaneo de código para detectar componentes con restricciones copyleft y procesos de aprobación para incorporación de bibliotecas externas.

La legalidad del uso se evalúa según jurisdicción: algunas cláusulas licenciatarias pueden ser nulas en ciertos países, mientras que leyes de propiedad intelectual varían en protección de interfaces, algoritmos o estructuras de datos. El fair use o uso legítimo permite excepciones limitadas para investigación, educación o interoperabilidad, pero su interpretación judicial es impredecible y no debe asumirse como defensa preventiva.


> La omisión de cumplimiento licenciatario no exime de responsabilidad. Distribuir software con componentes GPL sin liberar el código fuente puede derivar en demandas por infracción de copyright, incluso si la violación fue inadvertida. La debida diligencia en gestión de dependencias es una obligación técnica y legal en desarrollo profesional.

La evolución de modelos híbridos —open core, licencias duales, contribuciones patrocinadas— refleja intentos de equilibrar apertura comunitaria con sostenibilidad económica. Evaluar estas opciones requiere analizar no solo términos legales, sino también incentivos para contribuyentes externos, transparencia en gobernanza del proyecto y alineación con valores organizacionales a largo plazo.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/software/especializado" class="prev">Anterior</a>
  <a href="/infrastructure" class="next">Siguiente</a>
</div>
