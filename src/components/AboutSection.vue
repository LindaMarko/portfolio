<template>
  <section id="about">
    <h2><span>A</span>bout</h2>
    <div class="about-text">
      <p>
        I am a curious and enthusiastic JavaScript Developer student from
        Stockholm with a background in retail and e-commerce.
      </p>
      <p>
        I am truly grateful that I had the opportunity to change my career,
        although it doesn’t feel like a change but more like a natural progress
        in my life. Studying web development and programing is the real deal
        that I am deeply passionate about.
      </p>
      <p>
        With a strong interest in both front-end and back-end technologies, I
        have completed a great deal of coursework with
        <strong>Vanilla JavaScript</strong> and <strong>Vue.js</strong> during
        my studies so far and I am looking forward to getting familiar with
        <strong>React</strong> and <strong>Node.js</strong> in this semester.
      </p>
      <p>
        At the moment, my portfolio contains some of my relevant school projects
        and will be constantly updated.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
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

    p {
      margin: 0.5rem 0 1rem;
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
      text-align: left;
      margin-bottom: 8rem;
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
    .about-text {
      width: 40%;

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>
