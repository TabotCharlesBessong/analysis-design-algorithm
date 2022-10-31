
class Node {
  constructor(val) {
    this.val = val 
    this.next = null
  }
}

// const linkedlistValues = (head) => {
//   const values = [] 
//   let current = head 
//   while (current !== null) {
//     values.push(current.val) 
//     current = current.next
//   }
//   return values
// }

const linkedlistValues = (head) => {
	const values = [];
	let current = head;
	fillValues(head,values)
};

// a function to insert node into the linked list

const fillValues = (head, values) => {
  if( head === null) return 
  head.push(val)
  fillValues(head.next)
}