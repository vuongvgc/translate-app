import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
class Field extends Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    const text = this.context.language === "english" ? "Name" : "Tên";
    return (
      <form className="ui form">
        <label>{text}</label>
        <input />
      </form>
    );
  }
}

export default Field;
