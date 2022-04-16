<h1 align='center'></h1>
<h1 align='center'><mark><i><big>JAVASCRIPT AVANZADO I</big></i></mark></h1>
 
## _**SINGELE THREADED Y SINCRÓNICO**_ (Hilo simple y sincrónico)
---
<br>

>_**SINGLE THREADED:** Se llaman asi a cada secuencia de instrucciones que puede ser manejada por un programa._

>_**SINCRÓNICO:** Quiere decir que los realiza de a uno por vez, que espera a que termine uno para ejecutar el siguiente._

_JavaScript es **Single Threaded** y **Sincrónico**, es decir que sólo puede hacer un sólo comando o instrucción en cada momento y que lo hace en orden, empieza la instrucción siguiente cuando termina la anterior._

<br>

---
## _**SYNTAX PARSER**_ (Analizador de Sintaxis)
---
<br>

_El **Syntax Parcer** Justamente lo que hace es leer nuestro código, analizarlo y decirnos si la sintaxis que estamos aplicando es correcta o no._

_esta propiedad la tienen la mayoría de los lenguajes, lo único que la diferencia es la sintaxis de cada lenguaje. Por ejemplo el (;) al final de cada linea de código, en JavaScript no es necesario pero en otros lenguajes si, y esto provocaría un error en la lectura del código. En el caso de Javascript nos tiraría un error cuando intentamos cambiar el valor a una variable que fue declarada como constante (`const`)._

_Lo importante de esto es que el intérprete además puede agregar ciertos comportamientos extras, vamos a ver alguna de esas cosas extras que el interprete maneja por nosotros._

### _**LEXICAL ENVIRONMENT (Entorno Léxico):**_ 

_Esto hace referencia a  **Dónde** están declarados los _statments o expresiones_ en el código. Esto significa que el comportamiento de JavaScript puede cambiar segun **dónde** se haya escrito el código._
_Como vemos en el  siguiente ejemplo, para el interprete las 2 declaraciones de variables de arriba tendrán significados muy distintos. si bien la operación es igual en las 2 asignaciones, al estar en lugares distintos(una dentro de una función y la otra no), el interprete las parseara de forma distinta._

```javascript
function hola(){
    var foo= 'Hola!!!'
}
var bar= 'Chao!!!'
console.log(bar)   // Chao!!!
console.log(foo)   // foo in not defined
```

### _**EXECUTION CONTEXT (Contexto de ejecución):**_ 

_Contiene la información sobre **Qué** código se esta ejecutando en cada momento. Además de manteber el codigo que tiene que ejecutar, tambien mantiene más información sobre desde donde se invovo ese codigo, en qué lexical enviornment está, etc._

### _**GLOBAL ENVIROMENT (Entorno Global):**_ 

_Basicamente, vamos a decir que es **GLOBAL** cualquier bloque de código que no este declarado de ntro de una función. Cada vez que ejecutamos algo en JavaScript se corre dentro de un contexto de ejecución._

<br>

![](/scr/MI-Foundations/01-JavaScriptAvanzado/context.png)

_Cuando se crea el **Lexical Environment** dentro del **Execution Context** se crea el **Global Environment** y ademas una variable llamada **THIS**. que es la que hace referencia al **Global environment**. que en caso de que fuera muestra consola en el engine de JavaScript de **Chrome**, en el caso de ser otro el entorno global, esta variable _this_ va a hacer referencia al **objeto global(global environment)** que se este ejecutando. Pero siempre hay un **Global Environment**._

En JavaScript, cuando declaramos variables u funciones en el contexto global, estas se guardan en el objeto global. Si declaramos variables y funciones en la consola de desarrolador, vamos a ver que estas apareceran dentro de **windows** que es el objeto global de la consola de engine de chrome, o sea nuestro **Global Environment**.

<br>

![](/scr/MI-Foundations/01-JavaScriptAvanzado/globalObject.png)
<br>

<br>

---
## _**HOISTING**_ (_Creando el contexto de ejecución (Execution Context))_
---
<br>

