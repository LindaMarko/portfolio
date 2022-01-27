<template>
  <section id="projects">
    <h2>Pro<span>j</span>ects</h2>
    <div class="project-container">
      <article class="sw">
        <h3>Star Wars Catalog</h3>
        <img src="../assets/sw_screen.jpg" alt="Star Wars Catalog" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam
          modi, fuga suscipit maxime enim dicta iure sint iusto ut. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Aperiam, in.
        </p>
        <div class="buttons">
          <a
            href="https://github.com/LindaMarko/vanilla_js_final_project"
            target="_blank"
            >View Code</a
          >
          <a href="https://youtu.be/NeglszyBnfQ" target="_blank">View Site</a>
        </div>
      </article>
      <article class="wallet">
        <h3>E-wallet</h3>
        <img src="../assets/e-wallet-ss.jpg" alt="E-wallet" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam
          modi, fuga suscipit maxime enim dicta iure sint iusto ut. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tenetur, repellendus.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/vue-e-wallet" target="_blank"
            >View Code</a
          >
          <a href="https://lindamarko.github.io/vue-e-wallet/" target="_blank"
            >View Site</a
          >
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
  padding-bottom: 8rem;
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
    margin-top: 4rem;

    img {
      width: 85%;
      opacity: 0.6;
      border: 1px solid whitesmoke;

      &:hover {
        opacity: 1;
      }
    }

    h3 {
      margin: 1rem 0 1rem 0;
      font-size: 1.3rem;
    }

    p {
      margin: 2rem 0 3rem;
      padding: 0 1.5rem;
      text-align: center;
    }

    .buttons a {
      border: 1px solid whitesmoke;
      color: whitesmoke;
      padding: 0.8rem;
      margin: 0.81rem;
      cursor: pointer;

      &:hover {
        background-color: whitesmoke;
        color: rgb(8, 8, 8);
        font-weight: 600;
      }
    }
  }
  article.wallet {
    margin-top: 6rem;
  }
}
@media (min-width: 515px) {
  #projects {
    article {
      img {
        width: 70%;
      }

      p {
        padding: 0 4rem;
      }
    }
  }
}
@media (min-width: 767px) {
  #projects {
    h2 {
      font-size: 3rem;
    }

    .project-container {
      display: flex;
      padding: 0 1rem;
    }
    article {
      margin-top: 3rem;
      padding: 1.5rem;

      img {
        width: 95%;
        border: none;
      }

      h3 {
        font-size: 1.6rem;
      }

      p {
        padding: 0 1rem;
      }
    }
    article.sw {
      border-right: 1px solid whitesmoke;
    }
    article.wallet {
      margin-top: 3rem;
    }
  }
}
@media (min-width: 1020px) {
  #projects {
    h2 {
      margin-bottom: 3rem;
      font-size: 3.5rem;
    }
    article {
      padding: 2rem;

      img {
        width: 85%;
      }

      p {
        padding: 0 1.5rem;
      }
    }
  }
}
@media (min-width: 1300px) {
  #projects {
    h2 {
      margin-bottom: 5rem;
      font-size: 3.5rem;
    }
    article {
      margin-top: 0;
      padding: 3rem;

      img {
        width: 75%;
      }

      p {
        padding: 0 3rem;
        font-size: 1rem;
      }
      .buttons a {
        font-size: 1.1rem;
      }
    }
    article.wallet {
      margin-top: 0;
    }
  }
}
</style>
