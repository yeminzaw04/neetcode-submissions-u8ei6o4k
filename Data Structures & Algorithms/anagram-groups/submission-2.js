class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const myMap = new Map();

        for (let word of strs) {
            const category = word.split("").sort().join("");
            if (!myMap.has(category)) {
                myMap.set(category, [word]);
            } else {
                myMap.get(category).push(word);
            }
        }

        return [...myMap.values()];
    }
}
