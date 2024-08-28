function indexOf(arr, val, from = 0) {
    
    for (let i = from; i < arr.length; i++){
        if (arr[i] === val){
           return i
        }
    }
    return -1
}

function lastIndexOf(arr, val){

    for (let i = arr.length-1;i >= 0; i--){
        if (arr[i] === val) {
           return i
        }
    }
}

function includes(arr, val){
    //return arr.includes(val)
    for (let i = 0;i < arr.length; i++){
        if (arr[i] === val){
            return true
        }
    }
    return false
}
//let t = 'test'
// console.log(indexOf([t, 0, 0, t], t, 1))
c//onsole.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
// console.log(includes([1, 2, 3, 4, 5], 3))