// const-declared objects can have its attributes modified, but the variable person, per-se, can't
const person = {
    name: 'Gregor',
    age: 33
}
console.log(person)

// examples

person.name = 'Victor' // modify attribute
console.log(person)

try {
    person = {name: 'Helio', age: 44} // try to assign a new object to person
} catch {
    console.log('person is a constant, thus it can\'t recieve new value')
}

// freezing objects: Object.freeze make objects immutable
// examples
Object.freeze(person)
console.log(person)
person.name = 'A new name' // attempts to modify the attributes are ignored
console.log(person)

// creating a immutable object

const otherPerson = Object.freeze({name: 'Ana', age: 53})
console.log(otherPerson)
otherPerson.name = 'new name'
console.log(otherPerson) // it stays the same