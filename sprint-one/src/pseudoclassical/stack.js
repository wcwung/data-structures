var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value){
  //increment stackSize
  this.storage[this.stackSize] = value;
  this.stackSize++;
  //push the value to the end of storage
};
Stack.prototype.pop = function(){
  //decrement stackSize
  this.stackSize && this.stackSize--;
  var poppedVal = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return poppedVal;
  //Assign the last value to new variable
  //Delete the last value
  //return the variable that store the last value

};
Stack.prototype.size = function(){
  return this.stackSize;
};
