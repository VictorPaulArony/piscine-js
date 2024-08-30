
const src = { nested: { key: 'peekaboo',city: 'New York',
zip: '10001' } }
const path = 'nested.city'
function get(src, path){
    const pathArr = path.split('.')
    let res = src
    for(let i = 0; i < pathArr.length; i++){
        res = res[pathArr[i]]
    }
    return res ? res : undefined
}
// console.log(get(src, path))