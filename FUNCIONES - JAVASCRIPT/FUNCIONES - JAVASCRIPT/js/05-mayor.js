function numMayor (a, b, c){
    if(a > b && a > c){
        return "El nuero mayor es: " + a;
    } else if (b > a && b > c){
        return "El nuero mayor es: " + b;
    } else {
        return "El nuero mayor es: " + c;

    }
}
console.log(numMayor(5, 6, 8));