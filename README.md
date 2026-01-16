## 🛠 Redux & Redux Toolkit — Complete Notes + ToDo App

#### 📌 Introduction

Redux is a **state management library** for **JavaScript applications**, often used with React for handling complex or large-scale state flows.

Redux Toolkit is the **official recommended approach** for writing Redux logic because it reduces boilerplate and improves development experience.

#### 📍 Why Redux?

- Centralized state
- Predictable state updates
- Scalable for large applications
- Clear data flow architecture

### 🧠 Core Concepts
#### 🗃 Store

A centralized container that holds the entire state tree of the application.

#### 🔁 Reducers

Reducers are pure functions that:

- Take current state + action
- Return new state without mutating

Formula:
```jsx
(state, action) → newState
```
Direct mutation is not allowed (needs functions to mutate).

#### 🎟 Actions

Actions are plain JS objects containing a `type` (required) and optionally a `payload`.

Example:
```jsx
{
  type: "ADD_TODO",
  payload: "write code"
}
```
Similar to UI events.

#### 🧩 Slice (Redux Toolkit)

A slice combines:
- reducer logic
- actions
- feature state

Example features:
```python
navbar → slice
footer → slice
```

### 🧰 Redux Toolkit URL

Official quick start docs:
https://redux-toolkit.js.org/tutorials/quick-start

#### ⚙️ Setup Project
**Step-1:** Create project using Vite
```jsx
npm create vite@latest
```
Name example:
```jsx
redux-class
```
**Step-2:** Move into project
```jsx
cd redux-class
npm install
```
**Step-3:** Install Redux Toolkit & React bindings
```jsx
npm install @reduxjs/toolkit react-redux
```

### 🗂 Designing ToDo App State (From Notes)

#### State Structure
```bash
todo → id, task, isDone
```
```bash
todos: [
  {id, task, isDone},
  {id, task, isDone}
]
```
#### 🎬 Actions (ToDo App)

**Required actions:**

- Add a ToDo
- Mark as Done
- Delete a ToDo

Example Action:
```js
{
  type: "ADD_TODO",
  payload: "write code"
}
```