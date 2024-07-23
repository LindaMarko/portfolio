<template>
  <section id="projects">
    <h2><span>P</span>rojects</h2>
    <div class="project-container">
      <div class="row">
        <article class="img-container">
          <img src="@/assets/chat-w-ada.jpg" alt="Beauty World" />
          <div class="middle middle-left">
            <h3>Chat With Ada</h3>      
            <p>
              ChatGPT clone that uses <strong>Next.js</strong> v13, OpenAI's GPT API, MongoDB, Auth0 and Tailwind CSS.
            </p>
            <div class="buttons">
              <a href="https://github.com/LindaMarko/chat-with-ada" target="_blank"
                >Source Code</a
              >
              <a href="https://chat-with-ada.vercel.app/" target="_blank"
                >View Site</a
              >
            </div>
          </div>
        </article>
        <article class="img-container">
          <img src="@/assets/beauty-screen-new.jpg" alt="Beauty World" />
          <div class="middle">
            <h3>Beauty World</h3>      
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
          </div>
        </article>
        <article class="img-container">
          <img src="@/assets/dashboard-screen-new.jpg" alt="ITHS Dashboard" />
          <div class="middle">
            <h3>ITHS Dashboard</h3>      
            <p>
              <strong>ITHS Dashboard</strong> is a Progressive Web App (PWA) built
              in <strong>React</strong>. A dashboard for my school to provide
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
          </div>
        </article>
        <article class="img-container">
          <img src="@/assets/portfolio-screen.jpg" alt="Star Wars Catalog" />
          <div class="middle middle-right">
            <h3>My Portfolio</h3>      
            <p>
              Personal portfolio to showcase my coding projects. Built with <strong>Vue.js</strong>.
            </p>
            <div class="buttons">
              <a
                href="https://github.com/LindaMarko/portfolio"
                target="_blank"
                >Source Code</a
              >
              <a href="https://lindamarko.dev/" target="_blank">View Site</a>
            </div>
          </div>
        </article>
      </div>
      <div class="row">
        <article class="img-container">
          <img src="@/assets/inge-new.jpg" alt="Inge Bygg" />
          <div class="middle middle-left">
            <h3>Inge Bygg Rest API</h3>      
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
          </div>
        </article>
        <article class="img-container">
          <img src="@/assets/sinus-screen-new.jpg" alt="Sinus Webshop" />
          <div class="middle">
            <h3>Sinus Webshop</h3>      
            <p>
              SINUS Webshop is an online store that sells skateboards and
              accessories, built in
              <strong>Vue.js</strong> with Vuex and Vue Router. You can buy as a
              guest or register as a customer and there is an admin view as well.
            </p>
            <div class="buttons">
              <a href="https://github.com/LindaMarko/sinus-webshop" target="_blank"
                >Source Code</a
              >
              <a href="https://youtu.be/G6YGT0Z3gBw" target="_blank">View Site</a>
            </div>
          </div>
        </article>
        <article class="img-container">
          <img src="@/assets/sw_screen-new.jpg" alt="Star Wars Catalog" />
          <div class="middle">
            <h3>Star Wars Catalog</h3>      
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
          </div>
        </article>
        <article class="img-container">
          <img src="@/assets/e-wallet-ss-new.jpg" alt="E-wallet" />
          <div class="middle middle-right">
            <h3>E-wallet</h3>      
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
          </div>
        </article>
      </div>
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

  .project-container {
    margin-top: 5rem;
  }

  h2 {
    margin-top: 6rem;
    font-size: 2.5rem;

    span {
      color: #0BA79F;
    }
  }

  .row {
    display: block;
  }

  .img-container {
    width: 100%;
    position: relative;
    transition: transform 500ms;
    display: block;
    
    &:focus,
    &:hover {
      transform: none;
    }

    &:hover .middle, 
    &:active .middle {
      opacity: .9;
    }

    img {
      background-color: black;
      width: 100%;
      opacity: 1;
      height: auto;
      transition: .5s ease;
      display: block;
    }

    .middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: black;
      transition: .5s ease;
      opacity: .9;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 77%;
      transform: translate(-50%, -50%);
      text-align: center;

      h3 {
        //margin-top: 1rem;
        font-size: 1.3rem;
      }

      p {
        font-size: .9rem;
        font-weight: 300;
        line-height: 1.4;
        padding: 1.1rem .9rem;
        text-align: center;
      }

      .buttons {
        margin-top: .6rem;
      }

      .buttons a {
        font-size: .8rem;
        border: 1px solid whitesmoke;
        border-radius: 50px;
        border-bottom-right-radius: 0;
        color: whitesmoke;
        padding: 0.5rem .8rem;
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
  } 
}
@media (min-width: 420px) {
  #projects {
    .img-container {
      .middle {
        width: 60%;
        height: 65%;
      }
    } 
  }
}
@media (min-width: 767px) {
  #projects {
    h2 {
      font-size: 3rem;
      margin-top: 6rem;
    }

    .project-container {
      display: flex;
      flex-direction: column;
      max-width: 1700px;
      margin-top: 5rem
    }
    .row {
      display: flex;
    }
    .img-container {
      flex: 1;
      width: 25%;

      &:focus,
      &:hover {
        transform: scale(1.3);
        z-index: 1;
      }

      .middle { 
        opacity: 0;
        width: 88%;
        height: 95%;

        h3 {
          font-size: .8rem;
          margin-top: .6rem;
        }

        p {
          font-size: .7rem;
          padding: .5rem;
        }

        .buttons {
          margin-top: 0;
        }

        .buttons a {
          font-size: .6rem;
          padding: .3rem .5rem;
          margin: .5rem;
        }
      }
    }

    .middle.middle-left {
      transform: translate(-45%, -50%);
    }
    .middle.middle-right {
      transform: translate(-55%, -50%);
    }
  }
}
@media (min-width: 1020px) {
  #projects {
    h2 {
      margin-bottom: 2.5rem;
      margin-top: 6rem;
    }
    .img-container {
      .middle { 
        width: 75%;
        height: 75%;

        h3 {
          font-size: 1rem;
          margin-top: .6rem;
        }

        p {
          font-size: .7rem;
          padding: .5rem;
        }

        .buttons a {
          font-size: .7rem;
          padding: .3rem .7rem;
          margin: .5rem;
        }
      }
    }
  }
}
@media (min-width: 1300px) {
  #projects {
    .project-container {
      margin-top: 6rem;
    }
    h2 {
      font-size: 3.6rem;
      margin-top: 9rem;
    }
    .img-container {
      margin-top: 0;

      &:focus,
      &:hover {
        transform: scale(1.2);
        z-index: 1;
      }

      .middle { 
        width: 70%;
        height: 75%;

        h3 {
          font-size: 1.3rem;
          //margin-top: 1rem;
          margin-bottom: .7rem;
        }

        p {
          font-size: .8rem;
          padding: .5rem;
        }

        .buttons {
          margin-top: .5rem;
        }

        .buttons a {
          font-size: .8rem;
          padding: .4rem .8rem;
          margin: .7rem;
        }
      }
    }
  }
}
@media (min-width: 1750px) {
  #projects {
    .project-container {
      margin-top: 7rem;
    }
    h2 {
      font-size: 3.5rem;
      margin-top: 9rem;
    }
    .img-container {
      margin-top: 0;

      .middle { 
        width: 60%;
        height: 60%;

        h3 {
           margin-top: 1.5rem;
        }
      }
    }
    .middle.middle-left {
        transform: translate(-50%, -50%);
      }
      .middle.middle-right {
        transform: translate(-50%, -50%);
      }
  }
}
</style>
