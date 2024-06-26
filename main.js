import './style.css'

console.warn('Inventario de Frutas')

let frutas = ['manzana','pera','fresa','nispero','tomate']
console.log(`Frutas iniciales: ${frutas}`)
const ultimaFrutaEliminada = frutas.pop()
console.log(`Frutas eliminanddo la ultimma fruta: ${frutas}`)
console.log(`Fruta Eliminada: ${ultimaFrutaEliminada}`)
frutas.push('mango')
console.log(`Frutas con mango agregado: ${frutas}`)


console.warn('Lista de Tareas')

let tareas = [' Levantarme ', ' Comer ', ' Limpiar']
console.log(`Lista de tareas: ${tareas}`)
const tareaCompletada = tareas.shift()
console.log(`${tareaCompletada} : Tarea Completada`)
const nuevaTarea = tareas.unshift(' Bañarse ')
console.log(`Lista de tareas Actualizada: ${tareas}`)

console.warn('Fila de Espera')

let clientes = [  "Juan Pérez",  "María García",  "Pedro Sánchez",  "Ana López",  "Carlos Rodríguez"];
console.log(`Lista de Clientes: ${clientes}`)
clientes.push('Jose Vega', 'Jader Mestra')
console.log(`Lista de Clientes Actualizada: ${clientes}`)
console.log(`Cliente Atendido: ${clientes.shift()}`)

console.warn('Rotación de Elementos')

let numeros1 = [1, 2, 3, 4, 5]

console.log("Original:", numeros1)

for (let i = 0; i < 3; i++) {
  let ultimo = numeros1.pop()
  numeros1.unshift(ultimo)
  console.log(`Iteración ${i + 1}:`, numeros1)
}


console.warn('Carrito de Compras')

let carrito = []
for(let i = 0; i < 3; i++){
  let productos = prompt(`Ingrese producto # ${i+1}`)
  carrito.push(productos)
  console.log(carrito)
}
let eliminar = confirm('Desea eliminar el ultimo producto (Si o No)')
if (eliminar){
  carrito.pop()
  console.log(`Carrito Actualizado ${carrito}`)
} else{
  console.log('No se eliminó ningun producto')
}

console.warn('Doblar Valores')

let valores = [2,4,6,8,10]
let dobles = valores.map(valores => valores*2)
console.log(`Valores Originales: ${valores}`)
console.log(`Valores Dobles: ${dobles}`)

console.warn('Nombres en Mayuscula')

let nombres = ["juan", "maría", "pedro", "ana"];
let nombresMayuscula = nombres.map(nombres => nombres.toUpperCase())
console.log(`Nombres Sin mayusculas: ${nombres}`)
console.log(`Nombres Con mayusculas: ${nombresMayuscula}`)

console.warn('Precios con IVA')

let precios = [10.99, 5.50, 23.75, 7.25, 15.00, 3.99, 12.49];
console.log(`Precios sin iva: ${precios.map(precios => precios.toFixed(2))}`)
let preciosIva = precios.map(precios => precios + (precios*0.21))
console.log(`Precios con IVA: ${preciosIva.map(precios => precios.toFixed(2))}`)

