const sequence = {
    _value: 1,
    get value() {return this._value++},
    set value(val) {
        if (val > this._value) {
            this._value = val
        }
    }
}

console.log(sequence.value, sequence.value)

sequence.value = 120
console.log(sequence.value)
sequence.value = 100 // value don't recieve 100 as new value because it is smaller than the actual value [line 5]
console.log(sequence.value)