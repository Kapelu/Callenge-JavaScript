<p style='text-align: justify; color: #144b8c'><i>Son preguntas de opciones múltiples, desde lo más básico a lo avanzado, con actualización diaria. Comprueba si realmente conoces <span style='background-color:#FFEB3B; color: #212121;'><b><i>⠀JavaScript⠀</i></b></span> ó actualiza tus conocimientos 💪 🚀</i></p> 

<p style='text-align: justify; color: #144b8c'><i>
Las respuestas se encuentran en las secciones contraídas debajo de las preguntas, simplemente haz clic en ellas para expandirlas. EXITOS !!! 💛</i></p> 

<p style='text-align: justify; color: #144b8c'><i>
No olvides dejar tu 👉 <button style= 'background-color:#FFEB3B; text-shadow: 1px 2px #FFEB3B' onclick="window.location.href='https://form.jotform.com/221181252861652'"><b><i>Feedback</i></b></button> 👍 💪 GRACIAS!!!
</i></p> 

<br>

---

#### 1. ¿Qué devuelve la siguiente función?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` y `undefined`
- B: `Lydia` y `ReferenceError`
- C: `ReferenceError` y `21`
- D: `undefined` y `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: D</p>
<p>

Dentro de la función, primero declaramos la variable <strong>`name`</strong> con la palabra reservada <strong>`var`</strong>. Esto significa que la variable se <strong><i>`eleva`</i></strong> (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino <a href="https://developer.mozilla.org/es/docs/Glossary/Hoisting" target="_blank"><strong>"Hoisting"</strong></a> con el valor predeterminado de <strong>`indefinido`</strong>, hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable <strong>`name`</strong>, por lo que aún mantiene el valor de <strong>`Undefined`</strong>.

Las variables con la palabra clave <strong>`let`</strong> (y <strong>`const`</strong>) se <strong><i>`elevan`</i></strong>, pero a diferencia de <strong>`var`</strong>, no se inicializa. No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la <a href="https://wesbos.com/temporal-dead-zone/" target="_blank"><strong>"zona muerta temporal"</strong></a>. Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un <strong>`ReferenceError`</strong>
</p>
</details>

---

#### 2. ¿Qué devuelve la siguiente función?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` y `0 1 2`
- B: `0 1 2` y `3 3 3`
- C: `3 3 3` y `0 1 2`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>

Debido a la cola de eventos en JavaScript, la función <strong>`setTimeout`</strong> se llama una vez el ciclo se ha ejecutado. Dado que la variable <strong>`i`</strong> en el primer bucle se declará utilizando la palabra reservada <strong>`var`</strong>, este valor es global. Durante el bucle, incrementamos el valor de <strong>`i`</strong> en <strong>`1`</strong> cada vez, utilizando el operador unario <strong>`++`</strong>. Cuando se invocá la función <strong>`setTimeout`</strong> <strong>`i`</strong> era igual a <strong>`3`</strong> en el primer ejemplo.

En el segundo bucle, la variable <strong>`i`</strong> se declará utilizando la palabra reservada <strong>`let`</strong>, las variables declaradas con la palabra reservada <strong>`let`</strong> (y <strong>`const`</strong>) tienen un ámbito de bloque (un bloque es lo que se encuentra entre <strong>`{}`</strong>). Durante cada iteración, <strong>`i`</strong> tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.
</p>
</details>

---

#### 3. ¿Qué devuelve la siguiente función?

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

- A: `20` y `62.83185307179586`
- B: `20` y `NaN`
- C: `20` y `63`
- D: `NaN` y `63`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B</p>
<p>

Hay que tener en cuenta aqui que el valor de <trong>`diámetro`</trong> es una función regular o <i>normal</i>, mientras que el valor de <trong>`perímetro`</trong> es una función de flecha.

Con las funciones de flecha, la palabra clave <trong>`this`</trong> se refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro", no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).

No hay valor <trong>`radius`</trong> en ese objeto, que devuelve<trong>`undefined`</trong>.
</p>
</details>

---

#### 4. ¿Qué devuelve la siguiente función?

```javascript
+true;
!"Lydia";
```

- A: `1` y `false`
- B: `false` y `NaN`
- C: `false` y `false`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A</p>
<p>

En el primer caso se intenta convertir un operando en un número. <trong>`true`</trong> es<trong>`1`</trong>, y <trong>`false`</trong> es<trong>`0`</trong>. 

