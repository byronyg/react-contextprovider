import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    // console.log(this.context);
    const { isLightTheme, light, dark } = this.context; //destructuring
    const theme = isLightTheme ? light : dark;
    return (
      <div className="book-list">
        <ul style={{ background: theme.bg, color: theme.syntax }}>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
