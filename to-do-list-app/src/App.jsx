import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1 className="title">To Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="input"
      />
      <button onClick={addTask} className="button">
        Add Task
      </button>
      <ul className="list">
        {tasks.map((task, index) => (
          <li key={index} className="listItem">
            {task}
            <button onClick={() => deleteTask(index)} className="deleteButton">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
