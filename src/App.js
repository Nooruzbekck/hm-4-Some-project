import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';

function App() {
  const [todo, setTodo] = useState([])
  return (
    <div className="App">
     <AddTodo todo={todo} setTodo={setTodo}/>
     <List todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
