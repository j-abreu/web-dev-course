const arr = [1, 2, 4, 5, 6, 7, 8, 9]

for (x in arr) {
    if (x == 5) {
        break     // it breaks the loop
    }
    console.log(`${x} = ${arr[x]}`)
}

console.log()

for (x in arr) { 
    if (x == 5) {
        continue  // it makes loop jump to the next iteration
    }
    console.log(`${x} = ${arr[x]}`)
}