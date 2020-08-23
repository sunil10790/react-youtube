import axios from "axios";

const KEY = "AIzaSyDD5-kk1JaZmPA226kgsz1otdWkP3r_sNg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
