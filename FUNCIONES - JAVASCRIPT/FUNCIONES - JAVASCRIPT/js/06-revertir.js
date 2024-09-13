function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  

  let cadenaOriginal = "Proyectos JavaScript";
  let cadenaInvertida = invertirCadena(cadenaOriginal);
  console.log(cadenaInvertida); 