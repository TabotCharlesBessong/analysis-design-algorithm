
const LinkedList = require('../singleLinkedListdp/index')

class LinkedListQueue {
  constructor(){
    this.list = new LinkedList()
  }

  isEmpty() {
    return this.list.isEmpty()
  }

  enqueue(value){
    this.list.append(value)
  }

  dequeue() {
    return this.list.removeFromEnd()
  }

  peek() {
    return this.list.head.value
  }

  getSize() {
    return this.list.getSize()
  }

  print() {
    return this.list.print()
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.peek());