var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "BMW", "Mercedes"];
var lengthBefore = cars.length;
var element = prompt("Введите название элемента");

for (i = 0; i < cars.length; i++) {
    if (element == cars[i]) {
        var newElement = prompt("Элемент существует. Введите новое значение");
        cars.splice(i+1, 0, newElement);
        break;
    }
    else continue;
}

if (cars.length == lengthBefore) cars.push(element);

console.log(cars);