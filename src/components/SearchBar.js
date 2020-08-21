import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar ui segment">
        <form class="ui form">
          <div class="field">
            <label>Video Search</label>
            <input type="text" name="video-search" placeholder="Search" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
