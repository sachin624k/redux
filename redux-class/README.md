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

#### 🛠 Creating a Reducer

Redux Toolkit automatically generates:
- action creators
- action types

Reducer format:
```js
(state, action) => {
   // update state
}
```
#### 🧰 Mutation in Redux Toolkit

Toolkit supports **mutating syntax** while staying immutable internally:
```js
state.todos.push(newTodo);   // direct mutation allowed
```
In vanilla Redux you must write:
```js
return [...todos, newTodo]
```
Toolkit makes reducer logic simpler.

#### 🧩 Components Layer

Components live in:
```bash
src/components/
```
Example:
```bash
Todo.jsx
```

#### 🏗 Providing the Store

To connect React with Redux, wrap the app using `<Provider>`:
```jsx
import { Provider } from "react-redux";

<Provider store={store}>
  <Todo />
</Provider>
```

#### 🎣 Access State in Components

Once wrapped, components can read state using hooks.

**useSelector**

Used to read data from store:
```js
const todos = useSelector((state) => state.todos);
```

#### 🔄 Data Flow Summary
```scss
Component → Action → Reducer → Store → Component (via useSelector)
```

#### 🚀 Dispatching Actions (Triggering State Change)

To update state in Redux, we **dispatch** actions.

Redux Toolkit provides the useDispatch hook for sending actions to the store.

**useDispatch**

`useDispatch` allows components to send (`dispatch`) actions to reducers:
```js
const dispatch = useDispatch();
dispatch(addTodo("Learn Redux")); 
```
The dispatched action flows through:
```nginx
Action → Reducer → Store
```
and updates the state.

#### 📖 Selecting State From Store

To read state values from the Redux store, we use the `useSelector` hook.

**useSelector**

`useSelector` extracts data from the store using selector logic:
```js
const todos = useSelector((state) => state.todos);
```
This returns the part of the state needed by the component.