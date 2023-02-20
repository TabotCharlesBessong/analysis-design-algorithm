
const tabulatedBestSum = (targetSum,numbers)=> {
  const table = Array(targetSum + 1).fill(null);
	table[0] = []
  for (let i = 0; i< targetSum ; i++){
    if (table[i] !== null){
      for (let num of numbers){
        // keeping the shorter one
        const smallestCombo = [...table[i], num];
        if(!table[i + num] || table[i + num].length > smallestCombo.length){
          table[i + num] = smallestCombo
        }
      }
    }
  }
  return table[targetSum]
}


console.log("====================================");
console.log(tabulatedBestSum(7, [5, 3, 4, 2])); 
console.log(tabulatedBestSum(7, [5, 3, 5]));
console.log(tabulatedBestSum(7, [5, 2])); 
console.log(tabulatedBestSum(8, [2, 3, 5, 7]));
console.log(tabulatedBestSum(9, [5, 3, 4, 2]));
console.log("====================================");