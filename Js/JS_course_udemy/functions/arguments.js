//multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 12, 5)

console.log(result)

// default arguments
let getScoreText = function (name = 'Anonymus', score = 0) {
    return `Name: ${name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//challange area
//tip calculator
//total for the bill and percentage for the tip

let getTip = function (total = 0, percentage = 0.10) {
    let tip = total * percentage
    percentage *= 100
    return `A ${percentage}% tip on ${total}$ would be ${tip}$`
}
let tip = getTip(167)
console.log(tip)
