function invert(obj){
    let rev = {}
    for (let key in obj){
        rev[obj[key]] = key
    }
    
    return rev
}