const classes = [
    {name: 'T1', students: [
        {name: 'Robert', grade: 8},
        {name: 'Charles', grade: 9}
    ]},
    {name: 'T2', students: [
        {name: 'Cesar', grade: 4.5},
        {name: 'August', grade: 4.7},
        {name: 'Raphaela', grade: 8.3}
    ]},
    {name: 'T3', students: [
        {name: 'Fury', grade: 9.4}
    ]}
]

const getGrade = student => student.grade
const allGrades = c => c.students.map(getGrade)

let results = classes.map(allGrades) // returns an array of arrays
console.log(results)

// implementation of flatMap that returns only an array with all values
Array.prototype.flatMap = function (callback) {
    const result = this.map(callback).reduce(function(accumulator, cur) {
        return accumulator.concat(cur)
    })
    // or
    // const result = Array.prototype.concat.apply([], this.map(callback))
    return result
}

results = classes.flatMap(allGrades)
console.log(results)