/* eslint-disable prettier/prettier */

<template>
  <div class="hello">
    <div style="background: #ccc" class="banner__homepage--ursus">
      <div class="banner__overlay--ursus">
        <h1 class="banner__title--ursus-home">
          <span>UCLA LIBRARY</span><br />
          <span>DIGITAL COLLECTIONS</span>
        </h1>
      </div>
      <hr class="divider divider--ursus" />
      <span class="banner__caption--ursus">
        <a href="catalog/n4wr2000zz-89112"
          >UCLA students with signs, one reading "Money for Minds not Bombs"
          during Veteran's Day teach-in on nuclear weapons in Los Angeles,
          Calif., 1981</a
        >
      </span>
    </div>
    <h1>{{ msg }}</h1>
    <a href="/catalog" class="btn btn-lg">ITEM - SHOW PAGE - /catalog</a>

    <p>
      The UCLA Library Digital Collections includes rare and unique digital
      materials developed by the UCLA Library to support education, research,
      service, and creative expression. This website is our new interface for
      discovery and engagement of these collections.
    </p>
    <hr class="divider divider--ursus" />
    <div class="collection-grid__wrapper">
      <!-- Grid One  -->
      <a class="collection-grid__item-wrapper" href="/catalog/8zn49200zz-89112">
        <div class="collection-grid__item-image grid-item-one"></div>
        <div class="collection-grid__item-content">
          <h3 class="collection-grid__item-title">
            Los Angeles Daily News Negatives
          </h3>
          <hr class="collection-grid__item-liner align-item-start" />
          <p class="collection-grid__item-desc">
            Selected news photographs from 1920s, 30s, and 40s.
          </p>
          <p class="collection-grid__item-link">More about this collection</p>
        </div>
      </a>
      <!-- Grid Two  -->
      <a class="collection-grid__item-wrapper" href="/catalog/m8f11000zz-89112">
        <div class="collection-grid__item-image grid-item-two"></div>
        <div class="collection-grid__item-content">
          <h3 class="collection-grid__item-title">
            Walter E. Bennett Photographic Collection, 1937-1983
          </h3>
          <hr class="collection-grid__item-liner align-item-start" />
          <p class="grid-summary">
            News photographs related to American Presidents 1960s, 70s, and 80s.
          </p>
          <p class="collection-grid__item-link">More about this collection</p>
        </div>
      </a>
      <!-- Grid Three  -->
      <a class="collection-grid__item-wrapper" href="/catalog/tpf2h200zz-89112">
        <div class="collection-grid__item-image grid-item-three"></div>
        <div class="collection-grid__item-content">
          <h3 class="collection-grid__item-title">Will Connell Papers</h3>
          <hr class="collection-grid__item-liner align-item-start" />
          <p class="grid-summary">
            Advertising photographs from the 1920s and 30s.
          </p>
          <p class="collection-grid__item-link">More about this collection</p>
        </div>
      </a>
      <!-- Grid Four  -->
      <a class="collection-grid__item-wrapper" href="/catalog/37sh8000zz-89112">
        <div class="collection-grid__item-image grid-item-four"></div>
        <div class="collection-grid__item-content">
          <h3 class="collection-grid__item-title">
            Collection of California Postcards
          </h3>
          <hr class="collection-grid__item-liner align-item-start" />
          <p class="grid-summary">
            Sample postcards from our large physical collection.
          </p>
          <p class="collection-grid__item-link">More about this collection</p>
        </div>
      </a>
      <!-- Grid Five  -->
      <a class="collection-grid__item-wrapper" href="/catalog/x3xg9000zz-89112">
        <div class="collection-grid__item-image grid-item-five"></div>
        <div class="collection-grid__item-content">
          <h3 class="collection-grid__item-title">Ethiopic Manuscripts</h3>
          <hr class="collection-grid__item-liner align-item-start" />
          <p class="grid-summary">
            A collection of manuscripts from the 16th-20th centuries in Ge’ez
            and Amharic.
          </p>
          <p class="collection-grid__item-link">More about this collection</p>
        </div>
      </a>
      <!-- Grid Six  -->
      <a class="collection-grid__item-wrapper" href="/catalog/21czd100zz-89112">
        <div class="collection-grid__item-image grid-item-six"></div>
        <div class="collection-grid__item-content">
          <h3 class="collection-grid__item-title">
            Arkatov (James) Collection
          </h3>
          <hr class="collection-grid__item-liner align-item-start" />
          <p class="grid-summary">
            Photographs of jazz musicians performing in Los Angeles.
          </p>
          <p class="collection-grid__item-link">More about this collection</p>
        </div>
      </a>
    </div>
    <a
      href="/catalog?f%5Bhas_model_ssim%5D%5B%5D=Collection&view=list"
      class="btn-base btn-base-lg btn-ursus--gold"
      >See More Collections</a
    >

    <Footer />

    <hr class="divider divider--ursus" />
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          target="_blank"
          rel="noopener"
          >typescript</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >router</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex"
          target="_blank"
          rel="noopener"
          >vuex</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
          target="_blank"
          rel="noopener"
          >unit-mocha</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
          target="_blank"
          rel="noopener"
          >e2e-cypress</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
