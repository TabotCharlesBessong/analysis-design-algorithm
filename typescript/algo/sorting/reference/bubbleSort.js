const bubbleSortMin = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};

console.log(
	"element from smallest to biggest --->",
	bubbleSortMin([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8])
);
