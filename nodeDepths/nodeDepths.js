const nodeDepths = (root, depth = 0) => {
  if (root == null) { return 0; }
  return depth +
    nodeDepths(root.right, depth + 1) +
    nodeDepths(root.left, depth + 1)
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

// Do not edit the line below.

export default nodeDepths;