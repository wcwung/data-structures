var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage ={};
  newStack.listSize = 0;
  _.extend(newStack, stackMethods);
  return newStack;

};

var stackMethods = {};

stackMethods.push = function(value){
  //adds a value to the end of storage
  this.storage[this.listSize] = value;
  this.listSize++;
  //increments listSize.

};
stackMethods.pop = function(){
  //removes the last value.

  this.listSize && this.listSize--;
  var poppedVal = this.storage[this.listSize];
  delete this.storage[this.listSize];
  //Decrements listSize

  return poppedVal;
};
stackMethods.size = function(){
  return this.listSize;

};


