//capturar nombres
let amigos = [];

//agregarAmigos

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre"); //Alerta en caso de no recibir datos
    return;
  }
  //eliminar el espacio en blanco
  nombreAmigo = nombreAmigo.trim();
  //agrega el nombre al array
  amigos.push(nombreAmigo);
  //limpiar la caja de texto
  document.getElementById("amigo").value = "";
  actualizarListaAmigos();
  console.log(nombreAmigo);
}

//actualizar lista amigos
function actualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  //iteración
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

//seleccion aleatoria
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agregue un nombre");
    return;
  }
  let resultadoHTML = document.getElementById("resultado");
  resultadoHTML.innerHTML = "";

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  let liResultado = document.createElement("li");
  liResultado.textContent = `¡Tu amigo secreto es ${amigoSorteado}`;
  resultadoHTML.appendChild(liResultado);
}
