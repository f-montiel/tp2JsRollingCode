let suma = 0;
do{
    let nuevoNumero =parseFloat(prompt("Ingrese un numero"));
    if(isNaN(nuevoNumero)){
        alert("Ingrese un numero");
    } else {
        suma = suma + nuevoNumero;
    }
    console.log(nuevoNumero);
    console.log(suma);
}while(confirm("¿Quiere ingresar un nuevo numero?"))
document.write("La suma total es: " + suma);
