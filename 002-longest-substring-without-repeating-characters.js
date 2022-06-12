// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

console.clear();

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if (!s){
        return 0;
    }
    const array = s.split('');
    let subArray = [];
    let result = 1;
    array.forEach((item)=> {
        const subIndex = subArray.indexOf(item);
        subArray.push(item);
        if (subIndex > -1) {
            subArray = subArray.slice(subIndex+1)
        }
        if (subArray.length > result) {
            result = subArray.length;
        }
    })
    return result;
};

const s1 = "bbbcebb";
console.log(lengthOfLongestSubstring(s1));
