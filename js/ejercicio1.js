let edad = parseInt(prompt("Ingrese su edad"));
if(isNaN(edad)){
    document.write("Ingrese una edad valida");
} else if(edad >= 18){
    document.write("Usted puede conducir");
} else{
    document.write("Usted no tiene edad para conducir");
}