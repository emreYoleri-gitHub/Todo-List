import React, { Component } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/AuthContext";

class Navbar extends Component {
  /*   static contextType = ThemeContext;
   */ render() {
    return (
      <AuthContext.Consumer>
        {(AuthContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isDarkKey, darkTheme, lightTheme } = themeContext;
              const { isLoggedIn, changeAuthStatus } = AuthContext;
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
                  }}
                >
                  <h2>Oak Academy</h2>
                  <p style={{ fontWeight: "bold" , cursor : "pointer" }} onClick={changeAuthStatus}>
                    {isLoggedIn ? "Logged in" : "Logged out "}
                  </p>
                  <button
                    className={
                      isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"
                    }
                  >
                    Overwiev
                  </button>
                  <button
                    className={
                      isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"
                    }
                  >
                    Contact
                  </button>
                  <button
                    className={
                      isDarkKey ? "btn btn-dark me-1" : "btn btn-primary me-1"
                    }
                  >
                    Support
                  </button>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}
export default Navbar;
