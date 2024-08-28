function repeat(str, num){
    let res = ''
   if (num < 0){
        throw new RangeError('out of renge')
    } 
    for (let i= 0; i < num; i++){
        res += str
    }
    return res
}

console.log(repeat("hello", 10))