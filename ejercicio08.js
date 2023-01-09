// - Una función sin parámetros que devuelva siempre "true"

function primera (){
    return true;
}
let uno = primera();
console.log(uno);

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

let segunda = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    },000);
})
segunda
    .then(() => console.log("Hola soy una promesa"))
    .catch(()=> console.log("ERROR"))

// - Una función generadora de índices pares automáticos

function* generar (){
    let i = 0;
    while(true){
        i = i + 2;
        if(i === 20){
            return i;
        }
        yield i;
    }
}

let ind = generar();

console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
console.log(ind.next().value);
