// prototype chain
const grandfather = {
    attr1: 'attr1 in the grandfather'
}

const father = {
    __proto__: grandfather,
    attr2: 'attr2 in the father',
    attr3: 'attr3 in the father'
}

const son = {
    __proto__: father,
    attr4: 'attr4 in the son',
    attr3: 'attr3 in the son'
}

console.log(son.attr4+ '\n'+ son.attr3 + '\n' + son.attr2 + '\n' + son.attr1)

const car = {
    maxSpeed: 200,
    curSpeed: 0,

    acelerate(delta) {
        if (this.curSpeed + delta <= this.maxSpeed) {
            this.curSpeed = this.curSpeed + delta
        } else {
            this.curSpeed = this.maxSpeed
        }
    },

    status() {
        return (`${this.curSpeed} of ${this.maxSpeed}`)
    }
}

const gol = {
    maxSpeed: 300, //shadowing
    curSpeed: 30
}

const corsa = {
    model: 'corsa',
    year: 1978,
    status() {
        return (`${this.model}: ${super.status()}`)
    }
}

// seting the prototype of an object
Object.setPrototypeOf(gol, car)
Object.setPrototypeOf(corsa, car)

console.log(corsa.status())
corsa.acelerate(40)
console.log(corsa.status())

gol.acelerate(78)
console.log(gol)

