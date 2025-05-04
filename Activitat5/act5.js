// Obtenim l'element amb l'id de "text" i el guardem a la variable text
const text = document.getElementById("text")

// Obtenim l'element amb l'id de "botoAfegir" i el guardem a la variable botoAfegir
document.getElementById("botoAfegir").onclick = () => {
    text.classList.add("important") //quan l'usuari fa clic al botó Afegir, afegim la classe important a l'element text (en vermell)
}
// Obtenim l'element amb l'id de "botoTreure" i el guardem a la variable botoTreure
// quan l'usuari fa clic al botó Treure, treiem la classe important a l'element text (en negre)
document.getElementById("botoTreure").onclick = () => {
    text.classList.remove("important")
}
// Obtenim l'element amb l'id de "botoToggle" i el guardem a la variable botoToggle
// quan l'usuari fa clic al botó Toggle, alternem la classe remarcat a l'element text (en groc)
// si ja està remarcat, la treiem, i si no ho està, l'afegim, es la funcionalitat de toggle
document.getElementById("botoToggle").onclick = () => {
    text.classList.toggle("remarcat")
}
