var array = new Array(1);
var sum = 0;

for (i = 0; i < array.length; i++) {
    var element = prompt("Введите числовое значение");
    var el = Number(element);

    if (isNaN(element) || element === null || element == "") {
        array.pop();
        break;
    }
    else {
        array[i] = el;
        sum += el;
        array.length++;
    }
}

console.log(array);
console.log(array.length);
console.log(sum);