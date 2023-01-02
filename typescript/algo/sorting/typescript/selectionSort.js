"use strict";
exports.__esModule = true;
var selectionSortMin = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var indexOfMin = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            var temp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = temp;
        }
    }
    return arr;
};
console.log("Selection Sort Min to Max--->", selectionSortMin([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8]));
var selectionSortMax = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var indexOfMin = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        if (indexOfMin !== i) {
            var temp = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = temp;
        }
    }
    return arr;
};
console.log("Selection Sort Min to Max--->", selectionSortMax([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8]));
