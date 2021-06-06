// task 4

function maxWord(string) {
    if (string == null || string == undefined) {
        return "String is " + string + ". Enter a string.";
    }
    else if (string.length <= 0) {
        return "String is empty. Enter a string value.";
    }

    var arr = string.split(" ");
    var max = arr[0].length;

    for (i = 1; i < arr.length; i++) {
        if (arr[i].length > max) max = arr[i].length;
    }

    return max;
}

console.log(maxWord("The quick brown fox jumped over the lazy dog"));
console.log(maxWord(""));
console.log(maxWord(null));