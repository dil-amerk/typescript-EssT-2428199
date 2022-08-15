type TodoID = number;
type TodoTitle = string;
type TodoStatus = Status;
type TodoCompletedOn = Date;


enum Status {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo"
}

interface ITodoItems {
    id: TodoID
    title: TodoTitle
    status: TodoStatus
    completedOn?: TodoCompletedOn
}


const TodoItems: ITodoItems[] = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.InProgress },
    { id: 3, title: "Write the best app in the world", status: Status.Todo },
]




function addTodoItem(todo: TodoTitle): ITodoItems {
    const id = getNextId(TodoItems)

    const newTodo = {
        id,
        title: todo,
        status: Status.Todo,
    }

    TodoItems.push(newTodo)

    return newTodo
}
function getNextId<T extends { id: TodoID }>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))