class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let windowStart = 0, longest = 0, myCharSet = new Set();

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let windowEndChar = s[windowEnd];

        while (myCharSet.has(windowEndChar)) {
            let windowStartChar = s[windowStart];
            myCharSet.delete(windowStartChar);
            windowStart++;
        }

        myCharSet.add(windowEndChar);
        longest = Math.max(longest, windowEnd - windowStart + 1)
    }

    return longest;
    }
}
