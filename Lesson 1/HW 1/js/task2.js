// task 2
var a = 54;
var b = "Kebab";

var c;

document.write("a before = " + a + ", b before = " + b + '<br>');

c = a;
a = b;
b = c;

document.write("a after = " + a + ", b after = " + b + '<br>');