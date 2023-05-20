export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
    return (
        <li
            // key={id}
        >
              <label>
                        <input type="checkbox" checked={completed}
                            onChange={e => toggleTodo(id, e.target.checked)}
                        ></input>
                        {title}
                        <button className='btn btn-danger'
                            onClick={() => deleteTodo(id)}
                        >Delete</button>
              </label>
        </li>
    )
}