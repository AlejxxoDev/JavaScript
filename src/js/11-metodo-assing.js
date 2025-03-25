// Código ejemplo de Object.assign en JavaScript.
// El método Object.assign nos permite copiar todas las propiedades de un objeto a otro objeto.

// ✅ Creando un objeto

const producto = {
    nombre: "PlayStation 5",
    precio: 500,
    };

// ✅ Creando un nuevo objeto con Object.assign

const producto2 = Object.assign({}, producto);

console.log(producto2); // { nombre: 'PlayStation 5', precio: 500 }