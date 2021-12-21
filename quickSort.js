function quickSort(arr){
    let l = 0;
    let r = arr.length - 1;
    qs(arr,l,r)

    console.log("===============")
    for(let item of arr){
        console.log(item)
    }
}

function qs(arr,l,r){
    if(l >= r) return;
    let pIndex = partition(arr,l,r)

    // qs call qs, not include the pre-pivot
    qs(arr,l,pIndex-1);
    qs(arr,pIndex+1,r);
}

function partition(arr,l,r){
    let p = arr[r];
    console.log("p is " + p)
    let i = l - 1;
    

  for(let j = l; j<r; j++){
        if(arr[j]<p){
            i = i+1;
            let temp2 = arr[i];
            arr[i] = arr[j];
            arr[j] = temp2;
        }
    }

    //swop pivot and arr[i+1]
    let temp = arr[i+1];
    arr[i+1] = p;
    arr[r] = temp;
    return i+1;
}


let a1 = [5,6,4,1,9,3,2,23,65,34,87,19,20];
let a4 = [3, 1, -1, 0, 2, 5]
let a5 = [0, 0, 1, 1, 2, 2, 2, 2, 2, 4, 4]
let a7 = [3, -2, -1, 0, 2, 4, 1]
quickSort(a1)
