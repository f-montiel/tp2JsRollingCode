let texto = prompt("Ingreso un texto");
let arreglo = texto.split("");
let arregloInvertido = arreglo.reverse();
let textoRevertido = arregloInvertido.join("");
document.write(textoRevertido);