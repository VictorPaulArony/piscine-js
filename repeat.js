function repeat(str, num){
    let res = ''
    for (i= 0; i < num; i++){
        res += str
    }
    return res
}

console.log(repeat("hello", 10))