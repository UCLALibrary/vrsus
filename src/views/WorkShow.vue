<template>
  <div>
    <h1>
      Work Show Page VUE
      <!-- Work show Page for {{ data.attributes }} -->
    </h1>
    <MetadataSection :fields="primaryMetadata" />

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
import MetadataSection from "@/components/MetadataSection.vue";
export default {
  name: "WorkShow",
  components: {
    MetadataSection
  },
  data() {
    return {
      data: {}
    };
  },
  computed: {
    primaryMetadata: function() {
      console.log("Hi"); return [ ['key1', 'value1'] ]
    }
  },
  created() {
    APIService.getItem(this.$route.params.ark)
      .then(response => {
        this.data = response.data.data;
        console.log("We are looking for a response");
      })
      .catch(error => {
        console.log("Error:" + error.response);
      });
  }
};
</script>
