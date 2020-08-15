const nums = [1, 2, 4, 5, 6]

// using map
// map applies a function to each element and returns an array with same length of the original

let result = nums.map(function (e) {
    return e * 2
})

console.log(result, nums)

const sum10 = e => e + 10
const triple = e => e * 3
const toReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

result = nums.map(toReal)
console.log(result)

// nesting maps
result = nums.map(sum10).map(triple).map(toReal)
console.log(result)