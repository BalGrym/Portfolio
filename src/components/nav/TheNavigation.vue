<template>
  <header class="mb-5">
    <img src="../../assets/logo/logo.png" alt="icon" class="logo" />
    <nav>
      <ul>
        <li><router-link to="/">Acceuil</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
        <li><router-link to="/projets">Projets</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <ul>
      <li><i class="fa-brands fa-linkedin fa-xl"></i></li>
      <li><i class="fa-brands fa-github-square fa-xl"></i></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  align-items: center;
  gap: 10px;
  list-style-type: none;
  height: 100%;
  padding: 0;
}

.logo {
  height: 80px;
}

nav {
  border: 1px solid #3d3d3d;
  border-radius: 80px;
  height: 60px;
}

nav ul {
  padding: 6px;
}

nav a {
  padding: 10px 50px;
}

nav a:active,
nav a:hover,
nav a.router-link-active {
  background-color: grey;
  border-radius: 80px;
}
</style>
