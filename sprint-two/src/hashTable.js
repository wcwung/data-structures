var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(i, v);
  // if get.storage is not undefined, .set(i, [[k,v]])
  // else, .each should look for the next undefined in storage[0]
  // debugger;
  if (!this._storage.get(i)){
    this._storage.set(i, [[k,v]]);
  } else {
    _.each(this._storage.get(i), function(value, index, storage){
      storage.push([k,v]);
      console.log(storage);
    });
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var test;
  _.each(this._storage.get(i), function(value, index){
    if(k === value[0]){
      test = value[1];
    }
  });
  return test;
  // return this._storage.get(i);

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(i, null);
  _.each(this._storage.get(i), function(value, index){
    if(k === value[0]) {
      value[1] = null;
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
