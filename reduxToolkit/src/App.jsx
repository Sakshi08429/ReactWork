import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";  // ✅ Ensure this file exists
import Todo from "./components/Todo";  // ✅ Import Todo component

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn about Redux Toolkit</h1>
      <AddTodo />
      <Todo />  {/* ✅ Ensure Todo component exists */}
    </>
  );
}

export default App;
