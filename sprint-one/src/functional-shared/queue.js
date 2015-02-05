var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.lastIndex = 0;
  newQueue.firstIndex = 0;
  newQueue.queueSize = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  // Increment queueSize.
  // Assign value to storage[lastIndex]
  // increment lastIndex
  this.queueSize++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;

};

queueMethods.dequeue = function(){
  // Decrement queueSize if queueSize is greater than zero.
  // Create a new variable that stores storage[firstIndex]
  // Delete first value
  // Increment firstIndex
  // return the variable that holds the first value

  this.queueSize && this.queueSize--;
  var dequeueVal = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.firstIndex++;

  return dequeueVal;
};

queueMethods.size = function() {
  return this.queueSize;
};



