let numero = parseInt(prompt("Ingrese un numero"));
if(numero<=0 || numero>50 || isNaN(numero)){
    alert("El numero tiene que ser mayor que cero y mejor que 50")
} else {
    for(let indicePiramide = numero; indicePiramide>=1; indicePiramide--){
        for(let cantidadDeNumeros = 1; cantidadDeNumeros<=indicePiramide; cantidadDeNumeros++){
            document.write(indicePiramide);
        }
        document.write("<br>");
    }
}