class TreeNode {
  constructor(
    public val?: number,
    public left?: TreeNode | null,
    public right?: TreeNode | null
  ) {}
}

function invertBinaryTree(tree: TreeNode) {
  if (tree == null) return;
  swapNode(tree);

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapNode(tree: TreeNode) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

export { TreeNode, invertBinaryTree };