En el segundo caso la cadena <trong>`'Lydia'`</trong> es un valor verdadero. Lo que realmente estamos preguntando es "¿es este verdadero valor falso?". Esto devuelve <trong>`false`</trong>.
</p>
</details>

---

#### 5. ¿Cuál es el resultado?

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B</p>
<p>

¡El método <strong>`.push()`</strong> devuelve la _longitud_ del nuevo array! Al principio, el array contenía un elemento (el string <strong>`"banana"`</strong>) y tenía una longitud de <strong>`1`</strong>. Después de añadir el string <strong>`"apple"`</strong> al array, el array contiene dos elementos, y tiene una longitud de <trong>`2`</trong>. Esto es lo que devuelve la función <strong>`addToList`</strong>.

El método <strong>`push`</strong> modifica el array original. Si quisieras devolver el <i>array</i> de la función en lugar de la <strong><i>`longitud del array`</i></strong> deberías haber devuelto <strong>`list`</strong> después de introducir <strong>`item`</strong> en él.
</p>

</details>

---

#### 6. ¿Qué devuelve la siguiente función?

```javascript
let greeting;
greetign = {}; // Typo!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A</p>
<p>

Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global. Cuando escribimos erróneamente <strong>`greeting`</strong> como <strong>`greetign`</strong>, el intérprete de JS ve esto como <strong>`global.greetign = {}`</strong> (o `window.greetign = {}`</strong> en un navegador).

Para evitar esto, podemos usar el <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto" target="_blank"><strong>"use estrict"</strong></a>. Esto asegura que se haya declarado una variable antes de establecerla igual a cualquier cosa.
</p>
</details>

---

#### 7. ¿Qué devuelve la siguiente función?

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>

JavaScript es un **lenguaje dinámicamente tipado** o de tipado débil, esto significa que no es necesario declarar el tipo de variable antes de usarla pues será determinado automáticamente cuando el programa comience a ser procesado. Los valores se pueden convertir automáticamente en otro tipo sin que se sepa, esto se llama denomina _implicit type coercion_ (Más info <a href="https://medium.com/@ManuCastrillonM/entendiendo-la-coerci%C3%B3n-en-javascript-bc202d22d23f" target="_blank"><strong>Aqui</strong></a>). **La coerción es la conversión de un tipo a otro.**

En este ejemplo, JavaScript convierte el número <strong>`1`</strong> en una cadena, para que la función tenga sentido y devuelva un valor. Durante la suma de un tipo numérico (<strong>`1`</strong>) y un tipo de cadena (<strong>`'2'`</strong>), el número se trata como una cadena. Podemos concatenar cadenas como <strong>`"Hello" + "World"`</strong>, así que lo que está pasando aquí es <strong>`"1" + "2"`</strong> que devuelve <strong>`"12"`</strong>
</p>
</details>

---

#### 8. ¿Qué devuelve la siguiente función?

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>

El operador **postfix** unario <strong>`++`</strong>:

1. Devuelve el valor (esto devuelve <strong>`0`</strong>)
2. Incrementa el valor (el número es ahora <strong>`1`</strong>)

El operador unario **prefix** <strong>`++`</strong>:

1. Incrementa el valor (el número es ahora <strong>`2`</strong>)
2. Devuelve el valor (esto devuelve <strong>`2`</strong>)

Por lo tanto, devuelve <strong>`0 2 2 2`</strong>.
</p>
</details>

---

#### 9. ¿Qué ocurre cuando hacemos esto?

```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: No pasa nada, es totalmente correcto.
- B: `SyntaxError`. No es posible agregar propiedades a una función de esta manera.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A</p>
<p>

Esto es perfectamente posible en JavaScript, porque las funciones son objetos (Recuerda: **todo** aparte de los tipos primitivos son objetos en JS)

Una función es un tipo especial de objeto. El código que escribes tú mismo no es la función real. La función es un objeto con propiedades. Esta propiedad es invocable.

</p>
</details>

---

#### 10. ¿Qué devuelve la siguiente función?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

