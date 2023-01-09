//funciones flecha y anonimas

let arreglo = [ 1,2,3,4,5,6,7,4,8];

let arregloDos = arreglo.map(valor => valor *2);

console.log(arregloDos);

/*En el arreglo dos podemos ver una funcion anonima ya que no tiene nombre
pero la estamos definiendo dentro de map valor => valor * 2  */

/*Esta es la manera de trabajar ahora con funciones flecha*/

let dobleValor = valor => valor * 2;

console.log(dobleValor(8));

/*Tambien podemos asignar una funcion dentro de otra para obtener valores */

let arregloTres = arreglo.map(dobleValor);

console.log(arregloTres);