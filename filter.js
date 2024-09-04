function filter(arr, func){
    let res = []
    for(let i = 0;i < arr.length;i++){
        if(func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr, func){
    let res = []
    for(let i = 0;i < arr.length;i++){
        if(!func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}

function partition(arr, func){
    let res = []
    let result = []
    for(let i = 0; i < arr.length; i++){
        if (func(arr[i], i , arr)){
            res.push(arr[i])
        }else{
            result.push(arr[i])
        }
    }
    return [res,result]
}

console.log(filter([1,2,3,4], (num) => num > 2))
console.log(reject([1,2,3,4], (num) => num > 4))