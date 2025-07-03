# 📋 Task Tracker

A simple, responsive personal task management app built with React, Bootstrap, and React Router. Add, edit, delete, and filter tasks—all persisted in `localStorage`.

---

## 📖 Features

- **Login** — enter a username (stored in `localStorage`) to access your dashboard  
- **Add / Edit / Delete** tasks with title, description, and timestamp  
- **Toggle Complete** — mark tasks as completed or pending  
- **Filter** — view All, Completed, or Pending tasks, with counts  
- **Data Persistence** — tasks and username survive page refreshes  
- **Responsive UI** — built with Bootstrap 5 for mobile & desktop  
- **Client‑side Routing** — React Router handling protected routes

---

## Deployed URL:
https://shaikmoinuddin98.github.io/task-tracker/

## 🛠️ Tech Stack

- [React](https://reactjs.org/)  
- [React Router v6](https://reactrouter.com/)  
- [Bootstrap 5](https://getbootstrap.com/)  

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your‑username>/task-tracker.git
cd task-tracker
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm start
```

* Opens a development server at `http://localhost:3000`
* Login with any username, then manage your tasks

---

## 📂 Project Structure

```
task-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── TaskDashboard.js
│   │   ├── TaskForm.js
│   │   ├── TaskFilter.js
│   │   ├── TaskList.js
│   │   └── TaskItem.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

---




## 📜 License

This project is open source under the MIT License.

```
```
