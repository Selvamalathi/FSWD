import React, { useState } from "react";

function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;

    setTasks([...tasks, taskInput]);
    setTaskInput("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="dashboard">
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #7ee286ff;
        }

        .dashboard {
          width: 500px;
          margin: 50px auto;
          background: Green;

          padding: 20px;
          border-radius: 9px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          color:Black;
        }

        h2 {
          text-align: center;
          margin-bottom: 15px;
        }

        .input-area {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }

        input {
          flex: 1;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        button {
          padding: 8px 12px;
          border: none;
          background-color: #ff0015ff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px;
          border-bottom: 1px solid #eee;
        }

        .delete-btn {
          background-color: #dc3545;
          padding: 5px 8px;
          font-size: 12px;
        }

        .delete-btn:hover {
          background-color: #b02a37;
        }

        .empty {
          text-align: center;
          color: #777;
          margin-top: 10px;
          color:black;
        }
      `}</style>

      <h2> Easy Task List Dashboard</h2>
      

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">No tasks added yet</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button
                className="delete-btn"
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskDashboard;
