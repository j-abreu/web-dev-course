let isAtivo = false // declaring a boolean variable
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // converting to a boolean

console.log('trues:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // verifies value of isAtivo

console.log('\nfalses:')
console.log(!!0)
console.log(!!'') // empty string
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = null))

console.log('and to finish')
console.log(!!(0 || '' || ' '))
console.log(0 || '' || 'first true value' || 'second true value') // returns first true value

// example of use
let name = null
console.log(name || 'Unknown')



