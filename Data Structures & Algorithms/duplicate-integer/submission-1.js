class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return nums.some(num => {
        return (nums.indexOf(num) === nums.lastIndexOf(num)) ? false : true;
    });
    }
}