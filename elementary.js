const a = 10
const b = 30
function multipy(){
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


console.log(multipy())
console.log(didide())
console.log(modulo())