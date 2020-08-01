import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://ursus-dev.library.ucla.edu`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getSearchResults() {
    return apiClient.get("/catalog");
  },
  getItem(ark) {
    const id = ark
      .replace(/^ark:\//, "")
      .replace(/\//g, "-")
      .split("")
      .reverse()
      .join("");
    return apiClient.get(`/catalog/${id}`);
  }
};
