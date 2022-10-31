
// recursive approach to fib
// O(log n)

const fib = (num) => {
  if(num <= 2 ) return 1
  const result = fib(num - 1) + fib (num - 2)
  return result
}

// Memoization approach 

/* Memoization is a technique for improving the performance of recursive algorithms. It involves rewriting the recursive algorithm so that as answers to problems are found, they are stored in an array. Recursive calls can look up results in the array rather than having to recalculate them.

*/
// O(log n)
const memoFib = (num, memo = {}) => {
  if(num in memo) return memo[num]
  if(num <= 2) return 1
  const result = fib(num - 1) + fib(num - 2)
  memo[num] = result
  return result
}

// Tabulation solution 
// O(n)
const iterFib = (n) => {
  const table = Array(n + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  return table[n]
}

// test_1 = fib(7);
// test_2 = fib(9);
// test_3 = fib(12);
// test_4 = fib(21);

// test_1 = memFib(7);
// test_2 = memFib(9);
// test_3 = memFib(12);
// test_4 = memFib(21);

test_1 = iterFib(7);
test_2 = iterFib(9);
test_3 = iterFib(12);
test_4 = iterFib(21);

console.log(`Test_1 -- `, test_1);
console.log(`Test_2 -- `, test_2);
console.log(`Test_3 -- `, test_3);
console.log(`Test_4 -- `, test_4);