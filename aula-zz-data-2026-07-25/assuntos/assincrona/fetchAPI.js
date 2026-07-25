fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(resposta => resposta.json())
    .then(usuario => {
        console.log(usuario.name);
    });
