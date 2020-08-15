const students = [
    {name: 'John', mean: 7.1, scholarship: true},
    {name: 'Peter', mean: 8.3, scholarship: true},
    {name: 'Marcus', mean: 6.3, scholarship: false},
    {name: 'Sam', mean: 9.4, scholarship: false}
]

let result = students.map(a => a.mean).reduce(function (accumulator, current) {
    return accumulator + current
})

console.log(result)

// we can pass the initial value of the accumulator

const sum = (accumulator, current) => accumulator + current

result = students.map(e => e.mean).reduce(sum, 10) // 10 is the initial value of the accumulator
console.log(result)