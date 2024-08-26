function isPositive(num){
    if( num > 0){
    return "true"
    } else if(num  < 0 ){
    return "false"
    }
}

function abs(num){
    if (num < 0){
        return num * -1
    }
    return num * +1
}

console.log(isPositive(-1))
console.log(abs(-13))