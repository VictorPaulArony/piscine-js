function fusion(arr1, arr2){
    let res = []
    for (const key in arr1){
        if (arr2.hasOwnProperty(key)){

    if (Array.isArray(arr1[key]) && (Array.isArray(arr2[key]))){
        res[key] = arr1[key].concat(arr2[key])
    }else if (typeof arr1[key] === 'string' && typeof arr2[key] === 'string'){
        res[key] = arr1[key] + " " + arr2[key]
    }else if(typeof arr1[key] ==='number' && typeof arr2[key] === 'number'){
        res[key] = arr1[key] + arr2[key]
    }else if(typeof arr1[key] === 'object' && typeof arr2[key] === 'object' 
    && arr1 !== null && arr2 !== null && 
    !Array.isArray(arr1) && !Array.isArray(arr2)){
        res[key] = fusion(arr1[key], arr2[key])
    }else {
        res[key] = arr2 !== undefined ? arr2 : arr1   }
}
}
    return res
}