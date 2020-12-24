/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(var i = 0; i < numbers.length; i++){
        for (let j = 1; j < numbers.length; j++){
            if(target - numbers[i] == numbers[j] && i !== j){
                return [i+1, j+1]
            }
        }
        
    }
};



// [1,2,3,4,4,9,56,90]
// 8
// Output
// [4,5]
// Expected
// [4,5]