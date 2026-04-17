class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while (right < prices.length) {
            let profit;

            if (prices[left] < prices[right]) {
                profit = prices[right] - prices[left];
                maxProfit = (profit > maxProfit) ? (maxProfit = profit) : maxProfit;
            } else {
                left = right;
            }
            right++;
        }

        return maxProfit;
    }
}