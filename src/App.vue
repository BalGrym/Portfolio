<template>
  <the-navigation></the-navigation>
  <bento-wrapper></bento-wrapper>
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

<style scoped></style>
