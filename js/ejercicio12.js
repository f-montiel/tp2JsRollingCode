// Formula matematica para encontrar un numero random entre un minimo y un maximo
//Math.random() * (maximo - minimo + 1) + minimo) 
let numero = Math.trunc(Math.random() * (99 - 1 + 1) + 1);
document.write(numero);