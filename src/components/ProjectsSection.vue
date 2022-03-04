<template>
  <section id="projects">
    <h2>Project<span>s</span></h2>
    <div class="project-container">
      <article class="sw">
        <h3>Sinus Webshop</h3>
        <img src="../assets/sinus-screen.jpg" alt="Star Wars Catalog" />
        <p>
          SINUS Webshop is an online store that sells skateboards and
          accessories, built in <strong>Vue.js</strong> with Vuex and Vue
          Router. You can buy as a guest or register as a customer and there is
          even an admin view where products can be added, edited or deleted and
          customer's orders can be seen.
        </p>
        <div class="buttons">
          <a href="https://github.com/LindaMarko/sinus-webshop" target="_blank"
            >Source Code</a
          >
          <a href="https://youtu.be/G6YGT0Z3gBw" target="_blank">View Site</a>
        </div>
      </article>
      <article class="wallet">
        <h3>E-wallet</h3>
        <img src="../assets/e-wallet-ss.jpg" alt="E-wallet" />
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
    <div class="project-container">
      <article class="sw">
        <h3>Star Wars Catalog</h3>
        <img src="../assets/sw_screen.jpg" alt="Star Wars Catalog" />
        <p>
          A single page application that lists all the characters and their
          personal details from the Star Wars movies. Created using the Star
          Wars <strong>API</strong>, written in <strong>HTML</strong>,
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
        <h3>Expense Tracker</h3>
        <img src="../assets/expense-tracker-screen.jpg" alt="E-wallet" />
        <p>
          A simple Expense Tracker built in <strong>React</strong>. You can see
          and filter your expenses by year and add new expenses.
        </p>
        <div class="buttons">
          <a
            href="https://github.com/LindaMarko/react_expense_tracker"
            target="_blank"
            >Source Code</a
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
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

    img {
      width: 85%;
      // border: 1px solid whitesmoke;

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
    }

    .project-container {
      display: flex;
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
      margin-bottom: 3rem;
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
    }
    h2 {
      font-size: 3.5rem;
      margin-bottom: 5rem;
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
