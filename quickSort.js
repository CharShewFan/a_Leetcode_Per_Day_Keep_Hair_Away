//1. quick sort algorithem in JavaScript



// main function to sort a random list and printout every element of the list
function quickSort(arr){
    let left = 0;
    let right = arr.length - 1;
    qs(arr,left,right)

    for(let k = 0; k < arr.length; k++){
        console.log(k)
    }
}


//quicksort method
function qs(arr,l,r){
    if(l >= r){
        return
    }

    // return a pivot for seperate two group
    let p = partition(arr,l,r)

    // recursive calling qs method
    qs(arr,l,p-1)
    qs(arr,p+1,r)
}


//patition function to seperate a group of numbers samller than pivot
//and a group of number larger than pivot
function partition(arr2, left,right){
    let pivot = arr2[right]
    let i = left - 1;
    

    //loop j from left upto r - 1;
    // compare arr2[j] with pivot, if arr2[j] < pivot, swap arr2[i] with arr2[j]
   for(let j = 0; j < right; j++){
       if(arr2[j] < pivot){
           i++;
           let temp = arr2[i]
           arr2[i] = arr2[j]
           arr2[j] = temp
       }
   }
   // move pivot to index i+1 ,  the middle of smaller group and larger group
   let temp = arr2[i+1]
   arr2[i+1] = pivot
   pivot = temp
   return i+1
}

var arrList = [5,6,3,4,1,9,3,5,6,2,3,9,23,65,34,87,19,76];
quickSort(arrList);