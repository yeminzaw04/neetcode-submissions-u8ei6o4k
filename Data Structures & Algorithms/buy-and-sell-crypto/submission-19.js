class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let left = 0; // Buy
        // let right = 1; // Sell
        // let maxProfit = 0; // Record profit

        // while (right < prices.length) {
        //     if (prices[left] < prices[right]) {
        //         let profit = prices[right] - prices[left];
        //         maxProfit = Math.max(maxProfit, profit);
        //     } else {
        //         left = right;
        //     }
        //     right++;
        // }

        // return maxProfit;
        let windowStart = 0;
        let maxProfit = 0;

        for (let windowEnd = 1; windowEnd < prices.length; windowEnd++) {
            if (prices[windowStart] < prices[windowEnd]) {
                // Sell and Update Profit
                let profit = prices[windowEnd] - prices[windowStart];
                maxProfit = Math.max(profit, maxProfit);
            } else {
                // Buy
                windowStart = windowEnd;
            }
        }

        return maxProfit;
    }
}