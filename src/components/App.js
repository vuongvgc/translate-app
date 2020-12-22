import React from "react";
import UserCreate from "./UserCreate";
import colorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import { LanguageStore } from "../contexts/LanguageContext";
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
        <LanguageStore>
          <LanguageSelector />
          <colorContext.Provider value="red">
            <UserCreate />
          </colorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
export default App;
