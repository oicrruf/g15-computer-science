// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
const usuariosElement = document.querySelector("#usuarios");
const emojiElement = document.querySelector("#emoji");
const codeElement = document.querySelector("#json");

const loadUsers = (users) => {
  let allUsers = [];
  let filterEmoji = [];

  // forEach
  users.forEach((user, i) => {
    let li = document.createElement("li");
    li.innerText = user.name;
    usuariosElement.appendChild(li);
  });
  // map
  allUsers = users.map((user, i) => ({ ...user, index: i }));
  // console.log(allUsers); // imprimimos el nuevo valor de la variable allUsers

  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  filterEmoji = users.filter(
    ({ emoji }) => emoji === ":gafas_de_sol:" || emoji === ":doggy:"
  );
  // console.log(filterEmoji);
  filterEmoji.forEach(({ emoji }, i) => {
    let li = document.createElement("li");
    li.innerText = emoji;
    emojiElement.appendChild(li);
  });

  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
  let letras = ["a", "b", "c", "d", "e", "f", "g"];
  let position = letras.indexOf("e");
  let numberFour = letras[letras.indexOf("c")];

  console.log(letras[5]);
  console.log("position: ", position);
  console.log("value: ", numberFour);

  // Obtener el tamaño de un array
  console.log(allUsers.length);

  // Obtener el último valor de un array
  console.log(allUsers[allUsers.length - 1]);

  // Si todos cumplen la condición
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  let todosMenoresDeEdad = allUsers.every(({ age }) => age < 18);
  console.log(todosMenoresDeEdad);

  // Si alguno cumple la condición
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  let algunoMayorDeEdad = allUsers.some(({ age }) => age > 18);
  console.log(algunoMayorDeEdad);

  // Parsear o convertir un Objeto a un String
  // codeElement.innerText = JSON.stringify(users);
  codeElement.innerText = JSON.stringify(users, null, 2);

  // Imprimir todos los valores de un objeto
  let userObject = users[0];
  for (const key in userObject) {
    console.log(`${key}: ${userObject[key]}`);
  }
  
};

fetch("./data/users.json")
  .then((response) => response.json())
  .then((data) => loadUsers(data))
  .catch(() => console.error("Hubo un error"));
