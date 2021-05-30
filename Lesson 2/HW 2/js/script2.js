var a = prompt("Введите число");

for (i = 0; i <= a; i++) {
    for (j = i; j > 0; j--) {
        document.write("*");
    }
    document.write("</br>");
}