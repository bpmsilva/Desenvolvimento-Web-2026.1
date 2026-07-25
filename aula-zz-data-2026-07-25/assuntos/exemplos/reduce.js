const numeros = [10, 20, 30, 40];

// map
const numerosMultiplicados = numeros.map((numero) => {
    return numero * 2;
});

console.log(numerosMultiplicados);

// filter
const numerosFiltrados = numeros.filter((numero) => {
    return numero > 20;
});

console.log(numerosFiltrados);

// reduce
const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);

console.log(soma);