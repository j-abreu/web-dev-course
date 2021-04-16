// instaciating a map
const technologies = new Map()
technologies.set('react', {framework: false})
technologies.set('angular', {framework: true})

console.log(technologies.get('react'))
console.log(technologies.get('react').framework)

// other way of instanciating a map
const sumFuntion = (...numbers) => {
    let sum = 0
    numbers.forEach((e) => sum += e)
    return sum
}

const otherMap = new Map([
    [sumFuntion, 'sumFunction'],
    [{}, 'object'],
    [123, 'number']
])

otherMap.forEach((vl, k) => {
    console.log(k, vl)
})

// checking if a key exists
console.log(otherMap.has(123))
otherMap.delete(123)
console.log(otherMap.has(123))
console.log(otherMap.size)
console.log(otherMap.has(sumFuntion))