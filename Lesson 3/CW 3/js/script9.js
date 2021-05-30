// 9.1
var styles = ["Джаз", "Блюз"];

// 9.2
var pushed = styles.push("Рок-н-ролл");
console.log(styles);

// 9.3
var removed = styles.splice(styles.length/2, 1, "Классика");
console.log(styles);

// 9.4
var shifted = styles.shift();
console.log(shifted);

// 9.5
var unshifted = styles.unshift("Рэп", "Регги");
console.log(styles);