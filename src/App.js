import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import TaskDashboard from "./components/TaskDashboard";
import { getUsername } from "./utils/localStorage";

function ProtectedRoute({ children }) {
  return getUsername() ? children : <Navigate to="/" />;
}

function App() {
  return (
    <Router basename="/task-tracker">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <TaskDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
