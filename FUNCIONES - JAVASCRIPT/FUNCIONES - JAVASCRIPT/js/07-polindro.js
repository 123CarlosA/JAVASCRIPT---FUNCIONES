function palindromo(palabra) {
    const palabraReversa = palabra.split("").reverse().join("");
    return palabra === palabraReversa;
}

// Ejemplo:
console.log(palindromo("Esther"));    
console.log(palindromo("Mario"));  