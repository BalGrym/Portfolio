<template>
  <div class="bento-item carousel">carousel</div>
  <div
    class="bento-item presentation d-flex flex-column justify-content-between"
  >
    <h1 class="name">Kévin Bernin - Développeur Web</h1>
    <div class="separator"></div>
    <p>
      Diplomé chez Open Class Room en tant que Développeur Web Fullstack en
      Javascript, je suis à la recherche d'une alternance de 15 mois pour un
      diplôme de niveau 6 en Javascript gagner en expérience.
    </p>
  </div>
  <div class="bento-item contact d-flex flex-column justify-content-between">
    <h1>Vous pouvez me retrouver ici !</h1>
    <div class="d-flex justify-content-around">
      <i class="fa-brands fa-linkedin fa-2xl"></i>
      <i class="fa-brands fa-github-square fa-2xl"></i>
    </div>
    <button class="email"><i class="fa-solid fa-envelope"></i> E-mail</button>
  </div>
  <div class="bento-item vsinput">vs</div>
  <div class="bento-item skills">
    <h1>Les stacks que je maitrise !</h1>
    <div class="front">
      <i class="fa-brands fa-html5"></i>
      <i class="fa-brands fa-css3-alt"></i>
      <i class="fa-brands fa-js"></i>
      <i class="fa-brands fa-vuejs"></i>
    </div>
    <div class="back">
      <i class="fa-brands fa-node"></i>
      <p>expressjs</p>
      <p>SQL</p>
      <p>Sequelize</p>
    </div>
  </div>
  <div class="bento-item p3">p</div>
  <div class="bento-item passion d-flex flex-column justify-content-between">
    <h1>Mes passions !</h1>
    <div class="passion-informatique">
      Passionné d'informatique depuis plus de 10 ans
    </div>
    <div class="passion-sport">
      J'adore le sport et surtout l'escalade en bloc !
    </div>
    <div class="passion-jeux">Jeux vidéos et jeux de société !</div>
  </div>
  <div class="bento-item aventure">
    <h1>Mon aventure en tant Developpeur Web !</h1>
    <ul>
      <li>Apprentissage des bases de Dev Web en autodidacte.</li>
      <li>
        Formation Open Class Room dev web bac +2
        <!-- <li> nested ? -->
      </li>
      <li>PortFolio</li>
      <li>VS Input</li>
    </ul>
  </div>
  <div class="bento-item apprentissage">apprentissage</div>
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
  padding: 45px;
  text-wrap: wrap;
}

.carousel {
  grid-area: carousel;
}

.presentation {
  grid-area: presentation;
}

.separator {
  height: 1px;
  width: 100%;
  background-color: #3d3d3d;
}

.contact {
  grid-area: contact;
}

.email {
  width: 100px;
  margin: 0 auto;
  background: grey;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px;
}

.contact h1,
.passion h1 {
  font-size: 1.2rem;
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

.apprentissage {
  grid-area: apprentissage;
}
</style>
