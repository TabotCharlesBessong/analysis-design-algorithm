
const canConstructTabulation = (targetString,words)=>{
  const table = Array(words.length + 1).fill(false)
  table[0] = true

  for (let i = 0; i < targetString ; i++){
    if(table[i] === true){
      for (let word of words){
        if(targetString.slice(i,i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[targetString.length]
}


console.log('====================================')
console.log(canConstructTabulation(targetString,words))
console.log('====================================')