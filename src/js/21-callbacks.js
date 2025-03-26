// Código ejemplo de callbacks en javascript.

const getUserById = (id, callback) => {
  const user = {
    nombre: "alejandro",
    id,
  };

  callback(null, user);
};

getUserById(1, (err, user) => {
  console.log("usuario de base de datos", user);
});

const empleados = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 2000,
  },

];

const salarios = [
  {
    id: 1,
    nombre: "Alejandro",
  },
  {
    id: 2,
    nombre: "Melissa",
  },
];

const getEmpleado = (id, callback) => {
  const empleadoDB = empleados.find((empleado) => empleado.id === id);

  if (!empleadoDB) {
    callback(`No existe el empleado con id ${id}`);
  } else {
    callback(null, empleadoDB);
  }
};

const getSalario = (empleado, callback) => {
  const salarioDB = salarios.find((salario) => salario.id === empleado.id);

  if (!salarioDB) {
    callback(
      `No se encontro un salario para el empleado con nombre ${salarioDB.nombre}`
    );
  } else {
    callback(null, salarioDB);
  }
};


getEmpleado(3,(err,empleado)=>{

if ( err) {
  return console.log(err);
}


getSalario(empleado,(err,resp)=>{
  if ( err) {
    return console.log(err);
  }
 console.log(resp);  

})

})
