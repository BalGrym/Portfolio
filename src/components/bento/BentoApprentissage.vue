<template>
  <div class="bento-item apprentissage d-flex flex-column">
    <h3>Projets et Apprentissage en cours.</h3>
    <ul class="passion-list list-unstyled d-flex justify-content-around">
      <li>
        VSInput : Site de saisi de frappe pour le jeu de combat Street Fighter 6
      </li>
      <li>Spraywall</li>
      <li>Docker</li>
    </ul>
  </div>
</template>

<style scoped>
.passion-list {
  margin: auto;
  gap: 10px;
}

.passion-list li {
  flex: 1;
  padding: 10px;
  text-align: center;
  background-color: grey;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