console.log(member.getFullName());
```

- A: `TypeError`
- B: `SyntaxError`
- C: `Lydia Hallie`
- D: `undefined` `undefined`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A</p>
<p>

En JS no se pueden añadir propiedades a un constructor como se puede hacer con los objetos. Si se desea añadir una característica a todos los objetos a la vez, se debe utilizar [prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes) en su lugar. Así que en este caso,

```js
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
```

habría hecho que `member.getFullName()` funcionara. ¿Por qué es bueno? Imaginemos que añadimos este método al constructor. Quizás no todas las "personas" necesitaban este método. Esto desperdiciaría mucho espacio de memoria, ya que todavía tendrían esa propiedad, que ocupa espacio de memoria para cada caso. En cambio, si sólo lo añadimos al prototipo, sólo lo tenemos en un lugar en la memoria, ¡pero todos ellos tienen acceso a él!

</p>
</details>

---

#### 11. ¿Qué devuelve la siguiente función?

```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
```

- A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`
- B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`
- C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`
- D:`Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A</p>
<p>

Para `sarah`, no usamos la palabra reservada `new`. Cuando se usa `new`, se refiere al nuevo objeto vacío que creamos. Sin embargo, si no se agrega `new', se refiere al **objeto global**!

En el ejemplo `this.firstName` equivale a `"Sarah"` y `this.lastName` equivale a `"Smith"`. Lo que realmente hicimos fue definir `global.firstName = `Sarah'` y `global.lastName = `Smith'`. La misma `sarah` se deja `indefinida`.

</p>
</details>

---

#### 12. ¿Qué devuelve la siguiente función?

```javascript
function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;
```

- A: `"Lydia"` `21` `["", " is ", " years old"]`
- B: `["", " is ", " years old"]` `"Lydia"` `21`
- C: `"Lydia"` `["", " is ", " years old"]` `21`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B</p>
<p>




_Tagged templates_ es un caso de uso de [template literals](https://codeburst.io/javascript-template-literals-tag-functions-for-beginners-758a041160e1). Una _plantilla etiquetada_ es una llamada de función que utiliza una plantilla literal de la que obtener sus argumentos. Si se usan literales de plantillas etiquetadas, el valor del primer argumento es siempre una matriz de los valores de las cadenas. El resto de los argumentos obtienen los valores de las expresiones pasadas.
</p>
</details>

---

#### 13. ¿Qué devuelve la siguiente función?

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 });
```

- A: `You are an adult!`
- B: `You are still an adult.`
- C: `Hmm.. You don't have an age I guess`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>


Al probar la igualdad, las primitivas se comparan por su _valor_, mientras que los objetos se comparan por su _referencia_. JavaScript comprueba si los objetos tienen una referencia a la misma ubicación en la memoria.

Los dos objetos que estamos comparando no tienen eso: el objeto que pasamos como parámetro se refiere a una ubicación diferente en la memoria que el objeto que usamos para comprobar la igualdad.

Esta es la razón por la que ambos `{ edad: 18 } === { edad: 18 }` y `{ edad: 18 }} == { edad: 18 }` devuelven `false`

</p>
</details>

---

#### 14. ¿Qué devuelve la siguiente función?

```javascript
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);
```

- A: `"number"`
- B: `"array"`
- C: `"object"`
- D: `"NaN"`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>


El operador spread (`...args`.) devuelve un array con argumentos. Una matriz es un objeto, así que `typeof args` devuelve `"object"`

</p>
</details>

---

#### 15. ¿Qué método(s) devolverá el valor `'Hello world!'`?

```javascript
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
```

- A: 1
- B: 2
- C: 2 and 3
- D: All of them

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B</p>
<p>

Al agregar un par clave/valor utilizando el método `set`, la clave será el valor del primer argumento pasado a la función `set`, y el valor será el segundo argumento pasado a la función `set`. La clave es la _función_ `() => 'greeting'` en este caso, y el valor `'Hello world'`. `myMap` ahora es `{ () => 'greeting' => 'Hello world!' }`. 

1 es incorrecto, ya que la clave no es `'greeting'` sino `() => 'greeting'`.
3 es incorrecto, ya que estamos creando una nueva función pasándola como parámetro al método `get`. El objeto interactúa por _referencia_. Las funciones son objetos, por eso dos funciones nunca son estrictamente iguales, aunque sean idénticas: tienen una referencia a un punto diferente en la memoria. 

</p>
</details>

---

#### 16. ¿Cuál es el resultado?

```javascript
const person = {
  name: "Lydia",
  age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
  x.age += 1
  x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
```

- A: `{name: "Sarah", age: 22}`
- B: `{name: "Sarah", age: 23}`
- C: `{name: "Lydia", age: 22}`
- D: `{name: "Lydia", age: 23}`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>

