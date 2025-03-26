// Código ejemplo de sets en JavaScript
// Los sets son una colección de valores únicos. Los sets se crean mediante la función Set(). Los sets son similares a los arrays, pero no permiten elementos duplicados.

// ✅ Creando un set

let items = new Set();

items.add(10);
items.add(11);
items.add(8);
items.add(8); // no se añade al set porque ya existe
items.add("8"); // se añade al set porque es un string

console.log(items);
console.log(items.size); // 4
console.log(items.has(8)); // true
console.log(items.has(9)); // false

// ✅ Eliminando un valor del set

items.delete(8); // elimina el valor 8 del set
console.log(items);
console.log(items.size); // 3

// ✅ Eliminando todos los valores del set

items.clear(); // elimina todos los valores del set
console.log(items);
console.log(items.size); // 0

// ✅ iterando un set

const personas = new Set(["Alejandro", "Manuel", "Carmen"]);

for (let persona of personas) {
  console.log(persona);
}

// ✅ convirtiendo un set a un array

const personasArray = Array.from(personas);
console.log(personasArray); // ["Alejandro", "Manuel", "Carmen"]

// 🔹 También podemos convertir un set a un array usando el operador spread.

const array = [...personas];
console.log(array); // ["Alejandro", "Manuel", "Carmen"]

// ✅ Creando una funcion que elimine duplicados de un array

const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const eliminarDuplicados = (array) => [... new Set(array)];

console.log(eliminarDuplicados(numbers)); // [1, 2, 3, 4, 5]


