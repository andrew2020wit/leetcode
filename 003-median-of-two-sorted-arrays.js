console.clear();

// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {

    let resultArray = []

    while (nums1.length || nums2.length) {

        if ((nums1.length > 0) && (nums2.length > 0)) {
            if ( ( nums1[nums1.length-1] > nums2[nums2.length-1] ) ) {
                resultArray.push(nums1.pop());
            } else {
                resultArray.push(nums2.pop());
            }
        }

        if ( nums1.length && !nums2.length ) {
            resultArray.push(nums1.pop());
        }

        if ( !nums1.length && nums2.length ) {
            resultArray.push(nums2.pop());
        }

    }

    resultArray.reverse();

    if (resultArray.length % 2) {
        return resultArray[ Math.floor( resultArray.length/2 )];
    } else {
        return ( resultArray[resultArray.length/2 - 1] + resultArray[resultArray.length/2]) / 2;
    }
};

const ns1 = [1,2];
const ns2 = [3,4];
console.log(findMedianSortedArrays(ns1, ns2));
