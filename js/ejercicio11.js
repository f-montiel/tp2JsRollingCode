let nombre1 = prompt("Ingrese el primer nombre");
let edad1 = parseInt(prompt("Ingrese su edad"));
let nombre2 = prompt("Ingrese el segundo nombre");
let edad2 = parseInt(prompt("Ingrese su edad"));
let nombre3 = prompt("Ingrese el tercer nombre");
let edad3 = parseInt(prompt("Ingrese su edad"));
let mayor = Math.max(edad1, edad2, edad3);
if(!isNaN(mayor)){
    if(mayor == edad1){
        document.write(nombre1 + " ");
    }
    if(mayor == edad2){
        document.write(nombre2 + " ");
    }
    if(mayor == edad3){
        document.write(nombre3);
    }
}
else {
    document.write("Ingrese un numero valido");
}