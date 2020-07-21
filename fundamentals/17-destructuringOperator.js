// since ES2015

const person = {
    name: 'Ana',
    age: 19,
    address: {
        street: 'street 2',
        number: 34
    }
}

// destructing (extracting attributes from object)

const {name, age} = person
console.log(name, age)

// destructing with names different from original ones
const {name: n, age: a} = person
console.log(n, a)

// trying with a unexisting attributes
const {nickname: nm, fatherName = 'rafael'} = person
console.log(nm, fatherName) // undefined is returned to unexisting elements or, like fatherName, they receive a default value

const {address: {street, number, postalCode}} = person
console.log(street, number, postalCode)

