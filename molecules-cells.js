function RNA(str){
    let res = ''
    const RNA = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'U': 'A'
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
        'A': 'U'
    }
    for(let i = 0; i < str.length; i++){
        res += DNA[str[i]]
    }
    return res
}

// console.log(RNA('ACGACU'))
// console.log(DNA('ACGTGGTCTTAA'))