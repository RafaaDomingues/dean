const imagem = document.querySelectorAll('img');//seleciona todas as imgs
let trocando = false;
const img1 = [
    "d1.jpg",
    "d2.jpg",
    "d3.jpg",
    "dean_principal.jpg",
    "d4.jpg",
    "d5.jpg",
    "d6.jpg"
];

const img2 = [
    "d7.jpg",
    "d8.jpg",
    "d9.jpg",
    "d10.jpg",
    "d11.jpg",
    "d12.jpg",
    "d13.jpg"
]

function mudarImagens() {
    for (let d = 0; d < imagens.length; d++) {
        if (!trocando) {
            imagens[d].src = img2[d];
        } else {
            imagens[d].src = img1[i];
        }
        trcoando = !trocando;
    }

}

document.getElementById('botao').addEventListener('click', mudarImagens);