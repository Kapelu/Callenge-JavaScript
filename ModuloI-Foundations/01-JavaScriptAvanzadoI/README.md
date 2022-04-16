<h1 align='center'></h1>
<h1 align='center'><mark><i><big>JAVASCRIPT AVANZADO I</big></i></mark></h1>
 
## _**SINGELE THREADED Y SINCRÓNICO**_ (_Hilo simple y sincrónico_)
---
<br>

>_**SINGLE THREADED:** Se llaman asi a cada secuencia de instrucciones que puede ser manejada por un programa._

>_**SINCRÓNICO:** Quiere decir que los realiza de a uno por vez, que espera a que termine uno para ejecutar el siguiente._

_JavaScript es **Single Threaded** y **Sincrónico**, es decir que sólo puede hacer un sólo comando o instrucción en cada momento y que lo hace en orden, empieza la instrucción siguiente cuando termina la anterior._

<br>

---
## _**SYNTAX PARSER**_ (_Analizador de Sintaxis_)
---
<br>

_El **Syntax Parcer** Justamente lo que hace es leer nuestro código, analizarlo y decirnos si la sintaxis que estamos aplicando es correcta o no._

_esta propiedad la tienen la mayoría de los lenguajes, lo único que la diferencia es la sintaxis de cada lenguaje. Por ejemplo el (;) al final de cada linea de código, en JavaScript no es necesario pero en otros lenguajes si, y esto provocaría un error en la lectura del código. En el caso de Javascript nos tiraría un error cuando intentamos cambiar el valor a una variable que fue declarada como constante (`const`)._

_Lo importante de esto es que el intérprete además puede agregar ciertos comportamientos extras, vamos a ver alguna de esas cosas extras que el interprete maneja por nosotros._

### _**LEXICAL ENVIRONMENT**_ (Entorno Léxico)

_Esto hace referencia a  **Dónde** están declarados los _statments o expresiones_ en el código. Esto significa que el comportamiento de JavaScript puede cambiar segun **dónde** se haya escrito el código._
_Como vemos en el  siguiente ejemplo, para el interprete las 2 declaraciones de variables de arriba tendrán significados muy distintos. si bien la operación es igual en las 2 asignaciones, al estar en lugares distintos(una dentro de una función y la otra no), el interprete las parseara de forma distinta._

```javascript
function hola(){
    let foo= 'Hola!!!'
}
let bar= 'Chao!!!'
console.log(bar)   // Chao!!!
console.log(foo)   // foo in not defined
```

### _**EXECUTION CONTEXT**_ (Contexto de ejecución)

_Contiene la información sobre **Qué** código se esta ejecutando en cada momento. Además de manteber el codigo que tiene que ejecutar, tambien mantiene más información sobre desde donde se invovo ese codigo, en qué lexical enviornment está, etc._

### _**GLOBAL ENVIROMENT**_ (Entorno Global) 

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
## _**HOISTING**_ (_Creando el contexto de ejecución (Execution Context)_)
---
<br>

_El **HOISTING** es el primer ejemplo de cosas extrañas que hace el interprete sin  que nosotros se lo pidamos. Si no la conoces, nos puede pasar que veamos comportamientos extraños y no sepamos de donde vienen (como que podamos usar funciones que no hemos declarado antes de invocarlas!!!)._

_Veamos como el intérprete crea el contexto de ejecución global. Cuando el interprete lee un bloque de código realiza un proceso llamado **"HOISTING"**. Básicamente lo que hace es leer todo el codigo buscando declaraciones de variables y funciones, y reserva un espacio en memoria para ellas._

_Proba ejecutarlo siguiente en JavaScript_

