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


// iterative approach 

const treeInclude = (root , target) => {
  if (root === null) return false
  const queue = [root]
  while(queue.length) {
    const node = queue.shift()
    if(node.val === target) return node

    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
  }
  return false
}

console.log('====================================');
console.log(treeInclude(a, "c"));
console.log('====================================');

// recursive approach 

const treeIncludeRec = (root,target) => {
  if (root === null) return false
  if (root.val === target) return true 
  return treeIncludeRec(root.left, target) || treeIncludeRec(root.right,target)
}

console.log('====================================');
console.log(treeIncludeRec(a, "f"));
console.log('====================================');