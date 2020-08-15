const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilots.pop() // it removes the last element of the array
console.log(pilots)

pilots.push('Verstappen')  // add element at end of the array
console.log(pilots)

pilots.shift() // it removes the first element of the array
console.log(pilots)

pilots.unshift('Hamilton') // add element at begining of the array
console.log(pilots)

pilots.splice(2, 0, 'Bottas', 'Massa', 'Vettel') // add 3 elements wihout removing any at position 2
console.log(pilots)

pilots.splice(4, 1) // remove element at index 4 without adding any element
console.log(pilots)

const somePilots = pilots.slice(2, 5) // it returns a new array with elements from index 2 to index 4 ( range [start, end) )
console.log(somePilots)

const pilots2 = ['aaaaaaaa', 'bbbbbbb', 'ccccccc']

const newArray = pilots.concat(pilots2, [1, 2, 3, 4], 5, 6, 'kkkk')
console.log()
console.log(newArray)