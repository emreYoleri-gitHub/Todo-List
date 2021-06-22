import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isDarkKey: true,
    lightTheme: {
      text: "#222",
      background: "#d8ddf1",
    },
    darkTheme: {
      text: "#fff",
      background: "#5c5c5c",
    },
  };

  changeTheme = () => {
    this.setState({
      isDarkKey: !this.state.isDarkKey,
    });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider
          value={{ ...this.state , changeTheme:this.changeTheme }}
          
        >
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default ThemeContextProvider;
