// Função "Padrão"
function nomePessoa() {
    console.log('Juliana');
}

nomePessoa();

// Funções com Argumentos
function soma(a, b) {
    return a + b;
}
console.log(soma(6, 7));

function saudacao(nome='estudante!') {
    console.log('Bem-vindo ' + nome)
}

saudacao();
