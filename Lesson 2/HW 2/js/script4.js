var a = prompt("Введите число А");
var b = prompt("Введите число В");
var sum = 0;

for (i = Number(a); i <= Number(b); i++) {
    sum += i;

    if (i%2 != 0) 
        document.write(i + " ");
}

document.write("</br>" + sum);