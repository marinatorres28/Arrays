// //para insertar al final del array un elemento
// //push-> nombreArray.push

// let equipos = ["R.Madrid", "Girona", "Barcelona", "Atlético", "Villarreal", "Athletic",
//     "Real Sociedad", "Betis", "Sevilla", "Celta"];
// equipos.push("Tomelloso");
// console.log(equipos);

// //insertar al principio...
// equipos.unshift("Alcazar de San Juan")



/* ACTIVIDAD Propuesta 3.5 */

//declaramos el array de 10 numeros 
let numeros = new Array(10);

for (let i = 0; i < numeros.length; i++) {
    let numeros = parseInt(Math.random() * 21) * 5;

}

//mientras numeros[0] (en la posicion 0) sea menor que 50
while (numeros[0] < 50) {
    //eliminamos el primer numero 
    numeros.shift[0];
    //insertamos otro multiplo de 5 aleatoriamente
    numeros.push[0] = parseInt(Math.random() * 21) * 5;
    
    if(numeros[0]>=50){
    numeros.push[0] = parseInt(Math.random() * 21) * 5;
    }
}

//mientras el ultimo numero[9] (en la posicion 9) sea mayor de 10
while (numeros[9] > 50) {
    //eliminamos el numero en esa posicion
    numeros.pop[9];
    //insertamos otro multiplo aleatorio en la misma posicion 
    numeros.push[9] = parseInt(Math.random() * 21) * 5;

    if(numeros[9]<=50){
        numeros.push[9] = parseInt(Math.random() * 21) * 5;
        }
}

//mostramos el array
console.log(numeros);



