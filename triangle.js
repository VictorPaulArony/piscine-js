function triangle(str, num ){
    let res = ''
    for (let i = 0; i < num; i++){
        res += str.repeat(i + 1) 
        if (i !== num - 1){
            res += '\n'
        }
    }
    return res 
}
// function 
console.log(triangle('*', 5))