class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


// iterative 

const treeSum = (root) => {
  if (root === null) return 0
	const result = [];
	const queue = [root];
  let sum = 0
	while (queue.length) {
		const node = queue.shift();
		result.push(node.val);
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	}
	// return result;
  for (n of result) {
    sum += n
  }
  return sum
}

console.log("====================================");
console.log(treeSum(a));
console.log("====================================");