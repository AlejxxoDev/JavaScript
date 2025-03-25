// Código ejemplo de símbolos en JavaScript
// Los símbolos son un tipo de dato primitivo introducido en ES6. Son únicos e inmutables. Los símbolos se crean mediante la función Symbol().

// ✅ Creando un símbolo

let primerNombre = Symbol();
let segundoNombre = Symbol();

let persona = {
  [segundoNombre]: "Vargas",
};

persona[primerNombre] = "Alejandro";

console.log(persona.primerNombre); // undefined

console.log(persona[primerNombre]); // Alejandro

console.log(persona[segundoNombre]); // Vargas



let simbolo1 = Symbol("simbolo");
let simbolo2 = Symbol("simbolo");

console.log(simbolo1 == simbolo2); // false
console.log(simbolo1 === simbolo2); // false
console.log(Object.is(simbolo1, simbolo2)); // false
