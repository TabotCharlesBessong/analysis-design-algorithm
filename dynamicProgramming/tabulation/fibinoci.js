
const tabulatedFib = (n) => {
  const table = Array(n+1).fill(0)
  // console.log(table)
  table[1] = 1
  for (let i = 0; i <= n; i++){
    table[i + 1] += table[i]
    table[i + 2] += table[i]
  }
  return table[n]
}

console.log('====================================')
console.log(tabulatedFib(50))
console.log(tabulatedFib(40))
console.log(tabulatedFib(20))
console.log(tabulatedFib(7))
console.log(tabulatedFib(4))
console.log('====================================')