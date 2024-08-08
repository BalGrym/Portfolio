<template>
  <header>
    <img src="../../assets/logo/logo.png" alt="icon" class="logo" />
    <nav>
      <ul>
        <li><a href="#">Acceuil</a></li>
        <li><a href="#">À propos</a></li>
        <li><a href="#">Projets</a></li>
        <li><a href="#">Contact</a></li>
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
  /* width: 80px; */
}

nav {
  border: 1px solid #3d3d3d;
  border-radius: 80px;
  height: 60px;
}

nav ul {
  padding: 6px;
}

nav li {
  padding: 10px 50px;
}

nav li:active {
  background-color: grey;
  border-radius: 80px;
}
</style>
