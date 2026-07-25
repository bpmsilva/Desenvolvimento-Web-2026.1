const mensagens = document.getElementsByClassName("mensagem");

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", () => {
        for (let i = 0; i < mensagens.length; i++) {
            mensagens[i].textContent = `Mensagem ${i}`;
        }
    })
});

// for (const [index, mensagem] of Array.from(mensagens).entries()) {
//     mensagem.textContent = `Mensagem ${index}`;
// }