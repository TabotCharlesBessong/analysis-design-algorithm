
// recursive dfs approach
const hasPath = (graph , src , dst) => {
  if(src === dst) return true 

  for (let neighbor of graph[src]) {
    if (hasPath(graph , neighbor , dst) === true ) {
      console.log('====================================');
      console.log(`There is a way from ${src} to ${dst}`);
      console.log('===================================='); 
    }
  }
  return false
}

const hasPath2 = (graph , src , dst) => {
  const queue = [src] 
  while (queue.length > 0) {
    const myCurr = queue.shift()
    if (myCurr === dst) return true; 
    for (let neighbor of graph[myCurr] ) {
      queue.push(neighbor)
    }
    console.log("====================================");
		console.log(`There is a way from ${myCurr} to ${dst}`);
		console.log("===================================="); 
  }
  return false
}

const graph = {
  f:['g','i'],
  g:['h'],
  h:[],
  i:['g','k'],
  j:['i'],
  k:[]
}

hasPath(graph, 'j','g')
hasPath2(graph, "i", "g");