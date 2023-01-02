
const linearSearch = (arr,val) => {
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

console.log("the ", linearSearch([1, 5, 7, 5, 2, 3, 9, 4, 6, 10, 8],17));