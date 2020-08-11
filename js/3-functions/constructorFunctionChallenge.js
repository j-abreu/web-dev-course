class Person {
    constructor(name) {
        this.name = name

    }

    speak() {
        console.log(`hello, i'm ${this.name}`)
    }
}

const p1 = new Person('Peter')

p1.speak()
console.log(p1.name)