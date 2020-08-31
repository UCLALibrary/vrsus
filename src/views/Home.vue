<template>
  <div class="home">
    <HelloWorld />
    <a href="/catalog">ITEM - SHOW PAGE - /catalog</a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
