import React, { Component } from "react";
import colorContext from "../contexts/ColorContext";
import LanguageContext from "../contexts/LanguageContext";
class Button extends Component {
  // static contextType = contextLanguage;
  renderSubmit = (language) => {
    return language === "english" ? "submit" : " xác nhận";
  };
  render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Xác Nhận";
    return (
      <div>
        <colorContext.Consumer>
          {(color) => (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {({ language }) => this.renderSubmit(language)}
              </LanguageContext.Consumer>
            </button>
          )}
        </colorContext.Consumer>
      </div>
    );
  }
}

export default Button;
