/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//! O(n ^ 2)
// var twoSum = function (nums, target) {
//     const length = nums.length;
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

//? O(n)
var twoSum = function (nums, target) {
    const hashTable = {};
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        if (hashTable[target - nums[i]] !== undefined) {
            return [hashTable[target - nums[i]], i];
        }
        hashTable[nums[i]] = i;
    }
};
console.log(twoSum([2, 7, 11, 5], 9));
