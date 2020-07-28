const weight = 1.8
const weight2 = Number('2.0')

console.log(weight, weight2)
console.log(Number.isInteger(weight))
console.log(Number.isInteger(weight2))

const grade1 = 9.876
const grade2 = 8.999

const total = grade1*weight + grade2*weight2
const mean = total/(weight + weight2)

console.log(mean.toFixed(2))
console.log(mean.toString(2))
console.log(typeof mean)
console.log(typeof Number)