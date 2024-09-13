function contarVocales(cadena) {
    const vocales = "Aeropuerto";
    let contador = 0;
    for (let letra of cadena) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

console.log(contarVocales("Hay un carro estraño en la esquina😨")); 