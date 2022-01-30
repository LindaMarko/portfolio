<template>
  <div class="nav">
    <nav class="navbar" :class="{ change: showNav }">
      <div class="logo">
        <a href="#"> LM </a>
      </div>
      <div class="nav-list" v-if="showNav" @click="toggleNav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <div class="menu" :class="{ change: showNav }" @click="toggleNav">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav
    },
  },
}
</script>

<style>
.navbar {
  width: 100%;
  height: 2.2rem;
  background-color: #080808;
  position: fixed;
  top: -8rem;
  z-index: 10;
  padding: 1rem;
  transition: height 0.5s;
  animation: animateNavbar 1s 0.5s forwards;
}
@keyframes animateNavbar {
  0% {
    top: -8rem;
  }
  100% {
    top: 0;
  }
}
.navbar.change {
  height: 100vh;
}
.logo {
  position: absolute;
  top: 0.5rem;
  left: 1.5rem;
}
.logo a {
  font-family: "Spartan", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #00f7c3;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}

.nav-list {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
}
.change .nav-list {
  opacity: 1;
  visibility: visible;
  transition: all 0.7s 0.5s;
}
.nav-link {
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  color: #fff;
  margin: 1rem 0;
  transition: color 0.4s;
  text-transform: lowercase;
}
.nav-link:hover {
  color: #00f7c3;
}
.menu {
  width: 1.5rem;
  height: 2rem;
  position: fixed;
  top: 0.1rem;
  right: 1.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  cursor: pointer;
}
.line {
  width: 100%;
  height: 2px;
  background-color: #eee;
  transition: transform 0.3s;
}
.line-1 {
  width: 50%;
}
.change .line-1 {
  transform: translate(100%, 0.5rem) rotate(-35deg);
  transform-origin: right;
}
.line-2 {
  height: 1px;
}
.line-3 {
  width: 50%;
  margin-left: auto;
}
.change .line-3 {
  transform: translateY(-0.5rem) rotate(35deg);
  transform-origin: right;
}
@media (min-width: 767px) {
  .nav-link {
    font-size: 1.5rem;
  }
}
@media (min-width: 1300px) {
  .navbar {
    height: 3rem;
  }
  .logo {
    top: 0.8rem;
  }
  .menu {
    top: 0.5rem;
  }
  .nav-link {
    font-size: 1.8rem;
  }
}
</style>
