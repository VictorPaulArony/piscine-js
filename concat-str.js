
const args1 = 2
var args2 = 1 
function concatStr(args1, args2){
    if (typeof(args1) ==='number'){
        args1 = args1.toString()
    }
    if (typeof(args2) === 'number'){
    args2 = args2.toString()
    }
    return args1 + args2
}
console.log(concatStr(args1, args2))