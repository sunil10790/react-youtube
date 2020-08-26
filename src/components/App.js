import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videoList: [],
    selectedVideo: null,
  };

  onSearchTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videoList: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchTermSubmit={this.onSearchTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videoList}
        />
      </div>
    );
  }
}

export default App;
