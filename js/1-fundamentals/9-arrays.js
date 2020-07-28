const values = [6.7, 3, 5.0, 9.9]
console.log(values[0], values[2])
console.log(values[4]) // out of range

values[4] = 10
console.log(values[4])

values[6] = 11
console.log(values) // values[5] stays empty
console.log(values.length) // arrays' length counting on the empty values

values.push({id: 3}, false, null, 'test')  // heterotypic array
console.log(values)

console.log(values.pop()) // removes and return the last element
delete values[0] // deletes element
console.log(values)

console.log(typeof values)
