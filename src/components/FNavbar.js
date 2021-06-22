import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/AuthContext";

const FNavbar = () => {
  const { isDarkKey, darkTheme, lightTheme } = useContext(ThemeContext);
  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
  const theme = isDarkKey ? darkTheme : lightTheme;

  return (
    <div
      style={{
        height: "auto",
        width: "350px",
        margin: "40px auto",
        textAlign: "center",
        background: theme.background,
        borderRadius: "5px",
        padding: "20px",
        color: theme.text,
        transition: "1.8s ease all",
      }}
    >
      <h2>Oak Academy</h2>
      <p
        style={{ fontWeight: "bold", cursor: "pointer" }}
        onClick={changeAuthStatus}
      >
        {isLoggedIn ? "Logged in" : "Logged out "}
      </p>
      <button
        className={isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"}
      >
        Todos
      </button>
      <button
        className={isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"}
      >
        Add Todo
      </button>
      <button
        className={isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"}
      >
        Delete Todo
      </button>
    </div>
  );
};
export default FNavbar;
