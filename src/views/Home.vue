<template>
  <div class="home">
    <Nav />
    <Search />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Wsdjgfk;ahskdljf Vue.js App" />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Nav,
    Footer,
    Search
  }
};
</script>
