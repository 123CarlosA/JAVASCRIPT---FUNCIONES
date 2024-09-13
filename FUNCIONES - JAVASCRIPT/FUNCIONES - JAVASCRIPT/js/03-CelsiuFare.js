function celsiusAFahrenheit(celsius) {
    // Fórmula de conversión: Fahrenheit = (Celsius * 9/5) + 32
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  // Ejemplo de uso:
  let temperaturaCelsius = 25;
  let temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
  console.log(temperaturaCelsius + " grados Celsius equivalen a " + temperaturaFahrenheit + " grados Fahrenheit.");