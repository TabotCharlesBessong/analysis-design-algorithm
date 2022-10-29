
const undirectedPath = (edges , nodeA , nodeB) => {
  const graph = buildGraph(edges)
  // console.log(graph)
  return hasPath(graph, nodeA , nodeB)
}

const hasPath = (graph, src , dst) => {
  if (src === dst) return true 
  for(let neighbor of graph[src]) {
    if (hasPath(graph , neighbor , dst) === true ){
      return true
    }
  }

  return false 
}

const buildGraph = (edges) => {
	const graph = {}

  for (let edge of edges) {
    const [a,b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}

const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
]

// undirectedPath(edges , 'l', 'm')