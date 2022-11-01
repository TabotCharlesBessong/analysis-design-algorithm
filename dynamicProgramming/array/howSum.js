/**
 * @name howSum
 * @description Given a target sum and an array of numbers,
 * return an array containing any one combination of elements that add up to exactly the target sum.
 * If there is no combination that adds up to the target sum, return null.
 * You may use an element of the array as many times as needed.
 * Assum all input numbers are non-negative.
 * @example target = 7, numbers = [2, 3] ->[2, 3, 2]
 * target = 7, numbers = [5, 3, 4, 7] -> [4, 3] Although [7] is also the answer but we just need one.
 * target = 7, numbers = [2, 4] -> null
 * @param {number} target
 * @param {number[]} numbers
 * @returns {array or null} Any combination that sums up to target number or null if there's no such combination
 * @solution Use recursive
 */

const howSum = (target,arr) => {
  if(target === 0) return []
  if(target < 0) return null

  for (let num of arr) {
    const remainder = target - num 
    const remainderResult = howSum(remainder,arr)
    if(remainderResult != null) {
      return [...remainderResult,num]
    }
  }
  return null
}

const howSumMemo = (target,array , memo={}) => {
  if(target in memo) return memo[target]
  if(target === 0) return []
  if(target < 0) return null

  for (let num of array) {
    const remainder = target - num
    const remainderResult = howSumMemo(remainder,array , memo)
    if(remainderResult !== null) {
      memo[target] = [...remainderResult , num]
      return memo[target]
    }
  }

  memo[target] = null
  return null
}

console.log('How sum-->', howSum(7,[4,2,2,1]))
console.log("How sum-->", howSumMemo(9, [4, 3, 3, 1]));