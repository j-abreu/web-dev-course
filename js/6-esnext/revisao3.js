const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

const name = 'Peter'
const person = {
    name,
    hello() {
        return 'hello'
    },
    bye() {
        return 'by!'
    }
}

console.log(person.name, person.hello(), person.bye())