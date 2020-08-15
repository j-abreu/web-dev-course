// creating a object using literal notation
const person = {
    name: 'Julia',
    age: 19,
    weight: 55
}

console.log(Object.keys(person)) // returns array of the object's keys
console.log(Object.values(person)) // returns array of the object's values
console.log(Object.entries(person)) // returns an array of arrays with 2 elements: the key and the value of each attribute

Object.entries(person).forEach(e => { // for each element of the array
    console.log(`${e[0]}: ${e[1]}`) // print key and value
})

// same as above but using destructuring operator
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

const entries = Object.entries(person)


// adding a new attribute to the object with properties well defined
Object.defineProperty(person, 'cpf', {
    enumerable: true, // whether this attribute can be listed 
    writable: false, // whether the attribute can be modified
    value: '03115452688'
})

console.log(person)
person.cpf = '22' 
console.log(person) // attribute cpf stays the same because it isn't writable

// concatenating objects
const dest = {a: 1}
const other = {b: 2}
const other2 = {a: 5, c: 3}

const new_obj = Object.assign(dest, other, other2) // new_obj will be the concatenation of the other 3
console.log(new_obj)

// freezing objects, i.e., no attribute will be writable
Object.freeze(new_obj)
new_obj.a = 44
console.log(new_obj)