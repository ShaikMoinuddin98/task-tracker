import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, saveTasks, getUsername } from "../utils/localStorage";
import TaskForm from "./TaskForm";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

export default function TaskDashboard() {
  const nav = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editing, setEditing] = useState(null);

   useEffect(() => {
    const stored = getTasks();
    setTasks(stored);
  }, []);

  const updateAndSave = (newTasks) => {
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    updateAndSave(newTasks);
  };

  const updateTask = (updated) => {
    const newTasks = tasks.map((t) => (t.id === updated.id ? updated : t));
    updateAndSave(newTasks);
    setEditing(null);
  };

  const deleteTask = (id) => {
    if (!window.confirm("Delete this task?")) return;
    updateAndSave(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    updateAndSave(newTasks);
  };

  const filtered =
    filter === "All"
      ? tasks
      : tasks.filter((t) => (filter === "Completed" ? t.completed : !t.completed));


  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{getUsername()}'s Tasks</h2>
        <button
          className="btn btn-outline-danger"
          onClick={() => { localStorage.clear(); nav("/"); }}
        >
          Logout
        </button>
      </div>

      <div className="row">
        <div className="col-md-5 mb-4">
          <TaskForm
            onSubmit={editing ? updateTask : addTask}
            editingTask={editing}
            onCancel={() => setEditing(null)}
          />
        </div>
        <div className="col-md-7">
          <TaskFilter
            filter={filter}
            setFilter={setFilter}
            counts={{
              All: tasks.length,
              Completed: tasks.filter(t => t.completed).length,
              Pending: tasks.filter(t => !t.completed).length,
            }}
          />
          <TaskList
            tasks={filtered}
            onEdit={t => setEditing(t)}
            onDelete={deleteTask}
            onToggle={toggleComplete}
          />
        </div>
      </div>
    </div>
  );
}

