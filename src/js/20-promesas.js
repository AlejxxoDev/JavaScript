// Código ejemplo de promesas en javascript.

const tareaAsincrona = () => {
  let promesa = new Promise((resolve, reject) => {


setTimeout(() => {

    console.log('Proceso asincrono terminado');
    resolve();
  
}, 1300);



  })

  return promesa;
};

tareaAsincrona().then(()=>console.log('todo OK')
    ,()=>
    console.log('Todo mal')
    
    )

console.log('Código secuencial');
