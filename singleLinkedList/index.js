
class Node {
  constructor(value){
    this.value = value
    this.next = null 
  }
}

class LinkedList {
  constructor() {
    this.head = null 
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      // if the list is empty , the new node will automatically become the head
      this.head = node
    }else{
      // the new node will need to first have a ref by pointing the the current head and it will then become the new head
      this.next = this.head
      this.head = node
    }
    this.size++
  }

  print() {
    if(this.isEmpty()){
      console.log('The list is empty')
    }else {
      let curr = this.head 
      let list = ''
      while(curr) {
        list +=`${curr.value}->`
        curr = curr.next
      }
      console.log('====================================')
      console.log(list)
      console.log('====================================')
    }
  }
}


const l = new LinkedList()

l.prepend(20)
console.log(l.getSize())
l.print()