// Código ejemplo de Object.is en JavaScript.
// El método Object.is nos permite comparar dos valores para determinar si son iguales.

// ✅ Comparando dos valores con == , === , Object.is

console.log(-0 == +0); // true
console.log(-0 === +0); // true
console.log(Object.is(-0, +0)); // false

console.log("=====================");

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

console.log("=====================");

console.log(5 == 5); // true
console.log(5 == "5"); // true

console.log(5 === 5); // true
console.log(5 === "5"); // false

console.log(Object.is(5, 5)); // true
console.log(Object.is(5, "5")); // false

