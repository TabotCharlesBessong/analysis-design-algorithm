

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

const breathFirstValue = (root) => {
  if (root === null) return []
  const result = [];
  const queue = [root]
  while(queue.length){
    const node = queue.shift()
    result.push(node.val)
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)

  }
  return result
}

console.log('====================================');
console.log(breathFirstValue(a));
console.log('====================================');

// recursively iterate over