import React from "react";

export default function TaskItem({ task, onEdit, onDelete, onToggle }) {
  return (
    <div
      className={`list-group-item list-group-item-action d-flex justify-content-between align-items-start ${
        task.completed ? "list-group-item-success" : ""
      }`}
    >
      <div className="ms-2 me-auto">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={task.completed}
            onChange={onToggle}
            id={`chk-${task.id}`}
          />
          <label
            className="form-check-label"
            htmlFor={`chk-${task.id}`}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.title}
          </label>
        </div>
        {task.description && <small className="d-block">{task.description}</small>}
        <small className="text-muted">
          Created: {new Date(task.createdAt).toLocaleString()}
        </small>
      </div>
      <div className="btn-group btn-group-sm">
        <button className="btn btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-outline-danger" onClick={onDelete}>
          Del
        </button>
      </div>
    </div>
  );
}
