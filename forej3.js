//Autora: Núria Marzo
//datos introducidos por el usuario
let producto1 = 25;
let producto2 = 5;
let producto3 = 10;
let producto4 = 50;
let producto5 = 10;

let arr = [producto1, producto2, producto3, producto4, producto5]

let total = 0

for(let i = 0; i < arr.length; i++){
    // total = total + arr[i] // Forma llarga
    total += arr[i] // Forma curta i bona
}

if(total >= 100){
    console.log("Precio Original: " + total);
    console.log(`Precio con Descuento: ${total*0.85}`);

}else{
    console.log("Precio: " + total);
}
