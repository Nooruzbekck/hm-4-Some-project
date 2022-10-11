import React, { useState } from 'react'

function AddTodo({todo, setTodo}) {
    const [value, setValue] = useState('')
    const addHandler = () => {
      setTodo([...todo,{
          id: Math.random().toString(),
          text: value,
      }])
         setValue('')
         
    }
  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={addHandler}>add</button>
    </div>
  )
}

export default AddTodo