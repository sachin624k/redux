import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{ id: "abc", task: "demo-task", isDone: "false" }],
};

export const counterSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo); // Direct mutation, no need make copy like React (...todo, newTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        marksAsDone: (state, action) => {
            state.todos = state.todos.map((map) => {
                if(todo.id === action.payload) {
                    todo.isDone = true;
                }
            });
        },
    },
});

export const { addTodo, deleteTodo, marksAsDone } = counterSlice.actions;
export default counterSlice.reducer;