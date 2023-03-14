function esPalindromo(cadena) {
    // Eliminar los espacios en blanco y convertir a minúsculas
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    
    // Comparar la cadena original con su versión invertida
    return cadena === cadena.split('').reverse().join('');
  }
  
  let palabra = prompt("ingrese la palabra");
  
  if (esPalindromo(palabra)) {
    alert(palabra + " es un palíndromo.");
  } else {
    alert(palabra + " no es un palíndromo.");
  }