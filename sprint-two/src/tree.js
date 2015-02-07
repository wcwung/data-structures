var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  //child = Tree(value)
  var child = Tree(value);
  if(this.children.length < 4){ //3 children
    this.children.push(child);
  }
  //check the size of .children.length if less than whatever
  //push the child in to newTree.children

};

treeMethods.contains = function(target){
  //base perfect case: FOUND (target === value) return true;
  if (target === this.value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    this.contains(target, this.children[i]);
  }
  //forloop to iterate through the children.
  //recursivly go through each children.
  //

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
