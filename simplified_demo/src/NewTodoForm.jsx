import { useState } from "react"

export default function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    // todos live in App(), not here. If the handleSubmit function is here, we cannot handle todo
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return 
        onSubmit(newItem)
        // addTodo(newItem)
        // setTodos((currTodos) => {
        //     return [
        //         ...currTodos,
        //         { id: crypto.randomUUID(), title: newItem, completed: false },
        //     ]
        // }
        // )
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor='item'>New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
            </div>
            <button className='btn'>Add item</button>
        </form>
    )
}