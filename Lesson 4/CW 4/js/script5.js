// task 5

function randomArray() {
    var array = new Array(10);

    for (i = 0; i < array.length; i++) {
        array[i] = Math.random() * (10 + 10) - 10;
    }

    return array;
}

console.log(randomArray());