_El **HOISTING** es el primer ejemplo de cosas extrañas que hace el interprete sin  que nosotros se lo pidamos. Si no la conoces, nos puede pasar que veamos comportamientos extraños y no sepamos de donde vienen (como que podamos usar funciones que no hemos declarado antes de invocarlas!!!)._

_Veamos como el intérprete crea el contexto de ejecución global. Cuando el interprete lee un bloque de código realiza un proceso llamado **"HOISTING"**. Básicamente lo que hace es leer todo el codigo buscando declaraciones de variables y funciones, y reserva un espacio en memoria para ellas._

_Proba ejecutarlo siguiente en JavaScript_

```javascript
bar()
console.log(foo)

var foo= 'Hola, me declaro'
function bar(){
    console.log('Soy una función')
} 
```
_En otros lenguajes, si intentaramos invocar una función o una variable que está definida **más abajo** seguramente tendríamos un error._ _Pero JavaScript, al realizar el proceso de **"hoisting"**, ya que tiene reservado el espacio para esa variable y funciones, por lo tanto no se genera un error. Notemos que la puedo ejecutar, esto quiere decir que durante el **hoisting** guardo su contenido tambien, no solo reservo el espacio._ _Pero con el caso de la variable, solo reservo el espacio, ya que cuando hacemos el **console.log** vemos que contiene_ _**undefined**._ 

> _Básicamente **HOISTING** "mueve" las declaraciones a la parte superior de nuestro codigo. Pero esto solo lo hace con las declaraciones y no con las inicializaciones._

La segunda fase es la face de **"EJECUCION"**, en esta face ya tenemos todo lo que se creo en la primera face, y ahora si el interprete **ejecuta** nuestro código, linea por linea.

<br>

---
## _**EXECUTION STACK**_ (_Pila de ejecución_)
---
<br>

_Este proceso de crear contextos de ejecución sucede siempre al principio cuando se crea el contexto global, ahora vamos a ver que también sucede cada vez que invocamos una función en nuestro código, como se pueden imaginar, en un script cualquiera, es muy probable que se creen varios contextos de ejecución (muchas invocaciones a funciones), estos contextos se van a ir apilando en la pila de ejecución o execution stack._

_Para ilustar cómo se van creando y cómo se apilan los contextos veamos el siguiente código:_

```javascript
function b() {
  console.log('B!')
};

function a() {
  // invoca a la función b
  b()
}

//invocamos a
a()
```
_Veamos que ocurre cuando corremos este script:_
1. _Lo primero que pasa es la creción del contexto global y el proceso de hoisting, entonces la función a y b van a estar en memoria._ 
2. _Empieza la fase de ejecución, en esa fase es que el interprete va a recorrer línea por línea el script. En nuestro ejemplo hay una única línea para ejecutar (las otras las leyó durante el hoisting) que es la línea donde invocamos a a()._

<br>

![](/scr/MI-Foundations/01-JavaScriptAvanzado/executionStack.png)

<br>

_Cada invocación a una función crea un contexto de ejecución nuevo, que pasa por las dos fases de creación antes mencionadas. Cuando se termina de ejecutar, se destruye y se saca de la pila de ejecución para seguir con los que quedan._

<br>

---
## _**SCOPE**_ (_Alcance_)
---
<br>

_Ahora que sabemos que existen los contextos de ejecución, podemos entender más fácilmente que ocurre con las variables que creamos dentro de las funciones que invocamos. Cada contexto maneja sus propias variables, y son independientes de los demás. Justamente por eso, podemos usar los mismos nombres de variables dentro de funciones que creamos sin que pisen las demás. También sabemos que podemos acceder a una variable declarada en el contexto global dentro de una función. Esto se debe a que JavaScript primero busca una variable dentro del contexto que se está ejecutando, si no la encuentra ahí, usa la referencia al outer context para buscarla dentro de ese contexto. Gracias a esto vamos a poder acceder a variables que estén afuera de nuestro contexto (siempre y cuando no hayamos declarado una nueva con el mismo nombre!!)._

_Veamos el siguiente ejemplo:_

```javascript
var global = 'Hola!'

function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global) 
  global = 'Hello!' // cambia la variable del contexto global
}

function b(){
  // declaramos una variable global en nuestro contexto
  // esta es independiente 
  var global = 'Chao'
  console.log(global)
}

a() // 'Hola!'
b() // 'Chao'
console.log(global) // 'Hello'
```

