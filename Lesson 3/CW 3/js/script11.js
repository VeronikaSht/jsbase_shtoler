var a = [
    [1, -10, 4, 5],
    [1, 5, 5, 3],
    [-1, 8, 4, 1],
    [1, -10, -4, 5],
    [1, 10, 4, 0],
];
var maxSum = 0;

for (i = 0; i < a.length; i++) {
    var sum = 0;
    for (j = 0; j < a[i].length; j++) {
        sum += a[i][j];
    }

    if (sum > maxSum) maxSum = sum;
}

console.log(maxSum);