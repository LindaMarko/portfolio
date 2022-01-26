<template>
  <section id="projects">
    <h2>Project<span>s</span></h2>
    <div class="project-container">
      <article>
        <h3>Star Wars Catalog</h3>
        <img src="../assets/sw_screen.jpg" alt="Star Wars Catalog" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam
          modi, fuga suscipit maxime enim dicta iure sint iusto ut. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aperiam, in.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/vanilla_js_final_project"
            >View Code</a
          >
          <a href="https://youtu.be/NeglszyBnfQ">View Site</a>
        </div>
      </article>
      <article>
        <h3>E-wallet</h3>
        <img src="../assets/e-wallet_screen.jpg" alt="E-wallet" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam
          modi, fuga suscipit maxime enim dicta iure sint iusto ut. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur, repellendus.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/vue-e-wallet">View Code</a>
          <a href="https://youtu.be/UwIvhktP-4w">View Site</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
#projects {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 7rem;
  background-color: rgb(8, 8, 8);
  color: whitesmoke;

  h2 {
    margin-top: 7rem;
    font-size: 2.5rem;

    span {
      color: #00f7c3;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;

    img {
      width: 85%;
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }

    h3 {
      margin: 1rem 0 1.5rem 0;
      font-size: 1.3rem;
    }

    p {
      margin: 2rem 0 3rem;
      padding: 0 1.2rem;
      text-align: center;
    }

    .buttons a {
      border: 1px solid whitesmoke;
      color: whitesmoke;
      padding: 1rem;
      margin: 0 1rem;
      cursor: pointer;
    }
  }
}
@media (min-width: 767px) {
  #projects {
    .project-container {
      display: flex;
      padding: 0 2rem;
    }
    article {
      padding: 1rem;
    }
  }
}
</style>
