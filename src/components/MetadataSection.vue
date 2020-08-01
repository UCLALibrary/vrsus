<template>
  <div class="metadata-block">
    <h4 class="metadata-block__title">Item Overview</h4>

    <div v-for="field in fields" :key="field[0]">
      <dl class="metadata-block__group">
        <dt class="metadata-block__label-key">
          <!-- KEY -->
          {{ field[0] }}
        </dt>
        <!-- VALUE -->
        <dd
          class="metadata-block__label-value metadata-block__label-value--ursus"
        >
          {{ field[1] }}
        </dd>
      </dl>
    </div>
    <hr class="divider divider--ursus" />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

export default {
  name: "MetadataSection",
  props: ["fields"]
};
</script>
