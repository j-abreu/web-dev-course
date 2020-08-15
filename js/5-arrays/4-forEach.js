const approveds = ['Agatha', 'Aldo', 'Daniel', 'Rafaele']

// forEach accepts a callback function
// forEach calls the callback function passing the index,  the element at that index and the whole array for each element in the array

// using element and its index
approveds.forEach(function (name, index) {
    console.log(`${index}: ${name}`)
})
console.log()

// using only the index
approveds.forEach(function (_, index) {
    console.log(index)
})
console.log()

// using only element and whole array
approveds.forEach(function(name, _, array) {
    console.log(`${name} is in ${array}`)
})
console.log()

// in this case, the index is ignored by the arrow function
approveds.forEach( name => console.log(name))
console.log()

// we can pass a function stored in a variable too
const func = function (name) {
    console.log(name)
}
approveds.forEach(func)
console.log()

const func2 = name => console.log(name)
approveds.forEach(func2)