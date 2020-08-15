const students = [
    {name: 'John', mean: 7.1, scholarship: true},
    {name: 'Peter', mean: 8.3, scholarship: true},
    {name: 'Marcus', mean: 6.3, scholarship: true},
    {name: 'Sam', mean: 9.4, scholarship: false}
]

// challenge 1: implement a function that returns true if all the students have scholarship or false otherwise

const all = (accumulator, current) => accumulator && current

let result = students.map(e => e.scholarship).reduce(all)
console.log(result)

// challenge 2: implemenet a function that returns true if any element of the array is true or false otherwise
const any = (accumulator, current) => accumulator || current

result = students.map(e => e.scholarship).reduce(any)
console.log(result)