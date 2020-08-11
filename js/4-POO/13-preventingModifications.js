// Object.preventExtensions()

const product = Object.preventExtensions({
    name: 'sponge', price: 3.99, tag: 987
})
console.log(product)
delete product.tag // after using Object.preventExtensions, the object can have attributes removed, but not added
console.log(product)
product.tag = 39
console.log(product)

console.log()
// Objecto.seal()
// sealed object can't be extended or decreased
const person = {firstName: 'Ana', lastName: 'ablueblue', age:989}
Object.seal(person)
console.log(person)
delete person.name
person.fatherName = 'Robert'
console.log(person)

//the attributes can be modified though
person.firstName = 'Sam'
console.log(person)

// Object.freeze() =  Object.seal() + const attributes
