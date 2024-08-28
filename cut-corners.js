function round(num){
    if (num >= 0){
        return Math.round(num)
    }else{
        return Math.round(num)
    }
}

function ceil(num){
    if (Number.isInteger(num)){
        return num
    }
    if (num > 0){
        return Math.ceil(num)
    }else{
        return Math.ceil(num)
    }
}

function floor(num){
    if (Number.isInteger(num)){
        return num
    }
    if (num > 0 ){
        return Math.floor(num)
    }else{
        return Math.floor(num)
    }
}

function trunc(num){
    if (num == -0){
        return -0
    }
    return Math.trunc(num)
}

const nums = [3.7, -3.7, 3.1, -1.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))