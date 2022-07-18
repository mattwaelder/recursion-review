// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  var result = [];


  var getsMatchingNodes = function (node) {
    //base case
    //check if classname
    if (node.classList.contains(className)) {
      result.push(node);
    }
    if (node.children.length === 0) {
      return;
    }

    //if passed in node has children
    //recursive case
    if (node.children.length > 0) {
      //itterate over each child recursively calling helper fn
      for (var x = 0; x < node.children.length; x++) {
        var currentNode = node.children[x];
        getsMatchingNodes(currentNode);
      }
    }
  };


  //input is a string (maybe an array/collection, too)
  //output is array
  //if none of the nodes match, return empty arrray

  //if current node matches, add to result
  //itterate through current node
  //if it has children, itterate over its children (recursive)

  getsMatchingNodes(document.body);


  console.log(result);
  return result;
};
