
// tree

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// iteratively 

const depthFirstValue = (root) => {
  if (root === null) return []
  const result = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    // console.log(node)
    result.push(node.val)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return result
}


console.log(depthFirstValue(a))

const depthFirstValueRec = (root) => {
  if (root === null) return []
  const leftV = depthFirstValueRec(root.left)
  const rightV = depthFirstValueRec(root.right)
  return [root.val,...leftV,...rightV]
}

console.log('====================================');
console.log(depthFirstValueRec(a));
console.log('====================================');