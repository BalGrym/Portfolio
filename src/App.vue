<template>
  <the-navigation></the-navigation>
  <main class="bento-wrapper">
    <bento-wrapper></bento-wrapper>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
import BentoWrapper from "./components/bento/BentoWrapper.vue";

export default {
  components: {
    TheNavigation,
    BentoWrapper,
  },
};
</script>

<style scoped>
.bento-wrapper {
  display: grid;
  grid-template:
    "carousel carousel presentation presentation" 300px
    "carousel carousel p3 contact" 300px
    "skill skill p3 passion" 300px
    "aventure aventure vs passion" 300px
    "aventure aventure apprentissage apprentissage" 300px
    / 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin: 30px;
}
</style>
