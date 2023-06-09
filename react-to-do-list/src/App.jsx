import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

//Custom components
import { CustomForm } from "./components/CustomForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
