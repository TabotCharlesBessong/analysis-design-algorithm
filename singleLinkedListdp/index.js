
class Node {
  constructor(value){
    this.value = value 
    this.next = null 
  }
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
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
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
	}

	append(value) {
		const node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
      // before making the new node the tail , we need to first point the old tail to it 
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}

	print() {
		if (this.isEmpty()) {
			console.log("List is empty");
		} else {
			let curr = this.head;
			let list = "";
			while (curr) {
				list += `${curr.value}->`;
				curr = curr.next;
			}
			console.log(list);
		}
	}
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4);
list.prepend(0)
list.print()