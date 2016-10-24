// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  var nodes = [];
  node = node || document.body;

  //Base Case: if node has class, add node to array
  if(node.classList.contains(className)){
    nodes.push(node);
  }

  //Recursive: check node's children for class
  for(var i = 0; i < node.children.length; i++){
    nodes = nodes.concat(getElementsByClassName(className, node.children[i]));
  }
  
  return nodes;
};
