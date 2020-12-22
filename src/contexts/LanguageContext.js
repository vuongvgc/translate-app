import React, { Component } from "react";
const Context = React.createContext("vietnam");
export class LanguageStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
    };
  }
  onChangeLanguage = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onChangeLanguage: this.onChangeLanguage }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
