import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videoList: [] };

  onSearchTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videoList: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoList videos={this.state.videoList} />
      </div>
    );
  }
}

export default App;
