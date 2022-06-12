console.clear();

//https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {

    const pNew = '^' + p + '$';
    regExp1 = new RegExp(pNew);
    return  regExp1.test(s);

};

const s1 = 'aab';
const p1 = 'c*a*b';

console.log(isMatch(s1, p1));
