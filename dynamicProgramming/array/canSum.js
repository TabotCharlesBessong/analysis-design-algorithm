
const canSum = (target,arr)=>{
  if (target === 0) return true
  if (target < 0) return false
  for (let num of arr) {
    const rem = target - num
    if(canSum(rem,arr) === true) return true

  }
  return false
}

console.log('====================================');
console.log(canSum(7,[2,3]))
console.log(canSum(7,[5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(8,[2,3,5]))
console.log(canSum(11,[2,3,6,1]))
console.log(canSum(7,[2,3]))
console.log(canSum(300,[7,14]))
console.log('====================================');

const canSumMemo = (target,arr,memo={}) => {
  if (target in memo) return memo[target]
  if (target === 0) return true;
	if (target < 0) return false;
	for (let num of arr) {
		const rem = target - num;
		if (canSum(rem, arr,memo) === true) {
      memo[target] = true;
      return true;

    }
	}
	memo[target] = false;
  return false
}

console.log("====================================");
console.log(canSumMemo(7, [2, 3]));
console.log(canSumMemo(7, [5, 3, 4, 7]));
console.log(canSumMemo(7, [2, 4]));
console.log(canSumMemo(8, [2, 3, 5]));
console.log(canSumMemo(11, [2, 3, 6, 1]));
console.log(canSumMemo(7, [2, 3]));
console.log(canSumMemo(300, [7, 14]));
console.log("====================================");