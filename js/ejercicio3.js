let texto = "";
do{
    let nuevoTexto = prompt("Ingrese su texto");
    texto = texto + nuevoTexto + " - ";
} while(confirm("¿Quiere seguir ingresando texto?"))
document.write(texto);