// Destructuración de arreglos

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