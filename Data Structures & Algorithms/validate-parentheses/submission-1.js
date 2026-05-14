class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const mappings = {
            "}": "{",
            "]": "[",
            ")": "(",
        };

        for (const char of s) {
            if (char in  mappings) {
                if (stack.length === 0 || stack[stack.length - 1] !== mappings[char]) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
