import React from 'react'

function List({todo, setTodo}) {
    const deleteHandler = (id) => {
        setTodo([...todo].filter((item) => item.id !== id))
    } 
  return (
    <div>{todo.map((item) => <li key={item.id}>{item.text} <button onClick={() => deleteHandler(item.id)}>delete</button></li>
    )}
    </div>
  )
}

export default List