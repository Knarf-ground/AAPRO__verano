let topping;
let precio;
let precioFinal;
let helado = 255;

if(topping == "Oreo"){
    precio = 10;
} else if(topping = "KitKat") {
    precio = 15;
} else if(topping = "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos este topping");
}

precioFinal = helado + precio;

console.log("el helado cuesta $"+ precioFinal);