const products = [
    {name: 'laptop', price: 2899, fragile: true},
    {name: 'ipad pro', price: 4999, fragile: true},
    {name: 'glass cup', price: 5.89, fragile: true},
    {name: 'plastic cup', price: 2.99, fragile: false}
]

// for each element in the array, filter calls the callback function and add that element to the new array if the function returns true
const results = products.filter(function (e) {
    return e.price > 2000
})

console.log(results)

const fragiles = products.filter(function (e) {
    return e.fragile
})
console.log(fragiles)