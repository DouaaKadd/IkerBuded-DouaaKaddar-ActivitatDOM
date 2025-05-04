const llista = document.querySelector("#llista") // Obtenim l'element amb l'id de "llista" 
const inputInici = document.querySelector("#inputInici")// Obtenim l'element amb l'id de "inputInici" 
const atributs = document.querySelector("#atributs") // Obtenim l'element amb l'id de "atributs" 

//Quan l'usuari fa clic al botó Canviar, canviem l'atribut inici de la llista amb el valor de l'input
// i mostrem els atributs de la llista a l'element atributs
document.querySelector("#botoCanviar").onclick = () => {
    llista.start = inputInici.value // canviem l'atribut inici de la llista amb el valor de l'input

    const iniciAtr = llista.getAttribute("start") // Obtenim l'atribut inici (start) de la llista
    const idAtr = llista.getAttribute("id") // Obtenim l'atribut id de la llista

    // Mostrem els atributs dins del parragraf atributs amb innerText
    // i el format de la cadena es: inici = "valor", id = "valor"
    atributs.innerText = 'inici = "' + iniciAtr + '", id = "' + idAtr + '"'

}