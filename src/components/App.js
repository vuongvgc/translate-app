import React from "react";
import UserCreate from "./UserCreate";
import contextLanguage from "../contexts/contextLanguage";
import colorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "english",
    };
  }

  onLanguageChange = (language) => {
    this.setState({
      language: language,
    });
  };
  render() {
    return (
      <div className="ui container">
        <LanguageSelector onLanguageChange={this.onLanguageChange} />
        <colorContext.Provider value="red">
          <contextLanguage.Provider value={this.state.language}>
            <UserCreate />
          </contextLanguage.Provider>
        </colorContext.Provider>
      </div>
    );
  }
}
export default App;
