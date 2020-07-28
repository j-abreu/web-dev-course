console.log(7 / 0)
console.log('10' / 2) // parse '10' to number and divide
console.log('show' / 20) // NaN
console.log('cool' * 5) // NaN
console.log(0.1 + 0.7) // 0.799999999...

console.log('3' + 2) // concatenates instead of do a sum because one of them is a string
console.log('3' - 2) // subtracts

//console.log(10.toString()) // error
console.log((10).toString()) // allowed
//console.log(10.345.toFixed(2)) // error
console.log((10.345).toFixed(2))