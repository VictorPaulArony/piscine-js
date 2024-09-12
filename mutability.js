// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   }

const clone1 = JSON.parse(JSON.stringify(person))
const clone2 = JSON.parse(JSON.stringify(person))
const samePerson = person


person.age ++
 person.country = 'FR'



// console.log(person)
// console.log(clone1)
// console.log(samePerson)
