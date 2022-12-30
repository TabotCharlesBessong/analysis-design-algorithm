
const bestSum = (target,arr) =>{
  if (target === 0) return []
  if (target < 0) return null

  let shortestComb = null

  for (let num of arr) {
    const rem = target - num
    const remComb = bestSum(rem,arr)
    if (remComb !== null) {
      const regComb = [...remComb,num]
      if (shortestComb === null || regComb.length < shortestComb.length) {
        shortestComb = regComb
      }

    }
  }
  return shortestComb
}

console.log("====================================");
console.log(bestSum(7, [2, 3]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(11, [2, 3, 6, 1]));
console.log(bestSum(7, [2, 3]));
console.log(bestSum(300, [7, 14]));
console.log("====================================");


const bestSumMemo = (target, arr,memo={}) => {
  if (target in memo) return memo[target]
	if (target === 0) return [];
	if (target < 0) return null;

	let shortestComb = null;

	for (let num of arr) {
		const rem = target - num;
		const remComb = bestSum(rem, arr, memo);
		if (remComb !== null) {
			const regComb = [...remComb, num];
			if (shortestComb === null || regComb.length < shortestComb.length) {
				shortestComb = regComb;
			}
		}
	}
  memo[target] = shortestComb
	return shortestComb;
};

console.log("====================================");
console.log(bestSumMemo(7, [2, 3]));
console.log(bestSumMemo(7, [5, 3, 4, 7]));
console.log(bestSumMemo(7, [2, 4]));
console.log(bestSumMemo(8, [2, 3, 5]));
console.log(bestSumMemo(11, [2, 3, 6, 1]));
console.log(bestSumMemo(7, [2, 3]));
console.log(bestSumMemo(300, [7, 14]));
console.log("====================================");