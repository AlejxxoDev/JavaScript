// Código ejemplo de desestructuración de arreglos en JavaScript
// la desestructuración de arreglos es una característica de JavaScript que permite extraer múltiples valores de un arreglo y asignarlos a variables individuales.


// ✅  Desestructuración de arreglos

const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;

console.log(p3);



const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};


const arr = useState("Goku");

const [nombre, setNombre] = arr;

console.log(nombre);

setNombre();

// ✅ desestructuración de arreglos anidados

const colores = ["rojo", "verde", "azul", ["amarillo", "morado"]];

const [, , , [c4, c5]] = colores;

console.log(c4, c5);