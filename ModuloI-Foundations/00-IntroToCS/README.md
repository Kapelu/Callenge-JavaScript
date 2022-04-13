<h1 align='center'></h1>
<h1 align="center">INTRO TO CS</h1>

<H3 align= rigth style='color:#2471A3' >TABLA DE LA VERDAD</H3>  

![](https://github.com/Kapelu/Henry-Apuntes/blob/main/scr/MI-Foundations/00-IntroToCS/TablaAND.png)
![](https://github.com/Kapelu/Henry-Apuntes/blob/main/scr/MI-Foundations/00-IntroToCS/TablaOR.png)
![](https://github.com/Kapelu/Henry-Apuntes/blob/main/scr/MI-Foundations/00-IntroToCS/TablaXOR.png)
![](https://github.com/Kapelu/Henry-Apuntes/blob/main/scr/MI-Foundations/00-IntroToCS/TablaNOT.png)

> XOR - exclusive OR ( una salida verdadera resulta si una, y solo una de las entradas a la puerta es verdadera. Si ambas entradas son falsas o ambas son verdaderas, resulta en una salida falsa)

> NOT (es la negacion de lo que tengo)

<H3 align= rigth style='color:#2471A3' >HALF ADDER <i>(Medio sumador)</i></H3>

El Half-Adder es un bloque de construcción básico para sumar dos números como dos entradas y producir dos salidas. El sumador se utiliza para realizar la operación OR de dos números binarios de un solo bit. Los bits de **sumador** y **sumador** son dos estados de entrada, y **'carry** ' y **'sum** ' son dos estados de salida del medio sumador.

        A ---->┌────────────┐----> Suma
	           │ HALF ADDER │
	    B ---->└────────────┘----> Acarreo	  


<H3 align= rigth style='color:#2471A3' >PASAR DE DECIMAL A BINARIO</H3>  

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



<H3 align= rigth style='color:#2471A3' >PASAR DE BINARIO A DECIMAL</H3>

1 Byte ---> 8 posiciones ---> 8 bit

0 0 1 0 1 0 1 1
 7 6 5 4 3 2 1 0

               Sumatoria ( 2^pos * valor) de Derecha a Izquierda
                  2^0*1 + 2^1*1 + 2^2*0 + 2^3*1 + 2^4*0 + 2^5*1 
                   1*1  +  2*1  +  4*0  +  8*1  +  16*0 +  32*1
                    1   +   2   +   0   +   8   +    0  +   32
                                        43

                                                            __

   1  +  1 +  1 +  1 + 1 + 1 + 1 + 1    
 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1   ==> 255 caracteres representables ASSCI
   7  +  6 +  5 +  4 + 3 + 2 + 1 + 0  

  
  

*           Estado Fisico-------->  OFF  ON   ON   OFF  OFF  ON   ON  OFF

*           Notacion Binaria----->   0    1    1    0    0    1    1   0

*           Orden de Magnitud---->  2^7  2^6  2^5  2^4  2^3  2^2  2^1 2^0

*           Valor Decimal--------->  128  64   32   16    8    4    2   1

*           Valor Aplicable-------->   0   64   32    0    0    4    2   0

*           Total Valor Decimal--->         102 = 64 + 32 + 4 + 2 

                        *************************************
                       ************   UNICODE   ************
                       *************************************
<table>
	<thead>
	<tr>
		<th>&nbsp;Nro de bytes&nbsp;</th>
		<th>Bytes 1</th>
		<th>Bytes 2</th>
		<th>Bytes 3</th>
		<th>Bytes 4</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1</td>
		<td>&nbsp;0XXXXXXX</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
		<td>&nbsp;</td>
	</tr>
	<tr>
		<td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2</td>
		<td>&nbsp;110XXXXX</td>
		<td>&nbsp;10XXXXXX&nbsp;</td>
		<td>&nbsp;10XXXXXX&nbsp;</td>
		<td></td>
	</tr>
	<tr>
		<td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3</td>
		<td>&nbsp;1110XXXX</td>
		<td>&nbsp;10XXXXXX</td>
		<td>&nbsp;10XXXXXX</td>
		<td></td>
	</tr>
	<tr>
		<td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;4</td>
		<td>&nbsp;11110XXX</td>
		<td>&nbsp;10XXXXXX</td>
		<td>&nbsp;10XXXXXX</td>
		<td>&nbsp;10XXXXXX</td>
	</tr>
	<tbody>
</table>

     ─ ─ ─ ─ ─ ─ ─ ─
     :) = 800  --> BINARIO ===> 
       11 00100000 --> 2 byte = UNICODE agrega 110 al 1° bit y 10 al 2° bit ─┐
    11011 10001000 00 <───────────────────────────────────────────────────────┘
              └─── se pasa a 3 byte ─────────> 111011 10001000 1000 ├───> se cuenta de Izquierda a derecha para las posiciones de los bytes


<br>








<pre><code>&lt;ul&gt;
  &lt;li&gt;Item 1 &lt;b&gt;Se muestra el código&lt;/b&gt;&lt;/li&gt;
  &lt;li&gt;Item 2 &lt;i&gt;HTML como código&lt;/i&gt;&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>
<h1 align='center'></h1>
<br/> 
<br/> 
<br/> 
<h3 align="center">Gracias!!!!  :rose:   XOXOXO
