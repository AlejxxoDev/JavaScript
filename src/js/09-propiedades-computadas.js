// Código ejemplo de propiedades computadas en JavaScript.
// Las propiedades computadas nos permiten definir propiedades de un objeto utilizando una expresión.

let apellido = "primer apellido";

const persona = {
  "promer nombre": "Alejandro",
  [apellido]: "Vargas",
};

console.log(persona["promer nombre"]);
console.log(persona[apellido]);
