// Criação de um array com frases para exibir dinamicamente
const frases = [
    "Sabores que contam histórias...",
    "Experiências gastronômicas inesquecíveis...",
    "Tradição com um toque moderno...",
    "Ingredientes frescos, amor e dedicação.",
    "Sinta o sabor da Tailândia sem sair do lugar."
];

// Inicializa uma variável de controlo para a posição da frase actual
let i = 0;

// Obtém o elemento HTML com o ID "frase-dinamica", onde a frase será exibida
const fraseEl = document.getElementById("frase-dinamica");

// Define um intervalo de 3 segundos para trocar a frase exibida
setInterval(() => {
    // Actualiza o índice, passando para o próximo valor no array de frases
    i = (i + 1) % frases.length; // Garante que o índice retorne ao início após a última frase

    // Actualiza o conteúdo do elemento HTML com a nova frase
    fraseEl.textContent = frases[i];
}, 3000); // troca a cada 3 segundos