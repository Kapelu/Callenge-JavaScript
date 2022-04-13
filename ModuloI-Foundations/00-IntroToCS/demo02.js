// ------------ Closures---------------

// function greeting(message) {
//   return function (name) {
//     return message + ' ' + name;
//   };
// }
// let sayHi = greeting('Hi');
// let sayHello = greeting('Hello');

// console.log(sayHi('John')); // Hi John
// console.log(sayHello('John')); // Hello John

// for (let index = 1; index <= 3; index++) {
//   setTimeout(function () {
//     console.log('after ' + index + ' second(s):' + index);
//   }, index * 1000);
// }

// let creaFuncion = function () {
//   let arreglo = [];

//   for (let i = 0; i < 3; i++) {
//     arreglo.push(function () {
//       console.log(i);
//     });
//   }
//   return arreglo;
// };

// let arr = creaFuncion();

// arr[0](); //3
// arr[1](); //3
// arr[2](); //3

function hacerSaludo(lenguaje) {
  if (lenguaje === 'en') {
    return function () {
      console.log('Hi!');
    };
  }

  if (lenguaje === 'es') {
    return function () {
      console.log('Hola!');
    };
  }
}

var saludoIngles = hacerSaludo('en');
var saludoEspaniol = hacerSaludo('es');
//-------------- IIFE-------------
// syntax
//   (function () {
//     //...
//   }
// )();

//------------BIND--------------
// var persona = {
//   nombre: 'Luna',
//   apellido: 'Lovegood',
// };

// var logNombre = function () {
//   console.log(this.nombre + ' ' + this.apellido);
// };
// logNombre(); //undefined -- Luna
// var logNombrePersona = logNombre.bind(persona);
// // el primer parametro de bind es el this!
// logNombrePersona(); // Luna

//BIND DEVUELVE UNA FUNCION!

// let friend = {
//   name: 'Hermione',
//   spell: function (spell) {
//     console.log(this.name + ' casted ' + spell);
//   },
// };
// let anotherFriend = {
//   name: 'Ron',
//   copy: function (spell) {
//     console.log(this.name + ' copied ' + spell);
//   },
// };
// let cast = friend.spell.bind(anotherFriend, 'Wingardium Leviosa');
// cast();
// let copy = anotherFriend.copy.bind(friend, 'Lumos');
// copy();

var persona = {
  nombre: 'Guille',
  apellido: 'Aszyn',
};

var logNombre = function () {
  console.log(this.nombre);
};

// el primer parametro de call es el this!
logNombre.call(persona);

// Call hace lo mismo que Bind, solo que invoca la función,
// no devuelve una nueva.
// tambien bindea argumentos!
//
var logNombre = function (arg1, arg2) {
  console.log(arg1 + ' ' + this.nombre + ' ' + arg2);
};

logNombre.call(persona, 'Hola', ', Cómo estas?');
logNombre.apply(persona, ['Hola', ', Cómo estas?']);
////Hola Guille, Cómo estas?
