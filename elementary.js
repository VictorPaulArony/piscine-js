const a = 34
const b = 78
function multiply(){
    let res = 0
    for (let i = 0;i< b; i++){
        res += a
    }
    return res
}
function didide(){
    let res = 0
   while (a >= b){
    a -= b 
    res ++
   }
   return res
}
function modulo(){
    while (a >= b){
        a -= b
    }
    return a
}


console.log(multiply())
console.log(didide())
console.log(modulo())