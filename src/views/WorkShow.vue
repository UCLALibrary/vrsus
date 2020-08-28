<template>
  <div>
    <h1>
      Work Show Page VUE
      <!-- Work show Page for {{ data.attributes }} -->
    </h1>
    <MetadataSection :fields="itemOverview" />
    <!-- 
    <table>
      <tr v-for="record in data.attributes" :key="record.id">
        <td>{{ record.attributes.label }}</td>
        <td>{{ record.attributes.value }}</td>
      </tr>
    </table>
    -->
  
  </div>
</template>

<script>
/* eslint-disable */
import APIService from "@/services/APIService.js";
import MetadataSection from "@/components/MetadataSection.vue";

const unpackMetadata = function(response, fields) {
  let metadataDisplay = [];
  let metadataKeysValues = Object.entries(response.data.data.attributes);
  let itemOverviewFields_Keys = Object.keys(fields);
  metadataKeysValues.forEach(element =>  {if (itemOverviewFields_Keys.includes(element[0]))
    metadataDisplay.push([element[1].attributes.label, element[1].attributes.value]);
  }
  );
  return metadataDisplay; 
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
      const item_overview_fields = {
        title_tesim: 'Title',
        alternative_title_tesim: 'Alternative Title',
        uniform_title_tesim: 'Uniform title',
        creator_tesim: 'Creator',
        author_tesim: 'Author',
        architect_tesim: 'Architect',
        photographer_tesim: 'Photographer',
        composer_tesim: 'Composer',
        scribe_tesim: 'Scribe',
        illuminator_tesim: 'Illuminator',
        rubricator_tesim: 'Rubricator',
        lyricist_tesim: 'Lyricist',
        illustrator_tesim: 'Illustrator',
        calligrapher_tesim: 'Calligrapher',
        editor_tesim: 'Editor',
        engraver_tesim: 'Engraver',
        printmaker_tesim: 'Printmaker',
        publisher_tesim: 'Publisher',
        place_of_origin_tesim: 'Place of Origin',
        year_isim: 'Year',
        normalized_date_sim: 'Date',
        date_created_tesim: 'Date Created',
        human_readable_language_tesim: 'Language',
        member_of_collections_ssim: 'Collection'
      };
      this.itemOverview = unpackMetadata(response, item_overview_fields);
    });
    ///.catch(error => {
    ///  console.log("Error:" + error.response);
    ///});
  }
};
</script>
