const printResult = function (grade) {
    switch(Math.floor(grade)) {
        case 10:
        case 9:  // case grade is 10 or 9
            console.log('Excelent!')
            break // must break, otherwise all the cases below will be executed
        case 8: case 7:  // case grade is 8 or 7
            console.log('Good')
            break
        case 6: case 5:
            console.log('Regular')
            break
        case 4: case 3: case 2: case 1:
            console.log('Disapproved')
            break
        default: // none of the other cases
            console.log('Not a valid grade')
            break

    }      
}

printResult(11)