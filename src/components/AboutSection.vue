<template>
  <section id="about">
    <h2><span>A</span>bout</h2>
    <div
      class="about-text"
      data-aos="zoom-in-down"
      data-aos-easing="ease"
      data-aos-duration="2500"
    >
      <p>
        I am an eager and dedicated <strong>Junior Frontend Developer</strong>
        with a background in e-commerce and managing online presence.
      </p>
      <p>
        I am truly grateful that I had the opportunity to change my career.
        Working with web development and programming is the real deal that I am
        deeply passionate about.
      </p>
      <p>
        With a strong interest in both front-end and back-end technologies, I am
        committed to staying current with industry trends and continuously
        expanding my skill set to contribute effectively to dynamic development
        teams.
      </p>
      <p>
        Currently, I'm working at
        <a href="https://www.vaimo.com/"><strong>Vaimo</strong></a>
        one of the world's most respected experts in digital commerce and
        customer experiences.
      </p>
      <p>
        My portfolio contains some of my relevant school and hobby projects and
        will be updated constantly.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#about {
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  color: rgb(8, 8, 8);

  h2 {
    margin-top: 6rem;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;

    span {
      color: #00f7c3;
    }
  }

  .about-text {
    width: 95%;
    max-width: 500px;
    padding: 1.5rem 1rem;
    margin: 0 1rem 6rem;
    border: 1px solid whitesmoke;
    text-align: justify;

    p {
      margin: 0.5rem 0 1rem;
    }

    a {
      text-decoration: none;
      color: black;
    }
    a:visited {
      color: #00f7c3;
    }
  }
}
@media (min-width: 767px) {
  #about {
    h2 {
      margin-bottom: 3.5rem;
      font-size: 3rem;
    }

    .about-text {
      width: 55%;
      padding: 2rem;
      border: 1px solid #000;
      margin-bottom: 12rem;
    }
  }
}
@media (min-width: 1020px) {
  #about {
    h2 {
      margin-bottom: 3rem;
    }

    .about-text {
      width: 50%;
    }
  }
}
@media (min-width: 1300px) {
  #about {
    h2 {
      font-size: 3.5rem;
    }
    .about-text {
      width: 90%;
      max-width: 600px;

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
