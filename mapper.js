function map(arr, func){
    let res = []
    for(let i = 0;i < arr.length;i++){
        res.push(func(arr[i],i,arr))
    }
    return res
}


function flatMap(arr, func){
   return arr.reduce((acc,curr,i, arr) => acc.concat(func(curr,i,arr)),[])
}
// console.log(map([1,2,3,4], (num) => num * 2))
// console.log(flatMap([1,2,3,4], (num) => [num, num * 2]))
// const numbers = [10, -10, 20, -95, 86, 102, 35, 89, 110];
// const add1 = (n) => n + 1;

// console.log(flatMap(numbers, add1)); 