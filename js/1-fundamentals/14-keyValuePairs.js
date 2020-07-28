const greeting = 'hello' // lexical context 1

function ex() {
    const greeting = 'hi' // lexical context 2
    return greeting
}

//const greeting = 'something' // error 

// objects are groups of nested key/values pairs 
const customer = {
    name: 'peter',
    age: 32,
    weight: 90,
    address: {
        street: 'joao paulo',
        number: 123
    }
}

console.log(greeting)
console.log(ex())
console.log(customer)