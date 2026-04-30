class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = new Map();

        for (const num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        const freq = [];
        
        for (let i = 0; i <= nums.length; i++) {
            freq.push([]);
        }

        for (const [num, count] of counts) {
            freq[count].push(num);
        }

        const result = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (let n of freq[i]) {
                result.push(n);
                if (result.length === k) return result;
            }
        }
    }
}
