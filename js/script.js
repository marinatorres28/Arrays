//variables-> nombre, utilza un espacio de memoria para guardar un valor

let alumno1 = "Juan Perez";
let alumno2 = "Marina Torres";
//...para estructuras de datos-> se guardan en memoria como las variables
//se utilizan ARRAYS


//declaracion de un array
let alumnos = ["Juan Rodriguez", "Marina Torres", "Dani Lopez", "Tania Pinero", "Sergio Castro"];
//agregar un elemento al array (alumno[indice])
alumnos[5] = "Arantxa Gonzalez";
//mostramos el alumno en la posicion [3]
console.log(alumnos[3]);
//si queremos mostrar el array completo
console.log(alumnos);
let profesores = new Array(); //declaramos un array sin contenido

//remplazar un valor en una posicion especifica, con invocarlo se puede cambiar
alumnos[5] = "Arantxa Gonzalez García";



/* ACTIVIDAD 3.1 
Crear un array con 6 localidades y mostrar solo las de posiciones impares 
*/

let localidades = ["Alcazar de San Juan", "Argamasilla de Alba", "Mota del Cuervo", "Cinco Casas", "Quintanar de la Orden", "Tomelloso"];
//si recorremos el array con el bucle while,inicializamos un indice que empiece en cero
let indice = 0;
//para conocer la longitud de un array utilizamos-> nombreArray.length
while (indice < localidades.length) {
    //si indice dividido entre 2 el resto es diferente a 0, el indice es impar
    if (indice % 2 != 0) {
        console.log(localidades[indice]); //se muestra la localidad de las posiciones impares
    }
    indice++;
}

/* Recorrer todo el array localidades */
for (let index = 0; index < localidades.length; index++) {
    console.log(`Localidad ${index + 1}-> ${localidades[index]}`);
}



//CREAR UN ARRAY BIDIMENSIONAL...con valores random del 1 al 100
//Crear 5 filas y 4 columnas

let arrayFC = new Array(5); //el 5 indica la longitud del array que estamos definiendo
for (let i = 0; i < arrayFC.length; i++) { //recorremos las filas
    arrayFC[i] = new Array(4); //en este punto se crean las columnas a la fila i
    for (let y = 0; y < arrayFC[i].length; y++) { //se recorren las columnas por esa fila
        arrayFC[i][y] = parseInt(Math.random() * 10); //crea un valor aleatorio y lo asigna a las filas y columnas
    }
}
console.log(arrayFC);



/* 
creamos un cuadro (div) y un desplegable indicando los colores, y segun selecciones...va al array 
con el indice y cambia el color
*/

let coloresRGB=["#F39C12","#C0F312","#12F3E5","#F312AF","#F31212"];
let nombreRGB=["Naranja","Lima","Turquesa","Rosa","Rojo"];
let colores=document.querySelector("#colores")

for (let i = 0; i < nombreRGB.length; i++) {
    let opcion=document.createElement("option"); //creamos el option del select que tenemos en el html
    //le indicas con textContent que muestra en el select por cada opcion
    opcion.textContent=nombreRGB[i];
    //se le agrega atributos a opcion
    opcion.setAttribute("value",i);
    colores.appendChild(opcion);
}

let container=document.querySelector(".container");
//escuchamos el evento de cambio dentro del select para que cambie el color de fondo

colores.addEventListener("change",function(){
    container.style.backgroundImage="none";
   console.log(colores.value);
   container.style.backgroundColor=coloresRGB[colores.value];
   container.style.border="1 px solid #fff";
   container.style.borderRadius="35px";

   if (colores.value==""){
    container.style.backgroundImage="url(../img/gato-aseandose.webp)";
   }
})