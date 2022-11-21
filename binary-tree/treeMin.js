
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

const treeMin = (root) => {
  let min = Infinity
	if (root === null) return [];
	const result = [];
	const stack = [root];
	while (stack.length) {
		const node = stack.pop();
    if (node.val < min) min = node.val
		// console.log(node)
		result.push(node.val);
		if (node.left) stack.push(node.left);
		if (node.right) stack.push(node.right);
	}
	return min;
};

console.log('====================================');
console.log(treeMin(a));
console.log('====================================');