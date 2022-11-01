const binarySearch = (arr, val, start = 0, end = arr.length) => {
	if (end >= start) {
		const mid = Math.floor((start + end) / 2);

		if (arr[mid] === val) {
			// Found the element
			return mid;
		} else if (val > arr[mid]) {
			// If the element to find is larger than the middle element,
			// Continue searching it in the upper half array.
			return binarySearch(arr, val, mid + 1, end);
		} else {
			// The element to find is smaller than the middle element,
			// Continue searching it in the lower half array.
			return binarySearch(arr, val, start, mid - 1);
		}
	}
	return -1; // Not found
};

console.log(
	"Binary search--->",
	binarySearch([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8], 3, 0, 11)
);
