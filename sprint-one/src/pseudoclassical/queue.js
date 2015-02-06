var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
  this.firstIndex = 0;
  this.queueSize = 0;
};

Queue.prototype.enqueue = function(value) {
  // Increment queueSize
  // Assign value to storage[lastIndex]
  // increment lastIndex

  this.queueSize++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function() {
  // Check if queueSize is greater than 0, decrement queueSize if true
  // Assign the dequeue'd value to a variable
  // Delete the dequeue'd value
  // Increment firstIndex
  // Return dequeue'd value

  this.queueSize && this.queueSize--;
  var dequeueVal = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.firstIndex++;

  return dequeueVal;
};

Queue.prototype.size = function() {
  return this.queueSize;
};



