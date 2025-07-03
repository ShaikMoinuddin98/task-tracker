import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUsername } from "../utils/localStorage";

export default function Login() {
  const [username, setUsername] = useState("");
  const nav = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    if (!username.trim()) return;
    saveUsername(username.trim());
    nav("/dashboard");
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "22rem" }}>
        <h3 className="card-title text-center mb-3">Welcome</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
