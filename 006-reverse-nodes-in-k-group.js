console.log('=== start ===');

//https://leetcode.com/problems/reverse-nodes-in-k-group/

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
    let inputArray = listNodeToArray(head);
    const resultArray = [];
    while (inputArray.length) {
        const buffer = inputArray.splice(0, k);
        if (buffer.length === k) {
            buffer.reverse();
        }
        resultArray.push(...buffer);
    }

    return arrayToListNode(resultArray);
};

console.log('result;', listNodeToArray( reverseKGroup(arrayToListNode([1,2,3,4,5]), 3)));

// utils

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {Array} array
  * @return {ListNode}
 */
function arrayToListNode(array) {
    let result = new ListNode(array.pop());
    while (array.length) {
        const newNode = new ListNode(array.pop());
        newNode.next = result;
        result = newNode;
    }
    return result;
}

/**
 * @param {ListNode} node
 * @return {Array}
 */
function listNodeToArray(node) {
    const result = [];
    let nodeCurrent = node;
    while (nodeCurrent) {
        result.push(nodeCurrent.val);
        nodeCurrent = nodeCurrent.next;
    }
    return  result;
}
