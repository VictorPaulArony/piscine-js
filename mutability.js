const person = {
    name: 'person',
    age: 10,
    country: 'US',
  }

const clone1 = {...person }
const clone2 = Object.assign({}, person)
const sameperson = {...person}

clone1.name = 'clone1'
clone2.name = 'clone2'
sameperson.name = 'sameperson'


person.age ++
sameperson.age ++
sameperson.country = 'FR'
 person.country = 'FR'


console.log(person)
console.log(clone1)
console.log(clone2)
console.log(sameperson)