import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1, 
          text: 'Doctors Appointment 1',
          day: 'Feb 5th at 2:30 PM',
          reminder: true,
      },
      {
          id: 2, 
          text: 'Meeting at School',
          day: 'Feb 5th at 2:30 PM',
          reminder: true,
      },
      {
          id: 3, 
          text: 'Going to the gym',
          day: 'Feb 5th at 2:30 PM',
          reminder: true,
      },
      {
          id: 4, 
          text: 'Listening to music',
          day: 'Feb 5th at 2:30 PM',
          reminder: true,
      }
  ])
  
  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
