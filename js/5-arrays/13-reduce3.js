Array.prototype.reduce2 = function (callback, initialValue) {
    let accumulator = 0
    if(initialValue !== undefined) {
        accumulator = initialValue
    }
    for (let i = 0; i < this.length; ++i) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator
}

const students = [
    {name: 'John', mean: 7.1, scholarship: true},
    {name: 'Peter', mean: 8.3, scholarship: true},
    {name: 'Marcus', mean: 6.3, scholarship: true},
    {name: 'Sam', mean: 9.4, scholarship: false}
]

const sum = (a, b) => a + b

let result = students.map(e => e.mean).reduce2(sum, 10)
console.log(result)