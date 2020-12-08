import React from "react";
import UserCreate from "./UserCreate";
import contextLanguage from "../contexts/contextLanguage";
import colorContext from "../contexts/ColorContext";
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
        <div>
          Select Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag vn"
            onClick={() => this.onLanguageChange("vietnam")}
          />
        </div>
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
