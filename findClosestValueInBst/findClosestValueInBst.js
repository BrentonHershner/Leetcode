function findClosestValueInBst(tree, target) {
  // Write your code here.
  let closest = tree.value;

  function recursiveFindClosest(tree, target) {
    if (!tree || !target) {return null};
    const children = [];
    tree.right && children.push(tree.right);
    tree.left && children.push(tree.left);
    if (!children.length) { return tree.value; }
    const closestChildren = children.map(child => {
      return recursiveFindClosest(child, target)
    })
    closest = returnClosest(target, tree.value, ...closestChildren);
    return closest;
  }
  recursiveFindClosest(tree, target);
  return closest;
}

const returnClosest = (target, ...candidates) => {
  let closest = candidates[0];
  candidates.forEach(candidate => {
    if (Math.abs(target - candidate) < Math.abs(target - closest)) {
      closest = candidate;
    }
  })
  return closest;
}

// This is the class of the input tree. Do not edit.
export class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  returnTrue () {
    return true;
  }

}

// const root = new BST(10);
// root.left = new BST(5);
// root.left.left = new BST(2);
// root.left.left.left = new BST(1);
// root.left.right = new BST(5);
// root.right = new BST(15);
// root.right.left = new BST(13);
// root.right.left.right = new BST(14);
// root.right.right = new BST(22);
// const expected = 13;
// const actual = findClosestValueInBst(root, 12);
// actual

// Do not edit the line below.

export default findClosestValueInBst;