_Para esto vamos a introducir el término scope, este es el set de variable, objeto y funciones al que tenemos acceso en determinado contexto. En el ejemplo anterior, la variable global está definida en dos scopes distintos, uno es el scope global y el otro es el scope de la función b, esto quiere decir que, a pesar de tener el mismo nombre, estas dos variables son distintas._

_Justamente, cuando JavaScript no encuentra una variable en su scope, lo que hace es buscar en otros scopes (de contextos que esten en la referencia de outer contexts)._ _A esta búsqueda en distintos scope se la conoce como the scope chain, ya que el intérprete busca en cadena scope por scope por el nombre de la variable, hasta llegar al scope global._ _Noten que el outer enviroment no es necesariamente el contexto que esté debajo en la pila de ejecucción, ni tampoco el contexto en donde se invocó la función, si no es el contexto en donde se definió la función! (Se acuerdan que dijimos que en javascript el lexical enviroment era importante?)._

> **NOTA:** Si el intérprete llega el scope Global sin encontrar la variable, entonces va a tirar un error.

_Prueben el siguiente código y miren comó cambió todo cuando declaramos la funcion a dentro de la función b:_

```javascript
var global = 'Hola!'

function b(){
 var global = 'Chao' 
 console.log(global) // Chao
 function n() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es scope de b;
  console.log(global) //Chao 
  global = 'Hello!' // cambia la variable del contexto de b()
 }  
 n()
}

//No se puede llamar a n desde el scope global, xq acá no existe. solo existe dentro del scope de b.
n() // a is not defined
b()
console.log(global); // 'Hola!'
```

<br>

---
## _**ASYNCHRONOUS NON BLOCKING**_ (Sin bloqueo asincrónico)
---
<br>

_Cuando decimos código Asincrónico quiere que su ejecución o su completitud está diferida en el tiempo._ _Veamos que pasa cuando usamos una función asincrónica a la que le pasamos un callback._

> _**Callback**: Le llamamos así a una función que le pasamos como argumento a otra función, para que sea invocada en esta ultima, en general cuando se cumpla una condición o termine de realizar algo (leer un archivo, escribir en una base de datos, traer datos de internet, etc...)_

_Cuando declaramos un evento, el código o la función callback se va a ejecutar cuando suceda ese evento y no cuando el intérprete lee esas líneas, o cuando hacemos un request tipo AJAX y esperamos que llegue la respuesta, etc..._ _En todos estos casos, el engine JavaScript sigue haciendo o ejecutando otras líneas de código, y esto nos puede dar la sensación que estamos haciendo más de una cosa a la vez. Pero al principio dijimos que javascript es sincrónico y que ejecuta una sóla cosa a la vez._

_Para entender esto, tenemos que ver un poco la imagen grande. Cuando hablamos del engine Javascript tenemos que comprender que nunca actuá sólo, siempre va a estar acompañado por otros componentes de software._ _El Engine de JavaScript tiene formas de comunicarse con estos otros componentes._ _Por ejemplo, el componente encargado de renderizar las páginas, o el componente encargado de hacer http requests (en general estos están programados en C o C++)._ _Lo que sucede entonces, es que JavaScript le pide cosas a los demás componentes y les pide que le avise cuando terminen de hacer esas cosas._ _Por lo tanto, los demás componentes del browser se encargán de hacer ese trabajo y cuando sucede un evento o terminan una tarea le avisan al engine, este interrumpe su proceso normal y mete el callback en el execution stack para realizarla._ 

_Para lograr este comportamiento, el engine JavaScript tiene lo que se conoce como Event Queue, que es una cola que inicialmente está vacía y es en donde el browser (o quien se encarge de realizar las tareas) va a ir poniendo los avisos notificando que se terminó de ejecutar tal tarea. Ahora el engine JavaScript intercala cosas que tienen que ejecutar de su execution stack con cosas que tiene que hacer del event queue, de esta forma nos da la sensación que hay cosas que se hacen en paralelo. Cuando en realidad estamos delegando las tareas a otros componentes._


