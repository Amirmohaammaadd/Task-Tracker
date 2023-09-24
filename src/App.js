import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task num 1",
      day: "sunday",
      reminder: true,
    },
    {
      id: 2,
      text: "Task num 2",
      day: "saterday",
      reminder: true,
    },
    {
      id: 3,
      text: "Task num 3",
      day: "friday",
      reminder: false,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    toast.success("Task Added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to see"
      )}
    </div>
  );
}

export default App;
