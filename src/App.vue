<template>
  <div id="wrapper">
    <NavBar />
    <TheHeader />
  </div>
</template>

<script>
import NavBar from "./components/NavBar"
import TheHeader from "./components/TheHeader"

export default {
  name: "App",
  components: {
    NavBar,
    TheHeader,
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
}
#wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
h1,
h2,
h3 {
  font-family: "Spartan", sans-serif;
}
</style>
