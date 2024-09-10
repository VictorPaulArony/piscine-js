function invert(obj){
    let rev = {}
   Object.keys(obj).forEach(key => {
    rev[obj[key]] = key
   })
    
    return rev
}