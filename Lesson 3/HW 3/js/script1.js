var myArray1 = ["Жила", "была", "баба", "Яга", 163, "годков", "от", "роду"];
var myArray2 = [7, 9, 1, 0, 15];

// join method
console.log(myArray1.join(" "));

//concat method
console.log(myArray1.concat(myArray2));

//reverse method
console.log(myArray2.reverse());

// slice method
console.log(myArray1.slice(0, 4));
console.log(myArray1.slice(0,-2));

// splice method
myArray2.splice(2, 0, 99, 704)
console.log(myArray2);

// sort method
console.log(myArray1.sort());
console.log(myArray2.sort());
console.log(myArray2.sort(function(a, b) {
                            return a - b;
                        }
            ));

// push method
var newLength = myArray1.push(".");
console.log(myArray1);

// pop method
console.log("popped element is " + myArray1.pop());


// unshift method
var newLength2 = myArray1.unshift("В", "некоторой", "избушке", "на", "некой", "курьей", "ножке");
console.log(myArray1);

// shift method
console.log("shifted element is " + myArray2.shift());