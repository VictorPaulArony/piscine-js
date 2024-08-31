function sameAmount(args, RegExp1, RegExp2){
    const match1 = args.match(RegExp1) || []
    const match2 = args.match(RegExp2) || []
   
    if(match1.length === match2.length){
        return true
    } else {
        return false
    }
}
// return RegExp1.test(args) === RegExp2.test(args)
// console.log(sameAmount('12345', /[54321]/g, /[12345]/g))

