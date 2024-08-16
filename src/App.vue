<template>
  <the-navigation></the-navigation>
  <main>
    <!-- <bento-wrapper></bento-wrapper> -->
    <router-view></router-view>
  </main>
</template>

<script>
import TheNavigation from "./components/nav/TheNavigation.vue";
// import BentoWrapper from "./components/bento/BentoWrapper.vue";

export default {
  components: {
    TheNavigation,
    // BentoWrapper,
  },
};
</script>

<style scoped></style>
