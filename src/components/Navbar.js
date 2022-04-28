import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext; //locks up the component tree for the first time
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context; //destructuring the context
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.bg, color: theme.syntax }}>
        <h1>Contex App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
