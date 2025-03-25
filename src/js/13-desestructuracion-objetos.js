// Código ejemplo de desestructuración de objetos en JavaScript
// la desestructuración de objetos es una característica de JavaScript que permite extraer múltiples propiedades de un objeto y asignarlas a variables individuales.

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

const { nombre, edad, clave:contraseña } = persona;

console.log(nombre);
console.log(edad);
console.log(contraseña);

const retornarPersona = ({ nombre }) => {
  console.log(nombre);
};

retornarPersona(persona);

// ✅ Desestructuración de objetos anidados

const autoGuardado = {
  archivo: "app.js",
  cursor: {
    linea: 7,
    columna: 16,
  },
  ultimoArchivo: {
    archivo: "index.html",
    cursor: {
      linea: 8,
      columna: 20,
    },
  },
  otroNodo: {
    subNodo: {
      cursor: {
        linea: 11,
        columna: 11,
      },
    },
  },
};

const {
  otroNodo: {
    subNodo: { cursor },
  },
} = autoGuardado;

console.log(cursor);
