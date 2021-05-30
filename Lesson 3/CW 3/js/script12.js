var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var number = prompt("Введите число");
var counter = 0;

for (i = 0; i < myArray.length; i++) {
    if (myArray[i] == Number(number)) {
        counter++;
        console.log("Данное число встречается в массиве " + counter + " раз.");
    }
    else continue;
}