// const a = 123
// const b = 0
function multiply(a,b){
    let res = 0

    const check = (a< 0) !== (b<0)
    b = Math.abs(b)
    a = Math.abs(a)
    

    // for (let i = 0;i< b; i++){
    //     res += a
    // }
    while (b>0){
        res += a
        b--
    }

    return check ? -res : res
}
function divide(a,b){
    if ((a===0) || (b===0)){
        throw new RangeError('Division by zero')
    }

    const check = (a< 0) !== (b<0)
    b = Math.abs(b)
    a = Math.abs(a)
  

    let res = 0
   while ( a >= b){
    a -= b 
    res ++
   }

   return check ? -res : res
}
function modulo(a,b){
    if (a===0) {
        throw new RangeError('Division by zero')
    }
    const check = (a< 0) 
    b = Math.abs(b)
    a = Math.abs(a)

    while (a >= b){
        a -= b
    }
    return check ? -a : a
    
}


 console.log(multiply(123,-22))
console.log(divide(22,22))
console.log(modulo(-123,22))