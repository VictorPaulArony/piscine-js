function map(arr, func){
    for(let i = 0;i < arr.length;i++){
        arr[i] = func(arr[i])
    }
    return arr;
}


function flatMap(arr, func){
    return arr.reduce((acc, curr) => {
        let mapped = func(curr)
        return acc.concat(mapped)
    }, [])
}
// console.log(map([1,2,3,4], (num) => num * 2))
// console.log(flatMap([1,2,3,4], (num) => [num, num * 2]))