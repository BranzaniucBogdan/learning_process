let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge area

// name, age, location

let user = {
    name: 'Bogdan',
    age: 20,
    height: 173,
    country: 'Romania'
}

console.log(`${user.name} is ${user.age} years old and ${user.height} centimeters tall.
${user.name} lives in ${user.country}.`)

user.age++

console.log(`${user.name} is ${user.age} years old and ${user.height} centimeters tall.
${user.name} lives in ${user.country}.`)