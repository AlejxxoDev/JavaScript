// Código ejemplo de arreglos en JavaScript
// Los arreglos son estructuras de datos que nos permiten almacenar varios valores en una sola variable.



// ✅ Creando un arreglo forma tradicional

//  const array = new Array(50);
//  console.log(array);

// ✅ Creando un arreglo forma literal

const array = [1, 2, 3, 4, 5, 6];

// ✅ Creando un nuevo arreglo con la misma referencia

//  const array2 = array;
// array2.push(7); // modifica el arreglo 1 y 2

// console.log(array);
// console.log(array2);

// ✅ Creando un nuevo arreglo con map ✅

// const array2 = array.map(function(number){
//     return number
// }
// );

// console.log(array);
// console.log(array2); // regresa un nuevo arreglo con los mismos valores

// ✅ Ejercicio con map()

// const array2 = array.map(function(number){
//     return number * 2
// })

// console.log(array);
// console.log(array2); // regresa un nuevo arreglo con los valores multiplicados por 2

// ✅ Creando un nuevo arreglo con el spread operator

const array2 = [...array];
array2.push(7); // modifica solo al arreglo 2

console.log(array);
console.log(array2);
