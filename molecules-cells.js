function RNA(str){
    let res = ''
    const RNA = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'U': 'A',
        'T': 'U'
    }
    for(let i = 0; i < str.length; i++){
        res += RNA[str[i]]
    }
    return res
}

function DNA(str){
    let res = ''
    const DNA = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U',
        'U': 'T'
    }
    for(let i = 0; i < str.length; i++){
        res += DNA[str[i]]
    }
    return res
}

console.log(RNA('TAGC'))
console.log(DNA('AUCG'))