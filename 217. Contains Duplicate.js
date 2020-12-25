/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a_set = new Set()
    for(i in nums){
        if (a_set.has(nums[i])){
            return true;
        }
        a_set.add(nums[i]);
    }
    return false;

};


//solution two 
// var containsDuplicate = function(nums) {
//     let set = new Set(nums);
//     return (set.size < nums.length);
// };


let nums = [1,2,3,1]
//Output: true
console.log(containsDuplicate(nums))