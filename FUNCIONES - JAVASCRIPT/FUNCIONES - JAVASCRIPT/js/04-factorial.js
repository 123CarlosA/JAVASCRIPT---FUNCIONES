// <!-- 4. Calcular el factorial de un número -> Crea una función que devuelva el factorial de un número dado. -->
function factorial(num){
    if (num === 0){
        return 1;
    }else{
        return num* factorial(num -1 );
    }
}
let numero = 5;
let resultado = factorial(numero);
console.log("El factorial de " + numero + " es: " + resultado);