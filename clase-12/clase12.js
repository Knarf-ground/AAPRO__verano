
function saludo(){
    while(true){
        let nombre = prompt('Cual es su nombre?')  
            if (nombre == '' || nombre == null){
                alert('Por favor ingrese su nombre')
            }
            else {
                alert('Bienvenido ' + nombre);
            break;
            }
    }
}

saludo();