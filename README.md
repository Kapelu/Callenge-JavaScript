
# Challenge JavaScript 

 _Publicaré preguntas de opción múltiple en JavaScript. Desde lo básico a lo avanzado: comprueba si realmente conoces **Javascript**, actualiza tus conocimientos_ 💪 🚀
 
_Actualizaré este repo cada 48Hs con nuevas preguntas. Las respuestas se encuentran en las secciones contraídas debajo de las preguntas, simplemente haz clic en ellas para expandirlas. Buena suerte ❤️_


---

###### 1. ¿Qué devuelve la siguiente función?

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


#### Respuesta correcta: D
</p>
<p>

Dentro de la función, primero declaramos la variable `name` con la palabra reservada ` var`. Esto significa que la variable se _eleva_ (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino [hoisting](https://developer.mozilla.org/es/docs/Glossary/Hoisting)) con el valor predeterminado de `indefinido`, hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable `name`, por lo que aún mantiene el valor de` undefined`.

Las variables con la palabra clave `let` (y` const`) se _elevan_, pero a diferencia de `var`, no se inicializa <i> </i>. No son accesibles antes de la línea que los declaramos (inicializamos). Esto se llama la ["zona muerta temporal"](https://wesbos.com/temporal-dead-zone/). Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un `ReferenceError`
</p>
</details>

---

###### 2. ¿Qué devuelve la siguiente función?

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
<p>

#### Respuesta correcta: C

Debido a la cola de eventos en JavaScript, la función `setTimeout` se llama una vez el ciclo se ha ejecutado. Dado que la variable `i` en el primer bucle se declaró utilizando la palabra reservada ` var`, este valor es global. Durante el bucle, incrementamos el valor de `i` en` 1` cada vez, utilizando el operador unario `++`. Cuando se invocó la función `setTimeout`,` i` era igual a `3` en el primer ejemplo.

En el segundo bucle, la variable `i` se declaró utilizando la palabra reservada` let`: las variables declaradas con la palabra reservada `let` (y` const`) tienen un ámbito de bloque (un bloque es lo que se encuentra entre `{}`). Durante cada iteración, `i` tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.

</p>
</details>

---

###### 3. ¿Qué devuelve la siguiente función?

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
<p>

#### Respuesta correcta: B

Hay que tener en cuenta aqui que el valor de `diámetro` es una función regular o _normal_, mientras que el valor de `perímetro` es una función de flecha.

Con las funciones de flecha, la palabra clave `this` se refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro", no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).

No hay valor `radius` en ese objeto, que devuelve` undefined`.

</p>
</details>

---

###### 4. ¿Qué devuelve la siguiente función?

```javascript
+true;
!"Lydia";
```

- A: `1` y `false`
- B: `false` y `NaN`
- C: `false` y `false`

<details><summary><b>Solución</b></summary>
<p>

#### Respuesta correcta: A

En el primer caso se intenta convertir un operando en un número. `true` es` 1`, y `false` es` 0`. 

En el segundo caso la cadena `'Lydia'` es un valor verdadero. Lo que realmente estamos preguntando es "¿es este verdadero valor falso?". Esto devuelve `false`.

</p>
</details>

---

###### 5. ¿Cuál es el resultado?

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


#### Respuesta correcta: B

¡El método `.push()` devuelve la _longitud_ del nuevo array! Al principio, el array contenía un elemento (el string `"banana"`) y tenía una longitud de `1`. Después de añadir el string `"apple"` al array, el array contiene dos elementos, y tiene una longitud de `2`. Esto es lo que devuelve la función `addToList`.

El método `push` modifica el array original. Si quisieras devolver el _array_ de la función en lugar de la _longitud del array_ deberías haber devuelto `list` después de introducir `item` en él.


</details>
