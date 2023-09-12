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
        My name is Linda Markó. I am an eager and dedicated
        <strong>Junior Frontend Developer</strong> in Stockholm with a
        background in e-commerce and managing online presence.
      </p>
      <p>
        I am truly grateful that I had the opportunity to change my career.
        Working with web development and programming is the real deal that I am
        deeply passionate about.
      </p>
      <p>
        With a strong interest in both frontend and backend technologies, I am
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
  //height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  color: rgb(59, 59, 59);

  h2 {
    margin-top: 5rem;
    margin-bottom: 0.5rem;
    font-size: 2.5rem;

    span {
      color: #f723ba;
    }
  }

  .about-text {
    width: 95%;
    max-width: 500px;
    padding: 1.5rem 1rem;
    margin: 0 1rem 6rem;
    text-align: left;

    p {
      font-weight: 300;
      color: #616161;
      margin: 0.5rem 0 1rem;
    }

    a {
      text-decoration: none;
      color: #616161;
    }
    a:visited {
      color: #f723ba;
    }
  }
}
@media (min-width: 767px) {
  #about {
    h2 {
      margin-bottom: 0;
      font-size: 3rem;
    }

    .about-text {
      width: 65%;
      padding: 2rem;
      /* border: 1px solid #616161; */
      margin-bottom: 8rem;
    }
  }
}
@media (min-width: 1020px) {
  #about {
    .about-text {
      width: 50%;
    }
  }
}
@media (min-width: 1300px) {
  #about {
    h2 {
      font-size: 3.5rem;
      margin-top: 8rem;
    }
    .about-text {
      width: 90%;
      max-width: 670px;

      p {
        font-size: 1.1rem;
      }
    }
  }
}
</style>