Tanto las funciones `changeAge` como `changeAgeAndName` tienen un parámetro por defecto, a saber, un objeto _nuevo_ creado `{ ...person }`. Este objeto tiene copias de todos los pares clave/valor en el objeto `person`. 

Primero, invocamos la función `changeAge` y le pasamos el objeto `person` como argumento. Esta función aumenta el valor de la propiedad `age` en 1. `person` ahora es `{name: "Lydia", age: 22}`.

Luego, invocamos la función `changeAgeAndName`, sin embargo, no pasamos un parámetro. En cambio, el valor de `x` es igual a un _nuevo_ objeto: `{ ...person }`. Dado que es un objeto nuevo, no afecta los valores de las propiedades en el objeto `person`. `person` sigue siendo igual a `{ name: "Lydia",age: 22 }`.

</p>
</details>

---

#### 17. ¿Qué devuelve la siguiente función?

```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Con `"use strict"`, es posible asegurarse de que no se declara accidentalmente variables globales. Nunca declaramos la variable `age`, y como usamos `"use strict"`, nos dará un error de referencia. Si no hubiéramos usado `"use strict"`, habría funcionado, ya que la propiedad `age` se habría añadido al objeto global.

</p>
</details>

---

#### 18. ¿Cuál es el valor de `sum`?

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

`eval` evalúa los códigos que se pasan como una cadena. Si es una expresión, como en este caso, evalúa la expresión. La expresión es `10 * 10 + 5`. Esto devuelve el número `105`.

</p>
</details>

---

#### 19. ¿Cuánto tiempo es accesible cool_secret?

```javascript
sessionStorage.setItem("cool_secret", 123);
```

- A: Para siempre, los datos no se pierden.
- B: Cuando el usuario cierra la pestaña.
- C: Cuando el usuario cierra todo el navegador, no sólo la pestaña.
- D: Cuando el usuario apaga su ordenador.

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

Los datos almacenados en `sessionStorage` se eliminan después de cerrar la pestaña.

Si se usó `localStorage`, los datos habrían estado allí siempre, a menos que por ejemplo `localStorage.clear()` sea invocado.

</p>
</details>

---

#### 20. ¿Qué devuelve la siguiente función?

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

Con la palabra reservada `var`, se pueden declarar múltiples variables con el mismo nombre. La variable tendrá entonces el último valor.

No es posible hacer esto con `let` o `const` ya que tienen un alcance de bloque.

</p>
</details>

---

#### 21. ¿Qué devuelve la siguiente función?

```javascript
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
```

- A: `false` `true` `false` `true`
- B: `false` `true` `true` `true`
- C: `true` `true` `false` `true`
- D: `true` `true` `true` `true`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Todas las claves de un objeto (excepto los símbolos) actúan como cadenas, incluso si no son escritas como una cadena. Es por eso que `obj.hasOwnProperty('1')` también devuelve verdadero.

No funciona así para un conjunto. No hay un "1" en nuestro set: `set.has('1')` devuelve `falso`. Tiene el tipo numérico `1`, `set.has(1)` devuelve `true`.


</p>
</details>

---

#### 22. ¿Qué devuelve la siguiente función?

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Si tiene dos claves con el mismo nombre, la clave será reemplazada. Seguirá estando en su primera posición, pero con el último valor especificado

</p>
</details>

#### 23. ¿Cuál es el resultado?

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A</p>
<p>

Las expresiones dentro de las plantillas de cadena de texto se evalúan primero. Esto significa que la cadena contendrá el valor devuelto de la expresión, la función invocada inmediatamente `(x => x)('I love')` en este caso. Pasamos el valor `'I love'` como argumento para la función de flecha `x => x`. `x` es igual a `'I love'`, que se devuelve tal cual. Esto da como resultado `I love to program`. 

</p>
</details>

---

#### 24. ¿Qué ocurrirá?

```javascript
let config = {
  alert: setInterval(() => {
    console.log('Alert!')
  }, 1000)
}

