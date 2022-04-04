<H2 style='color:#FFC300' align= center>CONCEPTOS FUNDAMENTALES DE JAVASCRIPT</H2>
  
<H6 align= rigth style='color:#2471A3'>SINGLE THREDED y SINCRONICO <i>(Hilo único y Sincronico)</i></H6>

Significa que JavaScript solo puede ejecutar una sola intruccion y en orden. Parece confuso dado a la velocidad de los procesadores que dan la sensacion de paralelismo del mismo.
  
<H6 align= rigth style='color:#2471A3' >SYNTAX PARSER <i>(Analizador de sintaxis)</i></H6>

Analiza la Sintaxis, basicamente es esto. JavaScript lee el codigo y determiina si su sintaxis es valida o no, en caso de estar bien se genera el codigo a nivel maquina para ejecutar las instrucciones, sumando a esto ciertos comportamientos extras, como ser el entorno lexico.

  
<H6 align= rigth style='color:#2471A3'>LEXICAL ENVIRONMENT <i>(Analizador de sintaxis)</i></H6>

Esto tiene que ver con 'DONDE' estan declarados los estatment (sentencias) en el codigo. significa que dependiendo de donde esten declarado es el comportamiento que tendran. ej:

  

```js
function hola(){let foo= 'Hola!'}
let bar= 'Nos vemos!'
```

_Para JavaScript las dos declaraciones estan bien, pero ambas significan cosas totalmente diferente, por que una esta dentro de una funcion y la otra esta fuera de ella_

<H6 align= rigth style='color:#2471A3'>EXECUTION CONTEXT <i>(Contexto de Ejecución)</i></H6>

El contexto de ejecución hace referencia a que codigo se ejecuta en cada momento, asi como también informacion desde donde se invoca el código, y en 

contiene información sobre *qué* código se está ejecutando en cada momento. Además de mantener el código que tiene que ejecutar, también mantiene más información sobre desde dónde se invocó ese código, en qué lexical enviroment está, etc...  

<H6 align= rigth style='color:#2471A3'>GLOBAL ENVIROMENT <i>(Entorno Global)</i></H6>

Cuando ejecutamos algo en JavaScript, corre dentro de un _contexto de ejecución._ Si no especificamos ese contexto (Por ejemplo, una función) entonces el código se va a ejecutar en el _contexto global_, que es el contexto de base que nos crea automáticamente el interprete.  Básicamente, vamos a decir que es _global_ cualquier bloque de código que no esté declarado dentro de una función.

En JavaScript, cuando declaramos variables y funciones en el contexto global, estos se guardan en el objeto global. Si declaramos variables y funciones en la consola de desarrollador, vamos a ver que estás aparecerán dentro de `window` que es el objeto global.

<H6 align= rigth style='color:#2471A3'>Creando el contexto de ejecución  <i>HOISTING </i></H6>

Cuando el interprete lee un bloque de código realiza un proceso llamado `hoisting`. Básicamente lee todo el código buscando declaraciones de variables y funciones, y reserva un espacio en memoria para ellas.  

Probá ejecutar lo siguiente en JavaScript:  

```javascript
bar()
console.log(foo)  // undefined
var foo = 'Hola, me declaro'  

function bar() {console.log('Soy una función')}  // Soy una función

```

Al realizar el proceso de `hoisting`, ya tiene reservado el espacio para esas variable y funciones, por lo tanto no se genera un error. Notesé que a la función la pudo ejecutar, esto quiere decir que durante el hoisting guardó su contenido también, no sólo reservó el espacio. Pero con el caso de la variable, sólo reservo el espacio, ya que cuando hacemos el `console.log` vemos que contiene `undefined`.

Para entender por qué el interprete hace esto, tenemos que saber cómo se crea el contexto de ejecución. Esto se hace en dos fases. 
* La primera es la fase de creación (creation phase). En esta fase el interprete genera el _objeto global_, asigna la variable _this_ y las referencias a otro contexto de ejecución (Outer Context), y además reserva el espacio para todas las variables y funciones que vaya a utilizar ese contexto, justamente en este último paso es donde se genera el proceso de `hoisting`.

