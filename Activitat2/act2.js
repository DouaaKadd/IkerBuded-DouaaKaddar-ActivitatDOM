// Aquesta funció s'executa quan cliquem el botó
function afegirNoticies() {
    // Accedim al div on escriurem les notícies
    let noticies = document.getElementById("noticies");

    // Creem la llista de notícies
    let llista = `
      <ul>
        <li>El sistema operatiu Linux guanya popularitat.</li>
        <li>Nova versió de JavaScript publicada.</li>
        <li>L'IA transforma el desenvolupament web.</li>
      </ul>
    `;

    // Obtenim la data i hora actual
    let ara = new Date();
    let dataHora = "Data i hora: " + ara.toLocaleString("ca-ES");

    // Afegim tot dins del div
    noticies.innerHTML = llista + "<p>" + dataHora + "</p>";
}
