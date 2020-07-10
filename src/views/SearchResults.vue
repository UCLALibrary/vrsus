<template>
  <ul>
    Search Results Here
    <li v-for="result in results.data" :key="result.id">
      <router-link
        :to="{ name: 'WorkShow', params: { ark: ark(result.id) } }"
      >{{ result.type[0] }} {{ ark(result.id) }}</router-link>
    </li>
  </ul>
</template>

<script>
import APIService from "@/services/APIService.js";

export default {
  name: "SearchResults",
  data() {
    return {
      results: []
    };
  },
  methods: {
    ark(id) {
      return (
        "ark:/" +
        id
          .split("")
          .reverse()
          .join("")
          .replace(/-/g, "/")
      );
    }
  },
  created() {
    APIService.getSearchResults()
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        console.log("Error:" + error.response);
      });
  }
};
</script>
