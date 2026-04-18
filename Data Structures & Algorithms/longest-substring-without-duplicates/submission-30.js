class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let right = 0;
        let maxLength = 0;
        let mySub = new Set();

        while (right < s.length) {
            if (!mySub.has(s[right])) {
                mySub.add(s[right]);
                right++;
                maxLength = Math.max(maxLength, right - left)
            } else {
                mySub.delete(s[left]);
                left++;
            }
            // maxLength = Math.max(maxLength, right - left)
        }

        return maxLength;
    }
}
