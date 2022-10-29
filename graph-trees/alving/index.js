
// iterative approach dfs
// const depthFirstPrint = (graph , source) => {
//   const stack = [source] 
//   while (stack.length > 0) {
//     const myCurr =  stack.pop()
//     console.log(myCurr)
//     for( let neighbor of graph[myCurr]  ) {
//       stack.push(neighbor)
//     }
//   }
// }
// Oof (n^2)

// recursive approach to dfs
const depthFirstPrint = (graph,source) => {
  console.log(source)
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph , neighbor)
  }
}
// Oof(nlogn)

// iterative approach
const breathFirstPrint = (graph , source) => {
  const queue = [source] 
  while ( queue.length > 0){
    const myCurr = queue.shift()
    console.log(myCurr)
    for(let neighbor of graph[myCurr]) {
      queue.push(neighbor)
    }
  }
}

const graph = {
  a:['b','c'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}

depthFirstPrint(graph , 'a')
console.log('====================================');
console.log('give me some');
console.log('====================================');
breathFirstPrint(graph , 'a')
