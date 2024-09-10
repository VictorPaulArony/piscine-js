function pick(obj, arr){
    const match = _.pickBy(obj, (value, key) => 
    _.some(arr, str => _.includes(key, str)))
    return match
}