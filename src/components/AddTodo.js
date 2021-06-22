import React, { useState, useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { TodoListContext } from "../Contexts/TodoListContext";
function AddTodo() {
  const [inpValue, setInpValue] = useState("");

  const changeInputValue = (e) => {
    setInpValue(e.target.value);
  };

  const { isDarkKey } = useContext(ThemeContext);

  const { addTodo } = useContext(TodoListContext);

  return (
    <div className="text-center mt-3 d-flex flex-column col-md-3 mx-auto">
      <form onSubmit = {(e)=>e.preventDefault()} >
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Add Todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={inpValue}
          onChange={changeInputValue}
          autoComplete="false"
        />
        <button
          onClick={() => {
            if (inpValue && inpValue !== " ") {
              addTodo(inpValue);
              setInpValue("");
            }
          }}
          className={isDarkKey ? "btn btn-dark " : "btn btn-primary"}
          type="submit"
          id="button-addon2"
        >
          Add Todo
        </button>
      </div>
      </form>
    </div>
  );
}
export default AddTodo;