console.warn('Cuadrados de Números')

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Array orginal: ${numeros}`)

let cuadrados = numeros.map(numeros => numeros ** 2)
console.log(`Array de numeros elevados al Cuadrado: ${cuadrados}`)

console.warn(`Numeros pares`)

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
console.log(`Array original: ${numeros2}`)
let pares = numeros2.filter(numeros => numeros % 2 === 0)
console.log(`Array de numeros pares: ${pares}`)

console.warn('Palabras Largas')

let palabras = ["a","no","hello","world","python"," coding","is","fun","banana","apple","orange","grape"]

console.log(`Array Original: ${palabras}`)
let largas = palabras.filter(palabras => palabras.length > 5)
console.log(`Palabras largas (mas de 5 letras ): ${largas}`)

console.warn('Productos en Oferta')

let productos1 = [
  { nombre: "iPhone 13", 
    precio: 999.99 
  },
  { nombre: "Samsung TV 4K", 
    precio: 1299.99 
  },
  { nombre: "Nike Air Jordan", 
    precio: 149.99 
  },
  { nombre: "PlayStation 5", 
    precio: 499.99 
  },
  { nombre: "Canon EOS Camera", 
    precio: 799.99 
  },
  { nombre: "Apple Watch Series 7", 
    precio: 399.99 
  },
  { nombre: "Sony Wireless Headphones", 
    precio: 249.99 
  },
  { nombre: "LG OLED TV 55\"", 
    precio: 1999.99
  },
  { nombre: "Microsoft Surface Laptop", 
    precio: 1299.99
  },
  { nombre: "Adidas Ultraboost", 
    precio: 179.99 
  },
  { nombre: "Samsung Galaxy S22", 
    precio: 799.99 
  } 
]

let oferta = productos1.filter(productos1 => productos1.precio < 500)
console.log(oferta)

console.warn('Estudiantes Aprobados')

let estudiantes = [
  { nombre: "Juan Pérez", 
    nota: 8.5 
  },
  { nombre: "María García", 
    nota: 9.2 
  },
  { nombre: "Pedro Rodríguez", 
    nota: 7.8 
  },
  { nombre: "Sofía López", 
    nota: 7.5 
  },
  { nombre: "Carlos Martínez", 
    nota: 6.2 
  },
  { nombre: "Ana Díaz", 
    nota: 8.8 
  },
  { nombre: "Luis González", 
    nota: 7.5 
  },
  { nombre: "Isabel Sánchez", 
    nota: 9.8 
  },
  { nombre: "Miguel Torres", 
    nota: 4.1 
  },
  { nombre: "Elena Hernández", 
    nota: 2.1 
  }
]
console.log(estudiantes)

let aprobados = estudiantes.filter(estudiantes => estudiantes.nota >= 7)
console.log(aprobados)

console.warn('Traeas completadas')

const tareas1 = [
  { descripcion: "Tarea 1", completada: true },
  { descripcion: "Tarea 2", completada: false },
  { descripcion: "Tarea 3", completada: true },
  { descripcion: "Tarea 4", completada: false },
  { descripcion: "Tarea 5", completada: true },
  { descripcion: "Tarea 6", completada: false },
  { descripcion: "Tarea 7", completada: true },
  { descripcion: "Tarea 8", completada: false }
];

const tareasCompletadas = tareas1.filter(tareas1 => tareas1.completada === true);

console.log(tareasCompletadas);


console.warn('Mostrar Lista')

const nombres2 = ["Juan", "María", "Pedro", "Sofía", "Carlos", "Ana", "Luis", "Isabel", "Miguel", "Elena"];

nombres2.forEach(nombres2 => console.log(nombres2));

console.warn('Sumar Edades')

const edades = [25, 30, 35, 20, 40, 28, 32, 45, 50, 38];

let sumaEdades = 0;

edades.forEach(edad => {
  sumaEdades += edad;
});

console.log(`La suma de las edades es: ${sumaEdades}`);

console.warn('Aplicar Descuento')

const productos = [
  { nombre: "Producto 1", precio: 100 },
  { nombre: "Producto 2", precio: 200 },
  { nombre: "Producto 3", precio: 50 },
  { nombre: "Producto 4", precio: 150 },
  { nombre: "Producto 5", precio: 80 }
];

productos.forEach(producto => producto.precio *= 0.9 )

console.log(productos);

console.warn('Enviar Invitaciones')

const invitados = [
  { nombre: "Juan", email: "juan@example.com" },
  { nombre: "María", email: "maria@example.com" },
  { nombre: "Pedro", email: "pedro@example.com" },
  { nombre: "Ana", email: "ana@example.com" },
  { nombre: "Luis", email: "luis@example.com" }
];

invitados.forEach(invitado => {
  console.log(`Invitación enviada a ${invitado.nombre} (${invitado.email})`);
});