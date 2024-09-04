function map(arr, func){
    for(let i = 0;i < arr.length;i++){
        arr[i] = func(arr[i])
    }
    return arr;
}
// console.log(map([1,2,3,4], (num) => num * 2))