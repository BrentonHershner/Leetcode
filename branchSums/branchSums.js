function branchSums(root) {
  // Write your code here.

  const sums = [];

  // DFS
  // add every node encountered to current sum
  // as soon as a leaf is encountered, push the sum to sums array

}

// This is the class of the input tree. Do not edit.
export class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) return;
    const queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      if (current.left === null) {
        current.left = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.left);
      if (current.right === null) {
        current.right = new BinaryTree(values[i]);
        break;
      }
      queue.push(current.right);
    }
    this.insert(values, i + 1);
    return this;
  }
}

const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(branchSums(tree)) //  [15, 16, 18, 10, 11];

// Do not edit the line below.

export default branchSums;