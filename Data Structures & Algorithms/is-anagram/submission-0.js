class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let newS = s.split("").sort().join("");
        let newT = t.split("").sort().join("");
        return newS === newT;
    }
}
