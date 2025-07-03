import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onEdit, onDelete, onToggle }) {
  if (!tasks.length) {
    return <div className="text-center text-muted">No tasks to show.</div>;
  }
  return (
    <div className="list-group">
      {tasks.map(t => (
        <TaskItem
          key={t.id}
          task={t}
          onEdit={() => onEdit(t)}
          onDelete={() => onDelete(t.id)}
          onToggle={() => onToggle(t.id)}
        />
      ))}
    </div>
  );
}
