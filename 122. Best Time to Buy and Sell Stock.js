/**
 * @param {number[]} prices
 * @return {number}
 */

 // solution 1 O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for (let i = 0; i < prices.length -1 ; i++){
        if(prices[i+1] - prices[i] > 0)
            max = max + (prices[i+1] - prices[i]);
            }
    return max
        };




// Example 1:

// Input: [7,1,5,3,6,4]
// output 7