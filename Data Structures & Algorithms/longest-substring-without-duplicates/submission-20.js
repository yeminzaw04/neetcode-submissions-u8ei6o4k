class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let left = 0;
        let right = 1;
        const mySub = new Set();

        if (s.length === 1) return 1;
        
        while (right < s.length) {
            if (mySub.size === 0) {
                mySub.add(s[left]);
            }

            if (!mySub.has(s[right])) {
                mySub.add(s[right]);
                right++;
                longest = (mySub.size > longest) ? mySub.size : longest;
            } else {
                longest = (mySub.size > longest) ? mySub.size : longest;
                left++;
                right = left + 1;
                mySub.clear();
            }
        }
        return longest;
        
        // let longest = 0;

        // for (let i = 0; i < s.length; i++) {
        //     let seq = 1;
        //     for (let j = i + 1; j < s.length; j++) {
        //         if (!s.slice(i, j).includes(s[j])) {
        //             seq++;
        //         } else {
        //             break;
        //         }
        //     }
        //     longest = (seq > longest) ? seq : longest;
        // }
        // return longest;
    }
}
