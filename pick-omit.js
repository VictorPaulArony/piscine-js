function pick(obj, arr){
    const match = _.pickBy(obj, (value, key) => 
    _.some(arr, str => _.includes(key, str)))
    return match
}

function omit(obj, keys) {
    // Ensure keys is an array
    if (typeof keys === 'string') {
        keys = [keys];
    }

    const result = {};
    for (const key in obj) {
        if (!keys.includes(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}