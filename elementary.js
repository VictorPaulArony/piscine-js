// const a = 123
// const b = 0
function multiply(a,b){
    let res = 0
    for (let i = 0;i< b; i++){
        res += a
    }
    return res
}
function didide(a,b){
    if (a<0){
        throw new RangeError('number is negative')
    }
    let res = 0
   while (a >= b){
    a -= b 
    res ++
   }
   return res
}
function modulo(a,b){
    while (a >= b){
        a -= b
    }
    return a
}


// console.log(multiply(123,0))
// console.log(didide())
// console.log(modulo())