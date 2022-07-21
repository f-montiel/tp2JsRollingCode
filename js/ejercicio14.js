let texto = prompt("Ingrese el texto");
let textoConGuiones = "";
for(let indice = 0;indice<texto.length - 1;indice++){
    let caracter = texto.substring(indice, indice + 1);
    textoConGuiones = textoConGuiones + caracter;
    textoConGuiones = textoConGuiones + "-"; 
}
textoConGuiones = textoConGuiones + texto.substring(texto.length - 1, texto.length);
document.write(textoConGuiones);