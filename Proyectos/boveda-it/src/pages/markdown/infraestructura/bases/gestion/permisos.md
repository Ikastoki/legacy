---
title: "Seguridad y permisos"
description: ""
layout: ../../../../../layouts/MarkdownLayout.astro
---

<div class="glosario">

- [Seguridad y permisos](#seguridad-y-permisos)
  - [Modelos de control de acceso y políticas de permisos](#modelos-de-control-de-acceso-y-políticas-de-permisos)
  - [Propiedad y herencia de permisos](#propiedad-y-herencia-de-permisos)
  - [Integridad, respaldo y cifrado](#integridad-respaldo-y-cifrado)

</div>

# Seguridad y permisos

La protección de la información en un sistema computacional no se delega exclusivamente a herramientas perimetrales, sino que se funda en mecanismos de control de acceso integrados directamente en el núcleo del sistema operativo y en el sistema de archivos. Estos mecanismos establecen límites precisos sobre qué entidades pueden leer, modificar o ejecutar recursos compartidos, transformando un entorno de acceso libre en un espacio de trabajo aislado y auditable. La seguridad efectiva emerge de la superposición de capas: permisos estrictos que restringen el acceso inicial, propiedad que asigna responsabilidad administrativa, y mecanismos criptográficos que garantizan la confidencialidad e integridad incluso cuando el control físico o lógico se ve comprometido. Comprender esta arquitectura es esencial para diseñar infraestructuras donde la disponibilidad no sacrifique la privacidad, y donde la recuperación ante incidentes dependa de procedimientos verificables y no de suposiciones sobre la resiliencia del almacenamiento.

## Modelos de control de acceso y políticas de permisos

El control de acceso determina cómo el sistema operativo evalúa si un proceso posee autorización para interactuar con un recurso. La implementación más extendida en entornos Unix y Linux se basa en el modelo DAC (Discretionary Access Control), que utiliza nueve bits de permiso estructurados en tres conjuntos de tres bits: lectura (r), escritura (w) y ejecución (x) para el propietario, el grupo asignado y el resto de usuarios. El kernel intercepta cada llamada al sistema de acceso a archivos, compara las credenciales del proceso solicitante (UID real y efectivo, GID y grupos suplementarios) con los bits almacenados en el inodo, y concede o deniega la operación antes de que se invoque al controlador de hardware. Esta evaluación ocurre en microsegundos y no requiere consultas a bases de datos externas, lo que garantiza bajo overhead pero limita la granularidad a tres niveles de acceso predefinidos.

Windows implementa un modelo más complejo mediante Listas de Control de Acceso (ACL), almacenadas como metadatos en el sistema de archivos NTFS. Cada archivo posee una DACL (Discretionary ACL) compuesta por una secuencia ordenada de ACEs (Access Control Entries), donde cada entrada vincula un identificador de seguridad (SID) con permisos específicos y un tipo de acceso (permitir o denegar). Los permisos incluyen operaciones atómicas como leer datos, escribir atributos, eliminar, cambiar permisos o tomar posesión, permitiendo una granularidad fina que el modelo rwx no soporta nativamente. La evaluación sigue un orden estricto: las entradas de denegación explícita se procesan primero, seguidas de las de permiso, lo que permite bloquear accesos heredados o globales mediante reglas específicas.

> La simplicidad del modelo rwx facilita la administración pero introduce riesgos cuando se aplica de forma indiscriminada. Asignar permisos 777 o conceder control total a grupos amplios elimina las fronteras de aislamiento, permitiendo que un usuario o proceso modifique recursos críticos sin validación adicional.

La representación octal en sistemas Unix traduce los tres conjuntos de bits en dígitos numéricos: lectura equivale a 4, escritura a 2 y ejecución a 1. Un permiso 644 indica lectura y escritura para el propietario, y solo lectura para grupo y otros. Esta notación compacta permite configurar permisos mediante operaciones bitwise a nivel de kernel, aunque herramientas modernas como ACL POSIX extienden el modelo para añadir múltiples usuarios o grupos sin alterar la estructura base del inodo.

## Propiedad y herencia de permisos

La propiedad asigna responsabilidad administrativa a cada recurso mediante la asociación con un UID y un GID específicos. El proceso que crea un archivo se convierte en su propietario, y el grupo predeterminado suele heredar el GID efectivo del usuario o el grupo del directorio padre, dependiendo de la configuración del sistema y del bit SGID aplicado al directorio contenedor. Esta asignación determina qué conjunto de bits se evalúa primero durante el acceso: si el UID del proceso coincide con el propietario, se aplican los permisos de usuario; si coincide con el GID o un grupo suplementario, se evalúan los permisos de grupo; en caso contrario, se aplican los permisos de otros. La herencia de permisos se gestiona mediante reglas de propagación que definen cómo los nuevos archivos o subdirectorios adquieren sus derechos de acceso al crearse dentro de una ruta jerárquica.

En sistemas basados en inodos, la herencia se controla mediante la máscara de creación de archivos (umask), que resta bits a los permisos por defecto solicitados por la aplicación al crear un nuevo recurso. Windows y sistemas con ACL POSIX permiten configurar flags de herencia explícitos que propagan entradas de control hacia objetos hijos, manteniendo consistencia en árboles de directorios complejos. Cuando se requiere preservar restricciones en directorios compartidos, el bit sticky (t) impide que usuarios distintos al propietario o al administrador eliminen o renombraren archivos, incluso si poseen permisos de escritura sobre el contenedor. Los bits SUID y SGID modifican el contexto de ejecución: un binario con SUID se ejecuta con los privilegios del propietario del archivo, y uno con SGID hereda el GID del directorio o del grupo propietario, mecanismos útiles para escalar privilegios controlados pero peligrosos si se aplican a binarios modificables por usuarios no autorizados.

> La herencia implícita puede propagar configuraciones inseguras si no se valida antes de aplicar cambios masivos. Modificar permisos en la raíz de un árbol sin utilizar banderas que limiten la recursividad o que excluyan enlaces simbólicos puede alterar el acceso a recursos críticos o exponer datos sensibles a entidades no previstas.

## Integridad, respaldo y cifrado

La integridad de la información se verifica mediante funciones hash criptográficas que generan una huella digital única a partir del contenido binario del archivo. Algoritmos como SHA-256 o SHA-3 producen resúmenes de longitud fija donde cualquier modificación de un solo bit altera drásticamente el valor resultante, detectando corrupción por fallos de almacenamiento, interferencia de red o manipulación maliciosa. Estas funciones no cifran datos, sino que establecen un baseline matemático para validar que el contenido recuperado coincide exactamente con el original. La verificación se realiza comparando el hash calculado en el momento de la extracción con el valor almacenado en un medio independiente, asegurando que ni el transporte ni el reposo hayan comprometido la autenticidad.


Las estrategias de respaldo transforman la redundancia en un mecanismo de recuperación predecible. Un esquema efectivo combina copias completas periódicas con incrementales que registran solo los cambios desde la última operación, minimizando el tiempo de ventana y el consumo de almacenamiento. La regla 3-2-1 establece que deben existir tres copias de los datos, almacenadas en dos medios diferentes, con al menos una copia fuera del sitio de producción. La inmutabilidad de las copias, lograda mediante políticas WORM (Write Once, Read Many) o sistemas de archivos con versiones bloqueadas, previene el cifrado o eliminación de respaldos durante ataques de ransomware. La validación periódica de restauración es el único método para confirmar que un respaldo es funcional; un archivo verificado pero no recuperable carece de valor operativo.

El cifrado en reposo protege los datos cuando el medio de almacenamiento es accesible físicamente o lógicamente por actores no autorizados. Soluciones a nivel de volumen como LUKS o BitLocker utilizan cifrado de bloque (AES-XTS) que transforma cada sector antes de escribirlo en disco, gestionando las claves mediante módulos de hardware (TPM) o proveedores de credenciales externas. El cifrado a nivel de archivo o directorio ofrece granularidad para compartir volúmenes parcialmente accesibles, pero introduce overhead de gestión de claves y complejidad en operaciones de búsqueda indexada. El rendimiento se mantiene mediante instrucciones de hardware AES-NI que ejecutan operaciones criptográficas en ciclos dedicados del procesador, reduciendo la penalización a menos del cinco por ciento en cargas secuenciales.

El cifrado en tránsito garantiza confidencialidad e integridad durante la transmisión de datos a través de redes no confiables. Protocolos como TLS 1.3 establecen canales seguros mediante un intercambio de claves asimétrico que autentica los extremos mediante certificados digitales, seguido de la negociación de una clave de sesión simétrica para el cifrado del flujo de datos. La propiedad de secreto hacia adelante (forward secrecy) genera claves efímeras por sesión, impidiendo que la compilación futura de claves maestras permita descifrar tráfico histórico. La validación de la cadena de confianza del certificado previene ataques de intermediario, mientras que la selección de suites criptográficas modernas descarta algoritmos vulnerables a ataques de colisión o fuerza bruta computacional.

> El cifrado sin gestión adecuada de claves convierte la seguridad en una ilusión operativa. Pérdida de credenciales, rotación incorrecta de certificados o almacenamiento de claves en texto plano en el mismo host que los datos protegidos anula las garantías criptográficas independientemente de la fortaleza del algoritmo utilizado.

<div class="pagination">
  <a href="/markdown/infraestructura/bases/gestion/directorios" class="prev">Anterior</a>
  <a href="/markdown/infraestructura/bases/gestion/operadores" class="next">Siguiente</a>
</div>
