import {TodoItem} from "./TodoItem"

//displays new todo item
export function TodoList ({ todos, toggleTodo, deleteTodo}) {
    return (
    <ul className="list">
        {todos.length === 0 && "No Items on Todo List"}
        {todos.map(todo => {
          return (
            <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}
            toggleTodo={toggleTodo} deleteTodo={deleteTodo}></TodoItem>         
          )
        })}
      </ul>
    )
}