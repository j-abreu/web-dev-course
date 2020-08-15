console.log(typeof Array, typeof new Array, typeof [])

// creating array using constructor function
let approveds = new Array('Bia', 'Carlos', 'Ana')
console.log(approveds)

// most common way of creating an array
approveds = ['Bia', 'Carlos', 'Ana']

// accessing elements by index
console.log(approveds[0]) // first element (JS is 0-indexed)
console.log(approveds[1]) // second element

console.log(approveds[3]) // accessing unexisting element

// adding element at an specific index
approveds[3] = 'Paulo'

// adding element at the end of the array
approveds.push('Carolina')

// printing array and its length
console.log(approveds, approveds.length)
console.log()

// adding element after the end of the array
approveds[10] = 'Daniel'
console.log(approveds.length, approveds)
console.log(approveds[8] === undefined) // empty items between the old last and the new onw are undefined
console.log()

// sort function
console.log(approveds)
approveds.sort()
console.log(approveds)

// deleting element by index
delete approveds[1] // replace value at given index by undefined
console.log(approveds)
console.log()

