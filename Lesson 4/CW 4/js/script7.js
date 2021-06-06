// task 7

function isDivisible(num, x, y) {
    if (num % x == 0 && num % y == 0) {
        return true;
    }
    else if (num % x != 0 && num % y != 0) {
        return "не делится на" + x + " и " + y;
    }

    return "не делится на " + x + "|" + y;
}

console.log(isDivisible(15, 3, 5))