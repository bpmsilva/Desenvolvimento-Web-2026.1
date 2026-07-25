const paragrafos = document.getElementsByTagName("p");

document.addEventListener("click", () => {
    paragrafos[1].textContent = "Novo texto";
    paragrafos[2].textContent = "Outro texto";
})
