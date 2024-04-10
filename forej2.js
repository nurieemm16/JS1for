//Autora: Núria Marzo
//Números que introduce el usuario

let num1 = 3;
let num2 = 7;

// Verificar si el primer número es menor que el segundo número
if (num1 < num2) {
    // Iterar desde el primer número hasta el segundo número
    for (let i = num1; i <= num2; i++) {
        // Verificar si el número actual es par
        if (i % 2 === 0) {
            console.log(i); // Imprimir el número par
        }
    }
} else {
    console.log("El num1 debe ser menor al num2");
}
