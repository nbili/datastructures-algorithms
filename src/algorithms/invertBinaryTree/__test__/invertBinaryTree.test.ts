import { TreeNode, invertBinaryTree } from "../invertBinaryTree";

describe("invertBinaryTree", () => {
  it("right", () => {
    const treeNode = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6), new TreeNode(7))
    );

    invertBinaryTree(treeNode);

    expect(JSON.stringify(treeNode)).toEqual(
      `{"val":1,"left":{"val":3,"left":{"val":7},"right":{"val":6}},"right":{"val":2,"left":{"val":5},"right":{"val":4}}}`
    );
  });
});
