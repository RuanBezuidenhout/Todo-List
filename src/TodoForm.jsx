import { useState } from "react"

export function TodoForm({onSubmit}) {
    // Array for input items
    const[newItem, setNewItem] = useState("")
    
    //function to add new tiem to array
    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return
    
        onSubmit(newItem)

        //Clear textbox and reset new item
        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
        </form>
    )
}