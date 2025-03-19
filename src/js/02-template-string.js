//template string

let name = "Alejandro";
let lastName = "Vargas";
let age = 26;

//forma tradicional

console.log("Hola soy " + name + " " + lastName + " ,tengo " + age + " años");

//forma con template string

const getSaludo = () => {
  return "Hola soy";
};

const nombreCompleto = `${name} ${lastName}`;

console.log(`${getSaludo()} ${nombreCompleto} ,tengo ${age} años`); //backticks
