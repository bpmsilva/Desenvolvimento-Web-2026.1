async function carregarUsuario() {

    const resposta =
        await fetch("https://jsonplaceholder.typicode.com/users/1");
    const usuario = await resposta.json();

    console.log(usuario.name);
}

carregarUsuario();