```javascript
bar()
console.log(foo)

let foo= 'Hola, me declaro'
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
let global = 'Hola!'

function a() {
  // como no hay una variable llamada global en este contexto,
  // busca en el outer que es el global
  console.log(global) 
  global = 'Hello!' // cambia la variable del contexto global
}

function b(){
  // declaramos una variable global en nuestro contexto
  // esta es independiente 
  let global = 'Chao'
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
let global = 'Hola!'

function b(){
 let global = 'Chao' 
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
## _**ASYNCHRONOUS NON BLOCKING**_ (_Sin bloqueo asincrónico_)
---
<br>

_Cuando decimos código Asincrónico quiere que su ejecución o su completitud está diferida en el tiempo._ _Veamos que pasa cuando usamos una función asincrónica a la que le pasamos un callback._

> _**Callback**: Le llamamos así a una función que le pasamos como argumento a otra función, para que sea invocada en esta ultima, en general cuando se cumpla una condición o termine de realizar algo (leer un archivo, escribir en una base de datos, traer datos de internet, etc...)_

_Cuando declaramos un evento, el código o la función callback se va a ejecutar cuando suceda ese evento y no cuando el intérprete lee esas líneas, o cuando hacemos un request tipo AJAX y esperamos que llegue la respuesta, etc..._ _En todos estos casos, el engine JavaScript sigue haciendo o ejecutando otras líneas de código, y esto nos puede dar la sensación que estamos haciendo más de una cosa a la vez. Pero al principio dijimos que javascript es sincrónico y que ejecuta una sóla cosa a la vez._

_Para entender esto, tenemos que ver un poco la imagen grande. Cuando hablamos del engine Javascript tenemos que comprender que nunca actuá sólo, siempre va a estar acompañado por otros componentes de software._ _El Engine de JavaScript tiene formas de comunicarse con estos otros componentes._ _Por ejemplo, el componente encargado de renderizar las páginas, o el componente encargado de hacer http requests (en general estos están programados en C o C++)._ _Lo que sucede entonces, es que JavaScript le pide cosas a los demás componentes y les pide que le avise cuando terminen de hacer esas cosas._ _Por lo tanto, los demás componentes del browser se encargán de hacer ese trabajo y cuando sucede un evento o terminan una tarea le avisan al engine, este interrumpe su proceso normal y mete el callback en el execution stack para realizarla._ 

_Para lograr este comportamiento, el engine JavaScript tiene lo que se conoce como Event Queue, que es una cola que inicialmente está vacía y es en donde el browser (o quien se encarge de realizar las tareas) va a ir poniendo los avisos notificando que se terminó de ejecutar tal tarea. Ahora el engine JavaScript intercala cosas que tienen que ejecutar de su execution stack con cosas que tiene que hacer del event queue, de esta forma nos da la sensación que hay cosas que se hacen en paralelo. Cuando en realidad estamos delegando las tareas a otros componentes._

<br>

---
## _**TIPOS DE DATOS Y OPERADORES**_
---
<br>

_Todos los lenguajes de programación tienen características distintas que los caracterizan. Una de ellas es la forma con la que trabajan con variables y tipos de datos. JavaScript en particular tiene lo que se conoce como tipado dinámico o dynamic typing. Esto quiere decir que no tenemos que decirle al intérprete que tipo de datos contiene una variable, él lo calcula por si mismo. En otros lenguajes, al declarar una variable tenemos que avisarle qué tipos de datos vamos a guardar en ella (static typing o tipado estático). Otra cosa importante, es que JavaScript nos permite cambiar el tipo de datos que guardamos en una variable, por ejemplo, podemos tener una variable con un número y luego guardar una string en la misma variable, en otros lenguajes hacer esto nos resultaría en un error._

>_Cuando queremos convertir algo de un tipo de datos a otro, usamos el termino castear._

<br>

### _**TIPOS DE DATOS**_

<br>
 
_Un tipo de datos Primitivo, son tipos de datos básicos que vienen previamente definidos con el lenguaje. Usando estos tipos de datos primitivos vamos a poder crear tipos de datos más complejos. En Javascript hay seis tipos de datos primitivos:_

* **undefined**: Este representa que algo no está definido, como por ejemplo cuando declaramos una variable y no le asignamos nada, toma el valor undefined por defecto.
* **null**: Este tambien representa que algo no existe. Lo vamos a usar para decir que una variable está vacía o no tiene nada adentro. (No es lo mismo decir que una variable no está definida, a que NO tiene nada adentro. En el segundo caso sabemos que no tiene nada.)
* **Boolean**: true o false.
* **Number**: Este tipo de datos representa un número real. En JavaScript todos los números son representados como tipo flotantes.
* **String**: Una secuencia de caractéres.
* **Symbol**: Este tipo de datos es nuevo, está en el nuevo standart ES6. Por ahora lo ignoraremos.

<br>

### _**OPERADORES**_

<br>

_Un operador no es otra cosa que una función, pero al ser funciones básicas para el Engine y que se utilizan muchos, se escriben de una forma particular y que en general es corta y simple. Generalmente, los operadores toman dos parámetros y retornan un resultado. Por ejemplo: Para el intérprete al ver el signo +, sabe que tiene que ejecutar la función suma (que tiene internamente definida), y toma como parámetros los términos que estén a la izquierda y la derecha del operador. De hecho, es equivalente a tener una función que se llame suma y que reciba dos parámetros:_
```javascript
let a = 2 + 3   // 5

