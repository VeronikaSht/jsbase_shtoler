// task 6

function randomArray() {
    var arrLength = prompt("Введите кол-во элементов массива");
    var arr = new Array(Number(arrLength));
    var max = 0;
    var min;

    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.random() * (10 + 10) - 10;
        min = arr[0];

        if (arr[i] > max) max = arr[i];
        else if (arr[i] > min) min = arr[i];

    }

    return min + " - " + max;
}

console.log(randomArray());