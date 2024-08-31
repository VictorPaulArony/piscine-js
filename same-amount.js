function sameAmount(args, RegExp1, RegExp2){
   
    if(RegExp1.test(args) === RegExp2.test(args)){
        return true
    } else {
        return false
    }
}
// return RegExp1.test(args) === RegExp2.test(args)
// console.log(sameAmount('12345', /[54321]/g, /[12345]/g))
