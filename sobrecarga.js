//carga y sobrecarga de funciones
function saludar(){
    hola();
}

function hola(){
    console.log("hola soy una funcion que se esta ejecutando");
}

saludar();

//1. global()
//2. saludar() global()
//3. hola() saludar() global()
//4. saludar() global()
//5. global()


/*Esta funcion no tendra fin y empezara a añadir la misma funcion hasta tener una sobregarga*/

// function recursiva(){
//     recursiva();
// }
// recursiva();