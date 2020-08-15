class Grandfather {
    constructor (lastName) {
        this.lastName = lastName
    }
}

class Father extends Grandfather {
    constructor (lastName, profession = 'teacher') {
        super(lastName) // it calls constructor of superclass 
        this.profession = profession
    }
}

class Son extends Father {
    constructor () {
        super('Silva')
    }
}

const son = new Son
console.log(son)

const father = new Father('Almeida', 'Engineer')
console.log(father)