let texto = prompt("Ingrese el texto");
let numero = 0;
for(let indice = 0; indice < texto.length; indice++){
    if(texto[indice].toLocaleLowerCase() == "a" || texto[indice].toLocaleLowerCase() == "e" || texto[indice].toLocaleLowerCase() == "i" || texto[indice].toLocaleLowerCase() == "o" || texto[indice].toLocaleLowerCase() == "u"){
        numero++;
    }
}
document.write("El texto tiene " + numero + " vocales");