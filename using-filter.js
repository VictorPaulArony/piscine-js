function filterShortStateName(str){
    return str.filter((str) => str.length < 7)
}

function filterStartVowel(str){
    const vol = /^[aeiou]/i
   return str.filter((el) => vol.test(el))
}

function filter5Vowels(str){
   let  vol = /[aeiou]/g
    return str.filter((el) => (el.match(vol)).length > 5)
}

function filter1DistinctVowel(str){
    const vol = /[aeiou]/g
    return str.filter((el) => new Set(el.toLowerCase().match(vol)).size == 1)
}

function multiFilter(arr) {
    const vowels = /^[aeiou]/i;
    const hasVowel = /[aeiou]/i;
  
    return arr.filter(el => {
      return (
        el.capital.length >= 8 &&
        !vowels.test(el.name) &&
        hasVowel.test(el.tag) &&
        el.region !== "South"
      );
    });
  }
  





// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const arr = [
//     { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
//     { tag: 'HI', name: 'Hawaii', capital: 'Honolulu', region: 'West' },
//     {
//       tag: 'MO',
//       name: 'Missouri',
//       capital: 'Jefferson City',
//       region: 'Midwest',
//     },
//     {
//       tag: 'PA',
//       name: 'Pennsylvania',
//       capital: 'Harrisburg',
//       region: 'Northeast',
//     },
//     {
//       tag: 'RI',
//       name: 'Rhode Island',
//       capital: 'Providence',
//       region: 'Northeast',
//     },
//   ]
//  console.log(filterShortStateName(words))
//  console.log(filterStartVowel(words))
//  console.log(filter5Vowels(words))
// console.log(filter1DistinctVowel(words))
// console.log(multiFilter(arr))