/**
 * Poner emojis
 * WINDOWS: Windows + .
 * MAC: cmd + ctrl + space
 *
 */

// Las funciones que inician con _ es la manera antigua

// Valores predeterminados en parámetros de nuestras funciones

function _dataUser(firstName, lastName, age, rol) {
  var firstName = firstName || "Víctor";
  var lastName = lastName || "Reyes";
  var age = age || 36;
  var rol = rol || "USER";

  var message =
    "Mi nombre es " +
    firstName +
    " " +
    lastName +
    " y tengo " +
    age +
    " años. Mi rol de usuario es " +
    rol;

  return message;
}

console.log(_dataUser("Alonso", "Higareda", 26, "ADMIN"));
console.log(_dataUser());

function dataUser(
  firstName = "Víctor",
  lastName = "Reyes",
  age = 36,
  rol = "USER"
) {
  var message =
    "Mi nombre es " +
    firstName +
    " " +
    lastName +
    " y tengo " +
    age +
    " años. Mi rol de usuario es " +
    rol;

  return message;
}

console.log(dataUser("Aylin", "Crisóstomo", 24, "ADMIN"));
console.log(dataUser());

// Concatenar texto en JS

var mascota1 = "perro";
var mascota2 = "perro";
var cita = "2022-05-03";

var _message =
  "Mi " + mascota1 + " y mi " + mascota2 + " tiene cita el día " + cita;
console.log(_message);

var message = `Mi ${mascota1} y mi ${mascota2}  tiene cita el día ${cita}`;
console.log(message);

var primerNombre = "Ana";
var primerApellido = "Reyes";

var _nombre = primerNombre + " de " + primerApellido;
console.log(_nombre);

var nombre = `${primerNombre} de ${primerApellido}`;
console.log(nombre);

// Multiples líneas

console.log("Clean Code \n" + "Introducción \n" + "Este es un libro que ...");

console.log(`Clean Code
Introducción
Este es un libro que ...`);

console.log(
  `<p>
  Mi parrafo
</p>`
);

// Destructuración

var characterDBZ = {
  name: "Vegeta",
  level: 8000,
  breed: "saiyajin",
  planet: "Vegeta",
};

console.log(characterDBZ.name, characterDBZ.level, characterDBZ.planet);

var { name, level, breed, planet } = characterDBZ;

console.log(name, level, breed);

// Spread Operator

// characterDBZ.age = 25;

console.log({ ...characterDBZ, age: 25, height: "1.60" });

var students_male = ["Roberto", "Víctor", "Alonso", "Fausto"];
var students_female = ["Delia", "Flor", "Frida", "Gaby"];

// var all_students = students_male.concat(students_female)
var all_students = [...students_male, ...students_female];

// var all_students = [students_male, students_female]
// console.log(all_students.flat())

console.log(all_students);

// Tipos de variables

// var, let, const

{
  var nota = 10;
}
console.log(nota);

{
  let curso = "Computer Science";
  console.log(curso);
}

const country = "El Salvador";
country = "México";
console.log(country);

// Declaración de funciones

// function saludo(nombre) {
//   return "Hola " + nombre
// }

// const saludo = (nombre) => {
//   return "Hola " + nombre;
// };

// const saludo = (nombre) => (
//   "Hola " + nombre
// );

// const saludo = nombre => "Hola " + nombre

const saludo = (data) => `Hola ${data.nombre} ${data.apellido}`;

console.log(saludo({ nombre: "Mery", apellido: "Macias" }));

// Módulos
import { emoji, config } from "./modules";

// Cuando importamos desde un export defaul no se usa {}
// import emoji from "./modules";

// Cambiando el nombre de lo importado
import { config as dataBaseConfig } from "./modules";

console.log(config);
console.log(emoji());
console.log(dataBaseConfig);

// Clase

class MiClase {
  constructor() {
    this.valor1 = 0;
    this.valor2 = 0;
  }
  sumar(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
    return this.valor1 + this.valor2;
  }
  restar(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
    return this.valor1 - this.valor2;
  }
  hoy(type) {
    switch (type) {
      case "year":
        return new Date().getFullYear();
      default:
        return new Date();
    }
  }
}

const suma = new MiClase();
const restar = new MiClase();
const fecha = new MiClase();

console.log(suma.sumar(12, 6));
console.log(restar.restar(12, 6));

console.log(fecha.hoy());
console.log(fecha.hoy("year"));

// Promesas

const holaMundo = (quien) => {
  return new Promise((resolve, reject) => {
    if (quien === "😎") {
      resolve("Hola mundo! 😍");
    } else {
      reject("🤢");
    }
  });
};

holaMundo()
  .then((respuesta) => {
    console.log('Función ejecutada correctamente')
    console.log(respuesta)
  })
  .catch((error) => {
    console.log('Función ejecutada con errores')
    console.log(error)
  });
