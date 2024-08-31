function sameAmount(args, RegExp1, RegExp2){
    const matches1 = args.match(RegExp1) || [];
    const matches2 = args.match(RegExp2) || [];
    return matches1.length === matches2.length;
}
// // return RegExp1.test(args) === RegExp2.test(args)
// console.log(sameAmount('12345', /[54321]/g, /[12345]/g))
// console.log(sameAmount('data', /qqqq /, /qqqqqqq/))
