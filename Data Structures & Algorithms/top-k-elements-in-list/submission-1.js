class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const myMap = new Map();

        for (let num of nums) {
            myMap.set(num, (myMap.get(num) ?? 0) + 1);
        }
    
        const sorted = [...myMap].sort((a, b) => {
            return b[1] - a[1];
        })
    
        return sorted.slice(0, k).map(arr => arr[0]);
    }
}
