import './App.css';
import Input from './components/input.jsx'
import Nav from './components/nav.jsx';
import TaskList from './components/taskList.jsx';
import { useState } from 'react';

function App() {
  const [tasks,setTasks] = useState([])
  const [id,setId] = useState(0)
  const [selected,setSelected] = useState([])

  function addTask(des) { 
    setTasks([...tasks,{'id':id,'desc':des}])
    setId(id+1)
  }
  function handleDelete(e) {
    alert(e)
  }
  function handleImportant(e){

  }
  function select(ind,e) {
    if (e.target.checked) { 
      alert(ind+' checked')
      setSelected([...selected,ind])
    }else {
      alert(ind+'notchecked')
      setSelected(selected.filter((value,i)=>{ return i !==ind}))
    }
  }

  return (
    <main className='main'>
      <Nav />
      <Input    add={addTask} />
      <TaskList tasks={tasks} select={select} />
      <footer ></footer>
    </main>
  );
}

export default App;
