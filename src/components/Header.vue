<template>
  <div id="header">
    <Nav />
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search.vue";

export default {
  components: {
    Nav,
    Search
  }
};
</script>
