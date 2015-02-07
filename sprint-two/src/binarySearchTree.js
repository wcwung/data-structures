var BinarySearchTree = function(value){
  this.value = value;
  this.left = undefined;
  this.right = undefined;


};

BinarySearchTree.prototype.insert = function(value){
  var parent;
  if (!arguments[1]) {
    parent = this;
  } else {
    parent = arguments[1];
  }
  if (parent.value > value && !parent.left) {
    parent.left = new BinarySearchTree(value);
  }
  if (parent.value < value && !parent.right) {
    parent.right = new BinarySearchTree(value);
  }
  if(parent.value > value){
    parent.insert(value, parent.left);
  }
  if(parent.value < value){
    parent.insert(value, parent.right);
  }
};
BinarySearchTree.prototype.contains = function(target){
  var parent;
  var bool = false;
  if(!arguments[1]){
    parent = this;
  } else{
    parent = arguments[1];
  }
  if(parent.value === target){
    return true;
  }
  if(parent.value > target && parent.left){
    bool = parent.contains(target, parent.left);
  }
  if(parent.value < target && parent.right){
    bool = parent.contains(target, parent.right);
  }
  return bool;
};
BinarySearchTree.prototype.depthFirstLog = function(cb){
  var parent;
  if (!arguments[1]) {
    parent = this;
  } else {
    parent = arguments[1];
  }
  cb(parent.value);
  if(parent.right) {
    parent.depthFirstLog(cb, parent.right);
  }
  if(parent.left) {
    parent.depthFirstLog(cb, parent.left);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
