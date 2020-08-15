console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    console.log(this) // just to see what is 'this' inside of a String
    const splitted = this.split('') // it splits the string ans returns an array with the elements of it
    const reversed = splitted.reverse() // it reverses an array
    const joined = reversed.join('') // it returns a string with all elements of an array
    return joined
    // all this operations can be done within one line: return this.split('').reverse().join('')

}

console.log('reverse this string'.reverse())
console.log()

Array.prototype.first = function (){
    return this[0] // this refers to the array
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())
