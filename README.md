
# Challenge JavaScript 

<p style='text-align: justify; color: #144b8c'><i>
 Publicaré preguntas de opción múltiple en JavaScript. Desde lo básico a lo avanzado: comprueba si realmente conoces **Javascript**, actualiza tus conocimientos 💪 🚀</i></p> 

<p style='text-align: justify; color: #144b8c'><i>
Las respuestas se encuentran en las secciones contraídas debajo de las preguntas, simplemente haz clic en ellas para expandirlas. EXITOS !!! 💛</i></p> 

<p style='text-align: justify; color: #144b8c'><i>
No olvides dejar tu 👉 <button style= 'background-color:#F4D03F; text-shadow: 1px 2px #fff'href="https://form.jotform.com/221181252861652"><b><i>Feedback</i></b></button> 👍 💪 GRACIAS!!!
</i></p> 

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
<p></strong>

Dentro de la función, primero declaramos la variable <strong>`name`</strong> con la palabra reservada <strong>`var`</strong>. Esto significa que la variable se _<strong>`eleva`</strong>_ (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino <a href="https://developer.mozilla.org/es/docs/Glossary/Hoisting" target="_blank"><strong>"Hoisting"</strong></a> con el valor predeterminado de `indefinido`</strong>, hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable <strong>`name`</strong>, por lo que aún mantiene el valor de <strong>`undefined`</strong>.

Las variables con la palabra clave <strong>`let`</strong> (y <strong>`const`</strong>) se _<strong>`elevan`</strong>_, pero a diferencia de <strong>`var`</strong>, no se inicializa. No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la <a href="https://wesbos.com/temporal-dead-zone/" target="_blank"><strong>"zona muerta temporal"</strong></a>. Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un <strong>`ReferenceError`</strong>
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
<p></trong>

Hay que tener en cuenta aqui que el valor de <trong>`diámetro`</trong> es una función regular o _normal_, mientras que el valor de <trong>`perímetro`</trong> es una función de flecha.

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

¡El método <trong>`.push()`</trong> devuelve la _longitud_ del nuevo array! Al principio, el array contenía un elemento (el string <trong>`"banana"`</trong>) y tenía una longitud de <trong>`1`</trong>. Después de añadir el string <trong>`"apple"`</trong> al array, el array contiene dos elementos, y tiene una longitud de <trong>`2`</trong>. Esto es lo que devuelve la función <trong>`addToList`</trong>.

El método <trong>`push`</trong> modifica el array original. Si quisieras devolver el _array_ de la función en lugar de la _<trong>`longitud del array`</trong>_ deberías haber devuelto <trong>`list`</trong> después de introducir <trong>`item`</trong> en él.
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

Lo que hace JS aquí es registrar el objeto debido a que acabamos de crear un objeto vacío en el objeto global. Cuando escribimos erróneamente <strong>`greeting`</trong> como <strong>`greetign`</trong>, el intérprete de JS ve esto como <strong>`global.greetign = {}`</trong> (o `window.greetign = {}`</trong> en un navegador).

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

En este ejemplo, JavaScript convierte el número <strong>`1`</strong> en una cadena, para que la función tenga sentido y devuelva un valor. Durante la suma de un tipo numérico (<strong>`1`</strong>) y un tipo de cadena (<strong>`'2'`</strong>), el número se trata como una cadena. Podemos concatenar cadenas como <strong>`"Hello" + "World"`</strong><strong>`, así que lo que está pasando aquí es `</strong> "1" + "2" <strong>` que devuelve <strong>`"12"`</strong>

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

El operador **postfix** unario <strong>`++`</strong>:

1. Devuelve el valor (esto devuelve <strong>`0`</strong>)
2. Incrementa el valor (el número es ahora <strong>`1`</strong>)

El operador unario **prefix** <strong>`++`</strong>:

1. Incrementa el valor (el número es ahora <strong>`2`</strong>)
2. Devuelve el valor (esto devuelve <strong>`2`</strong>)

Por lo tanto, devuelve `0 2 2 2`.

</p>
</details>