"use strict";
exports.__esModule = true;
var bubbleSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};
console.log("element from smallest to biggest --->", bubbleSort([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8]));
