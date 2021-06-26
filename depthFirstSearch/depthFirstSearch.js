// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {

    array.push(this.name);
    return this.children.reduce((accu, child) => {
      return child.depthFirstSearch(array);
    }, array)
  
  }
}

// const graph = new Node('A');
// graph.addChild('B').addChild('C').addChild('D');
// console.log(graph.depthFirstSearch(graph));

export default Node;