var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;


  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;

};

stackMethods.pop = function() {
  this.stackSize && this.stackSize--;
  var poppedVal = this.storage[this.stackSize];
  delete this.storage[this.stackSize];

  return poppedVal;
};

stackMethods.size = function() {
  return this.stackSize;
};
