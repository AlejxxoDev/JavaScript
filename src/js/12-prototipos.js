// Código ejemplo de prototipos en JavaScript
// los prototipos son una forma de herencia en JavaScript

// ✅ Creando un objeto

let gato = {
  sonido() {
    console.log("miau!");
  },
  chillido() {
    console.log("MIAU!!");
  },
};

let perro = {
  sonido() {
    console.log("guau!");
  },
};

let angora = Object.create(gato);


console.log(Object.getPrototypeOf(angora) === gato); // true
angora.sonido(); // miau!
angora.chillido(); // MIAU!!


// ✅ cambiando el prototipo de un objeto

Object.setPrototypeOf(angora, perro);

console.log(Object.getPrototypeOf(angora) === gato); // false
angora.sonido(); // guau!
angora.chillido(); // Error: angora.chillido is not a function
