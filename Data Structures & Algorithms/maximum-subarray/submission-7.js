class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let windowStart = 0;
        let largestSumSoFar = -Infinity;
        let sum = 0;
        
        for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
            sum += nums[windowEnd];
            largestSumSoFar = Math.max(sum, largestSumSoFar);

            if (sum < 0) {
                sum = 0;
                windowStart = windowEnd + 1;
            }
        }
        return largestSumSoFar;
    }
}
