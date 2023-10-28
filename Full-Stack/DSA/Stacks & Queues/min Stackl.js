class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
    this.minStack = [];
  }

  push(element) {
    this.stack[++this.top] = element;
    if (
      this.minStack.length === 0 ||
      element <= this.minStack[this.minStack.length - 1]
    ) {
      // If it's the first element or the new element is smaller/equal,
      // push it onto the minStack.
      this.minStack.push(element);
    }
  }

  pop() {
    if (this.top === -1) {
      return false;
    } else {
      const poppedElement = this.stack[this.top];
      if (poppedElement === this.minStack[this.minStack.length - 1]) {
        // If the popped element is the current minimum, pop it from minStack.
        this.minStack.pop();
      }
      this.top--;
      return poppedElement;
    }
  }

  peek() {
    if (this.top === -1) {
      return false;
    } else {
      return this.stack[this.top];
    }
  }

  min() {
    if (this.minStack.length === 0) {
      return false;
    } else {
      return this.minStack[this.minStack.length - 1];
    }
  }
}
