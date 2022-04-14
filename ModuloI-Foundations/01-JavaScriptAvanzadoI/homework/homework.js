
//$ Scope & Hoisting
//*Determiná que será impreso en la consola, sin ejecutar el código.
//? Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.


x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);

//******

console.log(bar);
//console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;

//******

var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);

//******

var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);

//******

var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);

//? Coerción de Datos

//******

6 / "3"  // 2
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
//[] == ![]


//! Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


//? Hoisting


function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

//******

var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);

//? This

//$ ¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:


var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//? Event loop

//$ Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?


function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();

// primero muestra el 1 y 4 luego el 3 y un segundo despues el 4
