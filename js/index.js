const frases = [
    "Sabores que contam histórias...",
    "Experiências gastronômicas inesquecíveis...",
    "Tradição com um toque moderno...",
    "Ingredientes frescos, amor e dedicação.",
    "Sinta o sabor da Tailândia sem sair do lugar."
];

let i = 0;
const fraseEl = document.getElementById("frase-dinamica");

setInterval(() => {
    i = (i + 1) % frases.length;
    fraseEl.textContent = frases[i];
}, 3000); // troca a cada 3 segundos