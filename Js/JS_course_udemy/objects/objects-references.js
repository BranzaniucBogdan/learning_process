let myAccount = {
    name: 'Bogdan',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount = {}

let addExpense = function (account, amount) {

    account.expenses += amount
    otherAccount = {}
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
let getAccountSumarry = function (account) {
    let balance = account.income - account.expenses
    console.log(`the account for ${account.name} has $${balance}. $${account.income} in income and $${account.expenses} in expenses`)
}
addExpense(myAccount, 10)
addIncome(myAccount, 1000)
getAccountSumarry(myAccount)
// addIncome

// reset Account

// get Account summary
// Account for Bogdan has $900, $1000 in income and $100 in expenses.

