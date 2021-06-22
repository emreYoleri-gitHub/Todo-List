import React from "react";
import FNavbar from "./components/FNavbar";
import TodoList from "./components/TodoList";
import ThemeContextProvider from "./Contexts/ThemeContext";
import AuthContextProvider from "./Contexts/AuthContext";
import TodoListContextProvider from "./Contexts/TodoListContext";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div
      className="container"
      style={{
        boxShadow: "1px 1px 5px black",
        padding: "10px",
        marginTop: "20px",
      }}
    >
      <ThemeContextProvider>
        <AuthContextProvider>
          <TodoListContextProvider>
          <FNavbar />
          <TodoList />
            <AddTodo/>
          </TodoListContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
