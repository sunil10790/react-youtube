import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  onSearchFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSearchFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onSearchInputChange}
              name="video-search"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
