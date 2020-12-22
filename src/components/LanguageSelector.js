import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    console.log(this.context);
    return (
      <div>
        Select Language:
        <i
          className="flag us"
          onClick={() => this.context.onChangeLanguage("english")}
        />
        <i
          className="flag vn"
          onClick={() => this.context.onChangeLanguage("vietnam")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
