function longWords(arr){
  return arr.every(word => typeof word === 'string' && word.length >= 5)

}

function oneLongWord(arr){
    return arr.some(word => typeof word === 'string' && word.length >= 10)
}

function noLongWords(arr){
    return arr.every(word => typeof word !== 'string' || word.length < 7)
}

// const arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//  arr [111, 22222222, 3333, 444444, 555555];
// console.log(longWords(arr))
// console.log(oneLongWord(arr))
// console.log(noLongWords(arr))