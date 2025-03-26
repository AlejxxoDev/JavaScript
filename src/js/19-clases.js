// Código ejemplo de clases en javascript.

// ✅ Creando una clase

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  decirNombre() {
    console.log(this.nombre);
  }
}

const alejandro = new Persona("Alejandro");

alejandro.decirNombre();

console.log(alejandro instanceof Persona); // true
console.log(alejandro instanceof Object); // true

console.log(typeof Persona); // function
console.log(typeof alejandro); // object

// ✅ Ejemplo

// class Cuadrado {
//   constructor(lado) {
//     this.lado = lado;
//   }

//   getArea() {
//     return this.lado * this.lado;
//   }
// }

// const imprimirCuadrado = (cuadrado) => console.log(cuadrado.getArea());

// let mesa = new Cuadrado(10);

// imprimirCuadrado(mesa); // 100

// ✅ Herencia de las clases

class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  getArea() {
    return `Area: ${this.base * this.altura}  `;
  }
}

let rectangulo = new Rectangulo(4, 3);

console.log(rectangulo.getArea()); // 12

class Cuadrado extends Rectangulo {
  constructor(alto) {
    super(alto, alto);
  }
}


let cuadrado = new Cuadrado(3)

console.log(cuadrado.getArea()); // 9