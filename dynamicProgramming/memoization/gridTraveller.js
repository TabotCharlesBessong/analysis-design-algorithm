

const gridTraveler = (n,m) => {
  if (n === 1 && m === 1) return 1
  if (n === 0 || m === 0) return 0
  return gridTraveler(n-1,m) + gridTraveler(n,m-1)
}

console.log('====================================');
console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,2))
console.log(gridTraveler(3,3))
console.log(gridTraveler(10,7))
console.log(gridTraveler(10,10))
console.log(gridTraveler(18,18));
console.log('====================================');

const gridTravelerMemo = (n, m,memo={}) => {
  const key = n + ',' + m 
  // are the args in the memo
  if (key in memo) return memo[key]
  // are the args not in the memo
	if (n === 1 && m === 1) return 1;
	if (n === 0 || m === 0) return 0;
	memo[key] =  gridTravelerMemo(n - 1, m,memo) + gridTravelerMemo(n, m - 1,memo);
  return memo[key]
};

console.log("=================****Memoisation***===================");
console.log(gridTravelerMemo(1, 1));
console.log(gridTravelerMemo(2, 3));
console.log(gridTravelerMemo(3, 2));
console.log(gridTravelerMemo(3, 3));
console.log(gridTravelerMemo(10, 7));
console.log(gridTravelerMemo(10, 10));
console.log(gridTravelerMemo(18, 18));
console.log("================****Memoisation***====================");
