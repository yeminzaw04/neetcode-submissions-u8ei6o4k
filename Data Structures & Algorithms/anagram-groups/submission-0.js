class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const myMap = new Map();
        const result = [];

        for (let word of strs) {
            const category = word.split("").sort().join("");
            if (!myMap.has(category)) {
                myMap.set(category, [word]);
            } else {
                myMap.get(category).push(word);
            }
        }
        console.log(myMap)
        for (const value of myMap.values()) {
            result.push(value);
        }

        return result;
    }
}
