import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add Todo
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload }; // ✅ Fixed payload
      state.todos.push(todo);
    },

    // Remove Todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload); // ✅ Fixed id reference
    },
  },
});

// Export actions & reducer
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
