var arrayLength = prompt("Введите размер массива");
var array = new Array(Number(arrayLength));

for (i = 0; i < array.length; i++) {
    if (i%2 == 0) {
        array[i] = ['odd', 'odd', 'odd'];
    }
    else {
        array[i] = ['even', 'even', 'even'];
    }
}

console.log(array);