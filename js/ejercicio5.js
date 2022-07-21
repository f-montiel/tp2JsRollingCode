let valorLetra = 0;
do{
    let dni = parseInt(prompt("Ingrese su DNI"));
    if(isNaN(dni)){
        alert("Ingrese un DNI valido");
    } else if(dni >= 0 && dni <= 99999999){
        valorLetra = dni %23;
    } else {
        alert("El DNI tiene que ser mayor o igual a 0 y menor que 99999999");
    }
} while(confirm("¿Desea Ingresar otro DNI?"))
switch(valorLetra){
    case 0:
        alert("La letra de su DNI es: T")
        break
    case 1:
        alert("La letra de su DNI es: R")
        break
    case 2:
        alert("La letra de su DNI es: W")
        break
    case 3:
        alert("La letra de su DNI es: A")
        break
    case 4:
        alert("La letra de su DNI es: G")
        break
    case 5:
        alert("La letra de su DNI es: M")
        break
    case 6:
        alert("La letra de su DNI es: Y")
        break
    case 7:
        alert("La letra de su DNI es: F")
        break
    case 8:
        alert("La letra de su DNI es: P")
        break
    case 9:
        alert("La letra de su DNI es: D")
        break
    case 10:
        alert("La letra de su DNI es: X")
        break
    case 11:
        alert("La letra de su DNI es: B")
        break
    case 12:
        alert("La letra de su DNI es: N")
        break
    case 13:
        alert("La letra de su DNI es: J")
        break
    case 14:
        alert("La letra de su DNI es: Z")
        break
    case 15:
        alert("La letra de su DNI es: S")
        break
    case 16:
        alert("La letra de su DNI es: Q")
        break
    case 17:
        alert("La letra de su DNI es: V")
        break
    case 18:
        alert("La letra de su DNI es: H")
        break
    case 19:
        alert("La letra de su DNI es: L")
        break
    case 20:
        alert("La letra de su DNI es: C")
        break
    case 21:
        alert("La letra de su DNI es: K")
        break
    case 22:
        alert("La letra de su DNI es: E")
        break
}