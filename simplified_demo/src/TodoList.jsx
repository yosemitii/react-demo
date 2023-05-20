import { TodoItem } from "./TodoItem"

export default function TodoList({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className='to-do-list'>
          {todos.length === 0 && "No Todos"}
          {todos.map(todo => {
              return (
                  <TodoItem
                      id={todo.id}
                      completed={todo.completed}
                      title={todo.title}
                      key={todo.id}
                      toggleTodo={toggleTodo}
                      deleteTodo={deleteTodo}
                  />
            // <li key={todo.id}>
            //   <label>
            //             <input type="checkbox" checked={todo.completed}
            //                 // onChange={e => toggleTodo(todo.id, e.target.checked)}
            //             ></input>
            //       {todo.title}
            //             <button className='btn btn-danger'
            //                 // onClick={() => deleteTodo(todo.id)}
            //             >Delete</button>
            //   </label>
            //     </li>
            )
            }
          )
          }
        </ul>
    )
}