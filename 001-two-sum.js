// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    const numObjects = [];

    nums.forEach((num, index) => {
        numObjects.push({ num, index });
    });
    numObjects.sort((a, b) => a.num - b.num);

    let indexA = 0;
    let indexB = numObjects.length - 1;
    let thereIsNoResult = false;

    while (true) {
        if (!indexB) {
            thereIsNoResult = true;
            break;
        }

        const sum = numObjects[indexA].num + numObjects[indexB].num;

        if (sum === target) {
            break;
        }

        if (sum > target) {
            indexB--;
            indexA = 0;
        }

        if (sum < target) {
            indexA++;
        }
    }

    if (thereIsNoResult) {
        return [0, 0];
    } else {
        return [numObjects[indexA].index, numObjects[indexB].index];
    }

};
