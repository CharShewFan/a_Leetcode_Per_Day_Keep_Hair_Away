/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
    let i = 0;
    let j = 1;
    if (nums.length == 0){
        return 0;
    }else{

        while(j<nums.length){
            if (nums[j] !== nums[i]){
                i ++;
                nums[i] = nums[j];
                j ++;
            }
            else{
                j++;
            }

        }
    }
    return i + 1;
}



//var numbers = [1,1,2,2,3];
//console.log(removeDuplicates(numbers))