* La segunda fase es la _fase de ejecucción_, en esta fase, ya tenemos todo lo que se creo en la primera fase, y ahora sí el intérprete __ejecuta__ nuestro código, línea por línea!.


> El hosting es el primer ejemplo de las _cosas extras_ que hace el interprete sin que nosotros se lo pidamos.


Este proceso de crear contextos de ejecución sucede siempre al principio cuando se crea el contexto global, ahora vamos a ver que también sucede cada vez que invocamos una función en nuestro código, como se pueden imaginar, en un script cualquiera, es muy probable que se creen varios contextos de ejecución (muchas invocaciones a funciones), estos contextos se van a ir _apilando_ en la __pila de ejecución o execution stack__.

  
<H6 align= rigth style='color:#2471A3'>EXECUTION STACK <i>(Pila de ejecución)</i></H6>

Para ilustar cómo se van creando y cómo se apilan los contextos veamos el siguiente código:

```javascript
function b() {
 console.log('B!')                  // PILA DE EJECUCION
}
function a() {b()}
a();
```

Veamos que ocurre cuando corremos este script: Como sabemos, lo primero que pasa es la creción del contexto global y el proceso de _hoisting_, entonces la función `a` y `b` van a estar en memoria. Una vez que termina eso, empieza la fase de ejecución, en esa fase es que el interprete va a recorrer línea por línea el script. En nuestro ejemplo hay una única línea para ejecutar (las otras las leyó durante el _hoisting_) que es la línea donde invocamos a `a()`.

> Cada invocación a una función crea un contexto de ejecución nuevo, que pasa por las dos fases de creación antes mencionadas. Cuando se termina de ejecutar, se _destruye_ y se saca de la pila de ejecución para seguir con los que quedan.

### Scope
<H6 align= rigth style='color:#2471A3'>SCOPE <i>(Alcance)</i></H6>
  

Ahora que sabemos que existen los contextos de ejecución, podemos entender más fácilmente que ocurre con las variables que creamos dentro de las funciones que invocamos. Cada contexto maneja sus propias variables, y son independientes de los demás. Justamente por eso, podemos usar los mismos nombres de variables dentro de funciones que creamos sin que _pisen_ las demás.

También sabemos que podemos acceder a una variable declarada en el contexto global dentro de una función. Esto se debe a que JavaScript primero busca una variable dentro del contexto que se está ejecutando, si no la encuentra ahí, usa la referencia al `outer context` para buscarla dentro de ese contexto. Gracias a esto vamos a poder acceder a variables que estén afuera de nuestro contexto (siempre y cuando no hayamos declarado una nueva con el mismo nombre!!).

Veamos en el código siguiente el comportamiento de las variables:

```javascript
var global = 'Hola!'  

function a() {
 // como no hay una variable llamada global en este contexto,
 // busca en el outer que es el global
 console.log(global);
 global = 'Hello!'; // cambia la variable del contexto global
}

function b(){
 // declaramos una variable global en nuestro contexto
 // esta es independiente
 var global = 'Chao';
 console.log(global);
}

a(); // 'Hola!'
b(); // 'Chao'
console.log(global); // 'Hello'
```

Para esto vamos a introducir el término `scope`, este es **el set de variable, objeto y funciones al que tenemos acceso en determinado contexto**. En el ejemplo anterior, la variable `global` está definida en dos `scopes` distintos, uno es el `scope global` y el otro es el `scope` de la función `b`, esto quiere decir que, a pesar de tener el mismo nombre, estas dos variables son distintas.

Justamente, cuando JavaScript no encuentra una variable en su scope, lo que hace es buscar en otros scopes (de contextos que esten en la referencia de `outer contexts`). A esta búsqueda en distintos scope se la conoce como __the scope chain__, ya que el intérprete busca en cadena scope por scope por el nombre de la variable, hasta llegar al scope global. Noten que el `outer enviroment` no es necesariamente el contexto que esté debajo en la pila de ejecucción, ni tampoco el contexto en donde se invocó la función, si no __es el contexto en donde se definió la función!__ (Se acuerdan que dijimos que en javascript el _lexical enviroment_ era importante?).

