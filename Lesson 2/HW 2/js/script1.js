var arithmetical = 0;
var a = prompt("Введите число");
var b = prompt("Введите число");
var c = prompt("Введите число");

if (a == b || a == c || b == c) 
    document.write("ошибка" + "</br>");
else {
    arithmetical = (a + b + c)/3;
    document.write(arithmetical + "<br/>");
}
