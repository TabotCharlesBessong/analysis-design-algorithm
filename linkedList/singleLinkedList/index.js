
class Node {
	// initializing a node with value and link 
  constructor(value){
    this.value = value
    this.next = null 
  }
}

class LinkedList {
	constructor() {
		// initializing a linked list with the head and the size of the list which is initially at 0
		this.head = null;
		this.size = 0;
	}

	// function to check the size of the list if it is empty
	isEmpty() {
		return this.size === 0;
	}

	// function to check the size of the list and return the size depending on the number of nodes
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
		// we have to always increase the size of the list 
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
				// loop until we reach the end of the list which is null and will return false ending the loop
				curr = curr.next;
			}
			// we have exited the loop so the last element will now be pointing to our newly added element
			curr.next = node;
		}
		// we have to always increase the size of the list 
		this.size++;
	}

	insert(value, pos) {
		// the difference between inserting and prepend and append is that in insert, we have to or can specify the position
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
			// let say we wanted to we want to add node at position 3. When looping, we will stop at position 2 and the new node will point to position 3 and node at position 2 will point to the new node
			node.next = prev.next;
			prev.next = node;
			// we have to always increase the size
			this.size++;
		}
	}

	removeFrom(pos) {
		// removing an element in the node based on the position of the node in the list 
		if (pos < 0 || pos >= this.size) return null;

		let removedNode;
		if (pos === 0) {
			removedNode = this.head;
			// setting the link of the head wil now be set to null 
			this.head = this.head.next;
		} else {
			let prev = this.head;
			for (let i = 0; i < pos - 1; i++) {
				prev = prev.next;
			}
			// let say we wanted to we want to remove node at position 3. When looping, we will stop at position 2 and point that node to position 4 and the node at position 3 will now point to null which means the node will be removed
			removedNode = prev.next;
			prev.next = removedNode.next;
		}
		// reduce the size after removing a node from the list
		this.size--;
		return removedNode.value;
	}

	removeValue(value) {
		let removedNode
		if (this.isEmpty()) {
			return null;
		}
		if (this.head.value === value) {
			// if the value if that in the head , we will have to update the head to the value of the node next to the head
			this.head = this.head.next;
			// reduce the size after removing a node from the list
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
				// reduce the size after removing a node from the list
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
		let i = 0; // serve for the position of the node
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
		// the head will now be pointing to null 
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
l.prepend(60)
// l.removeFrom(3)
l.append(30)
l.print()
l.search(50)
l.print()
l.reverse()
l.removeValue(60)
console.log(l.getSize());
l.print();
l.search(20)
l.removeValue(20)
l.print()