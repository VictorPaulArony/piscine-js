// const a = 123
// const b = 0
function multiply(a,b){
    let res = 0

    let check = b< 0
        b = Math.abs(b)
    

    for (let i = 0;i< b; i++){
        res += a
    }

    if (check){
        res = -res
    }
    return res
}
function divide(a,b){
    if (a<0){
        throw new RangeError('number is negative')
    }

    let check = b< 0 
    b = Math.abs(b)

  

    let res = 0
   while (a >= b){
    a -= b 
    res ++
   }

   if (check){
    res = -res
}
   return res
}
function modulo(a,b){
    while (a >= b){
        a -= b
    }
    return a
}


 //console.log(multiply(123,-22))
console.log(divide(123,-22))
// console.log(modulo())