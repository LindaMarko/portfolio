<template>
  <div id="wrapper">
    <NavBar />
    <TheHeader />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
import TheHeader from "./components/TheHeader"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import SkillsSection from "./components/SkillsSection"

export default {
  name: "App",
  components: {
    NavBar,
    TheHeader,
    AboutSection,
    ProjectsSection,
    SkillsSection,
  },
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Spartan:wght@500;600;700;800;900&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
  text-decoration: none;
  list-style-type: none;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Jost", sans-serif;
  font-size: 16px;
  background-color: #000;
  line-height: 1.6;
}
#wrapper {
  width: 100%;
}
h1,
h2,
h3 {
  font-family: "Spartan", sans-serif;
}
</style>
