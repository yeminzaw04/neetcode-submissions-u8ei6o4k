class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            let diff = target - num;

            if (prevMap.has(diff)) {
                return [i, prevMap.get(diff)];
            }

            prevMap.set(num, i);
        }

        // for (let i = 0; i < nums.length; i++) {
        //     indices[nums[i]] = i;
        // }

        // for (let i = 0; i < nums.length; i++) {
        //     let diff = target - nums[i];
        //     if (indices[diff] !== undefined && indices[diff] !== i) {
        //         return [i, indices[diff]];
        //     }
        // }
    }
}
