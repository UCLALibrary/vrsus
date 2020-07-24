<template>
  <div>
    <footer class="site-footer">
      <div
        class="container-full site-footer__primary site-footer__primary--ursus"
      >
        <div class="site-footer__primary-wrapper--ursus">
          <div class="site-footer__block--ursus">
            <a
              href="https://www.library.ucla.edu/"
              target="_blank"
              rel="noopener"
              ><img
                src="logo/ucla-library-logo.svg"
                class="site-footer__logo site-footer__logo--ursus"
                alt="UCLA Library Logo"
            /></a>
          </div>
          <div class="site-footer__block--ursus">
            <ul class="site-footer__list">
              <li class="site-footer__list-item">
                <a
                  href="/copyrights_and_collections"
                  class="site-footer__link
              site-footer__link--ursus"
                  >Copyright and Collections</a
                >
              </li>
              <li class="site-footer__list-item">
                <a
                  href="/privacy_policy"
                  class="site-footer__link site-footer__link--ursus"
                  >Privacy Policy</a
                >
              </li>
              <li class="site-footer__list-item">
                <a
                  href="/contact"
                  class="site-footer__link site-footer__link--ursus"
                  >Contact Us</a
                >
              </li>
            </ul>
          </div>
          <div class="site-footer__block--ursus">
            <ul class="site-footer__list">
              <li class="site-footer__list-item">
                <a
                  href="http://digital2.library.ucla.edu/"
                  class="site-footer__link
              site-footer__link--ursus-gold"
                  target="_blank"
                  rel="noopener"
                  >Visit Our Legacy Site</a
                >
              </li>
              <li class="site-footer__list-item">
                <a
                  href="https://forms.gle/x2BV9dJMK241VsAJA"
                  class="site-footer__link site-footer__link--ursus-gold"
                  target="_blank"
                  rel="noopener"
                  >Give Us Feedback</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        class="container-full site-footer__secondary site-footer__secondary--ursus"
      >
        <div class="site-footer__secondary-text">
          &#169; 2019-2020 UC Regents. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>
