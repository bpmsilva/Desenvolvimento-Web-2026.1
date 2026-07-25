const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

arr[0] = 10;
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 10;
}
console.log(arr);
