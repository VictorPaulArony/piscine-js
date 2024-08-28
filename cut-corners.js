function round(num){
    if (num >= 0){
        return num + 0.5 | 0
    }else{
        return num - 0.5 | 0
    }
}

function ceil(num){
    if (Number.isInteger(num)){
        return num
    }
    if (num > 0){
        return (num + 1) | 0
    }else{
        return num | 0
    }
}

function floor(num){
    if (Number.isInteger(num)){
        return num
    }
    if (num > 0 ){
        return num | 0
    }else{
        return (num - 1) | 0
    }
}

function trunc(num){
    if (num == -0){
        return -0
    }
    return num | 0
}

const nums = [3.7, -3.7, 3.1, -1.1, -0.5]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))