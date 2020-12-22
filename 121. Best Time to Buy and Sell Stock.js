/**
 * @param {number[]} prices
 * @return {number}
 */

 // solution 1 O(n**2)

var maxProfit_1 = function(prices) {
    var max = 0
    for(let i = 0; i < prices.length; i ++){
        for(let j = 1; j <prices.length - 1; j++){
            let res = prices[j] - prices[i]
            console.log("res: " +prices[j] + "-" + prices[i] +"="+ res)
            if (res > max){
                max = res
            }else{
                max = max
            }
        }

    }
    return max
};

/**
 solution 2 O(2n)
 */
var maxProfit_2 = function(prices) {
    let buy = Number.MAX_VALUE
    let sell = 0
    for (const price of prices) {
        if (price < buy) {
            buy = price
        } else {
            sell = Math.max(sell, price - buy)
        }
    }
    return sell
};


let price = [1,2]
console.log(maxProfit(price))

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.


// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.
