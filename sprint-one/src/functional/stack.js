var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value){
    // Increment size as we push in a value.
    // After size incrementation, set the key of storage to size - 1
    size++;
    storage[size-1] = value;
  };

  someInstance.pop = function(){
    // Size decreases by 1 because the last value is popped off
    // Assign the popped off value to a variable
    // Delete the popped off value
    // return variable with the popped off value

    size && size--;
    var poppedVal = storage[size];
    delete storage[size];

    return poppedVal;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
