<template>
  <div id="wrapper">
    <NavBar />
    <TheHeader />
    <main>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection :skills="skillsArr" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import TheHeader from './components/TheHeader';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TheFooter from './components/TheFooter';
import skills from './assets/skills.js';

export default {
  name: 'App',
  components: {
    NavBar,
    TheHeader,
    AboutSection,
    ProjectsSection,
    SkillsSection,
    TheFooter,
  },
  data() {
    return {
      skillsArr: [...skills],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=League+Spartan:wght@200;300;400;500;600;700&display=swap');

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
  font-family: 'League Spartan', sans-serif;
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
  font-family: 'Jost', sans-serif;
}
</style>
