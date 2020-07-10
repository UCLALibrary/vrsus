<template>
  <div>
    <div
      class="container-full container-full--navbar site-navbar site-navbar--ursus"
    >
      <nav
        class="navbar navbar-expand-lg navbar-dark site-navbar__wrapper site-navbar__wrapper--ursus"
      >
        <div class="site-navbar__logo-block">
          <a href="/" class="site-navbar__logo"
            ><img
              alt="UCLA Library Digital Collections Logo"
              src="../assets/ucla-library-digital-collections_logo.svg"
          /></a>
          <span class="site-navbar__beta-logo">BETA</span>
        </div>

        <ul class="navbar-nav nav ml-auto">
          <li class="site-navbar__item site-navbar__item--ursus">
            <a
              class="site-navbar__item-link site-navbar__item-link--ursus"
              href="/about"
              >About</a
            >
          </li>
          <li class="site-navbar__item site-navbar__item--ursus">
            <a
              class="site-navbar__item-link site-navbar__item-link--ursus site-navbar__item-link-feedback"
              href="https://forms.gle/x2BV9dJMK241VsAJA"
              target="_blank"
              rel="noopener"
            >
              Give Us Feedback
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
  @Prop() private msg!: string;
}
</script>
