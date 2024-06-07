/* Actividad Propuesta 3.4 */

let equipos = ["R.Madrid", "Girona", "Barcelona", "Atlético", "Villarreal", "Athletic",
    "Real Sociedad", "Betis", "Sevilla", "Celta"];
let datosEquipo = [[87, 26, 598, 368, 67, 4], [85, 46, 484, 406, 75, 1], [79, 44, 595, 412, 85, 2], 
[70, 43, 481, 438, 82, 5],[65, 65, 469, 488, 102, 8], [61, 37, 463, 511, 75, 5], [51, 39, 461, 604, 98, 2], 
[48, 45, 492, 429, 85, 3], [48, 54, 490, 477, 108, 4],[46, 57, 472, 462, 62, 5]];

let equipoGanador = 0;
for (let i = 0; i < datosEquipo.length; i++) {
    if (datosEquipo[i][0] > datosEquipo[equipoGanador][0]){
    //se compara los datos de la columna 0 que es la de los puntos de cada equipo y se almacenan
    //los puntos mas altos en la variable equipoGanador
    equipoGanador = i;
    }
}

//una vez definidos todos los datos del array, lo muestro en una tabla en el front
//creamos la tabla
let tabla = document.querySelector("#tabla");

//y creamos los elementos de la tabla recorriendolos con un bucle for
for (let index = 0; index < equipos.length; index++) {
    let fila = document.createElement("tr");
    tabla.appendChild(fila);
    let nombreEquipo = document.createElement("td");
    nombreEquipo.textContent=equipos[index];
    fila.appendChild(nombreEquipo);

    for (let c = 0; c < datosEquipo[index].length; c++) {
        let columna = document.createElement("td");
        columna.textContent=datosEquipo[index][c]
        fila.appendChild(columna);
    }
}

let tablaGanador= document.querySelector("#tablaGanador")
let filaGanador = document.createElement("tr");

for (let i = 0; i < equipoGanador.length; i++) {
    let columna = document.createElement("td");
    columna.textContent=equipoGanador[i][c]
    fila.appendChild(colum)
    
}






