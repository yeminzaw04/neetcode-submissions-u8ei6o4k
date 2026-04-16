class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length; i++) {
            let first = numbers[i];
            for (let j = i + 1; j < numbers.length; j++) {
                let next = numbers[j];
                if (first + next === target) return [i + 1, j + 1];
            }
        }
    }
}
