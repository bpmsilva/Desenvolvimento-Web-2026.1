// Arrays
let arr1   = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1 = [0, -1, -2]; // funciona
// arr2 = [7, 8, 9];   // não funciona

// funciona modificar elementos individuais
arr1[0] = -1;
arr2[0] = -4;

console.log(arr1);
console.log(arr2);

// funciona adicionar ou remover elementos
arr2.push(10);
console.log(arr2);

console.log(arr2.pop());
