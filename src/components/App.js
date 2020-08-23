import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchTermSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
      </div>
    );
  }
}

export default App;
