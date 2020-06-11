import React, {useState} from 'react';
import './App.css';

const ToDo = ({Todo, index, removeTodo}) => {
  
  return <div>
    <div className='to-do'>
          {Todo.Text}
          <button onClick={() => removeTodo(index)}>x</button>
        </div>
        
        </div>
  }

function AddToDoForm({AddToDo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    AddToDo(value);
    setValue('');

  };
  
  
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input type='text' value={value} onChange={e => setValue(e.target.value)} placeholder='Add text'/>
    </form>
  )
};

function App() {
  const [Todos, SetToDo] = useState([
    {Text: 'Task 1'},
    {Text: 'Task 2'},
    {Text: 'Task 3'}]
  );

  const removeTodo = index => {
    const newTodos = [...Todos];
    newTodos.splice(index, 1);
    SetToDo(newTodos);
  };
  

  const AddToDo = Text => {
      const newToDos = [...Todos, {Text}];
      SetToDo(newToDos);
    }
  return (
    <div>
     <div className='list' > {Todos.map((Todo, index) => <ToDo key={index} index={index} Todo={Todo} removeTodo={removeTodo}/>)}
     
     </div>
     <AddToDoForm  AddToDo={AddToDo}/>
    </div>
  )

}

export default App