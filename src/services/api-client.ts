import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "416f85ef5e884f0496f6a35846b43618",
  },
});
