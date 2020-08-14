<template>
  <div>
    <h1>
      Work Show Page VUE
      <!-- Work show Page for {{ data.attributes }} -->
    </h1>
    <MetadataSection :fields="itemOverview" />

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
const unpackMetadata = function(response, fields) {
  let metadata = [];
  fields.forEach(field => {
    ///console.log(field);
    let mValueStr =
      "response.data.data.attributes." + field[1] + ".attributes.value";

    console.log(eval(mValueStr));
    ///if (response.data.data.attributes.field[1].attributes.value) {
    ///  metadata.push({ label: field[0], value: mValue });
    ///}
  });
  console.log(metadata);
};
export default {
  name: "WorkShow",
  components: {
    MetadataSection
  },
  data() {
    return {
      data: {},
      itemOverview: {}
    };
  },
  created() {
    APIService.getItem(this.$route.params.ark).then(response => {
      this.data = response.data.data;
      ///console.log("DATA:" + this.data);
      const item_overview_fields = [
        ["TITLE", "title_tesim"],
        ["ALTERNATIVE TITLE", "alternative_title_tesim"],
        ["UNIFORM TITLE", "uniform_title_tesim"],
        ["CREATOR", "creator_tesim"],
        ["AUTHOR", "author_tesim"],
        ["ARCHITECT", "architect_tesim"],
        ["PHOTOGRAPHER", "photographer_tesim"],
        ["COMPOSER", "composer_tesim"],
        ["SCRIBE", "scribe_tesim"],
        ["ILLUMINATOR", "illuminator_tesim"],
        ["RUBRICATOR", "rubricator_tesim"],
        ["LYRICIST", "lyricist_tesim"],
        ["PUBLISHER", "publisher_tesim"],
        ["PLACE OF ORIGIN", "place_of_origin_tesim"],
        ["YEAR", "year_isim"],
        ["DATE", "normalized_date_sim"],
        ["DATE CREATED", "date_created_tesim"],
        ["LANGUAGE", "human_readable_language_tesim"],
        ["COLLECTION", "member_of_collections_ssim"],
        ["COLLECTION (NATIVE)", "dlcs_collection_name_tesim"]
      ];
      this.itemOverview = unpackMetadata(response, item_overview_fields);
    });
    ///.catch(error => {
    ///  console.log("Error:" + error.response);
    ///});
  }
};
</script>
