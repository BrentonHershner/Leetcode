import { jest } from '@jest/globals';
import Node from './depthFirstSearch.js';

describe('depthFirstSearch', () => {

  it('should return a sum with 1 node', function() {
    const graph = new Node('A');
    graph.addChild('B').addChild('C').addChild('D');
    graph.children[0].addChild('E').addChild('F');
    graph.children[2].addChild('G').addChild('H');
    graph.children[0].children[1].addChild('I').addChild('J');
    graph.children[2].children[0].addChild('K');
    expect(graph.depthFirstSearch([])).toEqual(['A', 'B', 'E', 'F', 'I', 'J', 'C', 'D', 'G', 'K', 'H']);
  });

  it('should return a sum with 2 nodes', function() {
    const graph = new Node('A');
    graph.addChild('B').addChild('C').addChild('D');
    expect(graph.depthFirstSearch([])).toEqual(['A', 'B', 'C', 'D']);
  });

});
