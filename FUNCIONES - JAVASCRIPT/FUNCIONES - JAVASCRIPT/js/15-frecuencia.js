function contarFrecuencias(arreglo) {
    return arreglo.reduce((frecuencias, elemento) => {
      frecuencias[elemento] = (frecuencias[elemento] || 0) + 1;
      return frecuencias;
    }, {});
  }
  const numeros = [1, 2, 2, 3, 1, 4, 1];
const resultado = contarFrecuencias(numeros);
console.log(resultado); // Imprimirá: { 1: 3, 2: 2, 3: 1, 4: 1 }