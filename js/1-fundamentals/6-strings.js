const school = 'Mario Brasil'

console.log(school)
console.log(school.charAt(4)) //get char at a given index
console.log(school.charAt(20)) // empty

console.log(school.charCodeAt(1)) // ascii value of a char
console.log(school.indexOf('a')) // get index of the first occurrence of that char

console.log(school.substring(0,5)) // get substring of a given range (a,b) not included

console.log('school '.concat(school.concat('!')))
console.log('school ' + school + '!') // operator + concatenates strings

console.log(school.replace('a', '4'))

console.log('Ann,Lucy,Peter'.split(',')) // split string by the delimiter and return an array

