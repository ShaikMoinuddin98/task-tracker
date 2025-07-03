import React, { useState, useEffect } from "react";

export default function TaskForm({ onSubmit, editingTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDesc(editingTask.description);
    } else {
      setTitle("");
      setDesc("");
    }
  }, [editingTask]);

  const handle = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({
      id: editingTask?.id ?? Date.now(),
      title: title.trim(),
      description: desc.trim(),
      completed: editingTask?.completed ?? false,
      createdAt: editingTask?.createdAt ?? new Date().toISOString(),
    });
    setTitle("");
    setDesc("");
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{editingTask ? "Edit Task" : "Add Task"}</h5>
        <form onSubmit={handle}>
          <div className="mb-3">
            <input
              className="form-control"
              placeholder="Title*"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Description"
              rows="3"
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </div>
          <button className="btn btn-primary me-2">
            {editingTask ? "Update" : "Add"} Task
          </button>
          {editingTask && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
