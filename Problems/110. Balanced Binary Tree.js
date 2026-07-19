function height(node) {
if(node===null) return 0;
  let leftHeight=height(node.left);
    if(leftHeight===-1) reutrn -1;
  let rightHeight=height(node.right);
  if(rightHeight===-1) reutrn -1;

  return abs(leftHeight-rightHeight)<=1?1+Math.max(leftHeight,rightHeight):-1;
}
var isBalanced = function(root) {
  return height(root)!==-1;
};



