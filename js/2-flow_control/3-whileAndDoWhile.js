function getIntegerBetween(min, max) {
    return Math.floor(Math.random() * (max - min ) + min)
}

let option = 0
let i = 0

while(option != -1) {
    i++
    option = getIntegerBetween(-1, 3000)
    console.log(option)
}
console.log(`number of trials: ${i}`)

option = -1

do {
    option = getIntegerBetween(-1, 20)
    console.log(option)
} while (option != 1)