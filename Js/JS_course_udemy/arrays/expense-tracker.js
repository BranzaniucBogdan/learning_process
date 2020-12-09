const account = {
    name: 'Bogdan',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpense = 0
        let totalIncome = 0
        let balance = 0
        this.expenses.forEach(function (expense, index) {
            totalExpense += expense.amount
        })
        this.income.forEach(function (income, index) {
            totalIncome += income.amount
        })
        balance = totalIncome - totalExpense
        return `${this.name} has $${balance}. $${totalIncome} in income and $${totalExpense} in expenses.`
    }
}

const addExpense = function (description, amount) {
    expenses = { description: description, amount: amount }
}

// 1. add income array to the account
// 2. add income method -> description, amount
// 3. tweak getAccountSummary

account.addExpense('rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('salary', 1592)
console.log(account.getAccountSummary())