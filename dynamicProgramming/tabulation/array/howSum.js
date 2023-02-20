
const tabulatedHowSum = (targetSum,numbers)=> {
  const table = Array(targetSum + 1).fill(null)
  table[0] = []
  for(let i = 0; i< targetSum;i++){
    if(table[i] !== null){
      for (let num of numbers){
        table[i + num] = [...table[i],num]
      }
    }
  }
  return table[targetSum]
}


console.log('====================================')
console.log(tabulatedHowSum(7,[5,3,4,2])) // (5,2) and (4,3)
console.log(tabulatedHowSum(7,[5,3,5])) 
console.log(tabulatedHowSum(7,[5,2])) // (5,2)
console.log(tabulatedHowSum(8,[2,3,5,7])) // (2,2,2,2) and (2,3,3) and (5,3)
console.log(tabulatedHowSum(9,[5,3,4,2])) // (5,2) and (4,3)
console.log('====================================')