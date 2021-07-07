// from Hack Reactor Toy Problems
/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
class Stack {

  constructor() {
    this.array = [];
    this.auxArray = [];
  }

  // add an item to the top of the stack
  push(value) {
    if (typeof (value) !== 'number') { return undefined; }
    if (this.array.length === 0) {
      this.auxArray.push(value);
    } else {
      var auxTop = this.auxArray[this.auxArray.length - 1];
      if (value < auxTop) {
        this.auxArray.push(value);
      } else {
        this.auxArray.push(auxTop);
      }
    }
    this.array.push(value);
  };

  // remove an item from the top of the stack
  pop() {
    this.auxArray.pop();
    return this.array.pop();
  };

  // return the number of items in the stack
  size() {
    this.array.length;
  };

  // return the minimum value in the stack
  min() {
    return this.auxArray[this.auxArray.length - 1];
  };

};
