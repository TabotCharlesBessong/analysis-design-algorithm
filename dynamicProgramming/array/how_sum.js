/***
 * Given a Target and an array of numbers,
 * Return an array of numbers equivalent to the sum of the target
 * Return [a+b+c]=Target as result
 * */

// Tabular solution
// m = target
// n = numbers.length
// Time: O(m^2*n)
// Space: O(m)



// Problem statement and walkthrough: https://youtu.be/oBt53YbR9Kk?t=5369

// using memoization 
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }

  for (let number of numbers) {
    const remainder = targetSum - number;
    const result = howSum(remainder, numbers, memo);
    // if the leaf returns an array we know we are on a winning path
    // if the result is empty array we know we reached 0 (i.e. a leaf of the tree)
    // if the result is an array with values, we know that we are on a level higher than the leaf of the tree
    if (result !== null) {
      memo[number] = [...result, number];
      return [...result, number];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log("How sum", howSum(7, [5,3,4,2, 2]));
console.log("How sum", howSum(9, [2,3,5]))

