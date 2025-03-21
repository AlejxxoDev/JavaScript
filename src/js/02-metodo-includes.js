// Código de ejemplo de los métodos startsWith(), endsWith() e includes() de JavaScript.

// ✅ Declaramos una variable.

const saludo = "Hola Mundo";


// ✅ Metodo startsWith() y endsWith()

// startsWith() nos permite saber si un string comienza con un valor específico.
// endsWith() nos permite saber si un string termina con un valor específico.

console.log(saludo.startsWith("Hola")); // true
console.log(saludo.endsWith("Mundo")); // true



// ✅ Metodo includes()
// este método nos permite saber si un elemento se encuentra dentro de un array.

console.log(saludo.includes("Hola")); // true

// Declaramos un array

const animales = ["Perro", "Gato", "Tigre"];

console.log(animales.includes("Gato")); // true
console.log(animales.includes("Leon")); // false

