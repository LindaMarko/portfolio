<template>
  <section id="skills">
    <h2>Ski<span>ll</span>s</h2>
    <article class="skills-container">
      <div class="logo-con">
        <img src="../assets/logos/js-icon.png" alt="JavaScript Logo" />
        <p>JavaScript</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/html-icon.png" alt="HTML Logo" />
        <p>HTML</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/css-icon.png" alt="CSS Logo" />
        <p>CSS</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/vue-icon.png" alt="Vue Logo" />
        <p>Vue.js</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/react-icon.png" alt="React Logo" />
        <p>React</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/node-icon.png" alt="Node Logo" />
        <p>Node.js</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/npm-icon.png" alt="NPM Logo" />
        <p>NPM</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/vs-icon.png" alt="VS Code Logo" />
        <p>VS Code</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/git-icon.png" alt="Git Logo" />
        <p>Git</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/github-icon.png" alt="GitHub Logo" />
        <p>GitHub</p>
      </div>
      <div class="logo-con">
        <img src="../assets/logos/resp-icon.png" alt="Responsive Design Logo" />
        <p>Responsive Design</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 3rem 8rem;
  background-color: rgb(8, 8, 8);
  color: whitesmoke;

  h2 {
    font-size: 2.5rem;

    span {
      color: #00f7c3;
    }
  }
  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    row-gap: 2.5rem;
    margin-top: 6rem;
    .logo-con {
      text-align: center;

      img {
        width: 55px;
        height: 55px;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
}
@media (min-width: 767px) {
  #skills {
    padding-bottom: 10rem;
    h2 {
      font-size: 3rem;
    }
    .skills-container {
      grid-template-columns: repeat(4, 1fr);
      .logo-con {
        p {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
