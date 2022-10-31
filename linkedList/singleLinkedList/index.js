
class Node {
  constructor(value){
    this.value = value
    this.next = null 
  }
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	prepend(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			// if the list is empty , the new node will automatically become the head
			this.head = node;
		} else {
			// the new node will need to first have a ref by pointing the the current head and it will then become the new head
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	append(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			// since we are adding at the end and the list is not empty , we therefore have to get a temp element that  will enable us loop throughout the list
			let curr = this.head;
			while (curr.next) {
				curr = curr.next;
			}
			// we have exited the loop so the last element will now be pointing to our newly added element
			curr.next = node;
		}
		this.size++;
	}

	insert(value, pos) {
		if (pos < 0 || pos > this.size) {
			return;
		}
		// since there is no element , it will become the new element
		if (pos === 0) {
			this.prepend(value);
		} else {
			// we will need to track the two closest element
			// as a result we need a temp to loop to the element at the pre so that we will now point to the new element and the new element will point to the node the prev node was pointing at
			const node = new Node(value);
			let prev = this.head;
			for (let i = 0; i < pos - 1; i++) {
				prev = prev.next;
			}
			node.next = prev.next;
			prev.next = node;
			this.size++;
		}
	}

	removeFrom(pos) {
		if (pos < 0 || pos >= this.size) return null;

		let removedNode;
		if (pos === 0) {
			removedNode = this.head;
			this.head = this.head.next;
		} else {
			let prev = this.head;
			for (let i = 0; i < pos - 1; i++) {
				prev = prev.next;
			}
			removedNode = prev.next;
			prev.next = removedNode.next;
		}
		this.size--;
		return removedNode.value;
	}

	removeValue(value) {
		if (this.isEmpty()) {
			return null;
		}
		if (this.head.value === value) {
			this.head = this.head.next;
			this.size--;
			return value;
		} else {
			let prev = this.head;
			// while prev.next is an element and that element is not the element we are looking for
			while (prev.next && prev.next.value !== value) {
				prev = prev.next;
			}
			if (prev.next) {
				removedNode = prev.next;
				prev.next = removedNode.next;
				this.size--;
				return value;
			}
			return null;
		}
	}

	search(value) {
		if (this.isEmpty()) {
			return -1;
		}
		let i = 0;
		let curr = this.head;
		while (curr) {
			if (curr.value === value) {
				return i;
			}
			curr = curr.next;
			i++;
			console.log("====================================");
			console.log("\n The element is at position: ", i);
			console.log("====================================");
		}
		return -1;
	}

	reverse() {
		let prev = null;
		let curr = this.head;
		while (curr) {
			let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}
		this.head = prev;
	}

	print() {
		if (this.isEmpty()) {
			console.log("The list is empty");
		} else {
			let curr = this.head;
			let list = "";
			while (curr) {
				list += `${curr.value}->`;
				curr = curr.next;
			}
			console.log("====================================");
			console.log(list);
			console.log("====================================");
		}
	}
}


const l = new LinkedList()

l.prepend(20)
l.print()
// console.log(l.getSize())
l.append(40)
l.insert(30,2)
l.prepend(10);
l.removeFrom(2);
l.append(50)
// l.removeFrom(3)
l.append(30)
l.search(50)
l.print()
l.reverse()
l.removeValue(60)
console.log(l.getSize());
l.print();