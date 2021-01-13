import React, {useState} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoResults from './components/TodoResults';


function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>Your List</h1>
      {list.map((input, i) =>(
        <TodoResults input={input} list={list} setList={setList} index={i}/>
      ))}
      <TodoForm list={list} setList={setList}/>
    </div>
  );
}

export default App;
