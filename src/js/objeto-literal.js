// Objetos literales

// ✅ Creando un objeto literal

const person = {
  name: "Alejandro",
  lastName: "Vargas",
  profession: "Systems Enginee",
  age: 26,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
};

//  console.table(person);
//  console.log(person);

// ✅ Creando un nuevo objeto con la misma referencia

//  const person2 = person ;
// person2.name = "Fernando"; // Cambia el nombre de la persona 2 y tambien de la persona 1

// console.log(person);
// console.log(person2);

// ✅ Creando un nuevo objeto con el spread operator

const person3 = { ...person };
person3.name = "Peter";

console.log(person);
console.log(person3);
