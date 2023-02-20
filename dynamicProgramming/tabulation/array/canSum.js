
const tabulatedCanSum = (targetSum,numbers)=>{
  const table = Array(targetSum + 1).fill(false)
  table[0] = true

  for (let i = 0; i <= targetSum; i++) {
    // the limit needs to be the targeted sum because as new array element are being added as seen in line 11 , the size will continue increasing above the size of the table leading to an infinite loop 
    if (table[i] === true) {
      // since the present index gives true , adding it to another element which is in the numbers array will naturally yield a true
      for (let num of numbers ){
        table[i + num] = true
      }
    }
  }
  // so we now check if the value in our target is true
  return table[targetSum]
}


console.log('====================================')
console.log(tabulatedCanSum(7,[5,3,4]))
console.log(tabulatedCanSum(7, [2,2,2]))
console.log('====================================')