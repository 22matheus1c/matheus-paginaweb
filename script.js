document.addEventListener("DOMContentLoaded", function () {
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
const texto = botao.querySelector("span");
let curtido = false;

botao.addEventListener("click", function () {
let contador = Number(texto.textContent);

if (!curtido) {
texto.textContent = contador + 1;
curtido = true;
botao.style.opacity = "0.7";
} else {
texto.textContent = contador - 1;
curtido = false;
botao.style.opacity = "1";
}
});
});
});

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);

function mudaTema() {
const corpo = document.body;
if (corpoPagina.classList.contains("tema-escuro")) {
corpoPagina.classList.contains("tema-escuro");
} else {
corpoPagina.classList.add("tema-escuro");
}
}