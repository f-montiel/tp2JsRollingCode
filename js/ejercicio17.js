let texto  = prompt("Ingrese un texto");
let posicion = 0;
for(let indice = 0; indice < texto.length; indice++){
    if(texto[indice].toLocaleLowerCase() == "a" || texto[indice].toLocaleLowerCase() == "e" || texto[indice].toLocaleLowerCase() == "i" || texto[indice].toLocaleLowerCase() == "o" || texto[indice].toLocaleLowerCase() == "u"){
        posicion = indice + 1;
        break;
    }
}
document.write("La primera vocal esta en la posicion " + posicion);