
# Challenge JavaScript 

 _Publicaré preguntas de opción múltiple en JavaScript. Desde lo básico a lo avanzado: comprueba si realmente conoces **Javascript**, actualiza tus conocimientos_ 💪 🚀
 
_Las respuestas se encuentran en las secciones contraídas debajo de las preguntas, simplemente haz clic en ellas para expandirlas. EXITOS !!! 💛

No olvides dejar tu 👉 [![FeedBack](https://img.shields.io/badge/Feedback-414141?style=flat&logo=ApacheRocketMQ&logoColor=informational&link=https://form.jotform.com/221181252861652)](https://form.jotform.com/221181252861652)   👍 💪 GRACIAS!!! 

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

Dentro de la función, primero declaramos la variable `name` con la palabra reservada `var`. Esto significa que la variable se _`eleva`_ (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino <a href="https://developer.mozilla.org/es/docs/Glossary/Hoisting" target="_blank"><strong>"Hoisting"</strong></a> con el valor predeterminado de `indefinido`, hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable `name`, por lo que aún mantiene el valor de `undefined`.

Las variables con la palabra clave `let` (y `const`) se _`elevan`_, pero a diferencia de `var`, no se inicializa. No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la <a href="https://wesbos.com/temporal-dead-zone/" target="_blank"><strong>"zona muerta temporal"</strong></a>. Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un `ReferenceError`
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

Debido a la cola de eventos en JavaScript, la función `setTimeout` se llama una vez el ciclo se ha ejecutado. Dado que la variable `i` en el primer bucle se declará utilizando la palabra reservada `var`, este valor es global. Durante el bucle, incrementamos el valor de `i` en `1` cada vez, utilizando el operador unario `++`. Cuando se invocá la función `setTimeout` `i` era igual a `3` en el primer ejemplo.

En el segundo bucle, la variable `i` se declará utilizando la palabra reservada `let`, las variables declaradas con la palabra reservada `let` (y `const`) tienen un ámbito de bloque (un bloque es lo que se encuentra entre `{}`). Durante cada iteración, `i` tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.
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

Hay que tener en cuenta aqui que el valor de `diámetro` es una función regular o _normal_, mientras que el valor de `perímetro` es una función de flecha.

Con las funciones de flecha, la palabra clave `this` se refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro", no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).

No hay valor `radius` en ese objeto, que devuelve` undefined`.
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

En el primer caso se intenta convertir un operando en un número. `true` es` 1`, y `false` es` 0`. 

En el segundo caso la cadena `'Lydia'` es un valor verdadero. Lo que realmente estamos preguntando es "¿es este verdadero valor falso?". Esto devuelve `false`.
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

¡El método `.push()` devuelve la _longitud_ del nuevo array! Al principio, el array contenía un elemento (el string `"banana"`) y tenía una longitud de `1`. Después de añadir el string `"apple"` al array, el array contiene dos elementos, y tiene una longitud de `2`. Esto es lo que devuelve la función `addToList`.

El método `push` modifica el array original. Si quisieras devolver el _array_ de la función en lugar de la _`longitud del array`_ deberías haber devuelto `list` después de introducir `item` en él.
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

Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global. Cuando escribimos erróneamente `greeting` como `greetign`, el intérprete de JS ve esto como `global.greetign = {}` (o `window.greetign = {}` en un navegador).

Para evitar esto, podemos usar el <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto" target="_blank"><strong>"uso estricto"</strong></a>. Esto asegura que se haya declarado una variable antes de establecerla igual a cualquier cosa.

</p>
</details>

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

En este ejemplo, JavaScript convierte el número `1` en una cadena, para que la función tenga sentido y devuelva un valor. Durante la suma de un tipo numérico (`1`) y un tipo de cadena (`'2'`), el número se trata como una cadena. Podemos concatenar cadenas como `"Hello" + "World"``, así que lo que está pasando aquí es `"1" + "2"` que devuelve `"12"`

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
<p></p>

El operador **postfix** unario `++`:

1. Devuelve el valor (esto devuelve `0`)
2. Incrementa el valor (el número es ahora `1`)

El operador unario **prefix** `++`:

1. Incrementa el valor (el número es ahora `2`)
2. Devuelve el valor (esto devuelve `2`)

Por lo tanto, devuelve `0 2 2 2`.

</p>
</details>