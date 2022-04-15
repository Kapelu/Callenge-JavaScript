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