> Si el intérprete llega el scope Global sin encontrar la variable, entonces va a tirar un error.

Prueben el siguiente código y miren comó cambió todo cuando declaramos la funcion `a` __dentro__ de la función `b`:

```javascript
var global = 'Hola!'
function b(){
	var global = 'Chao'
	console.log(global) // Chao
	function a() {
		// como no hay una variable llamada global en este contexto,
		// busca en el outer que es scope de b
		console.log(global) //Chao
		global = 'Hello!'; // cambia la variable del contexto de b()
	}
	a()
}

//a(); Ya no puedo llamar a a desde el scope global, acá no existe.
b();
console.log(global); // 'Hola!'
```

  

## Asynchronous non blocking
<H6 align= rigth style='color:#2471A3'>ASYNCHRONOUS NON BLOCKING <i>(Bloque no Asincrónico)</i></H6>

Ahora que sabemos un poco más sobre cómo hace JavaScript para ejecutar el código, veamos que pasa cuando usamos una función asincrónica a la que le pasamos un callback.  

> __Callback__: Le llamamos así a una función que le pasamos como argumento a otra función, para que sea invocada en esta ultima, en general cuando se cumpla una condición o termine de realizar algo (leer un archivo, escribir en una base de datos, traer datos de internet, etc...) .

Cuando decimos código _Asincrónico_ quiere que su ejecución o su completitud está diferida en el tiempo. Por ejemplo, cuando declaramos un evento, el código o la función callback se va a ejecutar cuando suceda ese evento y no cuando el intérprete lee esas líneas, o cuando hacemos un request tipo _AJAX_ y esperamos que llegue la respuesta, etc... En todos estos casos, el engine JavaScript sigue haciendo o ejecutando otras líneas de código, y esto nos puede dar la _sensación_ que estamos haciendo más de una cosa a la vez. Pero al principio dijimos que javascript es sincrónico y que ejecuta _una sóla cosa a la vez_, veamos cómo logra darnos esa [_sensación_](https://www.youtube.com/watch?v=nJXVIjxRq_A).

Para entender esto, tenemos que ver un poco la imagen grande. Cuando hablamos del engine Javascript tenemos que comprender que nunca actuá sólo, siempre va a estar acompañado por otros componentes de software. El Engine de JavaScript tiene formas de comunicarse con estos otros componentes. Por ejemplo, el componente encargado de _renderizar_ las páginas, o el componente encargado de hacer _http requests_ (en general estos están programados en C o C++). Lo que sucede entonces, es que JavaScript le __pide__ cosas a los demás componentes y les pide que le __avise__ cuando terminen de hacer esas cosas. Por lo tanto, los demás componentes del browser se encargán de hacer ese trabajo y cuando sucede un evento o terminan una tarea le _avisan_ al engine, este interrumpe su proceso normal y mete el callback en el execution stack para realizarla.

Para lograr este comportamiento, el engine JavaScript tiene lo que se conoce como __Event Queue__, que es una cola que inicialmente está vacía y es en donde el browser (o quien se encarge de realizar las tareas) va a ir poniendo los avisos notificando que se terminó de ejecutar tal tarea. Ahora el engine JavaScript intercala cosas que tienen que ejecutar de su _execution stack_ con cosas que tiene que hacer del __event queue__, de esta forma nos da la sensación que hay cosas que se hacen en paralelo. Cuando en realidad estamos delegando las tareas a otros componentes.

> Para entender exactamente como trabaja el _Event queue_ en conjunto con los demás componentes miren [este video](https://www.youtube.com/watch?v=8aGhZQkoFbQ), en donde está perfectamente explicado.


<br>
<br>
<br>
[Home](/index.md)
