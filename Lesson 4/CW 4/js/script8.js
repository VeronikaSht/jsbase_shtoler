// task 8

function setArray(N, A, B) {
    var arr = new Array(N);

    for (i = 0; i < arr.length; i++) {
        arr[i] = Math.random() * (B - A) + A;
    }

    return arr;
}

function getArray(array, from, to) {

    if (from < 0 || to < 0) {
        return "Error. Indexes must be more than 0";
    }
    else if (to >= array.length) {
        return "Error. Index is not defined";
    }
    else if (from > to) {
        return "Error. Second index must be more than first one";
    }
    else  {  
    }

    var sum = 0;
    for (i = from; i <= to; i++) {
        sum += array[i];
    }

    return "Сумма чисел в диапазоне от индекса" + from
            + " по индекс " + to + " равна: " + sum;
}

var A = 1;
var B = 10;
var arr = setArray(8, A, B);

console.log("массив " + arr + " сгенерированный от " + A + " до " + B);
console.log(getArray(arr, 2, 5));