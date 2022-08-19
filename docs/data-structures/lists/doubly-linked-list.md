---
sidebar_position: 2
---

# Doubly Linked List

### Time Complexity vs Arrays

| Operation       | Doubly Linked List | Arrays |
| --------------- | ------------------ | ------ |
| Push            | O(1)               | O(1)   |
| Pop             | O(1)               | O(1)   |
| Shift           | O(1)               | O(n)   |
| Unshift         | O(1)               | O(n)   |
| Insert          | O(n)               | O(n)   |
| Delete          | O(n)               | O(n)   |
| Lookup by Index | O(n)               | O(1)   |
| Lookup by Value | O(n)               | O(n)   |

```js showLineNumbers
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //Remove node from end of list
  pop() {
    if (this.length === 0) return undefined;

    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  //Add Node to the beginning of list
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  //Remove node from the beginning of the list
  shift() {
    if (this.length === 0) return undefined;

    const temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  //Get a node at a specific index
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  //Set a node to a specific index
  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  //Insert a node at a specific index
  insert(index, value) {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;

    this.length++;
    return true;
  }

  //Remove a node at a specific index
  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;

    this.length--;
    return temp;
  }
}
```
