

// Hora actual
const horaActual = document.getElementById("horaNavbar");
setInterval(() => {
  const ara = new Date();
  horaActual.innerText = ara.toLocaleTimeString();
}, 1000);

// Cambio de fondo
const fonsColors = ["#FFF8DC", "#F0FFF0", "#F5F5DC", "#FFE4E1"];
let fonsIndex = 0;
document.getElementById("btnFons").addEventListener("click", () => {
  document.body.style.backgroundColor = fonsColors[fonsIndex];
  fonsIndex = (fonsIndex + 1) % fonsColors.length;
});
// Obtenemos los elementos
const lista = document.querySelector("#listaPasos");  // El id de la lista de pasos
const inputInici = document.querySelector("#inputInici"); // El input donde se cambia el valor inicial
const atributos = document.querySelector("#atributosLista"); // El elemento donde se mostrarán los atributos

// Cuando el usuario haga clic en el botón, actualizamos el valor de inicio y mostramos los atributos
document.querySelector("#btnActualizar").onclick = () => {
  lista.start = inputInici.value
    

   // Cambiamos el valor del atributo 'start' de la lista

    const startAtr = lista.getAttribute("start"); // Obtenemos el atributo 'start' de la lista
    const idAtr = lista.getAttribute("id"); // Obtenemos el atributo 'id' de la lista

    // Mostramos los atributos dentro del elemento 'atributos' con innerText
    atributos.innerText = 'inici = "' + startAtr + '", id = "' + idAtr + '"';

    
};
