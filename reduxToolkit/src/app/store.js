import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import reducer

export const store = configureStore({
  reducer: {
    todo: todoReducer, // ✅ Correct structure
  },
});
