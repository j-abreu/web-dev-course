

// function implementation of forEach
function forEach2 (array, func) {
    for (let i = 0; i < array.length; ++i) {
        func(array[i], i, array)
    }
}

// method implementation of forEach in Array
Array.prototype.forEach3 = function (func) {
    for (let i = 0; i < this.length; ++i) {
        func(this[i], i, this)
    }
}

const approveds = ['Agatha', 'Daniel', 'Raphael', 'Laurent']
forEach2(approveds, function(name, index) {
    console.log(index, name)
})

console.log()
approveds.forEach3(function (name, index) {
    console.log(index, name)
})