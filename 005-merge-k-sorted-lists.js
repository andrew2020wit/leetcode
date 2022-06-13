console.clear();

// https://leetcode.com/problems/merge-k-sorted-lists/

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

 /**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 const mergeKLists = function(lists) {

     const flatArray = []

     lists.forEach(listNode => {
         let node = listNode;
         while (node) {
             flatArray.push(node.val);
             node = node.next;
         }
     });

     let result = null;

     flatArray.sort( (a, b) => b - a );

     flatArray.forEach(value => {
         const nodeNew = new ListNode();
         nodeNew.val = value;
         nodeNew.next = result;
         result = nodeNew;
     })

     return result;

 };


