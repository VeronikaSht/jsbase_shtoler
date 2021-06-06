// task 1

function calculate(a, b, sign) {
    if (isNaN(a) || isNaN(b))
        return "Введенное значение должно быть числом";
    else if (a == null || b == null || sign == null) 
        return "Введите число. Значение не может быть пустым";
    else if (typeof a != 1 || typeof b != 1) {
        return "Введенное значение должно быть числом";
    }
    else {
        if (sign == "+") return a + b;
        else if (sign == "-") return a - b;
        else if (sign == "/") return a / b;
        else if (sign == "*") return a * b;
        else return "Введите знак арифметической опреации."
    }
}

var a = prompt("Введите число A");
var b = prompt("Введите число B");
var sign = prompt("Введите знак арифметической операции");

console.log(calculate(Number(a), Number(b), sign));