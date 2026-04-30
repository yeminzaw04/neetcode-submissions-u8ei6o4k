class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        const bucket = [];
        const result = [];
        
        for (const num of nums) {
            count.set(num, (count.get(num) ?? 0) + 1);
        }

        for (let i = 0; i <= nums.length; i++) {
            bucket.push([]);
        }

        for (const [num, freq] of count) {
            bucket[freq].push(num);
        }

        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                result.push(num);
                if (result.length === k) return result;
            }
        }
    }
}
