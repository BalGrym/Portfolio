<template>
  <div class="project-item d-flex flex-column">
    <div class="project-img">
      <img :src="project.cover" :alt="project.title" />
    </div>
    <div class="project-description">
      <h3>{{ project.title }}</h3>
      <p>{{ project.presentation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.project-img {
  height: 300px;
}

.project-img img {
  object-fit: cover;
  max-width: 100%;
  /* max-height: 100%; */
  height: 300px;
  border-radius: 20px;
}
</style>
