function adder(arr, num){
    return arr.reduce((acc, curr) => acc + curr,  num === undefined ? 0 : num)
   
}

function sumOrMul(arr,num ){
    return arr.reduce((acc,curr) =>  {
        if (curr % 2 == 0){
            return acc *curr
        }else{
            return acc + curr
        }
        
    }, num === undefined ? 0 : num)
}

function funcExec(func, num){
    return func.reduce((acc, curr) =>{
        if (typeof curr ==='function'){
            return curr(acc, num)
        }else{
            return acc
        }
    }, num === undefined ? 0 : num)
}

// const arr = [1,3,5,7,9]
// console.log(adder(arr))
// console.log(sumOrMul(arr))