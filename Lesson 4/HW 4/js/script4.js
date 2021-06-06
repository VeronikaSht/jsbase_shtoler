// task 4

function Fibonacci(n) {
    var prev = 0;
    var next = 1;

    for (i = 0; i < n; i++) {
        next = prev + next;
        prev = next - prev;

    }

    return prev;
}

var n = prompt("Введите число");

console.log(Fibonacci(n));