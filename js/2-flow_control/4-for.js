
// a generic for loop
for (let i = 0; i < 10; ++i) {
    console.log(`i = ${i}`)  
}

//console.log(i) //error. let variables created in the loop doesn't exist after the loop

for (var i = 0; i < 5; ++i) {
    console.log(i)
}

console.log(i) // var variables created in the loop are maintained after the loop


// it can be used to go through an array as below
const grades = [1, 6, 3, 7, 3, 7, 3]

for (let i = 0; i < grades.length; ++i) {
    console.log(`grade ${i+1}: ${grades[i]}`)
}

// for-in is used to get indexes of an array or attributes of an object

// get each index of an array
for (i in grades) {
    console.log(i, grades[i])
}

const person = {
    name: 'Ana',
    Age: 19,
    city: 'Belem'
}

// get each attribute of an object
for (attribute in person) {
    console.log(`${attribute}: ${person[attribute]}`)
}