---
sidebar_position: 1
---

# Stacks

### Time Complexity vs Arrays

| Operation | Linked List |
| --------- | ----------- |
| Push      | O(1)        |
| Pop       | O(1)        |

You can use an array as a stack but we will be coding this similar to a linked list.

Think of a stack of books. The last book to be placed on the top of the stack is the first one to be picked up. 📚

LIFO (Last In First Out)

```js showLineNumbers
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.bottom = newNode;
    this.length = 1;
  }

  //Add to the top of the stack.
  push(value) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  //Remove node from the top
  pop() {
    if (!this.top) return undefined;

    const oldHead = this.top;
    this.top = this.top.next;
    oldHead.next = null;
    this.length--;

    return oldHead;
  }
}
```
