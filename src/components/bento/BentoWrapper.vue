<template>
  <div class="bento-wrapper">
    <bento-carousel class="bento-item carousel"></bento-carousel>
    <bento-presentation class="bento-item presentation"></bento-presentation>
    <bento-contact class="bento-item contact"></bento-contact>
    <bento-vsinput class="bento-item vsinput"></bento-vsinput>
    <bento-skill class="bento-item skills"></bento-skill>
    <bento-ohmyfood class="bento-item ohmyfood"></bento-ohmyfood>
    <bento-passion class="bento-item passion"></bento-passion>
    <bento-aventure class="bento-item aventure"></bento-aventure>
    <bento-apprentissage class="bento-item apprentissage"></bento-apprentissage>
  </div>
</template>

<script>
import BentoCarousel from "./BentoCarousel.vue";
import BentoPresentation from "./BentoPresentation.vue";
import BentoContact from "./BentoContact.vue";
import BentoVsinput from "./BentoVsinput.vue";
import BentoSkill from "./BentoSkill.vue";
import BentoPassion from "./BentoPassion.vue";
import BentoAventure from "./BentoAventure.vue";
import BentoApprentissage from "./BentoApprentissage.vue";
import BentoOhmyfood from "./BentoOhmyfood.vue";

export default {
  components: {
    BentoCarousel,
    BentoPresentation,
    BentoContact,
    BentoVsinput,
    BentoSkill,
    BentoPassion,
    BentoAventure,
    BentoApprentissage,
    BentoOhmyfood,
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
  gap: 20px;
  margin: 30px;
}

.bento-item {
  background: #242424;
  border-radius: 65px;
  padding: 45px;
  text-wrap: wrap;
  filter: drop-shadow(0px 0px 20px #2583f00a);
}

.carousel {
  grid-area: carousel;
}

.presentation {
  grid-area: presentation;
}

.contact {
  grid-area: contact;
}

.vsinput {
  grid-area: vs;
}

.skills {
  grid-area: skill;
}

.ohmyfood {
  grid-area: p3;
}

.passion {
  grid-area: passion;
}

.aventure {
  grid-area: aventure;
}

.background-gradient {
  background: radial-gradient(
      110% 146% at 86% -17%,
      rgba(22, 14, 113, 1) 0%,
      rgba(19, 13, 92, 0.26) 55%,
      rgba(90, 35, 248, 0) 90%
    ),
    linear-gradient(44deg, rgb(13, 54, 80) 2%, rgba(106, 103, 227, 0) 87%),
    radial-gradient(
      102% 103% at 21% 24%,
      rgba(121, 54, 174, 1) 0%,
      rgba(121, 54, 174, 0) 100%
    ),
    radial-gradient(
      94.51% 124.88% at 96% 94.43%,
      rgba(65, 244, 255, 0.78) 0%,
      rgba(131, 218, 255, 0.66) 32%,
      rgba(99, 175, 240, 0.4) 64%,
      rgba(43, 90, 211, 0) 100%
    ),
    linear-gradient(
      313.04deg,
      rgba(52, 29, 101, 1) 1%,
      rgba(96, 74, 234, 1) 100%
    );
}

.apprentissage {
  grid-area: apprentissage;
}
</style>
