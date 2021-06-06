// task 2

function pow(num, deg) {
    if (isNaN(num) || isNaN(deg)) {
        return "Число и степень должны иметь цифровое значение";
    }
    else if (num == null || deg == null) {
        return "Введите число и степень";
    }
    else if (typeof num !== 1 || typeof deg !== 1) {
        return "Число и степень должны иметь цифровое значение";
    }
    else 
        return Math.pow(num, deg);
}

var num = prompt("Введите число");
var deg = prompt("Введите степень");

console.log(pow(num, deg));