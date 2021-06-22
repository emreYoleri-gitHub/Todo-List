import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { TodoListContext } from "../Contexts/TodoListContext";
const TodoList = () => {
  const { isDarkKey, darkTheme, lightTheme, changeTheme } =
    useContext(ThemeContext);
  const { todos, deleteTodo } = useContext(TodoListContext);
  const theme = isDarkKey ? darkTheme : lightTheme;
  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        padding: "20px",
        transition: "1.8s ease all",
        width: "40%",
        margin: "0 auto",
      }}
      className="text-center rounded-3"
    >
      {todos.length ? (
        todos.map((todo) => {
          return (
            <p
              key={todo.id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {todo.text}
              <button
                className={isDarkKey ? "btn btn-dark " : "btn btn-primary "}
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </p>
          );
        })
      ) : (
        <p>You have not todo</p>
      )}

      <button
        className={isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"}
        onClick={() => changeTheme()}
      >
        Change Theme
      </button>
    </div>
  );
};
export default TodoList;
