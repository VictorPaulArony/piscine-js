const person = {
    name:"person",
    age: 12,
    country: 'US',
}

const clone1 = {...person }

const clone2 = Object.assign({}, person)
const sameperson = person

person.age++
 person.country = 'FR'

console.log(person)
console.log(clone1)
console.log(clone2)
console.log(sameperson)