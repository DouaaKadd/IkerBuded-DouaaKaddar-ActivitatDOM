// Obtenim el node DOM pel seu id fent us de getElementById
// i el node DOM pel seu selector CSS amb querySelector
const titol = document.getElementById("titol");
const btnHola = document.querySelector("#btnHola");
const btnAdeu = document.querySelector("#btnAdeu");


// Event listener per al botó Hola 
btnHola.addEventListener("click", () => {
  titol.innerText = "Hola, món!";  // Modifiquem contingut amb innerText 
});

// Event listener per al botó Adeu
btnAdeu.addEventListener("click", () => {
  titol.innerText = "Adeu!";
});
