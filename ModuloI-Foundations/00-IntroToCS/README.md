<h1 align='center'></h1>
<h1 align='center'><mark><i><big>*   INTRO TO COMPUTER SCIENCE   *</big></i></mark></h1>

<H3 align='center' style='color:#2471A3' >TABLA DE LA VERDAD</H3>  
<h1 align='center'></h1>

![](/scr/MI-Foundations/00-IntroToCS/TablaAND.png)
![](/scr/MI-Foundations/00-IntroToCS/TablaOR.png)
![](/scr/MI-Foundations/00-IntroToCS/TablaXOR.png)
![](/scr/MI-Foundations/00-IntroToCS/TablaNOT.png)

> XOR - exclusive OR ( una salida verdadera resulta si una, y solo una de las entradas a la puerta es verdadera. Si ambas entradas son falsas o ambas son verdaderas, resulta en una salida falsa)

> NOT (es la negacion de lo que tengo)

Podemos ver un ejemplo de tabla de la verdad, para ejecutarlo en consola del explorador [AQUI](https://github.com/Kapelu/Henry-FullStackDeveloper/blob/main/Modulo1-Foundations/00-IntroToCS/homework/01%20-%20TablaVerdad.js)

<h1 align='center'></h1>
<H3 align='center' style='color:#2471A3' >HALF ADDER <i>(Medio sumador)</i></H3>
<h1 align='center'></h1>

El Half-Adder es un bloque de construcción básico para sumar dos números como dos entradas y producir dos salidas. El sumador se utiliza para realizar la operación OR de dos números binarios de un solo bit. Los bits de **sumador** y **sumador** son dos estados de entrada, y **'carry** ' y **'sum** ' son dos estados de salida del medio sumador.

        A ---->┌────────────┐----> Suma
	           │ HALF ADDER │
	    B ---->└────────────┘----> Acarreo	  

<h1 align='center'></h1>
<H3 align='center' style='color:#2471A3' >PASAR DE DECIMAL A BINARIO</H3>  
<h1 align='center'></h1>

Si quisiéramos sumar 19+24 sabemos que la suma de 9+4 = 13, por lo tanto en el resultado final en la unidad nos queda un 3 y debemos “llevarnos” la decena. Luego, para la decena debemos sumar 1 + 2 + 1 = 4. Obteniendo como resultado final 43.
En el Half Adder, ese rol de acarreo lo hace la puerta lógica AND (dice si hay acarreo) mientras que el XOR efectúa la suma.

                                        <<<<<= se suma de Derecha a Izquierda
                         19 ---> 110011
                         24 --->  11000
                        ---------------
                          43 ---> 101011
                                  │││││└─> 1 AND 0 = 1(no hay acarreo); 1 XOR 0 = 1
                                  ││││└──> 1 AND 0 = 1(no hay acarreo); 1 XOR 0 = 1
                                  │││└───> 0 AND 0 = 0(no hay acarreo); 0 XOR 0 = 0
                                  ││└────> 0 AND 1 = 0(no hay acarreo); 0 XOR 1 = 1
                                  │└─────> 1 AND 1 = 1(hay acarreo); 1 XOR 1 = 0
                                  └──────> Se agrega 0 y 1 AND 0 = 1


<h1 align='center'></h1>
<H3 align='center' style='color:#2471A3' >PASAR DE BINARIO A DECIMAL</H3>
<h1 align='center'></h1>

Supongamos que tenemos el número 43 (101011). Para pasarlo de binario a decimal seguiremos los siguientes pasos.

1 Byte ---> 8 posiciones ---> 8 bit

Primero, enumeraremos las posiciones de los números, empezando desde el 0, y de derecha
a izquierda.

             Nro. Binario ---> 1 0 1 0 1 1
             Posición -------> 5 4 3 2 1 0

Luego haremos la siguiente operación. Elevaremos el número 2 a cada posición. Luego lo multiplicaremos por el número binario de la posición. Finalmente sumaremos todos.

                   Sumatoria ( 2^pos * valor) ----> de Derecha a Izquierda

  ![](/scr/MI-Foundations/00-IntroToCS/binarioAdecimal.jpg)                 
               

                           1  +  1 +  1 +  1 + 1 + 1 + 1 + 1    
                          128 + 64 + 32 + 16 + 8 + 4 + 2 + 1   ==> 255 caracteres representables ASSCI
                           7  +  6 +  5 +  4 + 3 + 2 + 1 + 0  

  
 ![](/scr/MI-Foundations/00-IntroToCS/binario.png)


                       *************************************
                       ************   UNICODE   ************
                       *************************************

![](/scr/MI-Foundations/00-IntroToCS/iunicode.jpg)

     ─ ─ ─ ─ ─ ─ ─ ─
     :) = 800  --> BINARIO ===> 
       11 00100000 --> 2 byte = UNICODE agrega 110 al 1° bit y 10 al 2° bit ─┐
                                                                             │   
    11011 10001000 00 <──────────────────────────────────────────────────────┘
              │
              └─── se pasa a 3 byte ─────────> 111011 10001000 1000 
                                                     ├───> se cuenta de Izquierda a derecha para las 
                                                           posiciones de los bytes


<br>









<h1 align='center'></h1>
<br/> 
<br/> 
<br/> 
<h3 align="center">Gracias!!!!  :rose:   XOXOXO
