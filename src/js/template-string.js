// Código ejemplo de template string en JavaScript
// los template strings son una característica de JavaScript que nos permite interpolar variables y expresiones dentro de un string.


// ✅ Creando variables

let name = "Alejandro";
let lastName = "Vargas";
let age = 26;

// ✅ Forma tradicional

console.log("Hola soy " + name + " " + lastName + " ,tengo " + age + " años");

// ✅ Forma con template string

const getSaludo = () => {
  return "Hola soy";
};

const nombreCompleto = `${name} ${lastName}`;

console.log(`${getSaludo()} ${nombreCompleto} ,tengo ${age} años`); //backticks
