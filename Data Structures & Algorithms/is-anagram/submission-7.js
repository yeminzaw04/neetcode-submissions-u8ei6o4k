class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // Check two words are anagram of each other (anagram is when two words have same length, same character count, maybe different order)
    // String, String => Boolean

    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let myMap = new Map();

        for (let char of s) {
            myMap.set(char, (myMap.get(char) ?? 0) + 1);
        }

        for (let char of t) {
            let count = myMap.get(char) ?? 0;
            if (count === 0) return false;
            myMap.set(char, (myMap.get(char) ?? 0) - 1);
        }

        return true;
    }
}
