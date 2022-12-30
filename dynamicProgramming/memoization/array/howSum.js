
const howSum = (target,arr) => {
  if (target === 0) return []
  if (target < 0) return null

  for (let num of arr) {
    const rem = target - num
    const remRes = howSum(rem,arr)
    if (remRes !== null) {
      return [...remRes , num]

    }
  }
  return null
}

console.log("====================================");
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(11, [2, 3, 6, 1]));
console.log(howSum(7, [2, 3]));
console.log(howSum(300, [7, 14]));
console.log("====================================");

const howSumMemo = (target, arr,memo={}) => {
  if (target in memo) return memo[target]
	if (target === 0) return [];
	if (target < 0) return null;

	for (let num of arr) {
		const rem = target - num;
		const remRes = howSum(rem, arr,memo);
		if (remRes !== null) {
			memo[target] = [...remRes, num];
      return memo[target]
		}
	}
  memo[target] = null
	return null;
};

console.log("====================================");
console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(7, [5, 3, 4, 7]));
console.log(howSumMemo(7, [2, 4]));
console.log(howSumMemo(8, [2, 3, 5]));
console.log(howSumMemo(11, [2, 3, 6, 1]));
console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(300, [7, 14]));
console.log("====================================");