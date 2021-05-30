var max = 0;

for (i = 0; i < 3; i++) {
    var a = prompt("Введите число");
    if (Number(a) > max) max = Number(a);
}

document.write(max + "</br>");