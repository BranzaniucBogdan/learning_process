const todos = [{
    title: 'wake at 5',
    completed: false
}, {
    title: 'sleep at 9',
    completed: true
}, {
    title: 'make the coffee',
    completed: false
}, {
    title: 'read that book',
    completed: true
}, {
    title: 'learn Js',
    completed: true
}]

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed && !b.completed) {
            return -1
        } else if (!a.completed && b.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value
// const deleteTodo = function (todos, deleteTodo) {
//     const index = todos.findIndex(function (todo) {
//         return todo.title.toLowerCase() === deleteTodo.toLowerCase()
//     })
//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// const getThingsToDo = function (todos) {
//     return todos.filter(function (todo, index) {
//         const isTodoNotDone = !todo.completed;
//         return isTodoNotDone
//     })
// }

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'wake at 5')
// console.log(todos)