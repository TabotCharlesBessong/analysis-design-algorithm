
// Memoisation
const memoFib = (n, memo={}) => {
  // checking if result already exist in memo
  if (n in memo) return memo[n]
  if (n <= 2) return 1
  memo[n] = memoFib(n-1,memo) + memoFib(n-2,memo)
  // saving result inside a memo object
  return memo[n]
}

const fib = (num) => {
	if (num <= 2) return 1;
	const result = fib(num - 1) + fib(num - 2);
	return result;
};

console.log(memoFib(6))
console.log(memoFib(16))
console.log(memoFib(26))
console.log(memoFib(36))
console.log(memoFib(3));
console.log(memoFib(56));
console.log(memoFib(100));

// console.log(fib(6));
// console.log(fib(16));
// console.log(fib(4));
// console.log(fib(26));
// console.log(fib(36));
// console.log(fib(3));
// console.log(fib(42));
// console.log(fib(56));