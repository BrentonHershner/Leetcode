// from Hack Reactor Toy Problems
/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function() {
  const args = Array.prototype.slice.call(arguments);
  const thisFunc = args.shift();
  let thisArg = args.shift();
  thisArg = thisArg ? thisArg : this;
  return (...inputs) => {
    return thisFunc.call(thisArg, ...args, ...inputs);
  }
};

Function.prototype.bind = function() {
  const thisFunc = this;
  const args = Array.prototype.slice.call(arguments);
  const thisArg = args.shift();
  return (...input) => {
    return thisFunc.call(thisArg, ...args, ...input);
  }
};



// // function bind():

// // example 1:

// var alice = {
//   name: 'alice',
//   shout: function() {
//     // alert(this.name);
//     console.log(this.name);
//   }
// }
// var boundShout = bind(alice.shout, alice);
// boundShout(); // alerts 'alice'
// boundShout = bind(alice.shout, { name: 'bob' });
// boundShout(); // alerts 'bob'

// // example 2:

// var func = function(a, b) { return a + b };
// var boundFunc = bind(func, null, 'foo');
// var result = boundFunc('bar');
// console.log(result);
// result === 'foobar'; // true



// // Function.prototype.bind:

// // example 1:

// var alice = {
//   name: 'alice',
//   shout: function() {
//     console.log(this.name);
//   }
// }
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
// boundShout = alice.shout.bind({ name: 'bob' });
// boundShout(); // alerts 'bob'

// // example 2:

// var func = function(a, b) { return a + b };
// var boundFunc = func.bind(null, 'foo');
// var result = boundFunc('bar');
// console.log(result);
// result === 'foobar'; // true

