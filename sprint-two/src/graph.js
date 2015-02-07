var Graph = function(){
  this.storage = [];
  // create a Class
  // create a storage variable to store the node
};


Graph.prototype.addNode = function(node){
  // construct a node
  // add the node into storage

  this.storage.push([node]);
};

Graph.prototype.contains = function(node){
  // iterate over the storage array to check if node exists
  // return true if so, false otherwise
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === node) {
      return true;
    }
  }

  return false;
};

Graph.prototype.removeNode = function(node){
  // find the node in storage and delete it
  // will also remove edges
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === node) {
      delete this.storage[i][0];
    }
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  // hasEdge checks if toNode is connected to fromNode
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === fromNode) {
      if (this.storage[i].indexOf(toNode) > -1) {
        return true;
      }
    }
  }

  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  // addEdge connects toNode to fromNode
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i][0] === fromNode) {
      this.storage[i].push(toNode);
    }
    if(this.storage[i][0] === toNode){
      this.storage[i].push(fromNode);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  // removeEdge removes toNode from fromNode
  for (var i = 0; i < this.storage.length; i++) {
    if(this.storage[i][0] === fromNode) {
      if(this.storage[i].indexOf(toNode) > -1) {
        console.log(this.storage[i].indexOf(toNode));
        delete this.storage[i][this.storage[i].indexOf(toNode)];
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  // iterate through the storage
  // apply the callback function to each node
  for(var i = 0; i<this.storage.length; i++){
    cb(this.storage[i][0]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



