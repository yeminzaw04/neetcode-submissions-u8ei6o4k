class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const mySet = new Set(nums);
        let longestStreak = 0;
        for (const num of mySet) {
            if (!mySet.has(num - 1)) {
                let startSeq = num;
                let currentStreak = 1;
                
                while (mySet.has(startSeq + 1)) {
                    startSeq += 1;
                    currentStreak += 1;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }
}
