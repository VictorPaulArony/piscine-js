function round(num){
    if (num >= 0){
        return parseInt(num + 0.5)
    }else{
        return parseInt(num - 0.5)
    }
}
function ceil(num){
    if (Number.isInteger(num)){
        return num
    }
    if (num > 0){
        return parseInt(num + 1)
    }else{
        return parseInt(num )
    }
}

function floor(num){
    if (Number.isInteger(num)){
        return num
    }
    if (num > 0 ){
        return parseInt(num)
    }else{
        return parseInt(num - 1)
    }
}

function trunc(num){
    if (num == -0){
        return -0
    }
    return parseInt(num)
}




// const nums = [3.7, -3.7, 3.1, -1.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))