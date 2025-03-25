// Código ejemplo de parámetros predeterminados en JavaScript.
// Los parámetros predeterminados nos permiten asignar un valor por defecto a los parámetros de una función.

// ✅ Declarando una función con parámetros predeterminados

const saludar = (nombre = "Desconocido", apellido = "Desconocido") => {
  console.log(`Hola, soy ${nombre} ${apellido}`);
}

// ✅ Llamamos a la función sin pasarle argumentos
// En este caso, la función tomará los valores predeterminados.

saludar(); // Hola, soy Desconocido Desconocido

// ✅ Llamamos a la función pasándole argumentos
// En este caso, la función tomará los valores que le pasamos como argumentos.

saludar("Alejandro", "Vargas"); // Hola, soy Alejandro Vargas