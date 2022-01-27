<template>
  <section id="about">
    <h2><span>A</span>bout</h2>
    <div class="about-text">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo minima
        quis, non temporibus nemo ratione dolores? Molestias similique quas,
        mollitia sit, sapiente cum labore impedit, eligendi tempore vitae quam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos, at
        molestias aperiam nulla tenetur laborum nemo animi eum amet possimus
        pariatur. Dolorum, aliquam! Ut sint quisquam consequuntur impedit, optio
        reiciendis aspernatur excepturi tempora repudiandae nesciunt dolorum
        veritatis ullam nobis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus
        tempore debitis, voluptas quas rerum illo nihil neque tenetur beatae.
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
    padding: 1.5rem 1rem;
    margin: 0 1rem 6rem;
    border: 1px solid whitesmoke;
    text-align: center;
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
    }
  }
}
@media (min-width: 1020px) {
  #about {
    h2 {
      margin-bottom: 3rem;
      font-size: 3.5rem;
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
