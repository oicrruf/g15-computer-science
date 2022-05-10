const formulario = document.querySelector("#formulario");
const code = document.querySelector("code");

formulario.addEventListener("submit", (e) => {
  // console.log(e);
  e.preventDefault();
  const { nombre, apellido, estudiante, favorito } = e.target;
  const data = {
    nombre: nombre.value,
    apellido: apellido.value,
    estudiante: estudiante.checked,
    favorito: favorito.value,
  };
  code.innerText = JSON.stringify(data);
});
