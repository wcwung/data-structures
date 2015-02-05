var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.queueSize = 0;
  newQueue.firstIndex = 0;
  newQueue.lastIndex = 0;

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.queueSize++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;

};
queueMethods.dequeue = function(){
  var dequeueVal = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.queueSize && this.queueSize--;
  this.firstIndex++;
  return dequeueVal;

};
queueMethods.size = function(){
  return this.queueSize;
};



