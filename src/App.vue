<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/catalog">Search</router-link>
    </div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
    
  }
};
</script>
<style lang="scss">
@import "styles/legacy/old_blacklight";
// @import "styles/slider";
// @import "styles/blacklight_range_limit/blacklight_range_limit";
@import "styles/legacy/ursus";
@import "styles/base/base";
@import "styles/theme_ursus/theme_ursus";
</style>
