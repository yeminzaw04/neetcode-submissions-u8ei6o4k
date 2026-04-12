class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let currentNum = nums[i];
            let desiredNum = target - nums[i];
            if (nums.includes(desiredNum) && i !== nums.indexOf(desiredNum)) {
                return [i, nums.indexOf(desiredNum)];
            }
        }
    }
}
