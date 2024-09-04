function fold(arr, func, acc){
    for(let i= 0; i< arr.length; i++){
        acc = func(acc, arr[i], i, arr)
    }
    return acc
}

function foldRight(arr, func, acc){
    for(let i = arr.length-1;i>= 0; i--){
        acc = func(acc, arr[i], i, arr)
    }
    return acc
}


function reduce(arr,func){
    let res = arr[0]
    for (let i = 1; i < arr.length; i++){
        res = func(res, arr[i], i, arr)
    }
    return res
}

function reduceRight(arr,func){
    let res = arr[arr.length - 1]
    for(let i = arr.length - 2; i >= 0; i--){
        res = func(res, arr[i], i, arr)
    }
    return res
}


// const adder = (a, b) => a + b
// fold([1, 2, 3], adder, 2) // returns 8 (2 + 1 + 2 + 3)
// foldRight([1, 2, 3], adder, 2) // returns 8 (2 + 3 + 2 + 1)
// reduce([1, 2, 3], adder) // returns 6 (1 + 2 + 3)
// reduceRight([1, 2, 3], adder) // returns 6 (3 + 2 + 1)clea