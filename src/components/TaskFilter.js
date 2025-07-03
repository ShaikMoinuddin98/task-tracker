import React from "react";

export default function TaskFilter({ filter, setFilter, counts }) {
  return (
    <ul className="nav nav-pills mb-3">
      {["All", "Completed", "Pending"].map(f => (
        <li className="nav-item" key={f}>
          <button
            className={`nav-link ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f} <span className="badge bg-light text-dark">{counts[f]}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
