var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var lastIndex = 0, firstIndex = 0;
  // Implement the methods below
  // Psuedo Code
  //
  someInstance.enqueue = function(value){
    //Add value to the end of 'storage'
    size++;
    storage[lastIndex] = value;
    lastIndex++;

    //Move the lastIndex to last value
    //size have to increase.
  };

  someInstance.dequeue = function(){
    //Removes value from the front
    size && size--;
    var removedVal = storage[firstIndex];
    //console.log(removedVal);
    delete storage[firstIndex];
    //console.log(firstIndex);

    firstIndex++;
    //Changes firstIndex following value key
    //size decrease
    //Assigns the removed value to a variable and returns it.
    return removedVal;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
