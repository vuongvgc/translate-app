import React, { Component } from "react";
import contextLanguage from "../contexts/contextLanguage";
import colorContext from "../contexts/ColorContext";
class Button extends Component {
  // static contextType = contextLanguage;
  renderSubmit = (value) => {
    return value === "english" ? "submit" : " xác nhận";
  };
  render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Xác Nhận";
    return (
      <div>
        <colorContext.Consumer>
          {(color) => (
            <button className={`ui button ${color}`}>
              <contextLanguage.Consumer>
                {(value) => this.renderSubmit(value)}
              </contextLanguage.Consumer>
            </button>
          )}
        </colorContext.Consumer>
      </div>
    );
  }
}

export default Button;
