/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length == 0){
        return 0;
    }

    if (nums.length == 1){
        return nums[0];
    }
    else{
        var max = nums[0],res = 0;
        for(let i = 0; i <nums.length; i++){
            res += nums[i];
            if (res > max){
                max = res;
            }
            if (res < 0){
                res = 0
            }
        }
    }
    return max;   
};


let nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6
//Explanation: [4,-1,2,1] has the largest sum = 6.

console.log(maxSubArray(nums))
