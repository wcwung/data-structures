var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  // push item into storage
  // check the storage if the item already exist
  if(this._storage.indexOf(item) < 0){
    this._storage.push(item);
  }
};

setPrototype.contains = function(item){
  //search storage to see if items is in our storage
  // var bool = false;
  // for(var i = 0; i < this._storage.length; i++){
  //   if(item === this._storage[i]){
  //     bool = true;
  //   }
  // }
  // return bool;

  if(this._storage.indexOf(item) > -1){
    return true;
  }else{
    return false;
  }


};

setPrototype.remove = function(item){
  if(this._storage.indexOf(item)> -1){
    delete this._storage[this._storage.indexOf(item)];
  }
  //remove the item from storage
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
