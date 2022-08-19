---
sidebar_position: 1
---

# Singly Linked List

### Time Complexity vs Arrays

| Operation       | Linked List | Arrays |
| --------------- | ----------- | ------ |
| Push            | O(1)        | O(1)   |
| Pop             | O(n)        | O(1)   |
| Shift           | O(1)        | O(n)   |
| Unshift         | O(1)        | O(n)   |
| Insert          | O(n)        | O(n)   |
| Delete          | O(n)        | O(n)   |
| Lookup by Index | O(n)        | O(1)   |
| Lookup by Value | O(n)        | O(n)   |

```js showLineNumbers
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //Add node to end of list
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //Remove node from end of list
  pop() {
    if (!this.head) return undefined;

    const newTail = this.head;
    const oldTail = this.head;

    while (oldTail.next) {
      newTail = oldTail;
      oldTail = oldTail.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return oldTail;
  }

  //Add node to beginning of list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //Remove node from the beginning of the list
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;
    this.head = this.head.next;
    oldHead.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  //Get a node at a specific index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.head;

    for (let i = 0; i < this.length; i++) {
      temp = temp.next;
    }

    return temp;
  }

  //Set (change) value of node at specific index
  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  //Insert a new node at a specific index
  insert(index, value) {
    if (index === 0) this.unshift(value);
    if (index === this.length) this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;
    return true;
  }

  //Remove a node
  remove(index) {
    if (index === 0) this.shift();
    if (index === this.length - 1) this.pop();
    if (index < 0 || index > this.length) return undefined;

    let prevNode = this.get(index - 1);
    let deletedNode = prevNode.next;
    prevNode.next = deletedNode.next;
    deletedNode.next = null;

    this.length--;
    return deletedNode;
  }

  //Infamous Reverse a linked list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}
```
