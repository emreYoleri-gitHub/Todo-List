import React, { createContext, useState } from "react";

export const TodoListContext = createContext();

const TodoListContextProvider = ({ children }) => {
  const initialState = [];
  const startConf = () => {
    let localStorageCheck = JSON.parse(localStorage.getItem("todos"));
    if (localStorageCheck) {
      localStorageCheck.forEach(todo => {
        initialState.push(todo)
      })
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  };
  startConf();

  const [todos, setTodos] = useState(initialState);
  const addTodo = (todo) => {
    let newTodo = {
      text: todo,
      id: Math.random(),
    };
    setTodos([...todos, newTodo]);
    let localStorageCheck = JSON.parse(localStorage.getItem("todos"));

    localStorage.setItem(
      "todos",
      JSON.stringify([...localStorageCheck, newTodo])
    );
  };

  const deleteTodo = (id) => {
    let find = todos.filter((todo) => todo.id !== id);
    setTodos(find);
    console.log(todos);
    let localStorageCheck = JSON.parse(localStorage.getItem("todos"));
    let localStorageFind = localStorageCheck.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(localStorageFind));
  };
  return (
    <TodoListContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
