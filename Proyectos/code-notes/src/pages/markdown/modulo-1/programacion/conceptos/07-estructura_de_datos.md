---
layout: ../../../../../layouts/modulo-1/Programacion.astro
title: "Estructura de datos"
block: "Conceptos"
---

<div class="markdown-notes">

<div class="markdown title-container">
    <h1 align='center' class="title">Estructura de datos</h1>
</div>

<div class="glosario-toggle">
     <input type="checkbox" id="toggle-glosario" class="toggle-input">
     <label for="toggle-glosario" class="toggle-label">📑 Índice</label>
     <div class="glosario-content">

- [Estructura de datos](#estructura-de-datos)
- [Estructuras de datos básicos](#estructuras-de-datos-básicos)
  - [Arrays](#arrays)
  - [Linked list](#linked-list)
  - [Stack](#stack)
  - [Queues](#queues)
  - [Hash table](#hash-table)
- [Estructuras de datos tree](#estructuras-de-datos-tree)
- [Estructura de datos de gráficos](#estructura-de-datos-de-gráficos)

</div>
</div>

## Estructura de datos

Las estructuras de datos en programación son formas de organizar y almacenar datos para que puedan ser utilizados de manera eficiente. Son esenciales para cualquier programa informático, ya que facilitan la manipulación y gestión de la información.

## Estructuras de datos básicos

### Arrays

Los arrays son una de las estructuras de datos más simples y fundamentales en programación. Consisten en una colección ordenada de elementos del mismo tipo, accesibles mediante un índice numérico.

**Características:**

- **Elementos del mismo tipo:** Todos los elementos en un array deben ser del mismo tipo de datos. Por ejemplo, un array puede contener enteros, cadenas de texto o valores booleanos, pero no una mezcla de ellos.

- **Índices numéricos:** Cada elemento dentro del array está asociado a un índice numérico que indica su posición en la secuencia. Los índices generalmente comienzan desde cero y van hasta la longitud del array menos uno.

- **Memoria contigua:** Los elementos de un array se almacenan en ubicaciones de memoria contiguas, lo que permite un acceso eficiente a los elementos mediante sus índices.

- **Tamaño fijo o dinámico:** Algunos lenguajes de programación requieren que los arrays tengan un tamaño fijo, lo que significa que no pueden cambiar de tamaño una vez que se crean. Otros lenguajes permiten la creación de arrays dinámicos cuyo tamaño puede cambiar durante la ejecución del programa.

- **Eficiencia en el acceso:** Acceder a un elemento en un array tiene un tiempo de ejecución constante (O(1)O(1)), ya que se puede calcular la dirección de memoria directamente utilizando el índice del elemento.

### Linked list

Una lista enlazada, o linked list en inglés, es una estructura de datos en la que los elementos están almacenados en nodos. Cada nodo contiene un valor y una referencia (o enlace) al siguiente nodo en la secuencia. La característica distintiva de una lista enlazada es que los nodos no necesitan estar almacenados en ubicaciones de memoria contiguas, lo que permite una inserción y eliminación eficientes de elementos en cualquier posición de la lista.

**Hay varios tipos de listas enlazadas, pero las dos formas principales son:**

- **Lista enlazada simple (Singly Linked List):** Cada nodo tiene un único enlace que apunta al siguiente nodo en la secuencia. El último nodo de la lista generalmente apunta a null para indicar el final de la lista.

- **Lista enlazada doble (Doubly Linked List):** Cada nodo tiene dos enlaces, uno que apunta al siguiente nodo y otro que apunta al nodo anterior en la secuencia. Esto permite recorrer la lista en ambas direcciones.

**Algunas características importantes de las listas enlazadas incluyen:**

- **Flexibilidad en la inserción y eliminación:** A diferencia de los arrays, donde la inserción y eliminación pueden ser costosas en términos de rendimiento, las listas enlazadas permiten agregar o eliminar elementos en cualquier posición con un costo constante, siempre y cuando se tenga una referencia al nodo anterior.

- **Uso eficiente de la memoria:** Las listas enlazadas pueden crecer o encogerse dinámicamente según sea necesario, lo que significa que ocupan solo la cantidad de memoria requerida para almacenar los elementos que contienen.

- **Acceso secuencial:** Aunque el acceso aleatorio a los elementos de una lista enlazada no es tan eficiente como en un array (debido a la necesidad de recorrer la lista desde el principio), el acceso secuencial sigue siendo rápido y constante.

- **Uso de más memoria que los arrays:** Debido a que cada nodo de una lista enlazada necesita almacenar una referencia adicional al siguiente (y posiblemente al anterior en el caso de listas doblemente enlazadas), las listas enlazadas pueden consumir más memoria que los arrays para almacenar la misma cantidad de elementos.

### Stack

Un stack, también conocido como pila, es una estructura de datos lineal que sigue el principio de LIFO (Last In, First Out), lo que significa que el último elemento agregado a la pila es el primero en ser eliminado.

**Las operaciones básicas que se pueden realizar en una pila son:**

- **Push:** Agregar un elemento a la pila. El nuevo elemento se coloca en la parte superior de la pila.
- **Pop:** Eliminar y retornar el elemento que está en la parte superior de la pila.
- **Peek (o Top):** Obtener el elemento que está en la parte superior de la pila sin eliminarlo.
- **isEmpty:** Verificar si la pila está vacía.

**Las pilas son utilizadas comúnmente en muchos contextos de programación debido a su simplicidad y utilidad. Algunas aplicaciones comunes de las pilas incluyen:**

- **Gestión de llamadas de funciones (stack de llamadas):** Cuando una función es llamada, los parámetros y la dirección de retorno se almacenan en la pila, y se eliminan cuando la función retorna.

- **Implementación de algoritmos:** Algoritmos como DFS (Depth-First Search) en grafos y ciertas implementaciones de árboles binarios hacen uso de pilas para mantener un seguimiento de los nodos que deben ser procesados.

- **Operaciones de deshacer (undo):** En muchos editores de texto y programas de diseño, las operaciones de deshacer se implementan utilizando una pila para almacenar los cambios realizados, lo que permite revertirlos en orden inverso.

- **Evaluación de expresiones postfix (notación polaca inversa):** Al calcular el resultado de expresiones matemáticas en notación postfix, se utiliza una pila para almacenar los operandos temporales.

> ✍️ Nota
>
> Las pilas se pueden implementar utilizando arrays o listas enlazadas, pero las listas enlazadas son más comunes debido a su capacidad de crecer y encogerse dinámicamente según sea necesario.

### Queues

Una cola, o queue en inglés, es una estructura de datos lineal que sigue el principio de FIFO (First In, First Out), lo que significa que el primer elemento que se agrega a la cola es el primero en ser eliminado. En otras palabras, los elementos se insertan al final de la cola y se eliminan desde el principio de la misma.

**Las operaciones básicas que se pueden realizar en una cola son:**

- **Enqueue:** Agregar un elemento al final de la cola.
- **Dequeue:** Eliminar y retornar el elemento que está en el frente de la cola.
- **Front (o Peek):** Obtener el elemento que está en el frente de la cola sin eliminarlo.
- **isEmpty:** Verificar si la cola está vacía.

Las colas son utilizadas comúnmente en muchos contextos de programación, especialmente en situaciones donde los elementos deben ser procesados en el orden en que fueron recibidos.

**Algunos ejemplos de aplicaciones de colas incluyen:**

- **Procesamiento de tareas en un sistema por lotes (batch):** Las colas se utilizan para almacenar tareas que deben ser procesadas por un sistema, como imprimir documentos en una impresora o procesar transacciones en un sistema bancario.

- **Gestión de solicitudes de servicio:** En aplicaciones de servicio al cliente o sistemas de atención al público, las colas se utilizan para manejar solicitudes en el orden en que se reciben, garantizando una atención justa y eficiente.

- **Búfer en la comunicación de datos:** En aplicaciones de redes informáticas, las colas se utilizan para almacenar los paquetes de datos que esperan ser transmitidos, actuando como un búfer para manejar la variabilidad en la velocidad de la transmisión y recepción de datos.

- **Implementación de algoritmos como BFS (Breadth-First Search):** En algoritmos de búsqueda de grafos como BFS, se utilizan colas para mantener un seguimiento de los nodos que deben ser explorados en el siguiente nivel de la búsqueda.

> ✍️ Nota
>
> Las colas se pueden implementar utilizando arrays o listas enlazadas, aunque las listas enlazadas son más comunes debido a su capacidad de crecer y encogerse dinámicamente según sea necesario.

### Hash table

Una tabla hash, o hash table en inglés, es una estructura de datos que implementa una asociación de tipo clave-valor. Utiliza una función de hash para mapear claves a ubicaciones de almacenamiento en una estructura de datos, generalmente un array, de tal manera que la recuperación de un valor asociado con una clave dada sea muy eficiente.

**Las operaciones básicas que se pueden realizar en una tabla hash son:**

- **Insertar (o añadir):** Asociar un valor con una clave en la tabla hash.
- **Buscar:** Buscar y recuperar el valor asociado con una clave dada.
- **Eliminar:** Eliminar la asociación de una clave y su valor correspondiente de la tabla hash.

La eficiencia de las operaciones en una tabla hash depende en gran medida de la función de hash utilizada y de cómo maneja las colisiones. Una colisión ocurre cuando dos claves diferentes se asignan a la misma ubicación en la tabla hash.

**Hay varias técnicas para manejar las colisiones, algunas de las cuales son:**

- **Encadenamiento separado (Separate Chaining):** Cada celda de la tabla hash contiene una lista enlazada de elementos que han sido asignados a esa ubicación de hash. Cuando se produce una colisión, los nuevos elementos se agregan a esta lista enlazada.

- **Resolución de colisiones por sondeo (Probing):** En lugar de utilizar una estructura de datos adicional, este método busca la siguiente celda libre en la tabla hash después de una colisión. Algunas variantes de sondeo incluyen el sondeo lineal, el sondeo cuadrático y el sondeo doble.

> ✍️ Nota
>
> Las tablas hash son ampliamente utilizadas debido a su capacidad para proporcionar un acceso eficiente a los datos, en promedio O(1)O(1) para las operaciones de búsqueda, inserción y eliminación. Son ideales para aplicaciones que requieren un acceso rápido a datos basados en una clave, como las implementaciones de diccionarios y conjuntos en muchos lenguajes de programación.

## Estructuras de datos tree

Los árboles son estructuras de datos jerárquicas que se utilizan para representar relaciones entre elementos de manera organizada y eficiente. En un árbol, cada elemento se llama nodo y tiene una relación con otros nodos a través de enlaces llamados aristas o ramas. Un nodo especial en la parte superior del árbol se llama raíz, y los nodos que no tienen hijos se llaman hojas.

**Aquí tienes algunas características clave de las estructuras de datos de árbol:**

- **Nodos y relaciones jerárquicas:** Los nodos de un árbol están organizados jerárquicamente, de modo que cada nodo tiene un padre (excepto la raíz) y cero o más hijos.

- **Raíz:** Es el nodo superior del árbol y sirve como punto de partida para acceder a todos los demás nodos del árbol.

- **Hojas:** Son los nodos que no tienen hijos. Son los extremos del árbol.

- **Nodos internos:** Son los nodos que tienen al menos un hijo.

- **Altura:** La altura de un árbol es la longitud del camino más largo desde la raíz hasta una hoja. Es una medida de la profundidad del árbol.

- **Grado de un nodo:** Es el número de hijos que tiene un nodo.

**Los árboles se utilizan en una variedad de aplicaciones, y hay varios tipos de árboles que se adaptan a diferentes necesidades:**

- **Árbol binario:** Cada nodo tiene a lo sumo dos hijos. Los árboles binarios pueden ser de búsqueda binaria, AVL, entre otros.

- **Árbol ternario:** Cada nodo puede tener hasta tres hijos.

- **Árbol n-ario:** Cada nodo puede tener un número variable de hijos.

- **Árbol B:** Un árbol de búsqueda multi-nivel que se utiliza principalmente para la implementación de bases de datos y sistemas de archivos.

- **Árbol B+:** Similar al árbol B, pero con una estructura adicional que mejora el rendimiento de búsqueda.

> ✍️ Nota
>
> Los árboles se utilizan en una variedad de aplicaciones, incluyendo bases de datos, sistemas de archivos, compiladores, redes de telecomunicaciones, inteligencia artificial, entre otros.

## Estructura de datos de gráficos

Un grafo es una estructura de datos que consta de un conjunto de nodos (también llamados vértices) y un conjunto de aristas que conectan pares de nodos. Los grafos son utilizados para modelar una amplia gama de relaciones entre objetos en muchos campos, incluyendo la informática, las redes, la biología, la logística y más.

**Aquí tienes algunas características clave de los grafos:**

- **Nodos (vértices):** Representan entidades individuales y pueden contener información adicional, como nombres, identificadores o propiedades.

- **Aristas:** Son conexiones entre nodos y pueden ser direccionales (aristas dirigidas) o no direccionales (aristas no dirigidas). Las aristas pueden tener pesos que representan la distancia, el costo u otra métrica asociada con la conexión.

- **Grado de un nodo:** Es el número de aristas incidentes en un nodo. En el caso de grafos dirigidos, se distingue entre el grado de entrada (número de aristas que apuntan al nodo) y el grado de salida (número de aristas que salen del nodo).

- **Ciclo:** Es una secuencia de nodos conectados donde el primer y el último nodo son el mismo. Un grafo que no tiene ciclos se llama grafo acíclico.

- **Conectividad:** La conectividad de un grafo se refiere a la capacidad de alcanzar todos los nodos desde cualquier otro nodo. Un grafo puede ser conexo o no conexo.

- **Componentes conectados:** En un grafo no dirigido, un componente conectado es un subgrafo en el que hay un camino entre cada par de nodos. En un grafo dirigido, se habla de componentes fuertemente conectados y componentes débilmente conectados.

**Hay varios tipos de grafos, cada uno con sus propias características y aplicaciones:**

- **Grafo no dirigido:** Las aristas no tienen dirección. La relación entre dos nodos es simétrica.

- **Grafo dirigido:** Las aristas tienen dirección. La relación entre dos nodos puede ser asimétrica.

- **Grafo ponderado:** Las aristas tienen pesos asociados que representan alguna métrica, como la distancia o el costo.

- **Grafo bipartito:** Los nodos se pueden dividir en dos conjuntos disjuntos, de modo que no haya aristas que conecten nodos dentro del mismo conjunto.

- **Grafo cíclico y acíclico:** Dependiendo de si contiene ciclos o no.

> ✍️ Nota
>
> Los grafos se representan comúnmente utilizando matrices de adyacencia, listas de adyacencia o estructuras de adyacencia mixta, dependiendo de los requisitos específicos del problema. Son esenciales en muchos algoritmos y problemas de optimización, como la búsqueda de rutas, la planificación de horarios, la optimización de redes, el análisis de redes sociales y más.

</div>
