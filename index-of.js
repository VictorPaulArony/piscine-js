function indexOf(arr, val, from = 0) {
    
    for (let i = from; i < arr.length; i++){
        if (arr[i] === val){
           return i
        }
    }
    return -1
}

function lastIndexOf(arr, val, from = arr.length-1){

    for (let i = from;i >= 0; i--){
        if (arr[i] === val) {
           return i
        }
    }
    return -1
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
//let bigArray = [1, 2, { key: 'value' }, 4];
// console.log(indexOf([t, 0, 0, t], t, 1))
//console.log(lastIndexOf(bigArray, {}))
// console.log(includes([1, 2, 3, 4, 5], 3))