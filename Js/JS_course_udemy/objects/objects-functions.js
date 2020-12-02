let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
let otherBook = {
    title: 'A Peoples Hisory',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {

    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages lomg`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(myBook)

//console.log(bookSummary.pageCountSummary)


//challenge area 

//create function - take fahrenheit in - creturn object woth all three


let temps = function (temp) {
    return {
        fahrenheit: temp + 'F',
        kelvin: (temp + 459.67) * (5 / 9) + 'k',
        celsius: (temp - 32) * (5 / 9) + 'C'
    }
}
let convertTemps = temps(74)
console.log(convertTemps)