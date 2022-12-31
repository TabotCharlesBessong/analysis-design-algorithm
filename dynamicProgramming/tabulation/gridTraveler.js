
const tabulatedGridTraveler = (m,n) => {
  const table = Array(m+1)
  .fill()
  .map(()=> Array(n+1).fill(0))

  table[1][1] = 1
  for(let i=0;i<=m;i++) {
    for(let j=0;j<=n;j++) {
      const current = table[i][j]
      if (j+1 <= n) table[i][j+1] += current
      if (i+1 <= m) table[i+1][j] += current
    }
  }
  return table[m][n]
}

console.log('====================================');
console.log(tabulatedGridTraveler(3,1))
console.log(tabulatedGridTraveler(3,2))
console.log(tabulatedGridTraveler(2,3))
console.log(tabulatedGridTraveler(2,2))
console.log(tabulatedGridTraveler(3,3))
console.log(tabulatedGridTraveler(3,4))
console.log(tabulatedGridTraveler(4,4))
console.log(tabulatedGridTraveler(2,4))
console.log(tabulatedGridTraveler(3,4))
console.log(tabulatedGridTraveler(5,3))
console.log(tabulatedGridTraveler(2,5))
console.log(tabulatedGridTraveler(5,5))
console.log(tabulatedGridTraveler(12,12))
console.log(tabulatedGridTraveler(10,10))
console.log('====================================');