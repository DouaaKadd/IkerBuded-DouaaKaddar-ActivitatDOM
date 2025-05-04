// Canvia el color del text
function canviarColor(color) {
    document.getElementById("text").style.color = color;
}

// Canvia la mida del text
function canviarMida(mida) {
    document.getElementById("text").style.fontSize = mida;
}

// Canvia l’estil de lletra: cursiva, negreta o normal
function canviarEstil(estilFont, pesFont) {
    let text = document.getElementById("text");
    text.style.fontStyle = estilFont;   // 'normal' o 'italic'
    text.style.fontWeight = pesFont;    // 'normal' o 'bold'
}
