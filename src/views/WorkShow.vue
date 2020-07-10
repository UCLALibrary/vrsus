<template>
  <div>
    <h1>Work show Page for {{ data.attributes.title_tesim.attributes.value }}</h1>
    <table>
      <tr v-for="record in data.attributes" :key="record.id">
        <td>{{ record.attributes.label }}</td>
        <td>{{ record.attributes.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import APIService from "@/services/APIService.js";

export default {
  name: "WorkShow",
  data() {
    return {
      data: {}
    };
  },
  created() {
    APIService.getItem(this.$route.params.ark)
      .then(response => {
        this.data = response.data.data;
      })
      .catch(error => {
        console.log("Error:" + error.response);
      });
  }
};
</script>
