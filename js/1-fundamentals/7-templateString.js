const name = 'Ranna'
const concatenation = 'Hello, ' + name + '!' // it can be time boring

const template = `Hello, ${name}!`

console.log(concatenation, template)

const template2 = `
    Hello, Hanna.
    How are you?`

console.log(template2)

// expressions
console.log(`1 + 1 = ${1 + 1}`)

// arrow function
const up = text => text.toUpperCase()  // up is now a function
console.log(typeof up)

console.log(`Hello ${up('world')}!`)



