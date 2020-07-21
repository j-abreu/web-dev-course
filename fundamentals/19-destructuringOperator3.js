function rand({min = 0, max = 1000} = {min: 50, max: 70}) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

const obj = {
    max: 50,
    min: 30
}
console.log(rand(obj))