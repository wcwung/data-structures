var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!list.head){
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
    //One node case:
    //Build a node
    //tail will = node.value
    //head will = node.value
    //More nodes case:
    //Build a node
    //***node.value = value
    //***node.next = null, previous node.next = current node.value;
    //tail will = lastBuiltNode.value
    //head will be same
  };

  list.removeHead = function(){
    //store the list.head.value
    //list.head.value = list.head.next
    //return list.head.value
    var headNode = list.head;
    list.head = headNode.next;

    return headNode.value;
  };

  list.contains = function(target){
    //received the currentNode

    var currentNode = arguments[1] || list.head;
    var bool;
    //assigned that currentNode to our currentNode


    if(target === currentNode.value){
      return true;
    }else if(currentNode.next === null){
      return false;
    }else{
      bool = list.contains(target, currentNode.next);
    }
    return bool;

    // Check if target = current node.value: true ? return true
    // Else, move forward and point to next node
    // Also check if current Node.next === null
    // if current Node.next === null, return false for no matching target
    //
    // Recursion : call list.contains(target, current node)

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
