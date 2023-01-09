//Funciones asincronas

function miAsinc(){
    //hace una llamada a una base de datos externa
    //puede darnos algun error

}

const promesa = new Promise((resolve, reject) =>{
    //si esta todo correcto
    const i = Math.floor(Math.random()*2);
    if(i!== 0){
        resolve()
    }else{
        reject()
    }
})

promesa
    .then(() => console.log("Se ha ejecutado correctamente"))
    .catch(() => console.log("ERROR"))
    .finally(()=>console.log("yo me ejecuto siempre"))






    