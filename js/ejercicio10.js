let filas = parseInt(prompt("Ingrese el numero de filas"));
let columnas = parseInt(prompt("Ingrese el numero de columnas"));
let cantidadCeldas = filas * columnas;
document.write("<table><tbody>");
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    document.write("<tr>");
    for(let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++){
        document.write("<td>");
        document.write(cantidadCeldas);
        cantidadCeldas--;
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</tbody></table>");