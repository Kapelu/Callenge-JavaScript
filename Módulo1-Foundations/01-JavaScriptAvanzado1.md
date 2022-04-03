<H2 style='color:#FFC300' align= center>CONCEPTOS FUNDAMENTALES DE JAVASCRIPT</H2>
  
<H6 align= rigth style='color:#2471A3'>SINGLE THREDED y SINCRONICO <i>(Hilo único y Sincronico)</i></H6>

Significa que JavaScript solo puede ejecutar una sola intruccion y en orden. Parece confuso dado a la velocidad de los procesadores que dan la sensacion de paralelismo del mismo.
  
<H4 align= rigth style='color:#2471A3' >SYNTAX PARSER <i>(Analizador de sintaxis)</i></H4>

Analiza la Sintaxis, basicamente es esto. JavaScript lee el codigo y determiina si su sintaxis es valida o no, en caso de estar bien se genera el codigo a nivel maquina para ejecutar las instrucciones, sumando a esto ciertos comportamientos extras, como ser el entorno lexico.

  
<H6 align= rigth style='color:#2471A3'>LEXICAL ENVIRONMENT <i>(Analizador de sintaxis)</i></H6>

Esto tiene que ver con 'DONDE' estan declarados los estatment en el codigo. significa que dependiendo de donde esten declarado es el comportamiento que tendran. ej:

  

```js
function hola(){let foo= 'Hola!'}
let bar= 'Nos vemos!'
```

_Para JavaScript las dos declaraciones estan bien, pero ambas significan cosas totalmente diferente, por que una esta dentro de una funcion y la otra esta fuera de ella_

### Execution Context (contexto de ejecución)
El contexto de ejecución hace referencia a que codigo se ejecuta en cada momento, asi como también informacion desde donde se invoca el código, y en 

contiene información sobre *qué* código se está ejecutando en cada momento. Además de mantener el código que tiene que ejecutar, también mantiene más información sobre desde dónde se invocó ese código, en qué lexical enviroment está, etc...  

### Global Enviroment  

Cada vez que ejecutamos algo en JavaScript **se corre dentro de un contexto de ejecución**. Como todo el código corre en un contexto, si no especificamos ese contexto (veremos cómo se hace despues) entonces el código se va a ejecutar en el __contexto global__, que es el contexto de base que nos crea automáticamente el interprete.  

> Básicamente, vamos a decir que es __global__ cualquier bloque de código que no esté declarado dentro de una función.

  