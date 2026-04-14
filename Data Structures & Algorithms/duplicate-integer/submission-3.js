class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     return nums.some(num => {
    //     return (nums.indexOf(num) === nums.lastIndexOf(num)) ? false : true;
    // });
    hasDuplicate(nums) {
        let mySet = new Set();
        for (let num of nums) {
            if (mySet.has(num)) {
                return true;
            } else {
                mySet.add(num);
            }
        }
        return false;
    }
}
