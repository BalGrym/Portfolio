<template>
  <div class="bento-item skills">
    <h3>Les stacks que je maitrise.</h3>
    <div class="skills-container d-flex">
      <div class="front">
        <img src="../../assets/logo/html-5.png" alt="HTML Logo" />
        <img src="../../assets/logo/css-3.png" alt="CSS Logo" />
        <img src="../../assets/logo/js.png" alt="Javascript Logo" />
        <img src="../../assets/logo/vue.png" alt="Vuejs Logo" />
      </div>
      <div class="back">
        <img
          src="../../assets/logo/sequelize.png"
          alt="Sequelize Logo"
          class="sequelize-logo"
        />
        <img src="../../assets/logo/nodejs.png" alt="NodeJS Logo" />
        <img src="../../assets/logo/serveur-sql.png" alt="SQL Logo" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-container div {
  flex: 1;
  padding: 10px;
  text-align: center;
}

img {
  margin: 5px;
}

.sequelize-logo {
  width: 10%;
}
</style>
