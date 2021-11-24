
import { useState } from 'react'
import Header from './components/Header'
import Tasks from  './components/Tasks'

const App = () => {
 const [tasks, setTasks] = useState([
     {
        id: 1,
        text: 'doktor toni',
        day: 'trinasiti dekewri v 12 chasa',
        reminder: true,
    },
    {
        id: 2,
        text: 'toni e op toni',
        day: '12 19 10000',
        reminder: true,
    },
    {
        id: 3,
        text: 'antoni sariew',
        day: '10000 kila tonito e op',
        reminder: false,
    }
])
//Delete Task
const deleteTask =(id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  console.log('delete', id)
}
// toggle reminder

const toggleReminder = (id) => {
 setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))

}

  return (
    <div className='container'> 
    <Header />
    {tasks.length > 0 ? (
    <Tasks tasks={tasks} onDelete={deleteTask} 
    onToggle={toggleReminder}/>
    ) : (
      'nqma nishto za pokazwane'
    )}
    </div>
  )
}

export default App
