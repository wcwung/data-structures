var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};
//O(1)
treeMethods.addChild = function(value){
  //child = Tree(value)
  var child = Tree(value);
  if(this.children.length < 4){ //3 children
    this.children.push(child);
  }
  //check the size of .children.length if less than whatever
  //push the child in to newTree.children

};
//O(n)
treeMethods.contains = function(target){
  //base perfect case: FOUND (target === value) return true;
  var bool = false;
  var parent;
  if (!arguments[1]) {
    parent = this;
  } else {
    parent = arguments[1];
  }
  if (target === parent.value) {
    return true;
  }

  for (var i = 0; i < parent.children.length; i++) {
    //bool = recursive function(target, parent.children[i]);
    bool = parent.contains(target, parent.children[i]);
    if (bool) {
      break;
    }
  }

  return bool;

  //forloop to iterate through the children.
  //recursivly go through each children.
  //

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
