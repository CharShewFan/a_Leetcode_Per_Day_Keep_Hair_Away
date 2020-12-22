/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {


    
        let index = 0
        for(let i = m; i < m + n; i++){
             nums1[i] = nums2[index]
             index ++;
        }
        
        var j, k ,temp = 0;
        for (j = 0; j <= nums1.length - 1; j++) {
            for(k = 0; k <nums1.length - 1 - j;k++){
                if (nums1[k] > nums1[k+1]){
                    temp = nums1[k]
                    nums1[k] = nums1[k+1]
                    nums1[k+1] = temp;
                }
            }
        }
        return nums1;
    
};




    // let nums11 = [1,2,3,0,0,0];
    // let m = 3;
    // let nums22 = [2,5,6];
    // let n = 3;
    // merge(nums11,m,nums22,n)
    // console.log(nums11)


// let nums12 = [1];
// let m1 = 1;
// let nums23 = [];
// let n1 = 0;
// merge(nums12,m1,nums23,n1)
// console.log(nums12)

let nums44 = [1,2,3,0,0,0];
let m2 = 3;
let nums55 = [2,5,6];
let n2 = 3;
merge(nums44,m2,nums55,n2)
console.log(nums44)