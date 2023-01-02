
const selectionSortMin = (arr:number[]) => {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin: number = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
		}
		if (indexOfMin !== i){
			let temp: number = arr[i]
			arr[i] = arr[indexOfMin]
			arr[indexOfMin] = temp
		}
	}

	return arr
}

console.log(
	"Selection Sort Min to Max--->",
	selectionSortMin([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8])
);

const selectionSortMax = (arr:number[]) => {
	for (let i = 0; i < arr.length; i++) {
		let indexOfMin: number = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] > arr[indexOfMin]) {
        indexOfMin = j
      }
		}
		if (indexOfMin !== i){
			let temp: number = arr[i]
			arr[i] = arr[indexOfMin]
			arr[indexOfMin] = temp
		}
	}

	return arr
}

console.log(
	"Selection Sort Min to Max--->",
	selectionSortMax([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8])
);

export {}