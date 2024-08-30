
// const src = { nested: { key: 'peekaboo',city: 'New York',
// zip: '10001' } }
// const path = 'nested.city'
function get(src, path){
    const pathArr = path.split('.')
    let res = src
    for(let i = 0; i < pathArr.length; i++){
        if (res[pathArr[i]] === undefined){
            return undefined
        }
        res = res[pathArr[i]]
    }
    return res 
}
/*
Split the path string into parts to navigate through the object.
Iterate over these parts, drilling down into the object step by step.
Return the value if the path exists, or undefined if it doesn't.
*/
// console.log(get(src, path))