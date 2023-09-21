let opcion  = +prompt("Introduce un tipo de operación\n1---> Multiplicación\n2--->Mayor");
const multiplicar = () => {let num1 = +prompt("Introduce un número");
let num2 = +prompt("Introduce otro número");
let resultado = num1 * num2; 
alert(resultado);};
const mayor = () =>{
    let num1 = +prompt("Introduce el número 1");
    let num2 = +prompt("Introduce l número 2");
    if(num1 > num2){
        alert("El número 1 es mayor");}else{
            alert("El número 2 es mayor");
        }
}
switch(opcion){
    case 1:
        multiplicar();
        break;
        case 2:
            mayor();
        break;
        default:
            alert("No existe esa opción");
            break;
    }
