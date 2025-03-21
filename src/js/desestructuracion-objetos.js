// Destructuracion

// ✅ Creando un objeto

const persona = {
  nombre: "Alejandro",
  edad: 26,
  clave: "admin123",
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// ✅ Destructuración de objetos

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornarPersona = ({ nombre }) => {
  console.log(nombre);
};

retornarPersona(persona);

