const randomNumber = (min = 0, max = 100, time = 1000) => {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const factor = max - min + 1
            const randNum = parseInt(Math.random() * factor) + min
            resolve(randNum)
        }, time)
    })
}

console.time('promise')

function generateMany() {
    // retorna quando resolver todas as promisses
    return Promise.all([
        randomNumber(),
        randomNumber(11, 20, 5000),
        randomNumber(21, 30)
    ])
}

generateMany().then(console.log).then(() => console.timeEnd('promise'))