function forEach(arr, func){
    for (let i = 0; i < arr.length; i++){
        func(arr[i], i, arr)
    }
    return arr
}
// console.log(forEach([,2,3,4,5], (el) => console.log(el)))