<template>
  <div class="projet-container">
    <div class="projet-item d-flex flex-column">
      <div class="projet-img">
        <img
          src="../../assets/projets-image/OhMyFood!/OhMyFood1.png"
          alt="Acceuil projet OhMyFood!"
        />
      </div>
      <div class="projet-description">
        <p>Ceci est un projet</p>
      </div>
    </div>
    <div class="projet-item d-flex flex-column">
      <div class="projet-img">
        <img
          src="../../assets/projets-image/OhMyFood!/OhMyFood1.png"
          alt="Acceuil projet OhMyFood!"
        />
      </div>
      <div class="projet-description">
        <p>Ceci est un projet</p>
      </div>
    </div>
    <div class="projet-item d-flex flex-column">
      <div class="projet-img">
        <img
          src="../../assets/projets-image/OhMyFood!/OhMyFood1.png"
          alt="Acceuil projet OhMyFood!"
        />
      </div>
      <div class="projet-description">
        <p>Ceci est un projet</p>
      </div>
    </div>
    <div class="projet-item d-flex flex-column">
      <div class="projet-img">
        <img
          src="../../assets/projets-image/OhMyFood!/OhMyFood1.png"
          alt="Acceuil projet OhMyFood!"
        />
      </div>
      <div class="projet-description">
        <p>Ceci est un projet</p>
      </div>
    </div>
    <div class="projet-item d-flex flex-column">
      <div class="projet-img">
        <img
          src="../../assets/projets-image/OhMyFood!/OhMyFood1.png"
          alt="Acceuil projet OhMyFood!"
        />
      </div>
      <div class="projet-description">
        <p>Ceci est un projet</p>
      </div>
    </div>
    <div class="projet-item d-flex flex-column">
      <div class="projet-img">
        <img
          src="../../assets/projets-image/OhMyFood!/OhMyFood1.png"
          alt="Acceuil projet OhMyFood!"
        />
      </div>
      <div class="projet-description">
        <p>Ceci est un projet</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Salut",
    };
  },
};
</script>

<style>
.projet-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.projet-item {
  border-radius: 20px;
  border: 1px solid #3d3d3d;
  padding: 15px;
}

.projet-img {
  height: 300px;
}

.projet-img img {
  object-fit: cover;
  max-width: 100%;
  /* max-height: 100%; */
  height: 300px;
  border-radius: 20px;
}
</style>
