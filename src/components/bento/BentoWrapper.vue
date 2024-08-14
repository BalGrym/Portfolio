<template>
  <div class="bento-item carousel"></div>
  <div class="bento-item presentation"></div>
  <div class="bento-item vsinput"></div>
  <div class="bento-item skills"></div>
  <div class="bento-item p3"></div>
  <div class="bento-item passion"></div>
  <div class="bento-item aventure"></div>
  <div class="bento-item design"></div>
  <div class="bento-item contact"></div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.bento-item {
  background: #1d1d1d;
  border-radius: 65px;
}

.carousel {
  grid-area: carousel;
}

.presentation {
  grid-area: presentation;
}

.vsinput {
  grid-area: vs;
}

.skills {
  grid-area: skill;
}

.p3 {
  grid-area: p3;
}

.passion {
  grid-area: passion;
}

.aventure {
  grid-area: aventure;
}

.contact {
  grid-area: contact;
}

.design {
  grid-area: design;
}
</style>
