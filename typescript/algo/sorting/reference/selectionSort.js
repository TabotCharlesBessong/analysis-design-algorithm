const selectionSortMin = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
				indexOfMin = j;
			}
		}
		if (indexOfMin !== i) {
			let temp = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = temp;
		}
	}
	return arr;
};

const selectionSortMax = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[indexOfMin]) {
				indexOfMin = j;
			}
		}
		if (indexOfMin !== i) {
			let temp = arr[i];
			arr[i] = arr[indexOfMin];
			arr[indexOfMin] = temp;
		}
	}
	return arr;
};

console.log(
	"Selection Sort Min to Max--->",
	selectionSortMin([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8])
);

console.log(
	"Selection Sort Max to Min--->",
	selectionSortMax([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8])
);