// Accés amb getElementById a la imatge i al seu nom
const imatge = document.getElementById("imatge");
const nomImatge = document.getElementById("nomImatge");

// Mostrem atributs de la imatge per consola
console.dir(imatge);
console.log("src actual:", imatge.getAttribute("src")); // Mostrem la ruta (src) actual
// Afegim un event listener al botó "Canviar a gos" i quan es clica cambia la imatge a gos.png i el nom del archiu
document.getElementById("btnGos").addEventListener("click", () => {
  imatge.src = "/img/gos.png"; // canviem src 
  nomImatge.innerText = "gos.png";
});
//Agefim un altra event listener al botó "Canviar a gat" i quan es clica cambia la imatge a gat.png i el nom del archiu
document.getElementById("btnGat").addEventListener("click", () => {
  imatge.src = "/img/gat.png";
  nomImatge.innerText = "gat.png";
});
