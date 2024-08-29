<template>
  <div class="project-container">
    <project-item
      class="projet-item d-flex flex-column"
      v-for="project in myProjects"
      :key="project.id"
      :project="project"
    >
    </project-item>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";
import { images } from "@/assets/images.js";

export default {
  components: {
    ProjectItem,
  },
  mounted() {
    console.log(this.myProjects);
  },
  data() {
    return {
      myProjects: [
        {
          id: "food",
          titleBento: "Mobile First Integration",
          title: "OhMyFood!",
          presentation:
            "Projet OpenClass Room d'integration en mobile first d'un site pour trouver des restaurants.",
          description: "dzdzd",
          techno: ["HMLT", "CSS"],
          repository: "https://github.com/BalGrym/Ohmyfood",
          website: "https://balgrym.github.io/Ohmyfood/",
          cover: images.omfCover,
          images: ["dzdz"],
        },
        {
          id: "food",
          titleBento: "Mobile First Integration",
          title: "OhMyFood!",
          presentation:
            "Projet OpenClass Room d'integration en mobile first d'un site pour trouver des restaurants.",
          description: "dzdzd",
          techno: ["HMLT", "CSS"],
          repository: "https://github.com/BalGrym/Ohmyfood",
          website: "https://balgrym.github.io/Ohmyfood/",
          cover: images.omfCover,
          images: ["plusieurs images etc "],
        },
        {
          id: "food",
          titleBento: "Mobile First Integration",
          title: "OhMyFood!",
          presentation:
            "Projet OpenClass Room d'integration en mobile first d'un site pour trouver des restaurants.",
          description: "dzdzd",
          techno: ["HMLT", "CSS"],
          repository: "https://github.com/BalGrym/Ohmyfood",
          website: "https://balgrym.github.io/Ohmyfood/",
          cover: images.omfCover,
          images: ["plusieurs images etc "],
        },
      ],
    };
  },
};
</script>

<style>
.project-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.project-item {
  border-radius: 20px;
  border: 1px solid #3d3d3d;
  padding: 15px;
}
</style>
