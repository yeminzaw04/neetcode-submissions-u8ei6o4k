class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;

        for (let i = 0; i < s.length; i++) {
            let seq = 1;
            for (let j = i + 1; j < s.length; j++) {
                if (!s.slice(i, j).includes(s[j])) {
                    seq++;
                } else {
                    // longest = (seq > longest) ? seq : longest;
                    break;
                }
            }
            longest = (seq > longest) ? seq : longest;
        }
        return longest;
    }
}
