<template>
  <section id="projects">
    <h2>Project<span>s</span></h2>
    <div class="project-container">
      <article class="sw">
        <h3>Beauty World Webstore</h3>
        <img src="@/assets/beauty-screen.jpg" alt="Beauty World" />
        <p>
          BEAUTY WORLD is an ecommerce project, built in
          <strong>Laravel 9 / PHP</strong> with <strong>Bootstrap</strong> and
          <strong>jQuery</strong>, using the Makeup API. You can register as a
          customer and there is also an admin panel.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/beauty-world" target="_blank"
            >Source Code</a
          >
          <a href="https://www.youtube.com/watch?v=TPIm4tRfIU4" target="_blank"
            >View Site</a
          >
        </div>
      </article>
      <article class="wallet">
        <h3>ITHS Dashboard</h3>
        <img src="@/assets/dashboard-screen.jpg" alt="ITHS Dashboard" />
        <p>
          <strong>ITHS Dashboard</strong> is a Progressive Web App (PWA) built
          in <strong>React</strong>. A dashboard for our school to provide
          useful information to the students. Optimized for mobile and large
          screens.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/iths-dashboard" target="_blank"
            >Source Code</a
          >
          <a href="https://iths-dashboard.netlify.app/" target="_blank"
            >View Site</a
          >
        </div>
      </article>
    </div>
    <div class="project-container">
      <article class="sw">
        <h3>Sinus Webshop</h3>
        <img src="@/assets/sinus-screen.jpg" alt="Sinus Webshop" />
        <p>
          SINUS Webshop is an online store that sells skateboards and
          accessories, built in
          <strong>Vue.js</strong> with Vuex and Vue Router. You can buy as a
          guest or register as a customer and there is an admin view where
          products can be edited.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/sinus-webshop" target="_blank"
            >Source Code</a
          >
          <a href="https://youtu.be/G6YGT0Z3gBw" target="_blank">View Site</a>
        </div>
      </article>
      <article class="wallet">
        <h3>Inge Bygg Rest API</h3>
        <img src="@/assets/inge.jpg" alt="Inge Bygg" />
        <p>
          Backend <strong>REST API</strong> for a case management system for a
          building company written in <strong>Node.js</strong>, Express and
          Mongoose.
        </p>
        <div class="buttons">
          <a
            href="https://github.com/LindaMarko/backend_final_project"
            target="_blank"
            >Source Code</a
          >
        </div>
      </article>
    </div>
    <div class="project-container">
      <article class="sw">
        <h3>Star Wars Catalog</h3>
        <img src="@/assets/sw_screen.jpg" alt="Star Wars Catalog" />
        <p>
          A single page application that lists all the characters and their
          personal details from the Star Wars movies. Created using the Star
          Wars
          <strong>API</strong>, written in <strong>HTML</strong>,
          <strong>CSS</strong> and <strong>Vanilla JavaScript</strong>.
        </p>
        <div class="buttons">
          <a
            href="https://github.com/LindaMarko/vanilla_js_final_project"
            target="_blank"
            >Source Code</a
          >
          <a href="https://youtu.be/NeglszyBnfQ" target="_blank">View Site</a>
        </div>
      </article>
      <article class="wallet">
        <h3>E-wallet</h3>
        <img src="@/assets/e-wallet-ss.jpg" alt="E-wallet" />
        <p>
          The E-wallet App is a single page application, built in
          <strong>Vue.js</strong> and has two different views, Home and Add
          Card. You can add and remove credit cards, see the current active card
          and all other available cards.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/vue-e-wallet" target="_blank"
            >Source Code</a
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
export default {};
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
      color: #f723ba;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 7rem;
    margin-bottom: 2rem;

    img {
      width: 85%;
      border-radius: 3px;

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
      border-radius: 50px;
      border-bottom-right-radius: 0;

      color: whitesmoke;
      padding: 0.5rem 1rem;
      margin: 0.81rem;
      font-weight: 500;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: whitesmoke;
        color: rgb(8, 8, 8);
        border-top-right-radius: 0;
        border-bottom-right-radius: 50px;
      }
    }
  }
  article.wallet {
    margin-top: 8rem;
  }
}
@media (min-width: 515px) {
  #projects {
    article {
      flex: 1;
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
      margin-top: 5rem;
    }

    .project-container {
      display: flex;
      max-width: 1700px;
      margin-top: 3rem;
      padding: 0 1rem;
    }
    article {
      margin-top: 3rem;
      padding: 1.5rem;

      img {
        width: 90%;
        border: none;
      }

      h3 {
        font-size: 1.5rem;
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
      margin-bottom: 1rem;
    }
    article {
      padding: 2rem;

      img {
        width: 80%;
      }

      p {
        padding: 0 1.5rem;
      }
    }
  }
}
@media (min-width: 1300px) {
  #projects {
    .project-container {
      padding: 0 3rem;
      margin-top: 5rem;
    }
    h2 {
      font-size: 3.5rem;
    }
    article {
      margin-top: 0;
      padding: 3rem;

      img {
        width: 70%;
      }

      p {
        padding: 0 3rem;
        font-size: 1rem;
      }
      .buttons a {
        font-size: 1rem;
      }
    }
    article.wallet {
      margin-top: 0;
    }
  }
}
</style>
