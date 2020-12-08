import React, { Component } from "react";
import contextLanguage from "../contexts/contextLanguage";
class Field extends Component {
  static contextType = contextLanguage;
  render() {
    const text = this.context === "english" ? "Name" : "Tên";
    return (
      <form className="ui form">
        <label>{text}</label>
        <input />
      </form>
    );
  }
}

export default Field;