function suma(a,b){return a + b}   // usamos el mismo operador como ejemplo, si no deberiamos hacer sumas binarias

let a = suma(2,3)   // 5
```

_De hecho, esa forma de escribir tiene un nombre particular, se llama notación **infix** o **infija**, en ella se escribe el operador entre los operandos. Pero también existen otro tipos de notación como la **postfix** o **postfija** y la **prefix** o **prefija**. En estas última el operador va a la derecha de los operandos o a la izquierda respectivamente._

<br>

![](/scr/MI-Foundations/01-JavaScriptAvanzado/notaciones.png)

<br>

### _**Precedencia de Operadores y Asociatividad**_ 

* **Precedencia de operadores** es básicamente el orden en que se van a llamar las funciones de los operadores. Estás funciones son llamadas en orden de precedencia (las que tienen mayor precedencia se ejecutan primero). O sea que si tenemos más de un operador, el intérprete va a llamar al operador de mayor precendencia primero y después va a seguir con los demás.

* **Asociatividad** de operadores es el orden en el que se ejecutan los operadores cuando tienen la misma precedencia, es decir, de izquierda a derecha o de derecha a izquierda.

_Veamos un ejemplo para entenderlo mejor:_

```javascript
console.log( 3+ 4 * 5)    // 23
```
Para resolver esa expresión y saber qué resultado nos va a mostrar el intérprete deberíamos conocer en qué orden ejecuta las operaciones. Al ver la tabla de Precedencia de operadores [acá](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). Vemos que la multiplicación tiene una precedencia de 14, y la suma de 13. Por lo tanto el intérprete primero va a ejecutar la multiplicación y luego la suma con el resultado de lo anterior -> console.log( 3 + 20 ) -> console.log(23).

> Cuando invocamos una función en Javascript, los argumentos son evaluados primeros (se conoce como [__non-lazy__ evaluation]()), está definido en la [especificación](http://es5.github.io/#x11.2.3).
> No confundir el orden de ejecución con asociatividad y precedencia, [ver esta pregunta de StackOverflow](http://stackoverflow.com/questions/13849906/operator-precedence-and-associativity-with-math-floormath-random).

Ahora si tuvieramos la misma precedencia entraría en juego la asociatividad, veamos un ejemplo:

```javascript
var a = 1, b = 2, c = 3
a = b = c
console.log(a,b,c)    // 3 3 3 
```
_Para entender que paso tenemos que revisar la tabla por la asociatividad del operador de asignación =. Este tiene una precedencia de 3 y una asociatividad de `right-to-left`, es decir que las operaciones se realizan primero de **derecha** a **izquierda**. En este caso, primero se realiza b = c y luego a = b (en realidad al resultado de b = c, que retorna el valor que se está asignando). Por lo tanto al final de todo, todas las variable van a tener el valor 3. Si la asociatividad hubiese al revés, todos las variables tendrían el valor 1._

<br>

### _**COERSIÓN DE DATOS**_

<br>

_**Coersion**, asi se le llama cuando el interprete de JavaScript cambia un tipo de valor por otro, y esto es gracias a que JavaScript tiene `dynamic typing`._ _De hecho hay una [tabla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#A_model_for_understanding_equality_comparisons) donde podemos ver qué cosas son iguales y cuáles no cuando usamos coercion._

_Por ejemplo:_
```javascript
var a = 1 + 'hola'
console.log(a)    // 1hola 
```
_Lo que ocurrió es que el número 1 fue convertido a un string, y luego se realizó la operación de concatenado entre el 1 y el string hola. Lo importante es que nosotros nunca le pedimos a javascript que nos haga la conversión, el decidió hacerlo sólo (en otros lenguajes nos devolvería un error si quisieramos hacer lo mismo!)._

> Cuando usamos ***` "===" `*** le estamos diciendo al interprete que **NO** convierta los operadores antes de hacer la comparacón.

>**Prueben ver a qué convierten las cosas, para booleanos usar Boolean(), para strings String() y números Number()**.

```javascript
Number('3') // devuelve el número 3. Obvio!
Number(false) // devuelve el número 0. mini Obvio.
Number(true)  // devuelve el número 1. menos mini Obvio.
Number(undefined) // devuelve `NaN`. No era obvio, pero tiene sentido.
Number(null) // devuelve el nuḿero 0. WTFFFF!!! porqueeEE no debería ser `NaN`??
```
Podríamos decir que el valor `NaN` es un tipo primitivo de JavaScript. Este aparece cuando JavaScript intenta convertir algo a un número, pero no puede hacerlo. Literalmente significa `Not a Number`.

