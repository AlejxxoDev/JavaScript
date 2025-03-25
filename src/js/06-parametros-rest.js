// Código de ejemplo de parámetros rest en JavaScript.
// Los parámetros rest nos permiten capturar todos los argumentos restantes en una función.

// ✅ Declarando una función con parámetros rest

// const sumar = (...numeros) => {
//   let resultado = 0;

//   for (let i = 0; i < numeros.length; i++) {
//     resultado += numeros[i];
//   }
//   return resultado;
// };

// console.log(sumar(1, 2, 3, 4, 5)); // 15

// ✅ Declarando una función con parámetros rest y reduce

const sumar = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
console.log(sumar(1, 2, 3, 4, 5)); // 15

// ✅ Ejemplo de parámetros rest en una función

const agregarAlumno = (...alumnos) => alumnos;

console.log(agregarAlumno("Juan", "Pedro", "Maria", "Ana"));
// ["Juan", "Pedro", "Maria", "Ana"]






