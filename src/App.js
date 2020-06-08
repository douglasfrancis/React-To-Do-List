import React, {useState} from 'react';
import './App.css';

const ToDo = ({Todo, index}) => {
  return <div className='to-do'>
          {Todo.Text}
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
    <form onSubmit={handleSubmit}>
      <input type='text' value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
};

function App() {
  const [Todos, SetToDo] = useState([
    {Text: 'Task 1'},
    {Text: 'Task 2'},
    {Text: 'Task 3'}]
  );
  
  const AddToDo = Text => {
      const newToDos = [...Todos, {Text}];
      SetToDo(newToDos);
    }
  return (
    <div>
     <div className='list' > {Todos.map((Todo, index) => <ToDo key={index} index={index} Todo={Todo}/>)}
     <AddToDoForm AddToDo={AddToDo}/>
     </div>
    
    </div>
  )

}

export default App