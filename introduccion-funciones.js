// Que son las funciones, como se declaran y como se utilizan

function usuario (nombreUno){
    console.log(`Hola, ${nombreUno}`);
}
//toda funcion hay que llamarla, sino no se ejecuta

usuario("Miguel");

///// aqui podemos observar que no cambia la varia por valor.

let usuarioDos = "Juan";
console.log(usuarioDos);

despedir(usuarioDos);
console.log(usuarioDos)

function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adios ${nombre}`);
}

/////////// variable por referencia

/*Se debe tener cuidado porque aqui si se cambia el valor del objeto por ejemplo el nombre
ya no es Jose, es Gabriel, y esto nos puede traer errores en el codigo mas adelante ya que con
los objetos si permite cambiar el valor por referencia */

let humano = {nombre: "Jose", apellido: "Rodriguez"};
console.log(humano);

function saludarPersona (objeto){
    objeto.nombre = "Gabriel";
    console.log(`Hola, ${objeto.nombre} ${objeto.apellido}`)
}
saludarPersona(humano);

console.log(humano)// ahora el nombre es Gabriel

/* se puede imprimir un parametro por defecto en caso de que no le pasemos ningun parametro
a la funcion al momento de llamarla */

function mostrarNumero (numero = 7){

    console.log(numero);
}

mostrarNumero(/*parametro que se pasa a la funcion al llamarla*/);


/*tambien se pueden pasar n cantidad de parametros con el metodo de propagacion
 al momento de llamar la funcion en caso de no haber asignado un valor al parametro*/

function num (...parametros){
    console.log(parametros);
}
num(1, 2, "hola", 3, 4, 5,);

/*Tambien se pueden sumar los parametros y tener un valor total de todo lo que se le pase
a la funcion */

function suma (...numeros){
    return numeros.reduce ((a, b) => a + b) ;
}

let a = suma(2,4,5,6,2,3);//todos estos valores se suman con el metodo reduce

/*Para que la funcion arroje un valor se usa la palabra return, esta nos devolvera
un valor si no la colocamos la funcion no devuelve nada, en este console.log si no hubieramos
colocado return a la funcion, nos hubiera mostrado "undefined" (valor indefinido) */

console.log(a);

function salida (a,b){
    return a * b;
}
let s = salida(5,4);
console.log(s)
