// BOTÃO VOLTAR AO TOPO
const botao = document.getElementById("topo");

window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
botao.style.display = "block";
} else {
botao.style.display = "none";
}
});

botao.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

// ANIMAÇÃO AO SCROLL
const elementos = document.querySelectorAll(".fade-in");

const mostrar = () => {
elementos.forEach(el => {
const pos = el.getBoundingClientRect().top;
if (pos < window.innerHeight - 100) {
el.classList.add("show");
}
});
};

window.addEventListener("scroll", mostrar);