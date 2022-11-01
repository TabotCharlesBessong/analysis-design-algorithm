
const mergeMin = (left,right) => {
  const merged = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			merged.push(left.shift());
		} else {
			merged.push(right.shift());
		}
	}
	return [...merged, ...left, ...right];
}

const mergeMax = (left, right) => {
	const merged = [];
	while (left.length && right.length) {
		if (left[0] > right[0]) {
			merged.push(left.shift());
		} else {
			merged.push(right.shift());
		}
	}
	return [...merged, ...left, ...right];
};

const mergeSort = (arr) => {
	if (arr.length === 1) return arr;

	const center = Math.floor(arr.length / 2);
	const left = arr.slice(0, center);
	const right = arr.slice(center);

	// Recursively split the left arrays and right arrays until they both have one element left.
	// And then merge them into a sorted array.

	// Merging sorting element from max to min --->
	// return mergeMax(mergeSort(left), mergeSort(right));

	// Merging sorting element from min to max --->
	return mergeMin(mergeSort(left), mergeSort(right));
}

console.log(
	"Merging sorting element from min to max --->",
	mergeSort([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8])
);
