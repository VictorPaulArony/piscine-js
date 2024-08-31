function sameAmount(args, RegExp1, RegExp2){
RegExp1=new RegExp(RegExp1,"g")
RegExp2=new RegExp(RegExp2,"g")

    const matches1 = args.match(RegExp1) || [];
    const matches2 = args.match(RegExp2) || [];
    return matches1.length === matches2.length;
}

// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
// // // return RegExp1.test(args) === RegExp2.test(args)
// console.log(sameAmount('12345', /[54321]/g, /[12345]/g))
// console.log(sameAmount(data, /qqqq /, /qqqqqqq/))
