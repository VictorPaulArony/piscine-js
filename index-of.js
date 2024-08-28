function indexOf(arr, val) {
    //return arr.indexOf(val)
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
           return i
        }
    }
    return -1
}

function lastIndexOf(arr){
    let val = arr.length 

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === val){
           return i
        }
    }
}

function includes(arr, val){
    //return arr.includes(val)
    for (let i = 0;i < arr.length; i++){
        if (arr[i] === val){
            return i
        }
    }
}
console.log(indexOf([1, 2, 3, 4, 5], 4))
console.log(lastIndexOf([1, 2, 3, 4, 5, 6]))
console.log(includes([1, 2, 3, 4, 5], 3))