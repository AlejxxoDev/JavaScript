// Código de ejemplo de operador spread en JavaScript.
// El operador spread nos permite expandir los elementos de un array o un objeto.

// ✅ Declarando un array

const numeros = [5, 3, 10, 8, 12, 2];

console.log(Math.max(numeros)); // NaN

// ✅ Usando el operador spread para expandir los elementos de un array

console.log(Math.max(...numeros)); // 12


