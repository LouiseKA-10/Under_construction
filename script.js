// BOTÃO VOLTAR AO TOPO
const botao = documentgetElementById("topo");

window.addEventListener("scroll", () => {
if (window.scrollY > 200) {
botao.style.display = "block";
} else {
botao.style.display = "none";
}
});
//Apaguei alguns códigos para que o modo fishing não funcione
botao.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});

// ANIMAÇÃO AO SCROLL
const elementos = document.querySelectorAll(".fade-in);

const mostrar = () => {
elementos.forEach(el => {
const pos = el.getBoundingClientRect().top;
if (pos < window.innerHeight - 100) {
el.classList.add("show");
}
});
};

window.addEventListener("scroll"), mostrar;

//Projeto de fishing falso.Somete para praticar o javascript
