function isPostive(num){
    if( num > 0){
    return "true"
    }
    return "false"
}

function abs(num){
    if (num < 0){
        return num * -1
    }
    return num * +1
}

console.log(isPostive(13))
console.log(abs(13))