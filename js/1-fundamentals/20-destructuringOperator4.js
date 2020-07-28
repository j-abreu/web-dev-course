function rand([min = 0, max=1000] = [0, 1000]) {
    if (min > max) [min, max] = [max, min] // swap
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(rand([50, 60]))
console.log(rand([2000]))
console.log(rand([, 20]))
console.log(rand([]))
console.log(rand())

