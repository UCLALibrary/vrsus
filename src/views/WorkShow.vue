<template>
  <div>
    <h1>
      Work Show Page VUE
      <!-- Work show Page for {{ data.attributes }} -->
    </h1>
    <div class="item-page__primary-metadata">
      <MetadataSection :fields="itemOverview" label="Item Overview" />
      <MetadataSection :fields="notes" label="Notes" />
      <MetadataSection
        :fields="physical_description"
        label="Physical Description"
      />
      <MetadataSection :fields="keywords" label="Keywords" />
    </div>
    <div
      class="item-page__secondary-metadata item-page__secondary-metadata--ursus"
    >
      <MetadataSection :fields="localInfo" label="Find This Item" />
      <MetadataSection :fields="accessCondition" label="Access Condition" />
    </div>

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
  metadataKeysValues.forEach(element => {
    if (itemOverviewFields_Keys.includes(element[0]))
      metadataDisplay.push([fields[element[0]], element[1].attributes.value]);
  });
console.log("PUPPY!", metadataDisplay);
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
        title_tesim: "Title",
        alternative_title_tesim: "Alternative Title",
        uniform_title_tesim: "Uniform title",
        creator_tesim: "Creator",
        author_tesim: "Author",
        architect_tesim: "Architect",
        photographer_tesim: "Photographer",
        composer_tesim: "Composer",
        scribe_tesim: "Scribe",
        illuminator_tesim: "Illuminator",
        rubricator_tesim: "Rubricator",
        lyricist_tesim: "Lyricist",
        illustrator_tesim: "Illustrator",
        calligrapher_tesim: "Calligrapher",
        editor_tesim: "Editor",
        engraver_tesim: "Engraver",
        printmaker_tesim: "Printmaker",
        publisher_tesim: "Publisher",
        place_of_origin_tesim: "Place of Origin",
        year_isim: "Year",
        normalized_date_sim: "Date",
        date_created_tesim: "Date Created",
        human_readable_language_tesim: "Language",
        member_of_collections_ssim: "Collection"
      };
      const notes_fields = {
        caption_tesim: "Caption",
        summary_tesim: "Summary",
        description_tesim: "Description",
        provenance_tesim: "Provenance",
        colophon_tesim: "Colophon",
        toc_tesim: "Table of Contents",
        contents_note_tesim: "Contents note",
        incipit_tesim: "Incipit",
        explicit_tesim: "Explicit",
        note_tesim: "Note"
      };
      const physical_description_fields = {
        extent_tesim: "Extent",
        dimensions_tesim: "Dimensions",
        collation_tesim: "Collation",
        foliation_tesim: "Foliation",
        format_tesim: "Format",
        medium_tesim: "Medium",
        support_tesim: "Support",
        page_layout_ssim: "Page layout",
        writing_system_tesim: "Writing system",
        script_tesim: "Script",
        writing_and_hands_tesim: "Writing and hands",
        illustrations_note_tesim: "Illustrations note",
        condition_note_tesim: "Condition note",
        binding_note_ssi: "Binding note",
        inscription_tesim: "Inscription",
        opac_url_tesim: "Opac url"
      };
      const keywords_fields = {
        genre_tesim: "Genre",
        features_tesim: "Features",
        subject_tesim: "Subject",
        named_subject_tesim: "Named Subject",
        subject_topic_tesim: "Subject topic",
        location_tesim: "Location",
        longitude_tesim: "Longitude",
        latitude_tesim: "Latitude",
        human_readable_resource_type_tesim: "Resource Type"
      };
      const local_info_fields = {
        repository_tesim: "Repository",
        local_identifier_ssm: "Local identifier",
        oclc_ssi: "OCLC Number",
        ark_ssi: "ARK",
        finding_aid_url_ssm: "Finding aid url"
      };
      const access_condition_fields = {
        human_readable_rights_statement_tesim: "Rights statement",
        local_rights_statement_ssim: "Local Rights statement",
        services_contact_ssm: "Rights Contact",
        rights_holder_tesim: "Rights Holder",
        rights_country_tesim: "Rights (country of creation)",
        license_tesim: "License",
        funding_note_tesim: "Funding Note"
      };

      this.itemOverview = unpackMetadata(response, item_overview_fields);
      this.notes = unpackMetadata(response, notes_fields);
      this.physical_description = unpackMetadata(
        response,
        physical_description_fields
      );
      this.keywords = unpackMetadata(response, keywords_fields);
      this.localInfo = unpackMetadata(response, local_info_fields);
      this.accessCondition = unpackMetadata(response, access_condition_fields);
    });
    ///.catch(error => {
    ///  console.log("Error:" + error.response);
    ///});
  }
};
</script>
