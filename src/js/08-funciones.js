// Funciones

// ✅ Creando una función tradicional (nombrada)

// function saludar(nombre) {
//     return `Hola soy ${nombre}`;
// }

// console.log(saludar('Alejandro'));

// ✅ Creando una función tradicional (anonima)

// const saludar = function(nombre) {
//     return `Hola soy ${nombre}`;
// }

// console.log(saludar('Alejandro'));

// ✅ Creando una función de flecha

// const saludar =(nombre)=>{
//     return `Hola soy ${nombre}`;
// }

// console.log(saludar('Alejandro'));

// ✅ Creando una función de flecha (simplificada)

//🔹 No es necesario escribir `return` ni usar llaves `{}` si la función devuelve un valor en una sola línea.

// const saludar = (nombre) => `Hola soy ${nombre}`
// console.log(saludar('Alejandro'));

// ✅ Creando una función de flecha (simplificada) con un objeto

// const getUserActive = (nombre) => ({
//   uid: "ABC123",
//   username: nombre,
// });

// const userActive = getUserActive("Alejandro");

// console.log(userActive);



const persona = {
  nombre:'alejandro',
  getNombre(){
    console.log(this.nombre);
  }
}

persona.getNombre();