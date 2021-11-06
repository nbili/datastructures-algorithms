// https://leetcode-cn.com/problems/check-completeness-of-a-binary-tree/

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isCompleteTree(root: TreeNode | null): boolean {
  if (root === null) return true;

  return process(root).isCBT;
}

interface Info {
  isFULL: boolean;
  isCBT: boolean;
  h: number;
}

function process(head: TreeNode): Info {
  if (head === null) return { isFULL: true, isCBT: true, h: 0 };

  const leftInfo = process(head.left);
  const rightInfo = process(head.right);

  let isFULL, isCBT, h;

  h = Math.max(leftInfo.h, rightInfo.h) + 1;

  isFULL = leftInfo.isFULL && rightInfo.isFULL && leftInfo.h === rightInfo.h;

  isCBT = false;

  if (isFULL) {
    isCBT = true;
  } else {
    if (leftInfo.isCBT && rightInfo.isCBT) {
      if (
        leftInfo.isCBT &&
        rightInfo.isFULL &&
        leftInfo.h === rightInfo.h + 1
      ) {
        isCBT = true;
      }
      if (
        leftInfo.isFULL &&
        rightInfo.isFULL &&
        leftInfo.h === rightInfo.h + 1
      ) {
        isCBT = true;
      }

      if (leftInfo.isFULL && rightInfo.isCBT && leftInfo.h === rightInfo.h) {
        isCBT = true;
      }
    }
  }

  return {
    isFULL,
    isCBT,
    h,
  };
}

export {};
