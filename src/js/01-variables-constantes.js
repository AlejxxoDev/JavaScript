// Código de ejemplo de variables y constantes en JavaScript.

// ✅ Declarando variables

// 🔹 `var` ya no se recomienda usar, usa mejor `let` o `const`

const nombre = "Alejandro"; // const es una variable que no se puede reasignar
const apellido = "Vargas";
const edad = 27;
const email = "alejandrovargas.dev@gmail.com";

let valorDado = 13; // let es una variable que se puede reasignar

console.log(`nombre: ${nombre}`);
console.log(`apellido: ${apellido}`);
console.log(`edad: ${edad}`);
console.log(`email: ${email}`);
console.log(`valorDado: ${valorDado}`);

// ✅ Declarando un objeto con `const`

const persona = {
  nombre: "Alejandro",
  apellido: "Vargas",
  edad: 27,
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};

console.log(persona.saludar());
