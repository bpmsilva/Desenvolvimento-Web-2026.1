const botao = document.querySelector("#btn");

// Seleciona apenas o primeiro elemento com a classe "disciplina"
const primeiraDisciplina = document.querySelector(".disciplina");

// Seleciona todos os elementos com a classe "disciplina"
const disciplinas = document.querySelectorAll(".disciplina");

botao.addEventListener("click", () => {

    // Altera apenas o primeiro elemento
    primeiraDisciplina.style.color = "red";

    // Altera todos os elementos
    for (const disciplina of disciplinas) {
        disciplina.style.fontWeight = "bold";
    }

    // você pode adicionar ou remover classes usando classList
    // primeiraDisciplina.classList.add("nova-classe");
    // primeiraDisciplina.classList.remove("disciplina");
});