config = null
```

- A: The `setInterval` callback won't be invoked
- B: The `setInterval` callback gets invoked once
- C: The `setInterval` callback will still be called every second
- D: We never invoked `config.alert()`, config is `null`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>

Normalmente, cuando establecemos objetos iguales a `null`, esos objetos se recogen por el _recolector de basura_ ya que ya no hay ninguna referencia a ese objeto. Sin embargo, dado que la función de devolución de llamada dentro de `setInterval` es una función flecha (por lo tanto vinculada al objeto` config`), la función de devolución de llamada todavía tiene una referencia al objeto `config`. Mientras haya una referencia, el objeto no será recolectado. Como no es recolectado, la función de devolución de llamada `setInterval` aún se invocará cada 1000ms (1s).

</p>
</details>

#### 25. ¿Cuál es el resultado?

```javascript
function* generatorOne() {
  yield ['a', 'b', 'c'];
}

function* generatorTwo() {
  yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
```

- A: `a` y `a`
- B: `a` y `undefined`
- C: `['a', 'b', 'c']` y `a`
- D: `a` y `['a', 'b', 'c']`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C</p>
<p>

Con la palabra clave `yield`, cedemos valores en una función generadora. Con la palabra clave `yield*`, podemos obtener valores de otra función generadora u objeto iterable (por ejemplo, un array).

En la función `generatorOne`, cedemos todo el array `['a', 'b', 'c']` usando la palabra clave `yield`. El valor de la propiedad `value` en el objeto devuelto por el método `next` en `one` (`one.next().value`) es igual a todo el array `['a', 'b', 'c']`.

```javascript
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
```

En la función `generatorTwo`, usamos la palabra clave `yield*`. Esto significa que el primer valor cedido de `two` es igual al primer valor cedido en el iterador. El iterador es el array `['a', 'b', 'c']`. El primer valor producido es `a`, por lo que la primera vez que llamamos a `two.next().value`, se devuelve `a`. 

```javascript
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
```

</p>
</details>

---

#### 26. El contexto de ejecución de JS crea dos cosas: el objecto global y la palabra reservada "this".

- A: true
- B: false
- C: it depends

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>


El contexto de ejecución base es el contexto de ejecución global: es accesible en todo el código.

</p>
</details>

---

#### 27. ¿Qué devuelve la siguiente función?

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

La sentencia `continue` omite una iteración si una cierta condición, en este caso `(i === 3)`,  devuelve `true`.

</p>
</details>

---

#### 28. ¿Qué devuelve la siguiente función?

```javascript
String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

`String` es un constructor incorporado, al que podemos añadir propiedades. En este caso concreto, añadimos un método a su prototipo. Las cadenas primitivas se convierten automáticamente en un objeto de cadena, generado por la función de prototipo de cadena. Por lo tanto, todas las cadenas (objetos de cadena) tienen acceso a ese método.

</p>
</details>

---

#### 29. ¿Qué devuelve la siguiente función?

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>


Las claves se convierten automáticamente en strings. Estamos tratando en este pregunta de establecer un objeto como clave para el objeto `a`, con el valor de `123`.

Sin embargo, cuando se _stringfy_ (compleja traducción) un objeto, se convierte en `"[object Object]"`. Así que lo que estamos diciendo aquí, es que `a["object Object"] = 123`. Entonces, podemos intentar hacer lo mismo de nuevo. `c` es otro objeto que estamos implícitamente encadenando. Entonces, `a["object Object"] = 456`.

Para finalizar, registramos `a[b]`, que en realidad es `a["Object"]`. Acabamos de ponerlo en `456`, así que devuelve `456`.

</p>
</details>

---

#### 30. ¿Qué devuelve la siguiente función?

```javascript
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

Tenemos una función `setTimeout` y la invocamos primero. Sin embargo, fue el último en ser registrado.

Esto se debe a que en los navegadores, no sólo tenemos el motor de tiempo de ejecución, también tenemos algo llamado `WebAPI`. El `WebAPI` nos da la función `setTimeout` para empezar, y por ejemplo el DOM.

Después de que la _callback_ es empujada a la WebAPI, la función `setTimeout` en sí misma (¡pero no la callback!) es removida de la pila.

<img src="https://i.imgur.com/X5wsHOg.png" width="200">

Ahora, `foo` es invocado, y ``"First"`` está siendo registrado.

<img src="https://i.imgur.com/Pvc0dGq.png" width="200">

`Foo` se quita de la pila, y `Baz` es invocado. `Third` se registra.

<img src="https://i.imgur.com/WhA2bCP.png" width="200">

La WebAPI no puede simplemente añadir cosas a la pila cuando está lista. En su lugar, empuja la función de devolución de llamada a algo llamado la _queue_ (cola en español).

<img src="https://i.imgur.com/NSnDZmU.png" width="200">

Aquí es donde un bucle de eventos comienza a funcionar. Un **lazo de evento** mira la pila y la cola de tareas. Si la pila está vacía, toma lo primero que encuentra en la cola y la empuja sobre la pila.

<img src="https://i.imgur.com/uyiScAI.png" width="200">

Se invoca el `bar`, se registra el `"Second"` y se quita de la pila.

</p>
</details>

---

#### 31. ¿Cuál es la referencia al objeto que lanza el evento cuando se hace click en el botón?

```html
<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>
```

- A: Outer `div`
- B: Inner `div`
- C: `button`
- D: An array of all nested elements.

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>


El elemento anidado más profundo que causa el evento es el destino de ese evento.

</p>
</details>

---

#### 32. Al hacer click en el párrafo, ¿qué se muestra por pantalla?

```html
<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>
```

- A: `p` `div`
- B: `div` `p`
- C: `p`
- D: `div`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

Si hacemos clic en `p`, vemos dos _outputs_: `p` y `div`. Durante la propagación del evento, hay 3 [fases](https://www.sitepoint.com/event-bubbling-javascript/): _capturing_, _target_ y _bubbling_. De forma predeterminada, los controladores de eventos se ejecutan en la fase uno (a menos que se establezca `useCapture` en `true`). Va desde el elemento anidado más profundo hacia el exterior.

</p>
</details>

---

#### 33. ¿Qué devuelve la siguiente función?

```javascript
const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
```

- A: `undefined is 21` `Lydia is 21`
- B: `function` `function`
- C: `Lydia is 21` `Lydia is 21`
- D: `Lydia is 21` `function`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: D
<p>

En ambos  podemos pasar el objeto al que queremos que se refiera la palabra reservada `this`. Sin embargo, la diferencia es que `.call` es *ejecutado inmediatamente*!

`.bind` devuelve una copia de la función, pero con un contexto enlazado. Es decir, no se ejecuta de inmediato.

</p>
</details>

---

#### 34. ¿Qué devuelve la siguiente función?

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

La función `sayHi` devuelve el valor devuelto de la función invocada inmediatamente ([IIFE](https://developer.mozilla.org/es/docs/Glossary/IIFE)). Esta función devuelve `0`, que es el tipo `"number"`.

En JS solo hay 7 tipos incorporados (En inglés se llaman _built-in types_, y pueden identificarse con el operador `typeof`. Más información [aquí](https://www.oreilly.com/library/view/you-dont-know/9781491905159/ch01.html)): `null`,` undefined`, `boolean`,` number`, `string`,` object`, `symbol` y `bigint`. `"function"` no es un tipo, ya que las funciones son objetos, es de tipo `"object"`.

</p>
</details>

---

#### 35. ¿Cuáles de estos valores son falsos?

```javascript
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
```

- A: `0`, `''`, `undefined`
- B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`
- C: `0`, `''`, `new Boolean(false)`, `undefined`
- D: All of them are falsy

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

Solo hay seis valores falsos:

- `undefined`
- `null`
- `NaN`
- `0`
- `''` (cadena vacía)
- `false`


Los constructores de funciones, como `new Number` y `new Boolean` son correctos.

</p>
</details>

---

#### 36. ¿Qué devuelve la siguiente función?

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>


`typeof 1` devuelve `"number" `.
`typeof "number"` devuelve `"string"`

</p>
</details>

---

#### 37. ¿Qué devuelve la siguiente función?

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Cuando se establece un valor en un elemento de una matriz que excede la longitud de la matriz, JS crea algo llamado "ranuras vacías". Estos realmente tienen el valor de `undefined`, pero se podrá ver algo como:

`[1, 2, 3, 7 x empty, 11]`

dependiendo de dónde lo ejecute (es diferente para cada navegador, nodo, etc.)

</p>
</details>

---

#### 38. ¿Qué devuelve la siguiente función?

```javascript
(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();
```

- A: `1` `undefined` `2`
- B: `undefined` `undefined` `undefined`
- C: `1` `1` `2`
- D: `1` `undefined` `undefined`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

El bloque `catch` recibe el argumento` x`. Este no es el mismo `x` que la variable cuando pasamos los argumentos. Esta variable `x` tiene un ámbito de bloque.

Más adelante, establecemos esta variable de ámbito de bloque igual a `1`, y establecemos el valor de la variable `y`. Ahora, registramos la variable de ámbito de bloque `x`, que es igual a `1`.

Fuera del bloque `catch`,` x` sigue siendo `undefined`, e `y` es `2`. Cuando queremos `console.log (x)` fuera del bloque `catch`, devuelve `undefined`, y `y` devuelve` 2`.

</p>
</details>

---

#### 39. Todo en Javascript es o bien un(a)..

- A: tipo primitivo o un objeto
- B: función u objeto
- C: ¡pregunta trampa! solo objetos
- D: número u objeto

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

JavaScript solo tiene tipos y objetos primitivos.

Los tipos primitivos son `boolean`, `null`, `undefined`, `bigint`, `number`, `string` y `symbol`.

Lo que diferencia a un tipo primitivo de un objeto es que los primeros no tienen propiedades o métodos; sin embargo, se puede ver que `'foo'.toUpperCase ()` se evalúa como `'FOO'` y no da como resultado un `TypeError`. Esto se debe a que cuando se intenta acceder a una propiedad o método en un tipo primitivo, como una cadena, JavaScript envolverá implícitamente el objeto utilizando una de las clases de envoltura, por ejemplo `string`, y luego descartará la envoltura inmediatamente después de evaluar la expresión. Todas los tipos primitivos excepto `null` y `undefined` poseen este comportamiento.

</p>
</details>

---

#### 40. ¿Qué devuelve la siguiente función?

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

`[1, 2]` es nuestro valor inicial. Este es el valor con el que empezamos y el valor del primer `acc`. Durante la primera ronda, `acc` es` [1,2] `, y `cur` es `[0, 1]`. Los concatenamos, lo que resulta en `[1, 2, 0, 1]`.

Entonces, `[1, 2, 0, 1]` es `acc` y` [2, 3]` es `cur`. Los concatenamos, y obtenemos `[1, 2, 0, 1, 2, 3]`

</p>
</details>

---

#### 41. ¿Qué devuelve la siguiente función?

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

`null` es falso. `! null` devuelve `true`. `! true` devuelve `false`.

`" "` es falso. `!" "` devuelve `true`. `! true` devuelve `false`.

'1' es verdadero. `! 1` devuelve `false`. `! false` devuelve `true`.

</p>
</details>

---

#### 42. ¿Qué devuelveel método `setInterval`?

```javascript
setInterval(() => console.log("Hi"), 1000);
```

- A: una id único
- B: la cantidad de milisegundos especificada
- C: la función pasada
- D: `undefined`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

Devuelve una identificación única, un id único. Este id se puede usar para borrar ese intervalo con la función `clearInterval ()`.

</p>
</details>

---

#### 43. ¿Qué devuelve la siguiente función?

```javascript
[..."Lydia"];
```

- A: `["L", "y", "d", "i", "a"]`
- B: `["Lydia"]`
- C: `[[], "Lydia"]`
- D: `[["L", "y", "d", "i", "a"]]`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: A
<p>

Una cadena es un iterable. El [operador de propagación](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator) asigna todos los caracteres de un iterable a un elemento.

</p>
</details>

---

#### 44. ¿Cuál es el resultado?

```javascript
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
```

- A: `[0, 10], [10, 20]`
- B: `20, 20`
- C: `10, 20`
- D: `0, 10 y 10, 20`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Las funciones regulares no pueden pararse a mitad de ejecución después de invocarse. Sin embargo, una función generadora sí puede ser parada, y más adelante continuar desde donde fue detenida. Cada vez que una función generadora encuentra un `yield`, la función cede el valor especificado después de él. Observa que la función generadora en este caso no _devuelve_ el valor, _cede_ el valor.

Primero, iniciamos la función generadora con `i` igual a `10`. Invocamos la función generadora usando el método `next()`. La primera vez que invocamos la función generadora, `i` es igual a `10`. Encuentra el primer `yield`: cede el valor de `i`. El generador está ahora "pausado", y `10` es mostrado por consola.

Después, invocamos la función otra vez con el método `next()`. Continúa donde fue detenida previamente, todavía con `i` igual a `10`. Ahora, encuentra el siguiente `yield`, y cede `i * 2`. `i` es igual a `10`, así que devuelve `10 * 2`, que es `20`. Esto da como resultado `10, 20`.

</p>
</details>

---

#### 45. ¿Qué devuelve esto?

```javascript
const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 500, "one");
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, "two");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
```

- A: `"one"`
- B: `"two"`
- C: `"two" "one"`
- D: `"one" "two"`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

Cuando pasamos múltiples promesas al método `Promise.race`, resuelve/rechaza la _primera_ promesa que sea resuelta/rechazada. Para el método `setTimeout`, pasamos un cronómetro: 500ms para la primera promesa (`firstPromise`), y 100ms para la segunda promesa (`secondPromise`). Esto significa que `secondPromise` se resuelve primero con el valor de `'two'`. `res` ahora guarda el valor `'two'`, el cual se muestra por consola.

</p>
</details>

---

#### 46. ¿Cuál es el resultado?

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: D
<p>

Primero, declaramos la variable `person` con el valor de un objeto que tiene una propiedad `name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Después, declaramos una variable llamada `members`. Asignamos el primer elemento de ese array igual al valor de la variable `person`. Un objeto interactúa por _referencia_ cuando es asignado igual a otro objeto. Cuando asignas una referencia de una variable a otra, haces una _copia_ de esa referencia. (¡observa que no tienen la _misma_ referencia!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Después, asignamos que la variable `person` es igual a `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Solo estamos modificando el valor de la variable `person`, y no el primer elemento del array, ya que este elemento tiene una referencia diferente (copiada) al objeto. El primer elemento en `members` todavía mantiene su referencia hacia el objeto original. Cuando mostramos por consola el array `members`, el primer elemento todavía mantiene el valor del objeto, el cual se muestra por consola.

</p>
</details>

---

#### 47. ¿Cuál es el resultado?

```javascript
const person = {
  name: "Lydia",
  age: 21
};

for (const item in person) {
  console.log(item);
}
```

- A: `{ name: "Lydia" }, { age: 21 }`
- B: `"name", "age"`
- C: `"Lydia", 21`
- D: `["name", "Lydia"], ["age", 21]`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

Con un bucle `for-in`, podemos iterar sobre claves de objetos, en este caso `name` y `age`. Internamente, las claves de objetos son strings (si no son Symbol). En cada bucle, asignamos `item` igual a la clave actual que se está iterando. Primero, `item` es igual a `name`, y se muestra por consola. Después, `item` es igual a `age`, que se muestra por consola.

</p>
</details>

---

#### 48. ¿Cuál es el resultado?

```javascript
console.log(3 + 4 + "5");
```

- A: `"345"`
- B: `"75"`
- C: `12`
- D: `"12"`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: B
<p>

La asociatividad de operadores es el orden en el que el compilador evalúa las expresiones, ya sea de izquierda a derecha o de derecha a izquierda. Esto solo pasa si todos los operadores tienen la _misma_ precedencia. Solo tenemos un tipo de operador: `+`. Para la suma, la asociatividad es de izquierda a derecha.

`3 + 4` se evalúa primero. Esto da como resultado el número `7`.

`7 + '5'` da `"75"` por la coerción. JavaScript convierte el número `7` a string, mira la pregunta 15. Podemos concatenar dos strings usando el operador `+`. `7 + '5'` da como resultado `"75"`.

</p>
</details>

---

#### 49. ¿Cuál es el valor de `num`?

```javascript
const num = parseInt("7*6", 10);
```

- A: `42`
- B: `"42"`
- C: `7`
- D: `NaN`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Solo el primer número en el string es devuelto. Según en la _base_ seleccionada (el segundo argumento para especificar a qué tipo de número queremos transformarlo: base 10, hexadecimal, octal, binario, etc.), el `parseInt` comprueba si los caracteres del string son válidos. Una vez encuentra un caracter que no es un número válido en la base seleccionada, deja de recorrer el string e ignora los siguientes caracteres.

`*` no es un número válido. Solo convierte `"7"` al decimal `7`. `num` tiene el valor `7`.

</p>
</details>

---

#### 50. ¿Cuál es el resultado?

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 huecos vacíos ]`

<details><summary><b>Solución</b></summary>
<p>Respuesta correcta: C
<p>

Cuando se mapea sobre un array, el valor de `num` es igual al elemento que se está iterando. En este caso, los elementos son números, por lo que la condición del if `typeof num === "number"` devuelve `true`. La función de mapeo crea un nuevo array e inserta los valores devueltos por la función.

Sin embargo, no devolvemos un valor. Cuando no devolvemos un valor desde la función, la función devuelve `undefined`. Para cada elemento en el array, la función de bloque es llamada, así que por cada elemento devolvemos `undefined`.

</p>
</details>

