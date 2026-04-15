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

        // const myMap = new Map();

        // for (let char of s) {
        //     myMap.set(char, (myMap.get(char) ?? 0) + 1);
        // }

        // for (let char of t) {
        //     let count = myMap.get(char) ?? 0;

        //     if (count === 0) return false;

        //     myMap.set(char, count - 1);
        // }

        // return true;

        const myMap1 = new Map();
        const myMap2 = new Map();

        for (let i = 0; i < s.length; i++) {
            myMap1.set(s[i], (myMap1.get(s[i]) ?? 0) + 1);
            myMap2.set(t[i], (myMap2.get(t[i]) ?? 0) + 1);
        }

        for (let key of myMap1.keys()) {
            if ((myMap1.get(key) ?? 0) !== (myMap2.get(key) ?? 0)) return false;
        }

        return true;
    }
}
