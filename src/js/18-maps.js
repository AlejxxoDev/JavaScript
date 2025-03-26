// Código ejemplo de mapas en JavaScript
// los mapas son objetos que permiten almacenar pares clave-valor

// ✅ Creando un mapa

let mapa = new Map();

mapa.set("nombre", "Alejandro");
mapa.set("edad", 27);
mapa.set("apellido");

console.log(mapa);
console.log(mapa.size);

console.log(mapa.get("nombre")); // Alejandro
console.log(mapa.get("edad")); // 27
console.log(mapa.has("nombre")); // true
console.log(mapa.has("apellido")); // false

// ✅ eliminando un elemento del mapa

mapa.delete("nombre"); //
console.log(mapa.has("nombre")); // false
console.log(mapa.get("nombre")); // undefined

// ✅ inicializando mapa con valores por defecto

let mapa2 = new Map([
  ["nombre", "Alejandro"],
  ["apellido", "Vargas"],
  ["edad", 27],
]);

console.log(mapa2);


// ✅ iterando un mapa

for (let i of mapa2){
    console.log(i);
}