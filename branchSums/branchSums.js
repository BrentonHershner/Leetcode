function branchSums(root) {

  const sums = [];
  const sumBranches = (tree, currentSum = 0) => {
    currentSum += tree.value;
    if (!tree.right && !tree.left) {
      sums.push(currentSum);
      return;
    }
    if (tree.left) { sumBranches(tree.left, currentSum); }
    if (tree.right) { sumBranches(tree.right, currentSum); }
  }

  sumBranches(root);

  return sums;
}

// This is the class of the input tree. Do not edit.
export class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(values, i = 0) {
    if (i >= values.length) { return };
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

const tree = new BinaryTree(1).insert([2]);
console.log(branchSums(tree)) //  [15, 16, 18, 10, 11];

// Do not edit the line below.

export default branchSums;