function pick(obj, keys){
    if (typeof keys === 'string') {
        keys = [keys];
    }

    const result = {};
    for (const key in obj) {
        if (keys.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

function omit(obj, keys) {
    // Ensure keys is an array
    if (typeof keys === 'string') {
        keys = [keys];
    }

    const result = {};
    for (const key in obj) {
        if (!keys.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}