const reg = /\b\w*tion\b/g;
function ionOut(str){
    let m = str.match(reg)
    let res = []
    if (m){
    for(let i = 0; i< m.length; i++){
      res.push(m[i].slice(0, -3))
    }
}
    return res
}
// console.log(ionOut("The nation, had a solution, but the action was not taken.")); 
// // Output: ['nat', 'solut', 'act']

// console.log(ionOut("Mention the option in the section of the instruction.")); 
// // Output: ['Ment', 'opt', 'sect', 'instruct']