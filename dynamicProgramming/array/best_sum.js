// Problem statement and walkthrough: https://youtu.be/oBt53YbR9Kk?t=6739
const bestSum = (targetSum, numbers, memo = {}) => {
	console.log("targetSum", targetSum);
	if (targetSum in memo) {
		return memo[targetSum];
	}

	if (targetSum === 0) {
		return [];
	}

	if (targetSum < 0) {
		return null;
	}

	let shortestPath = null;

	for (let number of numbers) {
		const remainder = targetSum - number;
		const result = bestSum(remainder, numbers, memo);
		// if the leaf returns an array we know we are on a winning path
		// if the result is empty array we know we reached 0 (i.e. a leaf of the tree)
		// if the result is an array with values, we know that we are on a level higher than the leaf of the tree
		if (result !== null) {
			if (shortestPath === null || shortestPath.length > result.length) {
				memo[number] = [...result, number];
				shortestPath = [...result, number];
			}
		}
	}

	console.log(`shortest path for target sum ${targetSum}`, shortestPath);

	if (shortestPath === null) {
		memo[targetSum] = null;
	}

	return shortestPath;
};

console.log("Best sum", bestSum(50, [2, 8]));
