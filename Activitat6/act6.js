function actualitzarData() {
    const ara = new Date();
    const dia = ara.getDate();
    const mes = ara.getMonth() + 1; // Els mesos comencen en 0
    const any = ara.getFullYear();
    const hora = ara.getHours().toString().padStart(2, '0');
    const minut = ara.getMinutes().toString().padStart(2, '0');
    const segon = ara.getSeconds().toString().padStart(2, '0');

    const text = `${dia}/${mes}/${any} ${hora}:${minut}:${segon}`;
    document.getElementById("data").innerHTML = text;
}

setInterval(actualitzarData, 1000); // S’actualitza cada segon
window.onload = actualitzarData;    // Perquè mostri la data immediatament
