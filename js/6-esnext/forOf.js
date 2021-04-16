// using for of

const arr = ['John', 'Peter', 'Ana']

// get the elements of the array
for (let name of arr) {
    console.log(name)
}

// iterate over the indexes
for (let i in arr) {
    console.log(i, arr[i])
}

// using for of on Maps
const myMap = new Map([
    ['julie', 23],
    ['arnaldo', 33],
    ['jacob', 12]
])

for (e of myMap) {
    console.log(e)
}

// iterating over values
for (vl of myMap.values()) {
    console.log(vl)
}

// iterating over keys
for (k of myMap.keys()) {
    console.log(k)
}

// using for of on sets
const mySet = new Set([1, 2, 3, 4, 4]) 

for (vl of mySet) {
    console.log(vl)
}

// using for of on strings
const myString = 'Olá, tudo bem?'
for (c of myString) {
    console.log(c)
}

for (i in myString) {
    console.log(i, myString[i])
}